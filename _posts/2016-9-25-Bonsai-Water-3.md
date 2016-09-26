---
layout: post
title: Bonsai Watering for Slackers - Part 3
image: /images/Bonsai-Water/Part3/final-setup.JPG
---
All right, Slackers, now that we've got the circuit and software designed (see <a href="http://pretty-dece.com/Bonsai-Water-1/" target="\_blank">Part 1</a> and <a href="http://pretty-dece.com/Bonsai-Water-2/" target="\_blank">Part 2</a>), it's time to build the final product.

<!--more-->

<div class="numbers">
	<b>1</b>
</div>

### Customize the motor.

We first have to modify the motor slightly to secure a fit with the   <a  href="https://www.amazon.com/gp/product/B000FMWTVG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FMWTVG&linkCode=as2&tag=predec-20&linkId=3eda70c6daf6728d11c2ef711c39f46b" target="\_blank">silicone tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FMWTVG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />. We tried to find tubing and a motor that would fit together, but came up empty on Amazon, so instead we'll just wrap any kind of rubber band around the output valve of the motor to slightly increase its outer diameter.

<center><img src="/images/Bonsai-Water/Part3/motor_prep1_1.JPG" alt="Motor prep step 1"></img></center>

Next, we'll need to extend the motor wires since they need to stretch out of the basin. Twist the wires together and add some solder to reinforce the join.

<center><img src="/images/Bonsai-Water/Part3/motor_prep2.JPG" alt="Motor prep step 2"></img></center>

Since these wire connections are going to be submerged in water, it's impoartant to protect them with some <a  href="https://www.amazon.com/gp/product/B00EXLRW5S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00EXLRW5S&linkCode=as2&tag=predec-20&linkId=f05c32eb8e7cbf8513455ad8046949f0" target="\_blank">heat shrink tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00EXLRW5S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />.

<center><img src="/images/Bonsai-Water/Part3/motor_prep3.JPG" alt="Motor prep step 3"></img></center>

<div class="numbers">
	<b>2</b>
</div>

### Build the Arduino shield.

