---
title: "FROMBITS"
layout: function
desc: "Converts the long on top of the stack to a double by considering the long value as the raw bits of the double."
category: reference
---

Converts the long on top of the stack to a double by considering the long value as the raw bits of the double.

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">42 FROMBITS
</warp10-warpscript-widget>
{% endraw %}    

## Unit Test ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">-4592264245034352600 FROMBITS
-42.000000000000284 == ASSERT
</warp10-warpscript-widget>
{% endraw %}    
