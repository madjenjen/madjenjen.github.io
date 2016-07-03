---
layout: post
title: Bonsai Watering for Slackers - Part 1
image: /images/Bonsai-Water/Part1/Bonsai_Water_Schematic.png
---
For this project, TheConnMan and I combined two of our greatest loves:

* Mine: having plants, but not actually having to take care of plants.
* TheConnMan's: <a href="https://slack.com/" target="\_blank">Slack</a>, the chat tool. He's concerningly obsessed with it...

<!--more-->

First, the final product:

<center><img src="/images/Bonsai-Water/Part1/bonsaiwater.gif" /></center>

As before, similar projects exist out on the internet, because the internet is cool like that, so we took a look for some inspiration. Here are a couple of the projects that we ended up combining:

<table width = "100%">
  <tr>
    <td width = "36%"  style="border: 0px;">
      <a href="http://www.instructables.com/id/Automatically-water-your-small-indoor-plant-using-/" target="\_blank">Inspiration for Arduino shield design</a>
    </td>

    <td width = "62%"  style="border: 0px;">
      <a href="http://www.youtube.com/watch?v=WjbeQjXJnSk&t=2m34s" target="\_blank">Inspiration for mechanical watering design</a>
    </td>
  </tr>

  <tr>
    <td  style="border: 0px;">
      <center><a href="http://www.instructables.com/id/Automatically-water-your-small-indoor-plant-using-/" target="\_blank"><img src="http://cdn.instructables.com/F4O/536Z/HUBWU0WB/F4O536ZHUBWU0WB.LARGE.jpg"
      alt="Automatically water your small indoor plant using Arduino + Pump"></img></a></center>
    </td>

    <td  style="border: 0px;">
      <center><a href="http://www.youtube.com/watch?v=WjbeQjXJnSk&t=2m34s" target="\_blank"><img src="http://img.youtube.com/vi/WjbeQjXJnSk/0.jpg"
      alt="How to Bonsai - Automatic watering system for Apartment or Condo video"></img></a></center>
    </td>
  </tr>
</table>

The special sauce that we'll add to our project is an integration with the popular chat application Slack, so your system will let you know when it's watering your tree!

As always here are the additions to our <a href="http://pretty-dece.com/Build-Your-Toolbox/" target="\_blank">toolbox</a> for this particular project:

### List of Parts ###
<table>
	<tr>
		<th colspan="3">Electronic Components</th>
	</tr>

	<tr>
		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=7DU44Q4MEDBH2OOW" target="\_blank">ESP8266 Serial Wifi Wireless Transceiver Module</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td style="text-align: center;">
		<a href="https://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=18452119736f30a686debe59096439e2" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00O34AGSU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="ESP8266 Serial Wifi Wireless Transceiver Module" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			We used this module before in the <a href="http://pretty-dece.com/Echo-Blind-Openers/" target="\_blank">Echo Blinds</a> project, and as promised, we'll use it many more times. It allows the system to talk to the internet.
		</td>
	</tr>

	<tr>
		<td>
			<a  href="https://www.amazon.com/gp/product/B007XHZ25G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B007XHZ25G&linkCode=as2&tag=predec-20&linkId=16f7b124ab684defcefb32cff29bf8a4" target="\_blank">DC 12V Submersible Mini Pump</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B007XHZ25G" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td style="text-align: center;">
  		<a href="https://www.amazon.com/gp/product/B007XHZ25G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B007XHZ25G&linkCode=as2&tag=predec-20&linkId=5a6e7dde482ca6cc0cf7ca66d0e937f0" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B007XHZ25G&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B007XHZ25G" width="1" height="1" border="0" alt="DC 12V Submersible Mini Pump" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			The specific brand of motor doesn't matter so much, but make sure it's fully submersible in water. We used a <a  href="https://www.amazon.com/gp/product/B00FIL6BMW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00FIL6BMW&linkCode=as2&tag=predec-20&linkId=35b3f2234feda1901d2078ccb2d95b66" target="\_blank">different motor</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00FIL6BMW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> at first, but that one died after about a month of use, so trying this one out now.
		</td>
	</tr>

  <tr>
		<td>
      <a  href="https://www.amazon.com/gp/product/B008BHAOQO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008BHAOQO&linkCode=as2&tag=predec-20&linkId=3258d249474f1d2a8f66a582e5ffd168" target="\_blank">LM2596 DC-DC Buck Converter Step Down Module</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B008BHAOQO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B008BHAOQO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008BHAOQO&linkCode=as2&tag=predec-20&linkId=075fa7322bde177ea90210c0b5166d01" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B008BHAOQO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B008BHAOQO" width="1" height="1" border="0" alt="LM2596 DC-DC Buck Converter Step Down Module" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
      This project is a bit more complicated than the last because it requires us to use 3 different magnitudes of voltage. The motor requires 12 V, but the Arduino can't run on anything more than about 5-7 V. Our sensor will require 3 V. This little module allows us to take the 12V voltage from the outlet and step it down to 5V to power the Arduino.
		</td>
	</tr>

  <tr>
    <td>
      <a href="https://www.tindie.com/products/miceuz/i2c-soil-moisture-sensor/" target="\_blank">I2C Chirp! Soil Moisture Sensor</a>
    </td>

    <td style="text-align: center;">
      <a href="https://www.tindie.com/products/miceuz/i2c-soil-moisture-sensor/" target="\_blank"><img src="https://d3s5r33r268y59.cloudfront.net/4974/products/thumbs/2015-10-26T14:22:55.624Z-DSC01306.JPG.855x570_q85_pad_rcrop.jpg" alt="I2C Soil Moisture Sensor" width="100%"></img></a>
    </td>

    <td>
      A warning note on soil moisture sensors: we have yet to find one that won't corrode in a fairly short period of time. We first used a
      <a  href="https://www.amazon.com/gp/product/B00TMD43BS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00TMD43BS&linkCode=as2&tag=predec-20&linkId=2cebe5542f88d2b2b851e5d0e9842804" target="\_blank">soil resistivity-based sensor</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00TMD43BS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />, but it stopped working in about 2 weeks. We are now using the I2C sensor which measures the capacitance of the soil instead. It corroded in about a month, so it's still not suitable for full-time use. We now use the system only when going on vacation. Also, this sensor ships from Lithuania, so allow for about 2 weeks delivery time!
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00MMZ2UWM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MMZ2UWM&linkCode=as2&tag=predec-20&linkId=a7f644ff1a7772cf56d65013933cefc0" target="\_blank">Semiconductor Bipolar Transistor</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00MMZ2UWM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B00MMZ2UWM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MMZ2UWM&linkCode=as2&tag=predec-20&linkId=09595460723142ea76254b38dfce6cc0" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00MMZ2UWM&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00MMZ2UWM" width="1" height="1" border="0" alt="Semiconductor Bipolar Transistor" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      Here's a new toy to play with. Transistors are useful for many applications, and in this project we'll use it as a switch to allow current to flow to the motor only when we want it to. Remember how the motor needs 12 V to work? The Arduino outputs can only supply about 5 V, so the transistor will help us control the current coming directly from the wall socket. Learn a little bit more about the magic of transistors <a href="http://www.allaboutcircuits.com/textbook/semiconductors/chpt-4/transistor-switch-bjt/" target="\_blank">here</a>. About 4 transistors were harmed in the making of this project :(.
    </td>

  </tr>

  <tr>
    <th colspan="3">Mechanical System Parts</th>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00GJEJCSW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GJEJCSW&linkCode=as2&tag=predec-20&linkId=3ffcc20d1dc806d9b0f8218cb67bea9b" target="\_blank">12-inch Planter Bowl</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00GJEJCSW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B00GJEJCSW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GJEJCSW&linkCode=as2&tag=predec-20&linkId=b2976118b2138810ee465a75346064b7" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00GJEJCSW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00GJEJCSW" width="1" height="1" border="0" alt="12-inch Planter Bowl" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      For the base, we'll need a large basin of some kind. I ended up going to a local TJMaxx and picking out a kitchen mixing bowl and an aluminum sieve (see below) that fit together. This basin seems to be about the right dimension. Whatever you choose, make sure it won't leak water in any way.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B001U0O2UI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001U0O2UI&linkCode=as2&tag=predec-20&linkId=0ab461838918811bc7cb06f58ae092aa" target="\_blank">7-1/2" Stainless Steel Mesh Colander</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B001U0O2UI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B001U0O2UI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B001U0O2UI&linkCode=as2&tag=predec-20&linkId=03a07fddf59e459436bc42f552005e7d" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B001U0O2UI&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B001U0O2UI" width="1" height="1" border="0" alt="7-1/2\" Stainless Steel Mesh Colander" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      The most important thing here is to make sure the colander will fit in your basin when turned upside down. Also make sure it's made of a material that won't rust when under water for a long time.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B000FMWTVG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FMWTVG&linkCode=as2&tag=predec-20&linkId=3eda70c6daf6728d11c2ef711c39f46b" target="\_blank">5/16"ID, 1/2"OD Silicone Tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FMWTVG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B000FMWTVG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FMWTVG&linkCode=as2&tag=predec-20&linkId=ce02eab412901115d0c11f5539bcb7f9" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000FMWTVG&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FMWTVG" width="1" height="1" border="0" alt="5/16\"ID, 1/2\"OD Silicone Tubing" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      We'll need tubing with these dimensions that can withstand frequent water transfer. The exact brand or color doesn't matter in this case.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B006ZNP8AS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B006ZNP8AS&linkCode=as2&tag=predec-20&linkId=1352954bc6f99b5e91be43ca59e0e25d" target="\_blank">1/2" Sprinkler Converter with Two 1/4" Barb Outlets</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B006ZNP8AS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B006ZNP8AS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B006ZNP8AS&linkCode=as2&tag=predec-20&linkId=0f604e270b4ee6ca5fcb90de974615aa" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B006ZNP8AS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B006ZNP8AS" width="1" height="1" border="0" alt="1/2\" Sprinkler Converter with Two 1/4\" Barb Outlets" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      We'll use this little guy to split the larger tubing into smaller tubing to feed to the bonsai tree.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B000FJX5DU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJX5DU&linkCode=as2&tag=predec-20&linkId=333540dcaf4a353c12bbabab80ebb1d6" target="\_blank">Drip Irrigation 1/4" Tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJX5DU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B000FJX5DU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJX5DU&linkCode=as2&tag=predec-20&linkId=6d93306ef54afb31e03e930550f2c245" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000FJX5DU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJX5DU" width="1" height="1" border="0" alt="Drip Irrigation 1/4" Tubing" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      This is the tubing that will go directly to the tree. I've used the brand listed here, but found that it's very stiff and hard to maneuver, so may be worth taking a look at some <a  href="https://www.amazon.com/gp/product/B00WAXHKFI/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00WAXHKFI&linkCode=as2&tag=predec-20&linkId=46afa1b635b103cf2c8b633078e4063a" target="\_blank">PVC clear flexible tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00WAXHKFI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> instead.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B000FJYTC6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJYTC6&linkCode=as2&tag=predec-20&linkId=0a02b40d827f909e950c611d4ad2513a" target="\_blank">Drip Irrigation 1/4" Tubing Stakes</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJYTC6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B000FJYTC6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJYTC6&linkCode=as2&tag=predec-20&linkId=aab149232281694e7c0f63e83cc6d570" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000FJYTC6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJYTC6" width="1" height="1" border="0" alt="Drip Irrigation 1/4" Tubing Stakes" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      In my version of the project I broke an old green ruler in two to hold up the water tubes, but that may be pushing the limits of "pretty dece". If you want to be more legit, try these fancy stakes.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00E0NG6W4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00E0NG6W4&linkCode=as2&tag=predec-20&linkId=bc1e8235df714f37432665575cf94837" target="\_blank">16 lb Box of River Rocks</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00E0NG6W4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B00E0NG6W4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00E0NG6W4&linkCode=as2&tag=predec-20&linkId=9eb7a0f71fa19f28b7968c48c5b47648" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00E0NG6W4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00E0NG6W4" width="1" height="1" border="0" alt="16 lb Box of River Rocks" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      Rocks rock! Make sure to lift with your legs, not your back.
    </td>
  </tr>

  <tr>
    <th colspan="3">General Toolbox Additions</th>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00EXLRW5S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00EXLRW5S&linkCode=as2&tag=predec-20&linkId=f05c32eb8e7cbf8513455ad8046949f0" target="\_blank">Heat Shrink Tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00EXLRW5S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B00EXLRW5S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00EXLRW5S&linkCode=as2&tag=predec-20&linkId=96b138d6cff19f41bcdf1b1c4ed25cf5" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00EXLRW5S&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00EXLRW5S" width="1" height="1" border="0" alt="Heat Shrink Tubing" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      We'll need these puppies to reinforce some solder joins that'll be submersed in water. In general, we'll need them when joining two wires together.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00GVMFV6O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GVMFV6O&linkCode=as2&tag=predec-20&linkId=9275a12d4b8ecf49f4b393468af45341" target="\_blank">Mini Heat Gun</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00GVMFV6O" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B00GVMFV6O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GVMFV6O&linkCode=as2&tag=predec-20&linkId=a1245645fa7e260d6c735d71fd44616a" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00GVMFV6O&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00GVMFV6O" width="1" height="1" border="0" alt="Mini Heat Gun" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      To shrink the shrink tubing, we'll need a heat gun. Hair dryers won't work. I tried.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B003E48ERU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003E48ERU&linkCode=as2&tag=predec-20&linkId=50c976b144445d3d6e58cd6402e16109" target="\_blank">Desoldering Wick</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B003E48ERU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B003E48ERU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003E48ERU&linkCode=as2&tag=predec-20&linkId=946833d449c596baf502ce2ce74c1cff" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B003E48ERU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B003E48ERU" width="1" height="1" border="0" alt="Desoldering Wick" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      This project was particularly frustrating with the amount of soldering, unsoldering, and resoldering that happened, so I gave in and got some wick to get rid of extra solder blobs. I have a feeling it'll come in handy again.
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B008OC3VMU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008OC3VMU&linkCode=as2&tag=predec-20&linkId=1ec8c10e0b7b28815059a60fa3b50a78" target="\_blank">Rosin Soldering Flux Pen</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B008OC3VMU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td style="text-align: center;">
      <a href="https://www.amazon.com/gp/product/B008OC3VMU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008OC3VMU&linkCode=as2&tag=predec-20&linkId=4617fc8959d9cfd8a4a4b59fee36287f" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B008OC3VMU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B008OC3VMU" width="1" height="1" border="0" alt="Rosin Soldering Flux Pen" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      Flux can also help with cleaner soldering.
    </td>
  </tr>