Now let's put together the Arduino shield we designed and prototyped in <a href="http://pretty-dece.com/Bonsai-Water-1/" target="\_blank">Part 1</a>. As I mentioned in the previous post, my goal for the next project is to learn more about wire management so our shields don't keep looking like a sloppy tumbleweed of wires :(.

<center><img src="/images/Bonsai-Water/Part3/Bonsai-for-Slackers_final_circuit_bb.png" alt="Fritzing rendering of final circuit design"></img></center>

<center><img src="/images/Bonsai-Water/Part3/circuit_closeup.JPG" alt="Front of shield"></img></center>

And here's a close-up of the wire connections to the sensor.

<center><img src="/images/Bonsai-Water/Part3/sensor.JPG" alt="Front of shield"></img></center>

<div class="numbers">
	<b>3</b>
</div>

### Put together the tubing.

Now we need to put together the tubing. First, connect the <a  href="https://www.amazon.com/gp/product/B000FJX5DU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJX5DU&linkCode=as2&tag=predec-20&linkId=333540dcaf4a353c12bbabab80ebb1d6" target="\_blank">drip irrigation tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJX5DU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> to the <a  href="https://www.amazon.com/gp/product/B006ZNP8AS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B006ZNP8AS&linkCode=as2&tag=predec-20&linkId=1352954bc6f99b5e91be43ca59e0e25d" target="\_blank"> sprinkler converter</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B006ZNP8AS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />. Make sure to cut generous lengths of the drip irrigation tubing at first. Once they're connected to the converter, they're nearly impossible to pull off.

<center><img src="/images/Bonsai-Water/Part3/splitter1.JPG" alt="Tube splitter prep step 1"></img></center>

Next, pull out the little white piece from the converter.

<center><img src="/images/Bonsai-Water/Part3/splitter2.JPG" alt="Tube splitter prep step 2"></img></center>

Doing so leaves a perfectly-sized connection point inside of the converter for the silicone tubing. Again, cut off a generous length of the silicone tubing at first so we can cut it down to length later.

<center><img src="/images/Bonsai-Water/Part3/splitter3.JPG" alt="Tube splitter prep step 3"></img></center>

<div class="numbers">
	<b>4</b>
</div>

### Customize the colander.

Take the <a  href="https://www.amazon.com/gp/product/B001U0O2UI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001U0O2UI&linkCode=as2&tag=predec-20&linkId=0ab461838918811bc7cb06f58ae092aa" target="\_blank">stainless steel mesh colander</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B001U0O2UI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> and use wirecutters to make a hole big enough for the silicone tubing at the bottom of the colander. Snip a small divet out of the top of the colander so the motor wires can pass under the colander.

<div class="numbers">
	<b>5</b>
</div>

### Build out the basin.

Finally, we can build out the basin. Place the motor at the bottom of the basin. Attach the silicone tubing to the top of the motor (the section modified with the rubber band). Next, place the colander over the motor. Make sure the tubing is pointed straight up through the hole you made and that the motor wires pass through the divet.

<center><img src="/images/Bonsai-Water/Part3/resevoir1.JPG" alt="Basin build out step 1"></img></center>

Now <a  href="https://www.amazon.com/gp/product/B00E0NG6W4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00E0NG6W4&linkCode=as2&tag=predec-20&linkId=bc1e8235df714f37432665575cf94837" target="\_blank">rock</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00E0NG6W4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />it out! The basin will get very heavy, so make sure it's placed in a convenient location. Fill the reservoir to about 1 inch below capacity with rocks.

<center><img src="/images/Bonsai-Water/Part3/resevoir2.JPG" alt="Basin build out step 2"></img></center>

Next, cut the silicone tubing to length. We want it about a centimeter above the rocks.

<center><img src="/images/Bonsai-Water/Part3/resevoir3.JPG" alt="Basin build out step 3"></img></center>

Attach the rest of the tubing setup to the silicone tube.

<center><img src="/images/Bonsai-Water/Part3/resevoir4.JPG" alt="Basin build out step 4"></img></center>

Fill the basin up to capacity with rocks to make an even surface.

<center><img src="/images/Bonsai-Water/Part3/resevoir5.JPG" alt="Basin build out step 5"></img></center>

Fill the basin up with water. Stop once the water is about 1 inch below the rock surface. Be careful not to overfill. Finally, place your bonsai tree on top, insert the sensor into the soil, and stake the irrigation tubing in the sides of the basin.

<center><img src="/images/Bonsai-Water/Part3/final-setup.JPG" alt="Final setup"></img></center>

<div class="numbers">
	<b>6</b>
</div>

### Customize the code.

>Roll your mouse over the paragraphs below to highlight the related lines of code in the code snippets.

<p class="highlight-trigger" highlight-file="file-bonsaiwater-variables-ino" highlight-lines="1-3">For the code, you'll first need to modify the setup variables of the <a href="https://github.com/madjenjen/Bonsai_Water/blob/master/bonsaiwater.ino" target="\_blank">bonsaiwater.ino</a> file in case you used different pins. </p>

<p class="highlight-trigger" highlight-file="file-bonsaiwater-variables-ino" highlight-lines="6">Next, you can modify the moisture level at which the system will water your tree. We chose the <b>300</b> reading as the point at which the tree gets watered. If you find that the soil is too dry already at 300, you can lower the number. If the soil is too moist at this point, you can increase the number.</p>

<script src="https://gist.github.com/madjenjen/48b7e66ce4761c4f6cb9d33305e46b53.js?file=bonsaiwater-variables.ino"></script>

<p class="highlight-trigger" highlight-file="file-bonsaiwater-timing-ino" highlight-lines="1">Next, we need to set the current time and date to calibrate your Arduino. The command has the following format:</p>

`setTime(hour, minute, second, day, month, year)`

<p class="highlight-trigger" highlight-file="file-bonsaiwater-timing-ino" highlight-lines="2">You can also alter how frequently a status will be posted to your Slack channel. We chose <b>1 hour</b>.</p>

<script src="https://gist.github.com/madjenjen/48b7e66ce4761c4f6cb9d33305e46b53.js?file=bonsaiwater-timing.ino"></script>

<p class="highlight-trigger" highlight-file="file-bonsaiwater-water-message-ino" highlight-lines="6">The following loop is what gets repeated at the frequency you specified above. To adjust the power to the water pump, you can play with <b>this number</b>. Increasing it will send a more frequent analog signal thereby increasing the speed at which water will flow through the pump.</p>

<p class="highlight-trigger" highlight-file="file-bonsaiwater-water-message-ino" highlight-lines="8">You can <b>modify the message</b> you'll get in your Slack channel when the tree is getting watered. Ours says "Bonsai H2GO!" And it makes us happy :).</p>

<script src="https://gist.github.com/madjenjen/48b7e66ce4761c4f6cb9d33305e46b53.js?file=bonsaiwater-water-message.ino"></script>

<p class="highlight-trigger" highlight-file="file-bonsaiwater-status-message-ino" highlight-lines="15,17,19">You can also <b>change the status message</b> that comes through at the frequency you determined earlier. Ours comes in every hour.

<script src="https://gist.github.com/madjenjen/48b7e66ce4761c4f6cb9d33305e46b53.js?file=bonsaiwater-status-message.ino"></script>

<div class="numbers">
	<b>7</b>
</div>

### Troubleshoot common problems.
As we mentioned in the first post, this setup is still somewhat finicky. Ideally, we wanted to run the system 24/7 to take care of our plant, but after about a month of use, we started getting strange readings in our Slack channel. The soil was never getting dry and therefore the tree wasn't getting watered. Turns out the sensor corroded.

<table>
	<tr>
		<td>
			<center><img src="/images/Bonsai-Water/Part3/corrosion.JPG" alt="Chirp sensor corrosion side 1"></img></center>
		</td>

		<td>
			<center><img src="/images/Bonsai-Water/Part3/corrosion2.JPG" alt="Chirp sensor corrosion side 2"></img></center>
		</td>
	</tr>
</table>

You'd think a "soil moisture sensor" could handle some soil moisture...

Before the Chirp! sensor, we also tried a simpler resistive sensor, but that one corroded within a week.

<center><img src="/images/Bonsai-Water/Part3/corrosion3.JPG" alt="Resistive sensor corrosion"></img></center>

Now we only use the system when going away on vacation so we can keep the sensor in good condition.

Here's a couple of other problems we've encountered and solved:

<table>
	<tr>
		<th>Problem</th>
		<th>Troubleshooting Steps</th>
	</tr>

	<tr>
		<td>
			<b>Slack says it's watering, but water doesn't come out.</b>
		</td>

		<td>
			<ul>
				<li>Check that there is water in the basin. Though the system is set up to recycle excess water, your tree is eating up some of it and it's also evaporating. Refill the basin if the water is too low. This is also important because the motor could get damaged if it's trying to run without water.</li>
				<li>If the water is at a good level, check that the yellow light by pin 13 on the Arduino is turning on. If it's not, something may be wrong with your code or soldering. Restart the system.</li>
				<li>If the pin 13 light is coming on, that means the signal to start the motor is going through. Take apart the basin setup to make sure the wired connection to the motor is in tact. If it isn't, resolder.</li>
				<li>If it is in tact, your motor may have died. Unsolder the motor from the Arduino and follow step 3 from <a href="http://pretty-dece.com/Bonsai-Water-1/" target="\_blank">Part 1</a> to test the motor.</li>
			</ul>
		</td>
	</tr>

	<tr>
		<td>
			<b>The system stops sending Slack messages.</b>
		</td>

		<td>
			<ul>
				<li>Check that the setup is plugged into the wall. If it isn't, replug.</li>
				<li>If it is plugged in, check that the ESP8266's red light is on. If it isn't on, you may have lost power to the ESP8266. Check your soldering.</li>
				<li>If the red light is on, try unplugging and replugging the system. If that still doesn't help, check to make sure that your <code>config.h</code> file contains all of the right information (Slack channel, API key, etc.).</li>
			</ul>
		</td>
	</tr>

	<tr>
		<td>
			<b>The water overshoots or undershoots the tree.</b>
		</td>

		<td>
			<ul>
				<li>Try adjusting the stakes to make sure the tubes are pointed in the right direction.</li>
				<li>If they're pointed in the right direction, but the pressure isn't right. Go back to step 6 in this post to adjust the pump power.</li>
			</ul>
		</td>
	</tr>
</table>

That's it and that's all! Hope you enjoyed walking through this project with us. Let us know what you thought in the comments. Also let us know of a better soil moisture sensor so we can actually live the Slacker plant-parent life.

-JMad
