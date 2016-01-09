---
layout: post
title: Echo Blind Openers - Part 2
---
Hey everyone, I'm [TheConnMan](http://theconnman.com) and I'll be writing this post on building the Internet of Things (IoT) connective tissue to bridge the gap between Alexa and the Arduino. In other words: **how do we make everything talk to each other**. Our main goal is to get messages from a user (in the form of voice commands) to the Arduino. Let's see how it's done.

<!--more-->

### Inventory
Before we get started, let's take an inventory of the tools at our disposal:

- **Alexa** - Can use custom [Alexa Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide) to interact with users and execute [AWS Lambda functions](https://aws.amazon.com/lambda/)
- **AWS Lambda Functions** - Small snippets of code which are executed when a user interacts with **Alexa**
- **ESP8266 Serial Wifi Chip** - Chip used to connect the Arduino to the internet
- **Custom Middleware** - Anything we need to build to bridge the gap

Let's first take a look at Alexa Skills.

### Alexa Skill
**Alexa Skills** are a way for developers to add custom functionality to their Amazon Echos. I was surprised how good the Alexa API was and how easy it was to build on. I thought that Alexa would perform speech recognition and hand the developer a bag of words, meaning I would be responsible for interpreting the meaning of them. I am not a linguistics expert and was not looking forward to enumerating the many ways someone could as for the blinds to be opened. Even opening the blinds is fairly straightforward compared to some other commands. Just think of how many ways there are to confirm a command (e.g. OK, yes, affirmative, of course, etc).

Instead of a bag of words I (as the developer) am able to define many example utterances and pull variables out of them. Alexa will interpolate these examples together so if a user says a phrase which is a mix of a couple examples it will still be able to interpret the command. A few examples of these utterances are below:

<script src="https://gist.github.com/TheConnMan/6b7bbd6de7293dccdbb8.js"></script>

The skill created for Echo Blinds interprets the command, constructs a message of either opening or closing the blinds, then sends it to the message destination by making a [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) call. The full skill can be found [here](https://github.com/TheConnMan/Home-Automation).

At this point, an astute reader may ask:

> Could we create a Lambda function to send a message directly to the ESP8266 WiFi chip? They're both connected to the internet...

This question leads us to our next section: **networking**.

### Networking
The main issue we have is that the snippets of code we're going to execute from Alexa commands are part of the **internet** while the Arduino we want to talk to is part of an **intranet**. This may be a distinction you've never heard of before and if you want a good, high level explanation check out this [SuperUser post](http://superuser.com/questions/135164/whats-the-difference-between-intranet-extranet-and-internet) about the difference. In short, the internet is publicly accessible, while an intranet is a set of machines which are the only ones who can talk to each other. Intranets can often access the internet as well, but machines outside the intranet can not access inside.

In our setup the Arduino is on an intranet (our home WiFi network) and Lambda code executes in the internet, so the root problem we have with the Arduino and Alexa is **the Lambda code can't communicate directly with the Arduino**. This means we need a custom middleware component.

### Relay Server
So Alexa can't send a message directly to the Arduino, but Alexa can send a message to a proxy message server. The Arduino can reach out from the intranet, so it can ask the message server every few seconds if it has any messages.

This means we need to build a very simple relay server which needs to accept messages from Alexa, store them, then pass those messages along to the Arduino when the Arduino requests any messages for it. The solution we built is [Message Relay](https://github.com/TheConnMan/Message-Relay), a very simple [Grails](https://grails.org/) application which does just that. We host this small application on [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) and make it publicly accessible so Alexa and the Arduino can both access it.

### Putting It All Together
So now that we've explored all the individual components let's put it all together.

[Diagram Here]

Getting a message from one place to another is definitely non-trival. Communication between devices is the fundamental difficulty when working with IoT. Since building this project I have discovered a few things which could help if I was to rebuild this architecture.

First, I learned about the [Amazon Echo Phillips Hue bridge](https://github.com/armzilla/amazon-echo-ha-bridge). This project emulates a [Phillips Hue](http://www2.meethue.com/) (internet connect lights) bridge which allows the Amazon Echo to communicate within your home WiFi network. This could be used to communicate directly with the Arduino without use of the relay server.

The second interesting service is AWS's [IoT service](https://aws.amazon.com/iot/). This service is built to be an IoT communication system so all your IoT devices can talk with each other through a single medium. For two devices it might not make sense, but if many devices need to communicate with each other it's definitely worth a look.

Thanks for reading about the IoT glue used to make everything talk to each other, look out for the final post discussing customization of our project to make it work for you!

\- TheConnMan
