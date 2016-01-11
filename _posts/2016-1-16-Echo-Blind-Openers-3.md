---
layout: post
title: Echo Blind Openers - Part 3
image: /images/Echo-Blinds/Motor_Turning.gif
---
Now that we've designed, created, and tested our prototype (<a href="http://pretty-dece.com/Echo-Blind-Openers/" target="\_blank">Part 1</a> and <a href="http://pretty-dece.com/Echo-Blind-Openers-2/" target="\_blank">Part 2</a>), it's time to build the final shield and modify the code for your specific needs.

<!--more-->

<div class="numbers">
	<b>1</b>
</div>

### Modify the Code ###
I'll walk through the Arduino code step by step to show you where you can make adjustments for your projects. As I mentioned before, the latest version of all the code can be found in <a href="https://github.com/madjenjen/EchoBlinds" target="\_blank">this GitHub repository</a>.

As I talk through these steps, roll-over the text with your mouse and you'll see the specified lines of code light up in the snippets below (nifty new feature, huh?).

<p class="highlight-trigger" highlight-file="file-echoblinds-2-ino" highlight-lines="3,4">These first two lines attach the servo motors to the Arduino pins responsible for their triggering. In our case, we attached one to Pin 8 and one to Pin 9. If you attached them to different pins, just change the numbers in the code below. </p>

<script src="https://gist.github.com/madjenjen/ebacb9cd350ddc5b0c39.js?file=echoblinds-2.ino"></script>

<p class="highlight-trigger" highlight-file="file-echoblinds-3-ino" highlight-lines="1,2">These next few lines set the <a href="https://www.arduino.cc/en/Serial/Begin" target="\_blank">baud rates</a> for the two <a href="https://www.arduino.cc/en/Reference/Serial" target="\_blank">serial ports</a>. We can look into the first `Serial` to see any print-outs we're sending via `Serial.println` (this is very useful for debugging). `Serial2` is used to send commands to the WiFi Module. </p>

<p class="highlight-trigger" highlight-file="file-echoblinds-3-ino" highlight-lines="6-27">The rest of this snippet asks the module to connect to your home WiFi. Leave this code as is.</p>

<script src="https://gist.github.com/madjenjen/ebacb9cd350ddc5b0c39.js?file=echoblinds-3.ino"></script>

<p class="highlight-trigger" highlight-file="file-echoblinds-4-ino" highlight-lines="1-23">After the module is successfully connected to the WiFi network, it'll begin to loop through the following code over and over again. What it's basically doing here is building a command, stored in the variable `cmd`, that tells the WiFi module where to look for instructions to pass to the motors. From the <a href="http://pretty-dece.com/Echo-Blind-Openers-2/" target="\_blank">previous post</a>, we know that it'll go to the Relay server to see if it's got any messages waiting.</p>

<p class="highlight-trigger" highlight-file="file-echoblinds-4-ino" highlight-lines="30-41">If it finds that there is indeed a new message, here it starts to read the message (which comes in the form of a json file) so it can tell the Arduino what to do next. Again, leave this code as is.</p>

<script src="https://gist.github.com/madjenjen/ebacb9cd350ddc5b0c39.js?file=echoblinds-4.ino"></script>

<p class="highlight-trigger" highlight-file="file-echoblinds-5-ino" highlight-lines="10">One sub-optimal piece of our code is that it assumes the first time you fire up this project, your blinds will be closed. After that, it will check whether they are closed or open so it doesn't accidentally open them twice, but the very first time, it won't know.</p>

<p class="highlight-trigger" highlight-file="file-echoblinds-5-ino" highlight-lines="4-9">The way to actually rotate the blinds is by <a href="https://www.arduino.cc/en/Reference/ServoWriteMicroseconds" target="\_blank">writing microseconds</a> to the servo motors, which sets the angle of the shaft. To open the blinds (rotate counter-clockwise), we set `microseconds` to 1700, and to close them (rotate clockwise), we set to 1300. You may need to change these numbers depending on which way your blinds rotate to open and close. Try changing these values to see what happens.</p>

<p class="highlight-trigger" highlight-file="file-echoblinds-5-ino" highlight-lines="13">The `delay` in the code is set to 8000 microseconds allowing the blinds motors to run in whatever direction was given to them for 8 seconds. You may want to change this number depending on how long it'll take to open or close your blinds.</p>

<p class="highlight-trigger" highlight-file="file-echoblinds-5-ino" highlight-lines="14-19">Finally, we write 1500 microseconds to the motors in order to stop them, and store their final state in a variable called `fractionOpen` so we'll know if they're open or closed in the future. We named in `fractionOpen` with the idea of refactoring in the future to allow for partial opening and closing.</p>

<script src="https://gist.github.com/madjenjen/ebacb9cd350ddc5b0c39.js?file=echoblinds-5.ino"></script>

<p class="highlight-trigger" highlight-file="file-echoblinds-6-ino" highlight-lines="5,7">The `connectWiFi` function in the code below builds the command for the WiFi module pulling information from your config.h file (such as your network id and password) to try to connect to the network. You don't need to customize this code.

<script src="https://gist.github.com/madjenjen/ebacb9cd350ddc5b0c39.js?file=echoblinds-6.ino"></script>

