---
layout: post
title: Bonsai Watering for Slackers - Part 2
image: /images/Logos/Slack.png
---
This is the second installment of **Bonsai Watering for Slackers** where we'll cover the software involved in giving our bonsai tree a voice through <a href="https://slack.com" target="\_blank">Slack</a>. This way our bonsai can let us know when it's getting watered with a nice message like this:

<!--more-->

<center><img src="/images/Bonsai-Water/Part2/bonsai-water-slack-messages.PNG" alt="sample Slack messages"></center>

The full source code for what we'll cover today can be found at <a href="https://github.com/TheConnMan/Slack-Relay" target="\_blank">https://github.com/TheConnMan/Slack-Relay</a>.

### Toolbox Additions
As always, we're going to add some more tools to our toolbox:

<table>
	<tr>
		<th colspan="3">Inventory</th>
	</tr>

	<tr>
		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=7DU44Q4MEDBH2OOW" target="\_blank">ESP8266 Serial Wifi Wireless Transceiver Module</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=IXJQFSMSWMDORJPS" target="\_blank"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00O34AGSU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=predec-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="ESP8266 Serial Wifi Wireless Transceiver Module" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			As before, we'll use the ESP8266 module to connect our hardware to the internet.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://api.slack.com/custom-integrations" target="\_blank">Slack API</a>
		</td>

		<td>
			<center><a href="https://slack.com" target="\_blank"><img src="/images/Logos/Slack.png" alt="Slack logo"></a></center>
		</td>

		<td>
			Slack is a chat application that can do a lot more than track your chats. It has a robust <a href="https://en.wikipedia.org/wiki/Application_programming_interface" target="\_blank">API</a> that can be used to connect to the application. We'll use the Slack API to relay a message from our bonsai watering system right into our chat channel.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://nodejs.org/en/" target="\_blank">Node.js</a>
		</td>

		<td>
			<a href="https://nodejs.org/en/" target="\_blank"><img src="/images/Logos/nodejs-icon.png" alt="NodeJS logo"></a>
		</td>

		<td>
			Node is a lightweight server-side JavaScript framework which allows you to build small, fast applications.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://www.docker.com/" target="\_blank">Docker (Optional)</a>
		</td>

		<td>
			<center><a href="https://www.docker.com/" target="\_blank"><img src="/images/Logos/docker.png" alt="Docker logo"></a></center>
		</td>

		<td>
			Docker is a way to create containers around software projects making it easier to run projects in different environments. We use it here to make our relay server extremely portable and easy to use. We use it for convenience, but it's not required.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://aws.amazon.com/" target="\_blank">AWS (Amazon Web Services) (Optional)</a>
		</td>

		<td>
			<center><a href="https://aws.amazon.com//" target="\_blank"><img src="/images/Logos/aws.png" alt="AWS logo"></a></center>
		</td>

		<td>
			We use AWS to host the virtual machine (VM) where we run Slack Relay in a Docker container.
		</td>
	</tr>

</table>

### Motivation
An astute reader might notice that our bonsai is already connected to the Internet, so what prevents us from just using the Slack API directly, saving us all this custom development? Unfortunately the ESP8266 and Arduino don't have enough horsepower to handle the encryption/decryption required for an <a href="https://en.wikipedia.org/wiki/HTTPS" target="\_blank">HTTPS</a> connection. The Slack API requires HTTPS. This means we can't directly use the Slack API and also rules out using an AWS Lambda function because those are HTTPS only as well (see our <a href="http://pretty-dece.com/Echo-Blind-Openers-2/" target="\_blank">previous post</a> for more on Lambda functions). To cope, we'll write a small relay server that can take an HTTP message from the ESP8266 and send it to the Slack API using HTTPS.


