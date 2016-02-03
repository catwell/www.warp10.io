---
title: "TOBITS"
layout: function
desc: "Converts a double to a long value of the raw bits of its representation."
category: reference
---

Converts a double to a long value of the raw bits of its representation.

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">42.0
TOBITS
</warp10-warpscript-widget>
{% endraw %}    

## Unit Test ##


{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">-42.0 TOBITS
-4592264245034352640 == ASSERT
</warp10-warpscript-widget>
{% endraw %}    
