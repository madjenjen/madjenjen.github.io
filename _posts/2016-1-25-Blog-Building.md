---
layout: post
title: Building a Blog
image: /images/One_Color_Logo.png
---
It's been about 2 months into this New Year's resolution and I've picked up some pretty dece tools and techniques for building a blog. In this post, we'll break away from convention and blog about blogging (Yo dawg, I heard you liked blogging...). Here I'll list and discuss some of the tools and techniques that have come in most handy along the way so far.

<!--more-->

In <a href="http://pretty-dece.com/Hello-World" target="\_blank">our very first post</a>, we mentioned <a href="https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/" target="\_blank">this post in Smashing Magazine</a> as the most fool-proof way to get a blog off the ground. I maintain that it was the perfect jumping off point and recommend any new blogger who wants to dabble in custom code start with these instructions. And it's all free!

Once you've got that ready, here are some of my favorite blogging toolbox items:

### Blogging Toolbox ###
<table>
	<tr>
		<th colspan="3">Tools</th>
	</tr>

	<tr>
		<td>
			<a href="https://atom.io/" target="\_blank">Atom</a>
		</td>

		<td>
			<center><a href="https://atom.io/" target="\_blank"><img src="/images/Logos/Atom_logo.png" alt="Atom.io Logo"></img></a></center>
		</td>

		<td>
			Atom is a great, customizable file editor that I use to organize and edit all of the files associated with the Pretty Dece blog. It cleanly shows me the file structure and highlights code in context so I can easily see what's what. It also comes with lots of <a href="https://atom.io/packages" target="\_blank">fun hackable plug-ins</a> to help you customize it to your liking.
		</td>
	</tr>

	<tr>
		<td>
			<a href="http://www.colorhexa.com/" target="\_blank">ColorHexa</a>
		</td>

		<td>
			<center><a href="http://www.colorhexa.com/" target="\_blank"><img src="/images/Logos/colorhexa_logo.png" alt="ColorHexa Logo"></img></a></center>
		</td>

		<td>
			ColorHexa dubs itself the color encyclopedia. I use it frequently to convert RGB values to hex values for use in my CSS files to style the blog. It also helps you find complimentary colors to build a nice palette.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://inkscape.org/en/" target="\_blank">Inkscape</a>
		</td>

		<td>
			<center><a href="https://inkscape.org/en/" target="\_blank"><img src="/images/Logos/inkscape-logo.png" alt="Inscape Logo"></img></a></center>
		</td>

		<td>
			Inkscape is a free vector graphic editing program that I use to create logos like the Pretty Dece lopsided circuit-smoke house and the little circuit lines at the bottom of each post. Making logos in a vector program is important because it'll allow you to resize the item without worrying about pixelating the image. A paid example of a program like Inkscape is Adobe Illustrator.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://www.gimp.org/" target='\_blank'>Gimp</a>
		</td>

		<td>
			<center><a href="https://www.gimp.org/" target="\_blank"><img src="/images/Logos/gimp_logo.png" alt="Gimp Logo"></img></a></center>
		</td>

		<td>
			Gimp stands for the GNU Image Manipulation Program. It's a free, open source version of a program like Photoshop (though a little more buggy). For the blog, I use it to edit photos and to <a href="http://www.wikihow.com/Create-an-Animated-GIF-Image-with-GIMP" target="\_blank">create animated gifs out of videos</a>.
		</td>
	</tr>

	<tr>
		<td>
			<a href="http://fritzing.org/home/" target="\_blank">fritzing</a>
		</td>

		<td>
			<center><a href="http://fritzing.org/home/" target="\_blank"><img src="/images/Logos/fritzing_logo.png" alt="Fritzing Logo"></img></a></center>
		</td>

		<td>
			Fritzing is a very cool open source program for designing circuit schematics and diagrams. I use it to show clean representations of our Arduino projects for the blog. You can also submit your design to then get printed by fritzing, but that's a paid service.
		</td>
	</tr>

	<tr>
		<td>
			<a href="http://chrispederick.com/work/web-developer/" target="\_blank">Web Developer Browser Plug-In</a>
		</td>

		<td>
			<center><a href="http://chrispederick.com/work/web-developer/" target="\_blank"><i class="fa fa-cog fa-5x" style="color: gray;"></i></a></center>
		</td>

		<td>
			This plugin, available on Chrome, Firefox, and Opera, is super useful for testing. I use it to test how the blog will look for people with color-blindness, people who have CSS disabled, and people who may be reading the blog with only screen readers.
		</td>
	</tr>

	<tr>
		<td>
			<a href="http://fortawesome.github.io/Font-Awesome/" target="\_blank">Font Awesome</a>
		</td>

		<td>
			<center><a href="http://fortawesome.github.io/Font-Awesome/" target="\_blank"><img src="/images/Logos/font-awesome_logo.png" alt="Font Awesome Logo"></img></a></center>
		</td>

		<td>
			Font Awesome is a free font of logos and icons. I use it on the blog to create the buttons at the bottom of the page to link to an RSS feed and my Github and LinkedIn accounts. I used in the line above to create the gear icon!
		</td>
	</tr>

	<tr>
		<th colspan="3">Techniques</th>
	</tr>

	<tr>
		<td>
			Run the blog locally before posting
		</td>

		<td>
			<center><img src="/images/Logos/cmd_logo.png" alt="Command Prompt Logo"></img></center>
		</td>

		<td>
			It's very helpful to see what your blog will look like as you're building it and before you show it to everyone else. To do this, I use my Command Prompt (just search of it on your computer) to navigate into my blog directory and then serve it on my local computer. The commands are super basic:
			<script src="https://gist.github.com/madjenjen/f23aa17199c2fcf3c0ec.js"></script>
			Then you'll use your web browser to go to <a href="http://127.0.0.1:4000" target=\_blank">http://127.0.0.1:4000</a> to check out your blog!

			Fun fact: Jekyll is smart enough to know the date you want your blog posted, and it won't show it even locally if you put a future date on it, so for testing purposes, title your blog with today's date and then change it when you're ready to push it to the world.

		</td>
	</tr>

	<tr>
		<td>
			Use git for source control and repository
		</td>

		<td>
			<center><a href="https://github.com/madjenjen/madjenjen.github.io" target="\_blank"><img src="/images/Logos/GitHub_logo.png" alt="GitHub Logo"></a></img></center>
		</td>

		<td>
			This blog is built using the free GitHub Pages feature of GitHub, so it makes sense to use git for source control as well. I downloaded <a href="https://www.cygwin.com/" target="\_blank">Cygwin</a> for my Windows computer (you won't have to do this if you're using a Mac) and use it to save my blog changes locally and then push them to the master repository when they're dece enough for the world to see! Check out this <a href="https://try.github.io/levels/1/challenges/1" target="\_blank">15 minute tutorial on how to use git</a>.
		</td>
	</tr>
</table>

If you've been thinking about starting a blog, I hope my toolbox can serve as some inspiration of where to start! What are your favorite tools?

\-JMad
