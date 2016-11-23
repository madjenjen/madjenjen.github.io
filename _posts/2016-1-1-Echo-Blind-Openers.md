---
layout: post
title: Echo Blind Openers - Part 1
image: /images/Echo-Blinds/Echo-Blinds_bb.png
---
Our first custom project was to automate the opening and closing of our living room blinds. Yes, it's not that hard to get up and rotate the little rod on each window for 8 seconds, but it's waaaaay cooler to just tell Alexa to do it for you (check out <a href="http://pretty-dece.com/Start-Automating/" target="\_blank">a previous post</a> for an introduction to Alexa).

<!--more-->

The idea for the project came from a visiting friend, so as a first step, we looked online for who's done it before. Lo and behold, it's definitely been done before (like most things). The starting point for our project was the <a href="http://makezine.com/projects/mini-blind-minder/" target="\_blank">Mini Blind Minder</a>.

<center><a href="http://www.youtube.com/watch?v=YcR2yHHYzd8" target="\_blank"><img src="http://img.youtube.com/vi/YcR2yHHYzd8/0.jpg"
alt="Mini Blind Minder video"></a></center>

Unlike the Mini Blind Minder, we wanted to interact with our blind openers via voice command through the Amazon Echo, so our design is somewhat modified. In this post, I'll discuss the hardware/Arduino portion of the project, and we'll have a celebrity guest post from TheConnMan next time to discuss the interface with Alexa.

To start, here's the list of parts we used aside from what's already in our <a href="http://pretty-dece.com/Build-Your-Toolbox/" target="\_blank">toolbox</a>:

### List of Parts ###
<table>
	<tr>
		<th colspan="3">Hardware</th>
	</tr>

	<tr>
		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=7DU44Q4MEDBH2OOW" target="\_blank">ESP8266 Serial Wifi Wireless Transceiver Module</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=IXJQFSMSWMDORJPS" target="\_blank"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00O34AGSU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=predec-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="ESP8266 Serial Wifi Wireless Transceiver Module" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			This little module will show up frequently in our projects. You can find it online for less than $5 and it's basically a little piece of magic that hooks up anything you want to the internet. We'll use it here to communicate with Alexa.
		</td>
	</tr>

	<tr>
		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00B886KSE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00B886KSE&linkCode=as2&tag=predec-20&linkId=LUJIITUMHAKGUVTL" target="\_blank">Continuous Rotation Servo</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00B886KSE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00B886KSE/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00B886KSE&linkCode=as2&tag=predec-20&linkId=KUVTQWAHPLO4X3MR" target="\_blank"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B886KSE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=predec-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00B886KSE" width="1" height="1" border="0" alt="Continuous Rotation Servo" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			We automated two windows, so we used two of these. You'll need as many motors as the number of windows you plan to automate.
		</td>
	</tr>

	<tr>
		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B008LT3O14/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008LT3O14&linkCode=as2&tag=predec-20&linkId=IUMQVYIVXQUM63YO" target="\_blank">On/Off Switches</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B008LT3O14" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B008LT3O14/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008LT3O14&linkCode=as2&tag=predec-20&linkId=2UX6YI37FN442T6K" target="\_blank"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008LT3O14&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=predec-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B008LT3O14" width="1" height="1" border="0" alt="On/Off Switches" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			We'll need an on/off switch to reset the circuit in case something goes wonky.
		</td>
	</tr>

	<tr>
		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00CP1QLSC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00CP1QLSC&linkCode=as2&tag=predec-20&linkId=VFQOD7SJRRJSQS5F" target="\_blank">9V 1A Power Adapter</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00CP1QLSC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00CP1QLSC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00CP1QLSC&linkCode=as2&tag=predec-20&linkId=DSRCXPQD5MLLJZL3" target="\_blank"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CP1QLSC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=predec-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00CP1QLSC" width="1" height="1" border="0" alt="9V 1A Power Adapter" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			We'll use a power adapter like this one to permanently power the project once it's finished. When buying power supplies for the Arduino, make sure to take <a href="http://playground.arduino.cc/Learning/WhatAdapter" target="\_blank">these guidelines</a> into consideration. Otherwise, you may accidentally fry the Arduino.
		</td>
	</tr>
</table>

All right, now that we've got everything, we'll first want to build a prototype of our design to make sure everything works. The easiest way to prototype for the Arduino is using a breadboard. The breadboard makes it easy to switch things up without having to take everything apart. We'll test each module by itself and then put things together once we're sure each component works individually.

<div class="numbers">
	<b>1</b>
</div>

### Run and calibrate the motors ###

