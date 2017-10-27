---
title: "mapper.sqrt"
layout: "function"
isPage: "true"
link: "/warpscript/framework_map"
desc: "Change the value by a square root version"
categoryTree: ["reference","frameworks","framework-map"]
category: "reference"
---
 

This *mapper* function compute the square root of the **single value** in a sliding window.

For negative numerics, this mapper returns NaN. For string values, this mapper returns 0.

The associated location and elevation are those of the single value.

## Note ##
 
The `mapper.sqrt` mapper needs a single value sliding window, i.e. pre-window and post-window to 0   

## Example ##

Stack:

    TOP:  [{"c":"GTS1","l":{"label0":"42"},"a":{},"v":[[10,25],[20,42]]}]

WarpScript commands:

    // arguments are: GTS or [GTS], constant, mapper, prewindow, postwindow, occurences
    [ SWAP mapper.sqrt 0 0 0 ] MAP

Stack: 

    TOP: [{"c":"GTS1","l":{"label0":"42"},"a":{},"v":[[10,5],[20,6.48074069840786]]}]
    
## Let's play with it ##

{% raw %}
<warp10-warpscript-widget>
[
  NEWGTS "GTS1" RENAME 
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN 25.0 ADDVALUE
  20 NaN NaN NaN 42.0 ADDVALUE 
 
   NEWGTS "GTS2" RENAME 
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN -1.0 ADDVALUE
  20 NaN NaN NaN 42.0 ADDVALUE 
]

// arguments are: GTS or [GTS], constant, mapper, prewindow, postwindow, occurences
[ SWAP mapper.sqrt 0 0 0 ] MAP


</warp10-warpscript-widget>
{% endraw %}    


## Unit test ##

{% raw %}
<warp10-warpscript-widget>
[
  NEWGTS "GTS1" RENAME 
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN 25.0 ADDVALUE
  20 NaN NaN NaN 42.0 ADDVALUE 
 
   NEWGTS "GTS2" RENAME 
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN -1.0 ADDVALUE
  20 NaN NaN NaN "droid" ADDVALUE 
]

// arguments are: GTS or [GTS], constant, mapper, prewindow, postwindow, occurences
[ SWAP mapper.sqrt 0 0 0 ] MAP 

VALUES LIST->
2 == ASSERT
LIST-> DROP
0 == ASSERT 
ISNaN ASSERT
LIST-> DROP
6.48074069840786 == ASSERT
5 == ASSERT
'unit test successful'
</warp10-warpscript-widget>
{% endraw %}        