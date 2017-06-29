---
title: "->JSON"
layout: function
isPage: "true"
link: "/warpscript/functions"
desc: "Converts the object on top of the stack to its JSON representation as a string."
categoryTree: ["reference","functions"]
category: reference
---

The `->JSON` function converts the object on top of the stack to its JSON representation as a string and pushes it on the stack.
Note that `->JSON` function is restrive and can only take a simple Map or List on top of the stack containing items of type: String, Number or Boolean. No recursive JSON is allowed here.

## Example ##

Stack:

    TOP: {"JSON": "STRING"}

WarpScript commands:

    ->JSON

Stack: 

    TOP: "{\"JSON\":\"STRING\"}"

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">
'{"JSON": "STRING"}'
JSON->
->JSON
</warp10-warpscript-widget>
{% endraw %}    