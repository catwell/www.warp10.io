---
title: "TODEGREES"
layout: "function"
isPage: "true"
link: "/warpscript/functions"
desc: "Convert from radians to degrees"
categoryTree: ["reference","functions"]
oldPath: ["30-functions","12-math","809-function_TODEGREES.html.md"]
category: "reference"
---
 

The `TODEGREES` function consumes a floating point number *x* from the top of the stack and pushes back its conversion from radians to degrees.


## Example ##

WarpScript commands:

    pi 2 /      // pi/2
    TODEGREES

Stack: 

    TOP: 90

## Let's play with it ##

<<<<<<< HEAD
<warp10-warpscript-widget>
pi 2 /      // pi/2
TODEGREES
</warp10-warpscript-widget>    
=======
{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">90
TORADIANS
</warp10-warpscript-widget>
{% endraw %}    
>>>>>>> acb026da487212942ccff18f0ae6d64a8f469f88


## Unit test ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">pi 2 / 
TODEGREES
90
== ASSERT
'unit test successful'
</warp10-warpscript-widget>
{% endraw %}        
