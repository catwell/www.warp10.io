---
title: "+!"
layout: "function"
isPage: "true"
link: "/warpscript/functions"
desc: "Adds an element to an existing list or set"
categoryTree: ["reference","functions"]
category: "reference"
---
 

The `+!` operator adds the element on top of the stack to the set or list below it. The element is added to the existing collection. This allows to share a set or list between macros being evaluated concurrently via [`CEVAL`]({{site.baseurl}}).

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">[ 1 2 3 ]
4 +!
</warp10-warpscript-widget>
{% endraw %}    
