---
layout: "../../layouts/Blog.astro"
title: "The half-baked Discord Linux client"
desc: "Discord doesn't really care that much"
date: 20 May 2025
tags: ["discord", "linux"]
---
It's no secret that the official Discord client for Linux is half-baked compared to its Windows and macOS counterparts. For a long time there already has been (and probably the most famous of all) Discord's updating system which always sucked on Linux and still does, but lately things only have been becoming more obvious with the client in general.

## Update system

Seemingly (almost) every single week, Discord releases a new update for the client. If the behavior on Windows and macOS is that Discord auto-downloads and installs the update (no user interaction needed at all!), on Linux you will instead be greeted by a certain "*Must be your lucky day, there's a new update!*" screen.

Especially for one who is on Debian or Debian-based distros (e.g. Ubuntu) and uses the .deb packaging, chances are at least a good chunk of your Downloads folder is just Discord .deb files (unless you keep your stuff organized all the time):

![](/img/blog/33.png)
![](/img/blog/34.png)

***You cannot get past this screen at all.*** You're forced to having to *manually* update Discord every time, either (in the presented case above) by downloading .deb file from Discord's site everytime, or even using the package manager in the terminal etc, depending from where you got the Discord client.

Only after you did the manual updating, Discord will begin to "automatically update", as the updater will only then say that it's "downloading and installing updates". Like *what*

There exist workarounds you can use to at least get into the Discord client itself even if an update is available (just search on the web!). Of course Discord still wouldn't actually update itself but you would at least still be able to open it and use it, even if it's not the latest version.

All things aside, it's a classic. The update system *could've been better than this*, one shouldn't have to go through extra steps to use the Thing properly.

<small>(No wonder why some people say Linux is not as easy to use)</small>

## Title bar
I don't know about other desktop environments if it's any different or not, but at least on KDE (afaik it's also the same on GNOME and XFCE, probably basically everywhere), the title bar of the Discord app is just the *native* one of the OS.

Cherry on top, when logged out, the title bar would just display this:
![](/img/blog/35.png)

It became even weirder was when Discord rolled out its desktop+web redesign last March:
![](/img/blog/37.png)

A "feature" of the desktop+web redesign is the "new title bar" that displays the server name and icon and also contains the Inbox and Help buttons on the right side. In Windows and macOS, there would also be buttons for minimizing, maximizing and closing directly integrated. This is not the case for Linux, so the Linux client now literally has two title bars!

All it does is give Discord's official Linux *desktop* client the feeling of a "glorified" PWA in my eyes. It displays even on the web/browser version of Discord, something which became one of the main criticisms of the redesign, and for a fair reason (it's just purely a waste of space).

## Wayland
Better late than never, but thankfully screensharing now properly works on the Discord Linux client under Wayland since a few months ago now. So at this point I can say the Discord client is essentially just as usable in Wayland as in X11.

Doesn't mean I don't have two words to say, though. When logged in to the Wayland session, even to this day, **Discord actually runs by default under XWayland**, which is a X server meant to run X11 apps on Wayland.

**It is actually possible to get Discord running under native Wayland**, by passing the appropriate command-line arguments (`--enable-features=UseOzonePlatform --ozone-platform=wayland`). 
Everything works like a charm, I've never run into any particular issues so far under native Wayland that aren't present under Xwayland, heck it even fixes one issue, that being AFK detection not triggering.

### AFK Detection (Auto-Idle) in Wayland
Normally, if 10 minutes pass without the Discord desktop client seeing any keyboard or mouse activity on the computer, it will detect you're AFK. Your status indicator would automatically change from **Online** to **Idle** (unless you manually set your status to idle, DND or invis). Any pings would instead send to your phone as a push notification.

This is the behavior on Windows, macOS, and Linux (X11). However it doesn't also work under Wayland *by default* (or specifically, via Xwayland). It simply just won't detect if you're away from your PC or not.

What I can confirm is that **Discord's AFK detection actually works under (native) Wayland**. That is, again, unlike on XWayland, where it just doesn't work. I have tested all of this beforehand.

## Conclusion
When you look just at how half-baked things are on the Linux version of the Discord client, it's literally the "*second-class citizen*" vibe.

Again, ***no wonder why people don't switch to Linux!*** You cannot just pester someone to "switch to Linux", when Linux isn't even compatible with all apps they use on Windows (e.g. the Adobe apps), or the Linux version of the app is half-baked (e.g. Discord in this case). Sure you could use third-party clients for Discord which may fix one thing or two, but we aren't talking about them in this post. Not to forget they are against Discord's TOS, and usage is at your own risk.

I could even nominate other popular apps I'm aware of that work well on Windows but don't support Linux just as good if I want. 

Generally speaking, what even to expect from a company like Discord anymore? They have different priorities, and Linux obviously isn't it. Linux really only accounts for several percents in the OS market share, and is not as popular as Windows and macOS, but it is positioned as a viable alternative especially amid Windows 10 EOS - lately more and more people have been making the switch to Linux, [heck even PewDiePie](https://www.youtube.com/watch?v=pVI_smLgTY0).