---
layout: "../../layouts/BlogPostLayout.astro"
title: "Lenovo IdeaPad 1 15ALC7 6-month review"
desc: "Doesn't disappoint"
date: 15 February 2025
---
Almost 6 months ago I somehow got in the hands of this laptop that replaced my previous main PC, a "Lenovo IdeaPad 3 15ITL6" from 2021

Judging by the specs of this laptop I have expected it to be much more powerful; speaking of specs, here they are:

- **CPU:** AMD Ryzen 7 5700U, Lucienne
- **GPU:** Integrated Graphics 
- **RAM:** 12GB DDR4
- **Storage:** 500GB Western Digital NVMe SSD

Compare this to my previous main laptop; which only had an Intel Core i3, 4GB RAM and 256GB SSD. And as you may have guessed, one of the reasons why I switched was the specs. Like I could have kinda lived with them, but in reality this was just not enough for me anymore

Yes I could have gotten a PC with more RAM etc earlier, but I just didn't have the budget at the time. Better late than never, right?

Additionally my previous main laptop (by the time I switched from it) already had hinge issues after like 3 years of constantly opening and closing the lid every day. As a "fun" fact, just a week later, it bit the dust

With my "new" current laptop, I pretty much stopped the practice of closing and opening the lid every day and I'm now just keeping it open all the time unless i need to close the lid for any reason. To further justify:
- I barely travel with it anywhere aside from some exceptions
    - most of the time it's on my desk. Sometimes I do use it in bed, but that's it
- this was not the first time I ended up with a broken laptop hinge
    - before the IdeaPad 3 15ITL6, I used to main my i5 G50-70 laptop (which I do still have and use occasionally). It was in a good shape when i first got it in 2018, 3 years later it also got hinge issues, also from constantly closing and opening the lid every day
- like what's even the point
- 🅰️

As of now I no longer own my previous laptop, it's basically an identical body to my current one except less powerful and just broken. The only differences are the color and the Windows key - previous laptop had the Windows 10 logo, current has the Windows 11 logo

## BIOS
When first powering on the "new" current laptop, I actually went in the BIOS first... and surprise, surprise, we have a GUI!
As opposed to the non-GUI "Lenovo Setup Utility" of my previous laptop, you have a cursor that you can use to browse around

