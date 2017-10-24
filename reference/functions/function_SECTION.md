---
title: "SECTION"
layout: function
desc: "Modify the current section name"
category: reference
---

The `SECTION` function modify the current section name. It can be used to ease debugging when using macros or loops.

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">
[ 42 'droid' ]

<%
    DUP TOSTRING SECTION
    SQRT
%> FOREACH
</warp10-warpscript-widget>
{% endraw %}