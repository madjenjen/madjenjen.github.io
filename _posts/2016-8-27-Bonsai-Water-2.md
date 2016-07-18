---
layout: post
title: Bonsai Watering for Slackers - Part 2
image: /images/Bonsai-Water/Part1/Bonsai_Water_Schematic.png
---
This is the second installment of **Bonsai Watering for Slackers** where we'll cover the software involved in giving our bonsai tree a voice through <a href="https://slack.com" target="\_blank">Slack</a>. This is so our bonsai can let us know when it's getting watered with a nice message. Full source for Node Relay can be found at <a href="https://github.com/TheConnMan/Slack-Relay" target="\_blank">https://github.com/TheConnMan/Slack-Relay</a>.

<!--more-->

### Toolbox Additions
As always, we're going to add some more tools to our toolbox:

<table>
	<tr>
		<th colspan="3">Inventory</th>
	</tr>

	<tr>
		<td>
			<a href="https://api.slack.com/custom-integrations" target="\_blank">Slack API</a>
		</td>

		<td>
			<center><a href="https://slack.com" target="\_blank"><img src="/images/Logos/Slack.png"></img></a></center>
		</td>

		<td>
			We'll use the Slack API to relay an incoming message into our Slack account.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://www.docker.com/" target="\_blank">Docker (Optional)</a>
		</td>

		<td>
			<center><a href="https://www.docker.com/" target="\_blank"><img src="/images/Logos/docker.png"></img></a></center>
		</td>

		<td>
			Docker is used to make our relay server extremely portable and easy to use. It is just used for convenience.
		</td>
	</tr>

	<tr>
		<td>
			<a href="https://aws.amazon.com/" target="\_blank">AWS (Amazon Web Services) (Optional)</a>
		</td>

		<td>
			<center><a href="https://aws.amazon.com//" target="\_blank"><img src="/images/Logos/aws.png"></img></a></center>
		</td>

		<td>
			AWS is used to host our virtual machine where we run **Slack Relay** in a Docker container.
		</td>
	</tr>
</table>

