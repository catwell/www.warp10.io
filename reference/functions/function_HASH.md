---
title: "HASH"
layout: function
desc: "Computes a 64 bits hash of the string on top of the stack."
category: reference
---

Computes a 64 bits hash of the string on top of the stack.

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">'Hash Me!' HASH
</warp10-warpscript-widget>
{% endraw %}    

## Unit Test ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">'Hash Me!' HASH
-5152518720215540469 == ASSERT
</warp10-warpscript-widget>
{% endraw %}    
