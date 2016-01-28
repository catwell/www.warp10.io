---
title: "TSELEMENTS"
layout: "function"
isPage: "true"
link: "/warpscript/functions"
desc: "t replaces the timestamp with an array of its elements"
categoryTree: ["reference","functions"]
oldPath: ["30-functions","15-standalone","100-function_TSELEMENTS.html.md"]
category: "reference"
---
 

The `TSELEMENTS`function applys to a timestamp. It replaces the timestamp with an array of
its *elements*. The array contains the following `LONG` values in this order:

    [ year, month, day_of_month, hour, minute, second, microseconds, day_of_year, day_of_week, week_of_year ]

`TSELEMENTS` can optionally use a timezone on top of the stack. Timezone names are the ones defined in [Joda Time](http://joda-time.sourceforge.net/timezones.html). If there is no timezone, it is considered UTC.


## Example ##

WarpScript commands:

    NOW TSELEMENTS
    NOW 'America/Los_Angeles' TSELEMENTS

Stack: 

    TOP: [2015,6,18,2,32,15,210718,169,4,25]
    1:   [2015,6,18,9,32,15,210666,169,4,25]

## Let's play with it ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">1434568904758000 TSELEMENTS
1434568904758000 'America/Los_Angeles' TSELEMENTS
</warp10-warpscript-widget>
{% endraw %}    


## Unit test ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">1434568904758000 
TSELEMENTS 
LIST->
10      == ASSERT // Array size
25      == ASSERT // week_of_year
3       == ASSERT // day_of_week
168     == ASSERT // day_of_year
758000  == ASSERT // microseconds 
44      == ASSERT // second
21      == ASSERT // minute
19      == ASSERT // hour
17      == ASSERT // day_of_month 
6       == ASSERT // month
2015    == ASSERT // year 
'unit test successful'
</warp10-warpscript-widget>
{% endraw %}        
