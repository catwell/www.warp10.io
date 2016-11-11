---
title: "ADDYEARS"
layout: "function"
isPage: "true"
link: "/warpscript/functions"
desc: "Adds a certain number of years to a timestamp."
categoryTree: ["reference","functions"]
category: "reference"
---
 

The `ADDYEARS` function modifies a timestamp by adding a specified number of years to it. Optionally a timezone can be specified so the computation is performed using it instead of `UTC`.

Timezone names are the ones defined in [Joda Time](http://joda-time.sourceforge.net/timezones.html).

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">NOW
1 ADDYEARS
ISO8601
</warp10-warpscript-widget>
{% endraw %}        
