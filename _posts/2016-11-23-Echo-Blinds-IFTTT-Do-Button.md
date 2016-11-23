---
layout: post
title: Control Echo Blinds Using a Phone
image: /images/Echo-Blinds/IFTTT-Do/swipe-screen.PNG
---

Welp, our <a href="https://www.amazon.com/Amazon-Echo-Bluetooth-Speaker-with-WiFi-Alexa/dp/B00X4WHP5E" target="\_blank">Amazon Echo</a> broke, and now we can't close the blinds. Of course we could just close them with our hands, the way people do, but let's be honest--that's preposterous. Once you automate, you never go back to hand-operate!

<!--more-->

Luckily, there's a pretty easy solution while we wait for the development kit for <a href="https://madeby.google.com/home/" target="\_blank">Google Home</a> to come out in December.

If you haven't yet forayed into the world of <a href="https://ifttt.com/recipes" target="\_blank">If This Then That (IFTTT)</a>, this is the perfect opportunity. I will ashamedly admit that this is my first time using the service!

### Toolbox Additions

We are only adding one item to our toolbox for this one.

<table>
  <tr>
    <th colspan="3">Inventory</th>
  </tr>
	<tr>
		<td>
			<a href="https://ifttt.com/products/do/button" target="\_blank">IFTTT DO Button</a>
		</td>

		<td>
			<center><a href="https://ifttt.com/products/do/button" target="\_blank"><img src="/images/Logos/do-button.png"></a></center>
		</td>

		<td>
			This is a very simple button created by IFTTT. It's literally just a button that you can program to do anything you want. In this case, we'll create two buttons--one to close the blinds, one to open them.
		</td>
	</tr>
</table>

And off we go.

<div class="numbers">
	<b>1</b>
</div>

### Download the Do app

You can download either the <a href="https://itunes.apple.com/us/app/do-button-by-ifttt/id905998610?mt=8" target="\_blank">iOS</a> or <a href="https://play.google.com/store/apps/details?id=com.ifttt.dobutton&hl=en" target="\_blank">Android</a> app on your mobile device. I have an iPhone, as you'll see in the screenshots below.

<div class="numbers">
	<b>2</b>
</div>

### Join the Maker channel

Launch the app and click the big plus sign at the top to add a new "recipe". Choose the Channels tab at the top and scroll down until you find the Maker channel (the first icon in the second row in the image below). For some reason when you use the search tool in the Do app, it doesn't find the channel, so you need to scroll down. Note that the location and look of the icon may change, but it'll still be called Maker.

<center><img src="/images/Echo-Blinds/IFTTT-Do/find-maker-channel.PNG" alt="Maker channel screenshot" style="width: 50%"></center>

<div class="numbers">
	<b>3</b>
</div>

### Create a new recipe

Once you're in the channel, click "Create a New Recipe."

Then select "Make a web request." You should see a screen like this:

<center><img src="/images/Echo-Blinds/IFTTT-Do/maker-interface.PNG" alt="Maker interface" style="width: 50%"></center>

These web requests are a powerful new way that IFTTT lets you make buttons that will basically let you do anything that can be sent over the internet in a web request. This is a super convenient feature for us since our Echo Blinds project is already operating through web requests. Check out <a href="http://pretty-dece.com/Echo-Blind-Openers-2/" target="\_blank">our earlier post</a> for a refresher on how it worked with the Amazon Echo. All we're doing now is replacing the Echo steps with the IFTTT Do Button to get the message into the Relay Server. The Arduino setup will see nothing different and will continue to poll the Relay Server until a new message arrives.

<center><img src="/images/Echo-Blinds/IFTTT-Do/data-flow.PNG" alt="Data flow"></center>

For this first version, we're creating two buttons. One to "open blinds" and one to "close blinds". For the next iteration we can build a toggle switch that can use just one button.

<div class="numbers">
	<b>4</b>
</div>

### Create the "open blinds" button

The messages that we sent to the <a href="https://github.com/TheConnMan/Node-Relay" target="\_blank">Relay Server</a> through Alexa have a specific structure that looks like a normal URL that the Arduino code translates into actions. That's all a "web request" is--just a URL. There are a couple of parts to the URL:

- The <b class="pink">Address</b> to your relay server (for example, ours is http://projects.theconnman.com:3000).
- The <b class="pink">API Key</b> (this is a secret key that you stored in your hidden <code>config.h</code> file called API_KEY) as described in step 5 of <a href="http://pretty-dece.com/Echo-Blind-Openers/" target="\_blank">this post</a>.
- The <b class="pink">Client ID</b>, which you also stored in the same hidden <code>config.h</code> file called DST_IP.

So to fill out the fields in the Do Button recipe, enter the following (replacing the pink words with the items discussed above):

#### Type a Recipe title...
<code>Open blinds</code>

#### URL
<code><b class="pink">Address</b>/api/put?apiKey=<b class="pink">API Key</b>&clientId=<b class="pink">Client ID</b>&payload={"open":true}</code>

#### Method
<code>GET</code>

The rest of the fields are optional, so we'll leave them blank.

TADA! You've got a new way to open the blinds! It should be noted that Alexa will still work to do the same thing, so you've just added a new way to open the blinds.

<div class="numbers">
	<b>5</b>
</div>

### Create the "close blinds" button
To make the close blinds button, you'll follow step 3 again, but this time you'll enter the following for the recipe:

#### Type a Recipe title...
<code>Close blinds</code>

#### URL
<code><b class="pink">Address</b>/api/put?apiKey=<b class="pink">API Key</b>&clientId=<b class="pink">Client ID</b>&payload={"open":false}</code>

#### Method
<code>GET</code>

Excellent. Now we can open and close our blinds again!

<div class="numbers">
	<b>6</b>
</div>

### Add Do Button widget to iPhone lock screen

For some extra convenience, you can also add a Do Button widget to your iPhone's lock screen for quick button access.

<center><img src="/images/Echo-Blinds/IFTTT-Do/swipe-screen.PNG" alt="Lock screen widget" style="width: 50%"></center>

To do so, first swipe down from the top of your phone, then swipe right to see all widgets. Scroll all the way to the bottom and click "Edit". Here you'll be able to add the Do Button widget. Now you can open and close your blinds even more quickly! Still without having to get up to twist the little rod manually. That's way too much work.

Enjoy your new Do Buttons!

-JMad
