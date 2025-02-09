import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();
const site = import.meta.env.SITE;

export async function GET() {
  const posts = import.meta.glob('../pages/blog/*.md', { eager: true });

  const typedPosts = Object.values(posts).map((postModule) => postModule);

  typedPosts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });

  const items = typedPosts.map((postModule) => {
    const { frontmatter, rawContent, url } = postModule;
    const { title, date, desc } = frontmatter;
    const body = rawContent();

    if (!body || typeof body !== 'string') {
      return null;
    }

    const htmlContent = parser.render(body);

    const sanitizedContent = sanitizeHtml(htmlContent, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ['src', 'alt', 'width', 'height'],
      },
    });

    return {
      title,
      pubDate: date,
      description: desc || 'No description available',
      link: `${site}${url}`,
      author: 'Clyron',
      content: sanitizedContent,
    };
  }).filter(Boolean);

  return rss({
    title: "Clyron's Blog",
    description: "Clyron's space for long-form thoughts",
    site,
    items,
  });
}