</table>

All right! Now that we're stocked up, let's get to down to business! First, we'll test each individual part to make sure they're working as intended and then put it all together.

<div class="numbers">
	<b>1</b>
</div>

### Test the ESP8266 ###

We used this little guy in the <a href="http://pretty-dece.com/Echo-Blind-Openers/" target="\_blank">Echo Blind Openers</a> project, so repeat steps 2 and 3 from that post to make sure he's working.

<div class="numbers">
	<b>2</b>
</div>

### Test the LM2596 Step Down Module ###

Next, try out the step down module. Set up the breadboard as shown below and plug the jack into a power supply plugged directly into a wall socket. You can turn the little gold knob on top of blue box using a small flat-head screw driver to vary the output voltage. Use a <a rel="nofollow" href="http://www.amazon.com/gp/product/B00KHP6EIK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00KHP6EIK&linkCode=as2&tag=predec-20&linkId=373ZXL2NC3XP4SKV" target="\_blank">multimeter</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00KHP6EIK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> to measure the output voltage at the bottom of the breadboard. We want to get it to about 5 V.

<center><img src="/images/Bonsai-Water/Part1/RioRand_LM2596_Testing_bb.png" alt="LM2596 testing breadboard setup"></img></center>

<div class="numbers">
	<b>3</b>