### Motivation
An astute reader might notice that our bonsai is already connected to the Internet, so what prevents us from just using the Slack API directly, saving us all this custom dev? Unfortunately the ESP8266 and Arduino don't have enough horsepower to handle <a href="https://en.wikipedia.org/wiki/HTTPS" target="\_blank">HTTPS</a> connections. All that encryption/decryption is just a bit much for them. This means we can't directly use the Slack API (it's HTTPS only) and also rules out using an AWS Lambda function because those are HTTPS only as well. To cope we'll write a small HTTP relay server which takes a message and sends it to the Slack API using HTTPS.

We originally used a full <a href="https://grails.org/" target="\_blank">Grails application</a> for the relay server. We used an embedded database to store the objects, used Grails controllers to create the REST endpoints, and Grails views to make an API tester. This worked (and can be found <a href="https://github.com/TheConnMan/Message-Relay" target="\_blank">here</a> if you're interested), but it was just so _heavy_. There's no need for a full application server and a Jenkins instance to build the project and 750MB of RAM just to sit around for 99.9% of the day. The bottom line is that we're cheap, we didn't want to pay for that instance, so we rebuilt message relay and Slack relay as two super simple Node.js projects. We'll cover the refactoring of Node Relay in another post, so for now we'll take a look at Slack Relay.

### Setup
#### AWS
We're going to need some setup before we get into looking at and running **Slack Relay**. This is because **Slack Relay** runs best in a Docker container. We use AWS to host the Docker container and they have a nice free tier you can use to run a small VM for free for a year. You can setup an AWS account and an EC2 region by following <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html" target="\_blank">this guide</a>. A few notes for when you setup are:
- You will need a key pair to connect to your instance
- Your security group needs to be open on port 80 to your home IP (it can be open to the world for testing, but it is recommended to only open it to your IP so no one else can access it)

Once you have completed the above guide go to <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html" target="\_blank">this guide</a> to set up your EC2 instance. t2.micro instance types can be used for free tier and is large enough for running our Docker container. When selecting an AMI for your VM choose **Ubuntu 14.04**.

#### Docker
Now that you have an EC2 instance we'll need to connect to it to set up Docker. <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html" target="\_blank">SSH into your EC2 instance</a>. For Ubuntu you can connect by running `ssh -i /path/to/mykey.pem ubuntu@ec2-my-ip.compute-1.amazonaws.com`. Once you have connected run the following to install Docker:
```bash
sudo su
curl -sSL https://get.docker.com/ | sh
```

And that's it, you've got Docker installed. To verify run `docker run hello-world`. You'll see the `hello-world` image get pulled down and echo a little "Hello World" message to you. Now we're ready to dive into **Slack Relay**.

### Slack Relay
The Node app itself is very small. The entire logic of the app is captured in the code snipped below:

<script src="https://gist.github.com/TheConnMan/af69783075a5575441f4d5d8999ecb21.js?file=index.js"></script>

There's only one endpoint (the one the Arduino will make a request to) and just a little parameter parsing to create our Slack payload. You'll notice in <b class="highlight-trigger" highlight-file="file-index-js" highlight-lines="10-12">lines 18-20</b> that we check for a secret API key (passed in as an environment variable). This is because our endpoint is a public endpoint, so we want at least a small measure of security to make sure outside sources can't post to our Slack account.

We also check to make sure there's text in the message and check for a couple optional parameters before sending the payload to <a href="https://www.npmjs.com/package/node-slack" target="\_blank">Node Slack</a> as our Slack integration (no need to rebuild a Slack posting mechanism when someone else has already written one). You'll notice we initialize the Node Slack object in <b class="highlight-trigger" highlight-file="file-index-js" highlight-lines="5">line 5</b> with a Slack Webhook environment variable. Where this environment variable comes from will be explained a little later.

And that's it. A single GET request endpoint with a little bit of business logic to build a Slack payload. Seems easy enough. Let's now look at how to operationalize it.

### Slack Webhook Generation
We'll need a Slack Webhook for our relay server to use to send data to Slack. You can set one up for your account by using the <a href="https://slack.com/apps/A0F7XDUAZ-incoming-webhooks" target="\_blank">Incoming Webhook</a> Slack integration. You can add a fancy icon and pick a default channel for your webhook. Hold onto that webhook URL, we'll use it in the next section.

### Dockerizing Slack Relay
Last up is to actually run the project. You can run the project as a native Node app if you want, but we chose to run the app within a Docker container because we have a Docker host which we run multiple projects on (see _cheap_ above). Below is my full Dockerfile:

<script src="https://gist.github.com/TheConnMan/af69783075a5575441f4d5d8999ecb21.js?file=Dockerfile"></script>

The most important part of the above file are <b class="highlight-trigger" highlight-file="file-dockerfile" highlight-lines="16-17">lines 16-17</b>. These lines are the environment variable declarations for the API key and webhook URL. The Dockerfile only contains dummy data, but this is where you can add those variables into the container.

We've also uploaded <a href="https://hub.docker.com/r/theconnman/slack-relay/" target="\_blank">Node Relay to Docker Hub</a> so you can pull it down and use it without touching a single piece of code. Below is a single line you can run to have your own Node Relay server (assuming you've got Docker installed using the above steps):

```bash
docker run -d -p 80:3000 -e API_KEY=[replace with your API key] -e HOOK_URL=[replace with your webhook url] theconnman/slack-relay
```

After that just fire up a browser and go to http://localhost (or http://ec2-my-ip.compute-1.amazonaws.com). We've even made a handy test page for you to test your webhook with!

That's all we've got for you! This model of a small Node app wrapped in a lightweight Docker container has worked very well for me so far, it's the easiest way we've found to run a simple web server with minimal environment setup. You'll see a couple repos on my GitHub profile which follow the same scheme. Thanks for following along!

\- TheConnMan