<p class="highlight-trigger" highlight-file="file-echoblinds-7-ino" highlight-lines="1-3">This final snippet runs if we use the button to restart the project without unplugging it. It allows the program to start over and try to reconnect to the WiFi network without throwing everything else off.

<script src="https://gist.github.com/madjenjen/ebacb9cd350ddc5b0c39.js?file=echoblinds-7.ino"></script>

<div class="numbers">
	<b>2</b>
</div>

### Design and Prepare the Shield ###
Next, it's time to prepare the final shield for the Arduino. The idea is to remove the breadboard and create a shield that will plug right into the Arduino. Here is a mock-up of what the top of our board looks like. Note, we intentionally extended the wires to the servo motors (not pictured here) so that we could reach two windows that are about 10 feet apart.

<img src="/images/Echo-Blinds/Echo-Blinds_Shield.png" alt="Arduino shield design"></img>

The easiest way to do this is to have the <a rel="nofollow" href="http://www.amazon.com/gp/product/B000RB38X8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000RB38X8&linkCode=as2&tag=predec-20&linkId=TOGS4GP3GINEYJFP" target="\_blank">soldering Helping Hand</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B000RB38X8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> hold your <a rel="nofollow" href="http://www.amazon.com/gp/product/B00COGNWXA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00COGNWXA&linkCode=as2&tag=predec-20&linkId=DE35O33TPTQFJLC4" target="\_blank">double-sided circuit board</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00COGNWXA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> while you measure out <a rel="nofollow" href="http://www.amazon.com/gp/product/B00B4ZRPEY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00B4ZRPEY&linkCode=as2&tag=predec-20&linkId=7RPQKLNGMXO7E56F" target="\_blank">hook-up wire</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00B4ZRPEY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> and prepare it using the <a rel="nofollow" href="http://www.amazon.com/gp/product/B000JNNWQ2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000JNNWQ2&linkCode=as2&tag=predec-20&linkId=XK6CPWH5KGQJ2RO2" target="\_blank">multi-tool</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B000JNNWQ2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />.

<div class="numbers">
	<b>3</b>
</div>

### Solder the Shield ###
Now that you've got the board prepared, it's time to solder! Make sure you find a well-ventilated space and that your hair is tied back (some bangs were harmed in the making of this project). Here's our al fresco soldering setup.

<img src="/images/Echo-Blinds/Soldering_Setup.jpg" alt="soldering setup on balcony"></img>

When soldering, follow the schematic shown in <a href="http://pretty-dece.com/Echo-Blind-Openers/" target="\_blank">Part 1</a>.

<div class="numbers">
	<b>4</b>
</div>

### Set it up! ###
Finally, let's find the Echo Blinds project a permanent home! For our purposes, we put the shielded Arduino on our mantle and taped the motor wires along the walls to keep the look somewhat clean. Disclaimer: I messed up on the size of the shield, so it's jankily split into two. Don't do that.

<table>
	<tr>
		<td>
			<img src="/images/Echo-Blinds/Shield_Top.JPG" alt="Shield top view"></img>
		</td>
		<td>
			<img src="/images/Echo-Blinds/Mantle_Setup.JPG" alt="Mantle setup"></img>
		</td>
	</tr>

	<tr>
		<td rowspan="2">
			<img src="/images/Echo-Blinds/Motor_Turning.gif" alt="Motor turning animation"></img>
		</td>
		<td>
			<img src="/images/Echo-Blinds/Shield_Side.JPG" alt="Shield side view"></img>
		</td>
	</tr>

	<tr>
		<td>
			<img src="/images/Echo-Blinds/Motor_Closeup.JPG" alt="motor close-up view"></img>
		</td>
	</tr>
</table>

To attach the turning rod to the motor, we used simple rubber bands. We had to set the motor off the wall a little bit so the rod wouldn't get stuck--thus the wooden block. Everything is held in place with simple mounting tape for now. It's not a very glamorous setup, but it's dece enough to get the job done!

<div class="numbers">
	<b>5</b>
</div>

### Troubleshoot Common Problems ###
So far, this project has operated very reliably. We've had it running for over 5 months now and it's still going strong! A couple of common problems you may run into during regular operation:

* **Changing relay server IP** - <span class="highlight-trigger" highlight-file="file-config-h-example" highlight-lines="3">We've had to restart the relay server a couple of times for different reasons, and at least one of those times resulting in a new IP address for the server. Our blinds stopped working until we realized we needed to change the IP address in the config.h file. Unfortunately we haven't gotten a DNS address to work yet, so for now we just have to be careful about keeping the IP up to date.</span>
	<script src="https://gist.github.com/madjenjen/20685dffe1137f072e52.js"></script>
* **Restarting WiFi** - In case the WiFi module glitches, the easiest thing to do is just to press the button off and on again. That usually fixes any communication problems.
* **Use the right power supply** - Since it'll be running constantly, it's important to use a power supply that won't set the Arduino and your house up in flames. This <a rel="nofollow" href="http://www.amazon.com/gp/product/B00CP1QLSC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00CP1QLSC&linkCode=as2&tag=predec-20&linkId=VFQOD7SJRRJSQS5F" target="\_blank">9V 1A Power Adapter</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00CP1QLSC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> will work for this project.

That's all for Echo Blinds! What do you think of our first full project series? Anything you'd like to see more or less of? Is the explanation too high level, too in the weeds, just enough?

Look out soon for our next project: automatic bonsai tree watering!

\- JMad
