---
title: "mapper.second"
layout: "function"
isPage: "true"
link: "/warpscript/framework_map"
desc: "Return the second of the tick for which it is computed"
categoryTree: ["reference","frameworks","framework-map"]
oldPath: ["20-frameworks","201-framework-map","201-single-value-mappers","281-mapper_second.html.md"]
category: "reference"
---
 

This *mapper* function returns the second of the tick for which it is computed.

The `mapper.second` function can be applied to values of any type.


## Example ##

Stack:

    TOP:  [{"c":"toto","l":{"label0":"42"},"a":{},"v":[[1380000000003189,42],[1418910910000000,123],[1419220920000000,211],[1421530930000000,132]]}]

WarpScript commands:

	'UTC'			// TimeZone - NULL stands for 'UTC'
    mapper.second
    0				// pre-window
    0				// post-window
    0				// occurrences
    5 ->LIST
    MAP

Stack: 

    TOP:  [{"c":"toto","l":{"label0":"42"},"a":{},"v":[[1380000000003189,0.003189],[1418910910000000,10],[1419220920000000,0],[1421530930000000,10]]}]

## Let's play with it ##

{% raw %}
<warp10-warpscript-widget>NEWGTS "toto" RENAME 
'label0' '42' 2 ->MAP RELABEL
1380000000003189 NaN NaN NaN  42.0 ADDVALUE
1418910910000000 NaN NaN NaN 123.0 ADDVALUE
1419220920000000 NaN NaN NaN 211.0 ADDVALUE
1421530930000000 NaN NaN NaN 132.0 ADDVALUE
1 ->LIST
'UTC'			// TimeZone
mapper.second
0  				// pre-window
0  				// post-median
0  				// occurrences
5 ->LIST
MAP
</warp10-warpscript-widget>
{% endraw %}    


## Unit test ##

{% raw %}
<warp10-warpscript-widget>NEWGTS "toto" RENAME 
'label0' '42' 2 ->MAP RELABEL
1380000000003189 NaN NaN NaN  42.0 ADDVALUE
1418910910000000 NaN NaN NaN 123.0 ADDVALUE
1419220920000000 NaN NaN NaN 211.0 ADDVALUE
1421530930000000 NaN NaN NaN 132.0 ADDVALUE
1 ->LIST
'UTC'			// TimeZone
mapper.second
0  				// pre-window
0  				// post-median
0  				// occurreces
5 ->LIST
MAP
VALUES LIST-> DROP
LIST-> DROP
10 == ASSERT
0 == ASSERT
10 == ASSERT
0.003189 == ASSERT
'unit test successful'
</warp10-warpscript-widget>
{% endraw %}