</div>

### Test the Water Pump ###

Ok, now let's try out the water pump. **Please note:** you **must** run the pump under water. It may get damaged if you run it in plain air. Go ahead and plug the jack right into a wall socket power source to make sure the pump runs normally at full force.

<center><img src="/images/Bonsai-Water/Part1/Water_Pump_Testing_bb.png" alt="LM2596 testing breadboard setup"></img></center>

<div class="numbers">
	<b>4</b>
</div>

### Test the Transistor ###

Ok, now the fun part. Let's try out the transistor. Set up the circuit as shown below and run the code underneath it.

<center><img src="/images/Bonsai-Water/Part1/Transistor_Testing_bb.png" alt="LM2596 testing breadboard setup"></img></center>

What should happen is that the Arduino powers normally (touch the bottom of it after about a minute in this configuration to make sure it's not heating up too much--if it is heating up too much, you may need to dial down the output voltage on the step-down module). Then the motor should turn on at full speed for 10 seconds, shut off for 10 seconds, then turn on at about half-speed for 10 seconds. The LED on the Arduino should also turn on when the motor is on.

<p class="highlight-trigger" highlight-file="file-bonsaiwater_transistor_testing-ino" highlight-lines="1,12,15,20,23">Here's what's happening with the code. We're using the
<a href="https://www.arduino.cc/en/Tutorial/PWM" target="\_blank">PWM</a>
feature of one of the analog pins on the Arduino to modulate how frequently the transistor gets power. When we supply the transistor base with power, that closes the circuit to allow the motor to run. The lower the frequency, the slower the motor will run. This feature will come in handy when we calibrate the system later to make sure the water isn't overshooting your tree.</p>

>Reminder: roll your mouse over the paragraph above to highlight the related lines of code in the snippet below.

<script src="https://gist.github.com/madjenjen/c8abf90d2c33705828b5464b8272513f.js?file=bonsaiwater_transistor_testing.ino"></script>

<div class="numbers">
	<b>5</b>
</div>

### Test the Soil Moisture Sensor ###

Lastly, we'll need to test the moisture sensor. Go ahead and hook it up, then stick it in a glass of water.

<center><img src="/images/Bonsai-Water/Part1/Chirp_Sensor_Testing_bb.png" alt="LM2596 testing breadboard setup"></img></center>

Run the code below and wait about 30 seconds. Nothing should be happening.

Now take the sensor out of the water and let it be in plain air. After a few seconds the Arduino yellow LED should turn on. That means the sensor has triggered an output! Basically, when the sensor is in water, it thinks the "soil" is moist enough. When it's in air, it's way too dry, so it triggers a response! You can also track the Serial Monitor where we  print the sensor reading every 10 seconds.

<script src="https://gist.github.com/madjenjen/ab89543124fb867c176072f5f4c609b8.js"></script>

<div class="numbers">
	<b>6</b>
</div>

### Build the prototype ###

Now we're ready to put it all together!

Here's the breadboard view:
<center><img src="/images/Bonsai-Water/Part1/Bonsai_Water_bb.png" alt="LM2596 testing breadboard setup"></img></center>

And the schematic:
<center><img width="50%" src="/images/Bonsai-Water/Part1/Bonsai_Water_Schematic.png" alt="LM2596 testing breadboard setup"></img></center>

Side-note, it's my goal for the next project to learn more about wire management and circuit design. These are starting to look pretty gnarly. Comment below if you know of any good learning resources!

<div class="numbers">
	<b>7</b>
</div>

### Run the Code ###

Here's the full code. Try it out for now, and in the next blog installment we'll walk through how to set up a Slack channel to start receiving messages from your tree! For now, try lifting the sensor in and out of a glass of water to activate the motor (make sure it's also in water).

<script src="https://gist.github.com/madjenjen/48b7e66ce4761c4f6cb9d33305e46b53.js"></script>

### Extra Bonus ###
The reason this project took so long is I had to learn a lot of new stuff for it. And even after I had figured out transistors (after frying 4 of them), step-down modules, analog modulation, and I2C protocols and finally got the thing to work, it turned out that Fritzing didn't have the parts I needed to build the pretty circuit pictures for the blog!

Soooo, I present to you my first ever open source project contributions:

* <a href="https://github.com/fritzing/fritzing-parts/pull/50" target="\_blank">LM2596 DC-DC Buck Converter Step Down Module pull request</a>
* <a href="https://github.com/fritzing/fritzing-parts/pull/49" target="\_blank">I2C Chirp! Soil Moisture Sensor pull request</a>

The pictures you see in the blog above for the Chirp! Moisture Sensor and the Step Down Module were slapped together by yours truly, and are now part of the official Fritzing core parts library!

If you fancy making yourself some parts, here's a good set of instructions:
<a href="https://learn.sparkfun.com/tutorials/make-your-own-fritzing-parts" target="\_blank">Make Your Own Fritzing Parts Tutorial</a>.

Happy automating and see you next time for a deep-dive into Slacking!

\-JMad
