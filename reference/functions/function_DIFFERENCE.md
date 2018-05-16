---
title: "DIFFERENCE"
layout: "function"
isPage: "true"
link: "/warpscript/functions"
desc: "Computes the difference of two sets"
categoryTree: ["reference","functions"]
category: "reference"
---
 
Computes the `DIFFERENCE` of two SETS. 


## Example ##
Initial stack:

    TOP: [ 'foo' 'bar' ]
    1: [ 'foo' 'bar' 'bob' ]

WarpScript commands:

    DIFFERENCE

Stack:

    TOP: [ 'bob' ] 

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">
// Converts the two LISTS into sets
[ 'foo' 'bar' 'bob' ] ->SET
[ 'foo' 'bar' ] ->SET
// Compute the difference
DIFFERENCE
// convert back the SET into LIST
SET->
</warp10-warpscript-widget>
{% endraw %}    
