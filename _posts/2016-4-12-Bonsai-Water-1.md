---
layout: post
title: Bonsai Watering for Slackers
image: /images/One_Color_Logo.png
---
For this project, TheConnMan and I combined two of our greatest loves:

* Mine: having plants, but not actually having to take care of plants.
* TheConnMan's: Slack, the chat tool. He's eerily obsessed with it...

<!--more-->

As before, similar projects exist out on the internet, because the internet is cool like that, so we took a look for some inspiration. Here are a couple of the projects that we ended up combining:

<table width = "100%">
  <tr>
    <td width = "36%">
      <a href="http://www.instructables.com/id/Automatically-water-your-small-indoor-plant-using-/" target="\_blank">Inspiration for Arduino shield design</a>
    </td>

    <td width = "62%">
      <a href="http://www.youtube.com/watch?v=WjbeQjXJnSk&t=2m34s" target="\_blank">Inspiration for mechanical watering design</a>
    </td>
  </tr>

  <tr>
    <td>
      <center><a href="http://www.instructables.com/id/Automatically-water-your-small-indoor-plant-using-/" target="\_blank"><img src="http://cdn.instructables.com/F4O/536Z/HUBWU0WB/F4O536ZHUBWU0WB.LARGE.jpg"
      alt="Automatically water your small indoor plant using Arduino + Pump"></img></a></center>
    </td>

    <td>
      <center><a href="http://www.youtube.com/watch?v=WjbeQjXJnSk&t=2m34s" target="\_blank"><img src="http://img.youtube.com/vi/WjbeQjXJnSk/0.jpg"
      alt="How to Bonsai - Automatic watering system for Apartment or Condo video"></img></a></center>
    </td>
  </tr>
</table>