![](https://clyron.is-a.dev/img/blog/29.jpg)

Clearly the UEFI here is different. It was easy for me to notice - on my previous laptop, the GRUB menu would appear when powering it on. However on my current laptop, the Lenovo logo would show up first before the GRUB menu, so if you choose to boot to Windows you will only get the loading circle without any logo

Unless you change the boot order in BIOS so that Windows Boot Manager is first, you would end up with this (FYI that this was when my distro of choice was Debian)

![](https://clyron.is-a.dev/img/blog/30.png)

It doesn't bother me, but it was just something I felt like pointing out

Additionally (probably thanks to the GUI), literally 2GB of the total of 12GB RAM is allocated for the "hardware" - the same amount my first PC had, a contrast from the 200MB on my previous laptop. Doesn't bother me either, as thankfully I never really run out of the 10GB *usable* RAM, *yet* (shoutout to Windows's page file and Linux's swap file)

## Basic tasks
Let's start with something basic - daily tasks. Of course if my previous laptop could at least handle "basic tasks" well (as in, for example, just one or two browser tabs plus maybe some music in the background playing through headphones, eventually some """"office"""" stuff), so can my current one

Main difference? The RAM doesn't really instantly go up to >90% usage anymore. Often with my previous laptop the RAM would go that far and programs etc would start freezing

On Linux it would often go so high that it'd trigger the kernel's OOM Killer where everything will freeze for seemingly forever and you'd often have no choice but to force power off the PC. 

You will need a swap partition of at least 2GB or higher, alternatively you could also use `earlyoom` but that's often a painful experience, it will close even the app you're currently focused on if it uses the most RAM

With everything out of the way, I notice with my current laptop that most of the time I check either Task Manager (on Windows) or the System Monitor (on Linux), the RAM usage is often past 4GB. This really implies how important was to have more RAM

## Heavy tasks
### Virtual Machines (VMs)
Since I can finally say I have a computer with reasonable specs, I can now properly VM any operating system (even the most "resource-hungry" ones like many of the modern-day OSes, like Windows 10/11 etc) without having either my VM or my host slow down, and even during recording (most of the time I use VMs these days is primarily for Lynxmic videos)

I no longer really need to add DWORD keys in setup to bypass Windows 11's (rather arbitrary) system requirements, as I can now actually allocate 64GB storage AND 4GB RAM for my VMs. Secure Boot is easy as 3, 2, 1 to activate, CPU isn't a problem, and TPM is just as easy to activate as well

Nonetheless I'm still going with just using registry keys to bypass at least one of the requirements, primarily TPM since enabling it for a VMware VM requires putting in a password for the VM itself, which is something I don't really feel like putting, especially when Windows 11 runs just fine without TPM!

I have even ran a macOS Sequoia VM, and sure enough that performed better than even a macOS Mojave VM on my G50-70

If I could recall any issue virtualizing, it was "modern-day" OSes running slow after a while on VMware on Linux, but that might be because I didn't give my Linux swap partition enough GB's from what I heard

### Gaming
After playing several heavy games or the games I previously played on previous main PCs but with more intensive performance settings, I'm very impressed. At first sight i thought it would still have been at least kinda laggy, but nope!

In the past month I've been playing quite a bit of Minecraft Java on this machine and just cannot not notice the fact it is playable even with more intensive graphics (e.g. Shaders or max Render Distance)

![](https://clyron.is-a.dev/img/blog/31.png)

Of course it shouldn't mean you *should* actually play MC on this PC with shader and max render distance all the time, sure it looks cool and all in some circumstances but I'd still prefer render distance set to 16 and no shader

Not even I thought this machine would run Minecraft so well so at that point I was confident enough to try even heavier games. So I lately started playing Euro Truck Simulator 2 (or "ETS2" for short), a game I was quite interested in for a (long?) while but which none of my previous PCs could handle. Again, zero lag at all, even with high graphics settings

### Video editing
So if it can run heavy games actually well, then video editing should work as well, right? Well, yes

Previously, on my previous PC I used to edit with DaVinci Resolve *15*, an old version of this free editing software from 2019 at this point.
In fact while my previous PC was my main, I always used versions of editing software from 2018-19 just because they... work, and are not as heavy as editing software are nowadays

With me switching to this current PC I upgraded to the latest DaVinci Resolve 19 which notably works well with increased DPI scaling unlike 15

The time taken to render/export something has substantially decreased compared to the previous laptop (and previews are not as laggy), so if I want I can now pump out videos much faster, eventually even fully transition to 60FPS

About 4K rendering, I don't actually know, but considering I'm just someone making YouTube videos it's just unnecessary to put even more pressure on the CPU just for a video quality in which only like 3 people even watch YT videos on

## Current Setup
From the very beginning when I got this laptop, it had a Windows-Linux dualboot, just like my previous one. Except this time I finally have more SSD space

My current partition setup consists primarily of:
   - 64GB partition for Arch Linux (primary OS)
   - 64GB partition for Windows 10 Pro 22H2 (secondary OS)
   - 350GB partition for my data
   - rest of the disk reserved by the system

What I should note is that when I initially set up this laptop, I initially went with Debian 12 (stable) with KDE 5.27 on the Linux side, same distro from my previous laptop
However, I recently "distrohopped" (actually almost a month ago)...

### The Arch Linux Experience
Soooo yes, now I can say that *i use arch btw*. ln late January, I decided to make the switchover from Debian to Arch Linux. So far it really didn't disappoint me at all, haven't looked back
(I was initially gonna make a separate blog post about this but ultimately gave up on it, so here's just some quick two-three words to say)

![](https://clyron.is-a.dev/img/blog/32.png)

All I can explain is that I actually installed Arch on this laptop "the hard way". In other words, using individual commands, not scripts e.g. `archinstall` (for the uninitiated, the Arch installer is a command-line interface (CLI), as opposed to the GUI in installers of Debian or Ubuntu)

To make sure I wouldn't mess something up, I did first try successfully installing Arch in a virtual machine (for the first time! I never installed Arch before) - this was recorded, for anyone interested I made a Lynxmic video on it, available on YT as usual

My Desktop Environment (DE) of choice here is the latest KDE Plasma 6.2, which is an important glowup from 5.27. Especially the Wayland session, which is now more bearable.
For example, on KDE 5.27/Debian, the laptop would often sit around >1min30s in the shutdown phase if shutting down from the Wayland session. Frankly, KDE on Wayland is actually good now from experience (so far)

One of the primary advantages of having Arch installed in place of Debian is that I can choose to start with a clean KDE desktop with only the essentials (by installing `plasma-desktop`), as opposed to the KDE package that `debian-installer` provides, which includes KDE + many apps

Debian's KDE package comes included with apps that I generally just don't need at all. An example is Konqueror, a web browser that I don't use (chances are even that this blog post is the first time you even heard of Konqueror).
If you want to uninstall Konqueror, you can't. Uninstalling Konqueror on Debian KDE (or any of the included software, essential or not) will uninstall the entire DE

Overall with Arch I observe that so far I'm not running out of disk space as quickly, which is a nice "upgrade", considering that (again) my Linux and Windows partitions are only 64GB each

## Closing thoughts
Best main PC so far, 100000/10

Of course, if I could I *would* have gotten something with even higher specs. Especially even more RAM and even more SSD space wouldn't hurt, maybe sometime in the future, who knows. For now though hopefully this will last me a few years, ideally more than 3 years (~~if this laptop's hinge won't break within that timeframe like the previous 2 laptops~~)

I also just realized as I'm writing this section that I forgot to talk about battery life, and I can say that it's actually pretty good, the battery will last a few hours on you (if you don't do heavy tasks on it). Pretty power efficient