To test out the motors, plug them into your breadboard and connect to the Arduino as shown below. On our motors, the <b style="color: red;">red wire</b> is power, **black** is ground, and <b style="color: #f7da26;">white</b> (on our diagrams I'll show them as yellow) is the switch that tells the motors to turn on and off. Note that our servos will need 5V to run. Make sure to test one servo motor at a time to make sure each works as intended.

<center><img src="/images/Echo-Blinds/Servo-Motor-Testing_bb.png" alt="Servo motor testing with bread board setup"></center>

The <a href="http://makezine.com/projects/mini-blind-minder/" target="\_blank">Mini Blind Minder</a> project conveniently has a pre-made script to calibrate your motors. Click through to step **"6. Calibrate the servo."** in the project to download the .zip file with the Arduino sketches and run them on each motor.

>Blog building side-note: there's a super cool, open-source package called <a href="http://fritzing.org/home/" target="\_blank">fritzing</a> that allows you to create fancy-looking schematics and diagrams--that's what I'm using here to show you >our setups.

<div class="numbers">
	<b>2</b>
</div>

### Modify the ESP8266 ###

Next, we'll want to test out the ESP8266. Unfortunately, the way it's built out of the box isn't compatible with a breadboard since some pins will always end up on the same lines. Since the modules are so cheap, we bought a few and designated one as the prototype chip. We used <a href="http://arduining.com/2015/01/02/making-esp8266-breadboard-frienly/" target="\_target">these instructions</a> to make it breadboard friendly. Now we can plug in half of the pins on one side of the breadboard, and the other four pins on the other side.

<div class="numbers">
	<b>3</b>
</div>

### Run the ESP8266 ###

Now we'll need to learn a little bit about the ESP8266. This post titled <a href="http://shin-ajaran.blogspot.sg/2014/12/noobs-guide-to-esp8266-with-arduino.html" target="\_blank">noob's guide to ESP8266 with Arduino Mega 2560 or Uno</a> is very comprehensive and even provides some example scripts to run to make sure your chip is functioning properly. Here's how we hooked up our modified chip: the <b style="color: green">green wires</b> are power, **black** is ground, and  <b style="color: blue">blue</b> are the communication wires (you won't have the  <b style="color: gray">gray wires</b> once you've modified the chip--it'll just plug in to the other side of the board). **IMPORTANT NOTE:** The ESP8266 chip requires 3.3V of power, **NOT** 5V, so we'll need to make sure to make that distinction when we put both the motors and the chip together.

<center><img src="/images/Echo-Blinds/ESP8266-Testing_bb.png" alt="ESP8266 testing with bread board setup"></center>

<div class="numbers">
	<b>4</b>
</div>

### Build the prototype ###

All right! Now that each component is working properly, let's put it together! Note the following:

* The top part of the breadboard in the diagram is at 3.3V
* The bottom part of the breadboard is at 5V
* The grounds are all connected
* There is a switch on the 3.3V power so that we can turn it on and off at will
* There are two servo motors, one hooked up to pin 8 and the other to pin 9

<center><img src="/images/Echo-Blinds/Echo-Blinds_bb.png" alt="Echo Blinds breadboard prototype diagram"></center>

Here is a schematic without the breadboard to show how everything is connected. I used the Arduino Uno for this diagram only because it's slightly smaller. The Mega has all of the same pins, plus more, so it doesn't matter for the schematic.

<center><img src="/images/Echo-Blinds/Echo-Blinds_schem.png" alt="Echo Blinds schematic"></center>

And here is a picture of our actual setup. Don't pay attention to the colors of the wires. They don't correspond to the diagrams.

<center><img src="/images/Echo-Blinds/echo_blinds_prototype.JPG" alt="Echo Blinds physical prototype" style="width: 70%;"></center>

<div class="numbers">
	<b>5</b>
</div>

### Run the code ###
Finally, we'll need to run the Arduino code to bring the project to life. We're storing all of our code on Github, so if there are any updates since this post, you can <a href="https://github.com/madjenjen/EchoBlinds" target="\_blank">find the latest here</a>.

Some common problems you may run into when running the code, and solutions:

* Including the **ArduinoJson.h** and **Servo.h** libraries
	* They're already "included" in the code, but you'll need to add them to the Arduino IDE. To do that, click "Sketch" at the top of the IDE, then "Include Library". You'll see the Servo library there, so go ahead and select it. To find the ArduinoJson library, select "Manage Libraries..." and search for it there.
* Creating a **config.h** file
	* You'll need to create your own config file and store it in the same folder as your echoblinds.ino sketch. It will contain sensitive information like your network password, so make sure not to share it with everyone. We keep ours in the .gitignore part of our repository. The config.h.example file shows you how it should be structured and what info you'll need to include (yes, include the quotation marks).
	<script src="https://gist.github.com/madjenjen/20685dffe1137f072e52.js"></script>
* To see the printed lines, once you run your sketch, click on "Tools" and then "Serial Monitor" or Ctrl+Shift+M. If anything doesn't work, my approach is usually to add a bunch of Serial.println lines throughout the code to see where things break.

For convenience, here's the sketch as well:
<script src="https://gist.github.com/madjenjen/ebacb9cd350ddc5b0c39.js?file=echoblinds.ino"></script>

Next week on Pretty Dece, TheConnMan will show us how to start talking to Alexa!

Happy automating!!

\- JMad