The special sauce that we'll add to our project is an integration with the popular chat application Slack, so your system will let you know when it's watering the tree!

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

		<td>
			<a rel="nofollow" href="http://www.amazon.com/gp/product/B00O34AGSU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00O34AGSU&linkCode=as2&tag=predec-20&linkId=IXJQFSMSWMDORJPS" target="\_blank"><img border="0" src="http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00O34AGSU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=predec-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=as2&o=1&a=B00O34AGSU" width="1" height="1" border="0" alt="ESP8266 Serial Wifi Wireless Transceiver Module" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
			We used this module before in the <a href="http://pretty-dece.com/Echo-Blind-Openers/" target="\_blank">Echo Blinds</a> project, and as promised, we'll use it many more times. It allows the system to talk to the internet.
		</td>
	</tr>

	<tr>
		<td>
			<a  href="https://www.amazon.com/gp/product/B007XHZ25G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B007XHZ25G&linkCode=as2&tag=predec-20&linkId=16f7b124ab684defcefb32cff29bf8a4" target="\_blank">DC 12V Submersible Mini Pump</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B007XHZ25G" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
		</td>

		<td>
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

		<td>
      <a href="https://www.amazon.com/gp/product/B008BHAOQO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008BHAOQO&linkCode=as2&tag=predec-20&linkId=075fa7322bde177ea90210c0b5166d01" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B008BHAOQO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B008BHAOQO" width="1" height="1" border="0" alt="LM2596 DC-DC Buck Converter Step Down Module" style="border:none !important; margin:0px !important;" />
		</td>

		<td>

		</td>
	</tr>

  <tr>
    <td>
      <a href="https://www.tindie.com/products/miceuz/i2c-soil-moisture-sensor/" target="\_blank">I2C Soil Moisture Sensor</a>
    </td>

    <td>
      <a href="https://www.tindie.com/products/miceuz/i2c-soil-moisture-sensor/" target="\_blank"><img src="https://d3s5r33r268y59.cloudfront.net/4974/products/thumbs/2015-10-26T14:22:55.624Z-DSC01306.JPG.855x570_q85_pad_rcrop.jpg" alt="I2C Soil Moisture Sensor"></img></a>
    </td>

    <td>
      <a  href="https://www.amazon.com/gp/product/B00TMD43BS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00TMD43BS&linkCode=as2&tag=predec-20&linkId=2cebe5542f88d2b2b851e5d0e9842804" target="\_blank">soil resistivity-based sensor</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00TMD43BS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00MMZ2UWM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MMZ2UWM&linkCode=as2&tag=predec-20&linkId=a7f644ff1a7772cf56d65013933cefc0" target="\_blank">Semiconductor Bipolar Transistor</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00MMZ2UWM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B00MMZ2UWM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00MMZ2UWM&linkCode=as2&tag=predec-20&linkId=09595460723142ea76254b38dfce6cc0" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00MMZ2UWM&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00MMZ2UWM" width="1" height="1" border="0" alt="Semiconductor Bipolar Transistor" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>

  </tr>

  <tr>
    <th colspan="3">Mechanical System Parts</th>
  </tr>

  <tr>
    <td>
      Bowl
    </td>

    <td>

    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      Mesh bowl
    </td>

    <td>

    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      1/2" PVC
    </td>

    <td>

    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B000E62TCC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000E62TCC&linkCode=as2&tag=predec-20&linkId=dd353e0355223f82a4943f7756ac27b9" target="\_blank">Food Grade Vinyl Tubing 5/16 ID - 7/16 OD</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000E62TCC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B000E62TCC/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000E62TCC&linkCode=as2&tag=predec-20&linkId=286ab00e8a8cbc83d72fd66bf5bc7439" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000E62TCC&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000E62TCC" width="1" height="1" border="0" alt="Food Grade Vinyl Tubing 5/16 ID - 7/16 OD" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B000FJX5DU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJX5DU&linkCode=as2&tag=predec-20&linkId=333540dcaf4a353c12bbabab80ebb1d6" target="\_blank">Drip Irrigation 1/4" Tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJX5DU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B000FJX5DU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJX5DU&linkCode=as2&tag=predec-20&linkId=6d93306ef54afb31e03e930550f2c245" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000FJX5DU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJX5DU" width="1" height="1" border="0" alt="Drip Irrigation 1/4" Tubing" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B000FJYTC6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJYTC6&linkCode=as2&tag=predec-20&linkId=0a02b40d827f909e950c611d4ad2513a" target="\_blank">Drip Irrigation 1/4" Tubing Stakes</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJYTC6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B000FJYTC6/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000FJYTC6&linkCode=as2&tag=predec-20&linkId=aab149232281694e7c0f63e83cc6d570" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000FJYTC6&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B000FJYTC6" width="1" height="1" border="0" alt="Drip Irrigation 1/4" Tubing Stakes" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00E0NG6W4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00E0NG6W4&linkCode=as2&tag=predec-20&linkId=bc1e8235df714f37432665575cf94837" target="\_blank">16 lb Box of River Rocks</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00E0NG6W4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B00E0NG6W4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00E0NG6W4&linkCode=as2&tag=predec-20&linkId=9eb7a0f71fa19f28b7968c48c5b47648" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00E0NG6W4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00E0NG6W4" width="1" height="1" border="0" alt="16 lb Box of River Rocks" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

  <tr>
    <th colspan="3">General Toolbox Additions</th>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00EXLRW5S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00EXLRW5S&linkCode=as2&tag=predec-20&linkId=f05c32eb8e7cbf8513455ad8046949f0" target="\_blank">Heat Shrink Tubing</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00EXLRW5S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B00EXLRW5S/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00EXLRW5S&linkCode=as2&tag=predec-20&linkId=96b138d6cff19f41bcdf1b1c4ed25cf5" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00EXLRW5S&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00EXLRW5S" width="1" height="1" border="0" alt="Heat Shrink Tubing" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B00GVMFV6O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GVMFV6O&linkCode=as2&tag=predec-20&linkId=9275a12d4b8ecf49f4b393468af45341" target="\_blank">Mini Heat Gun</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00GVMFV6O" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B00GVMFV6O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GVMFV6O&linkCode=as2&tag=predec-20&linkId=a1245645fa7e260d6c735d71fd44616a" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00GVMFV6O&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B00GVMFV6O" width="1" height="1" border="0" alt="Mini Heat Gun" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B003E48ERU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003E48ERU&linkCode=as2&tag=predec-20&linkId=50c976b144445d3d6e58cd6402e16109" target="\_blank">Desoldering Wick</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B003E48ERU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B003E48ERU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003E48ERU&linkCode=as2&tag=predec-20&linkId=946833d449c596baf502ce2ce74c1cff" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B003E48ERU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B003E48ERU" width="1" height="1" border="0" alt="Desoldering Wick" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

  <tr>
    <td>
      <a  href="https://www.amazon.com/gp/product/B008OC3VMU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008OC3VMU&linkCode=as2&tag=predec-20&linkId=1ec8c10e0b7b28815059a60fa3b50a78" target="\_blank">Rosin Soldering Flux Pen</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B008OC3VMU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
    </td>

    <td>
      <a href="https://www.amazon.com/gp/product/B008OC3VMU/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008OC3VMU&linkCode=as2&tag=predec-20&linkId=4617fc8959d9cfd8a4a4b59fee36287f" target="\_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B008OC3VMU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=predec-20" ></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=predec-20&l=am2&o=1&a=B008OC3VMU" width="1" height="1" border="0" alt="Rosin Soldering Flux Pen" style="border:none !important; margin:0px !important;" />
    </td>

    <td>

    </td>
  </tr>

</table>
