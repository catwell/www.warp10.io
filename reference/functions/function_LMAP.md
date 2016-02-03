---
title: "LMAP"
layout: function
desc: "Apply a macro on each element of a list"
category: reference
---

The `LMAP` function applies a macro on each element of a list, producing a list with the top element after each macro invocation.

Initial stack:

    [ elem1 elem2 elem3 elem 4]


WarpScript commands:

    <% -1 * %> LMAP


Stack:

    [ -elem1 -elem2 -elem3 -elem4 ]



## Let's play with it ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">
[ 42 21 11 ]
<% -1 * %>
LMAP
</warp10-warpscript-widget>
{% endraw %}    


## Unit test ##

{% raw %}
[ 42 21 11 ]
<% -1 * %>
LMAP
</warp10-warpscript-widget>
{% endraw %}        
