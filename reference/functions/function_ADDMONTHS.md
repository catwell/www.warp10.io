---
title: "ADDMONTHS"
layout: "function"
isPage: "true"
link: "/warpscript/functions"
desc: "Adds a certain number of months to a timestamp."
categoryTree: ["reference","functions"]
category: "reference"
---
 

The `ADDMONTHS` function modifies a timestamp by adding a specified number of months to it. Optionally a timezone can be specified so the computation is performed using it instead of `UTC`.

Timezone names are the ones defined in [Joda Time](http://joda-time.sourceforge.net/timezones.html).

This function will take into account leap years and possible daylight saving time change.

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">1380578400000000
'Europe/Berlin'
1 ADDMONTHS

1380578400000000
1 ADDMONTHS
</warp10-warpscript-widget>
{% endraw %}        
