---
layout: post
title: Echo Blind Openers - Part 2
image: /images/Echo-Blinds/Echo-Blinds_Software_Graphic.png
---
Hey everyone, I'm <a href="http://theconnman.com" target="\_blank">TheConnMan</a> and I'll be writing this post on building the Internet of Things (IoT) connective tissue to bridge the gap between Alexa and the Arduino. In other words: **how to make everything talk to each other after building the prototype in <a href="/Echo-Blind-Openers/" target="\_blank">Part 1</a>**. Our main goal is to get messages from a user (in the form of voice commands) to the Arduino. Let's see how it's done.

<!--more-->

### Toolbox Additions
To start, let's take a look at the tools we'll put to use for this project:

<table>
	<tr>
		<th colspan="3">Inventory</th>
	</tr>

	<tr>
		<td>
			 <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide" target="\_blank">Alexa Skills</a>
		</td>

		<td>
			<center><a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide" target="\_blank"><img src="/images/alexa-skills-logo.png"></img></a></center>
		</td>

		<td>
			We'll use custom Alexa Skills to interact with users and execute Amazon Web Services (AWS) <a href="https://aws.amazon.com/lambda/" target="\_blank">Lambda Functions</a>. The Amazon Echo will listen for a user to speak, use speech recognition to interpret the command, then call the appropriate Alexa Skill and execute the corresponding Lambda function. The Skill will then listen for a response back from the Lambda function and convert the result into speech which the Echo will speak back to the user.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://aws.amazon.com/lambda/" target="\_blank">AWS Lambda Functions</a>
		</td>

		<td>
			<center><a href="https://aws.amazon.com/lambda/" target="\_blank"><img src="/images/lambda-icon.png"></img></a></center>
		</td>

		<td>
			When a user interacts with Alexa, she executes small snippets of code called Lambda Functions.
		</td>
	</tr>

	<tr>
		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=7DU44Q4MEDBH2OOW" target="\_blank">ESP8266 Serial Wifi Wireless Transceiver Module</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=IXJQFSMSWMDORJPS" target="\_blank"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00O34AGSU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=predec-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="ESP8266 Serial Wifi Wireless Transceiver Module" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			In the previous post, we used this module to connect the Arduino to the internet. We'll use it again in this post to communicate with the blind openers.
		</td>
	</tr>

	<tr>
		<td>
			<b>Custom Middleware</b>
		</td>

		<td>
			<center><img src="/images/middleware.png"></img></center>
		</td>

		<td>
			What we will be building to bridge the gap between the rest of our tools.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://aws.amazon.com/elasticbeanstalk/" target="\_blank">AWS Elastic Beanstalk</a>
		</td>

		<td>
			<center><a href="https://aws.amazon.com/elasticbeanstalk/" target="\_blank"><img src="/images/elastic_beanstalk_logo.png"></img></a></center>
		</td>

		<td>
			We host our custom solution on Amazon Web Services (AWS) Elastic Beanstalk.
		</td>
	</tr>
</table>

Let's first take a look at Alexa Skills.

### Alexa Skill
The Amazon Echo's AI, Alexa, has certain routines called **Alexa Skills**. Some of these come built-in out of the box (see JMad's <a href="/Start-Automating/" target="\_blank">previous post</a>), and we can create new ones using Alexa's Application Program Interface (API). I was surprised how good the Alexa API was and how easy it was to build upon. I thought that Alexa would only perform exact speech recognition, send me back the exact phrase, and leave me responsible for interpreting their meaning. I am not a linguistics expert and was not looking forward to enumerating the many ways someone could ask for the blinds to be opened. Even opening the blinds is fairly straightforward compared to some other commands. Just think of how many ways there are to confirm a command (e.g. OK, yes, yup, affirmative, of course, sure, etc).

Instead, Alexa does something more clever. She lets me (as the developer) define several example utterances and pull variables out of them. Alexa interpolates these examples, called intents, together so if a user says a phrase similar to an example it will still be able to interpret the command. A few examples of these utterances are below:

<script src="https://gist.github.com/TheConnMan/6b7bbd6de7293dccdbb8.js"></script>

The skill we created for Echo Blinds interprets the command, constructs a message to either open or close the blinds, then sends it to the message destination by making a <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="\_blank">REST</a> call. Check out the full skill <a href="https://github.com/TheConnMan/Home-Automation" target="\_blank">here</a>.

At this point, an astute reader may ask:

> Could we create a Lambda function to send a message directly to the ESP8266 WiFi chip? They're both connected to the internet...

This question leads us to our next section: **networking**.

### Networking
The main issue we have is that the snippets of code we're going to execute from Alexa commands are part of the **internet** while the Arduino we want to talk to is part of an **intranet**. This may be a distinction you've never heard of before and if you want a good, high level explanation check out this <a href="http://superuser.com/questions/135164/whats-the-difference-between-intranet-extranet-and-internet" target="\_blank">SuperUser post</a> about the difference. In short, the internet is publicly accessible, while an intranet is a set of machines which are the only ones who can talk to each other. Intranets can often access the internet as well, but machines outside the intranet can not access inside.

In our setup the Arduino is on an intranet (our home WiFi network) and Lambda code executes in the internet, so the root problem we have with the Arduino and Alexa is **the Lambda code can't communicate directly with the Arduino**. This means we need a custom middleware component.

### Relay Server
So Alexa can't send a message directly to the Arduino, but Alexa can send a message to a proxy message server. The Arduino can reach out from the intranet, so it can ask the message server every few seconds if it has any messages.

This means we need to build a very simple relay server which needs to accept messages from Alexa, store them, then pass those messages along to the Arduino when the Arduino requests any messages for it. The solution we built is <a href="https://github.com/TheConnMan/Message-Relay" target="\_blank">Message Relay</a>, a very simple <a href="https://grails.org/" target="\_blank">Grails</a> application which does just that. We host this small application on <a href="https://aws.amazon.com/elasticbeanstalk/" target="\_blank">AWS Elastic Beanstalk</a> and make it publicly accessible so Alexa and the Arduino can both access it.

### Putting It All Together
So now that we've explored all the individual components let's put it all together.

<center><img src="/images/Echo-Blinds/Echo-Blinds_Software_Graphic.png"></img></center>

Getting a message from one place to another is definitely non-trival. Communication between devices is the fundamental difficulty when working with IoT. Since building this project I have discovered a few things which could help if I was to rebuild this architecture.

First, I learned about the <a href="https://github.com/armzilla/amazon-echo-ha-bridge" target="\_blank">Amazon Echo Bridge</a>. This project emulates a <a rel="nofollow" href="http://www.amazon.com/gp/product/B00A4EUUO8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00A4EUUO8&linkCode=as2&tag=predec-20&linkId=KIYKMLJKMHEMUYUY" target="\_blank">Philips Hue</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00A4EUUO8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> (internet connected lights) bridge which allows the Amazon Echo to communicate within your home WiFi network. This could be used to communicate directly with the Arduino without use of the relay server.

The second interesting service is AWS's <a href="https://aws.amazon.com/iot/" target="\_blank">IoT service</a>. This service is built to be an IoT communication system so all your IoT devices can talk with each other through a single medium. For two devices it might not make sense, but if many devices need to communicate with each other it's definitely worth a look. Perhaps a future refactoring project is in order!

Thanks for reading about the IoT glue used to make everything talk to each other, look out for the final post discussing customization of our project to make it work for you!

\- TheConnMan
