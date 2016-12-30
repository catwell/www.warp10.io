---
title: Integrating WarpScript with IFTTT
layout: function
isPage: true
category: howto
---

The Warp 10 platform can be used to track time series of all kind and to run analytics on them using its dedicated WarpScript language.

Wouldn't it be great if those analytics capabilities could be easily integrated with third party services? Well, we've got some good news for you, this is possible via the integration with [IFTTT](https://ifttt.com/).

Integration with IFTTT works both ways, you can interact with Warp 10 from IFTTT and with IFTTT from Warp 10. This is done through the use of the versatile [Maker Channel](https://ifttt.com/maker) on IFTTT.

## Talking to Warp 10 from IFTTT ##

Warp 10 can be used as the *that* part of an IFTTT Applet, simply configure your applet so it issues a Web request via the Maker channel with the following parameters:

* URL: `https://HOST:PORT/api/v0/exec`
* Method: `POST`
* Content-Type: `text/plain`
* Body: `Your WarpScript code`

In your WarpScript code you can for example create a Geo Time Series and push it to Warp 10:

```
   NEWGTS 'class' RENAME
   { 'device' '...' } RELABEL
   NOW NaN NaN NaN 'Hi' ADDVALUE
   'TOKEN' UPDATE
```

You can also use the *ingredients* from the `this` part of your applet.

## Talking to IFTTT from Warp 10 ##