For the Echo Blinds project, we wrote a whole <a href="https://grails.org/" target="\_blank">Grails application</a> for the relay server. We used an embedded database to store the objects, used Grails controllers to create the REST endpoints, and Grails views to make an API tester. This approach worked (and can be found <a href="https://github.com/TheConnMan/Message-Relay" target="\_blank">here</a> if you're interested), but it was just too heavy. There's no need for a full application server and a <a href="https://jenkins.io/" target="\_blank">Jenkins</a> instance to build the project and 750MB of RAM just to sit around for 99.9% of the day. The bottom line is that we're cheap, we didn't want to pay for that instance, so we built the Slack relay as a super simple Node.js projects.

Let's begin by setting up our environment.

<div class="numbers">
	<b>1</b>
</div>

### Setup AWS.

We're going to need some setup before we can run **Slack Relay**, because **Slack Relay** runs best in a Docker container. AWS has a nice free tier you can use to run a small VM for free for a year. You can setup an AWS account and an EC2 region by following <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html" target="\_blank">this guide</a>. A few notes for when you setup are:

- You will need a key pair to connect to your instance. The key pair will be generated when you set up EC2.
- Your security group needs to be open on port 80 to your home IP (it can be open to the world for testing, but it is recommended to only open it to your IP so no one else can access it)

Once you have completed the above guide go to <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html" target="\_blank">this guide</a> to set up your EC2 instance. t2.micro instance types can be used for free and are large enough for running our Docker container. When selecting an AMI for your VM choose **Ubuntu 14.04**.

<div class="numbers">
	<b>2</b>
</div>

### Setup Docker.
Now that you have an EC2 instance, we'll need to connect to it to set up Docker. <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html" target="\_blank">SSH into your EC2 instance</a>. For Ubuntu you can connect by running `ssh -i /path/to/mykey.pem ubuntu@ec2-my-ip.compute-1.amazonaws.com` in your favorite terminal application. Once you have connected, run the following to install Docker: ```bash sudo su curl -sSL https://get.docker.com/ | sh```

And that's it, you've got Docker installed. To verify run `docker run hello-world`. You'll see the `hello-world` image get pulled down and echo a little "Hello World" message to you.

<div class="numbers">
	<b>3</b>
</div>

### Generate the Slack Webhook.
We'll need a Slack Webhook for our relay server to use to send data to Slack. You can set one up for your account by using the <a href="https://slack.com/apps/A0F7XDUAZ-incoming-webhooks" target="\_blank">Incoming Webhook</a> Slack integration. You can add a fancy icon and pick a default channel for your webhook. We set up a special channel called "#bonsai-water" to track the incoming messaging. Hold onto that webhook URL, we'll use it in the next section.

<div class="numbers">
	<b>4</b>
</div>

### Run the Slack Relay code.

We've uploaded a completed version of <a href="https://hub.docker.com/r/theconnman/slack-relay/" target="\_blank">Node Relay to Docker Hub</a> so you can pull it down and use it without touching a single piece of code after you've completed steps 1 and 2. Below is a single line you can run to have your own Node Relay server:

```bash
docker run -d -p 80:3000 -e API_KEY=[replace with your API key] -e HOOK_URL=[replace with your webhook url] theconnman/slack-relay
```

After that just fire up a browser and go to http://localhost (or http://ec2-my-ip.compute-1.amazonaws.com). We've even made a handy test page for you with which to test your webhook!

<div class="numbers">
	<b>5</b>
</div>

### Optional: Read the source code.

This step is optional. Just running the command above will get you going. However, if you'd like to know more, read on.

The Node app itself is very small. The entire logic of the app is captured in the code snippet below.

There's only one endpoint (the one the Arduino will make a request to) and just a little parameter parsing to create our Slack payload. You'll notice in <b class="highlight-trigger" highlight-file="file-index-js" highlight-lines="18-20">lines 18-20</b> that we check for a secret API key (passed in as an environment variable--you'll see this in step 5). This is because our endpoint is a public endpoint, so we want at least a small measure of security to make sure outside sources can't post to our Slack account.

We use a publically-available node module called <a href="https://www.npmjs.com/package/node-slack" target="\_blank">Node Slack</a> for our Slack integration (no need to rebuild a Slack posting mechanism when someone else has already written one). You'll notice we initialize the Node Slack object in <b class="highlight-trigger" highlight-file="file-index-js" highlight-lines="5">line 5</b> with a Slack Webhook environment variable. We'll explain a bit later where this environment variable comes from. We also check to make sure there's text in the message and check for a couple of optional parameters before sending the payload to Node Slack.

<script src="https://gist.github.com/TheConnMan/af69783075a5575441f4d5d8999ecb21.js?file=index.js"></script>

And that's it. A single GET request endpoint with a little bit of business logic to build a Slack payload. Seems easy enough. Let's now look at how to operationalize it.

<div class="numbers">
	<b>6</b>
</div>

### Optional: Dockerize your Slack Relay.
Last up is to actually run the project. You can run the project as a native Node app if you want, but we chose to run the app within a Docker container. Below is our full Dockerfile:

<script src="https://gist.github.com/TheConnMan/af69783075a5575441f4d5d8999ecb21.js?file=Dockerfile"></script>

The most important part of the above file are <b class="highlight-trigger" highlight-file="file-dockerfile" highlight-lines="16-17">lines 16-17</b>. These lines are the environment variable declarations for the API key and webhook URL. The Dockerfile only contains dummy data, but this is where you can add those variables into the container.

That's all we've got for you! This model of a small Node app wrapped in a lightweight Docker container has worked very well for me so far, it's the easiest way we've found to run a simple web server with minimal environment setup. You'll see a couple of repos on my GitHub profile which follow the same scheme. Thanks for following along! Next time JMad will post about how to bring the pieces of the Bonsai Water project all together.

\- TheConnMan
