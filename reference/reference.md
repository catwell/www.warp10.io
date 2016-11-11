---
title: "WarpScript reference"
layout: "function"
isPage: "true"
categoryTree: ["reference"]
oldPath: ["30-functions","00-functions.html.md.eco"]
category: "reference"
---

This page lists all the functions available in WarpScript except those related to [Processing](http://www.processing.org/) which appear on a [dedicated page]({{ site.baseurl }}/reference/processing).

<div class="row small-p">
<div class="col-sm-3">

<a name="frameworks"></a>

### Frameworks

<a name="framework-bucketize"></a>

[BUCKETIZE]({{ site.baseurl }}/reference/frameworks/framework-bucketize)

<a name="framework-filter"></a>

[FILTER]({{ site.baseurl }}/reference/frameworks/framework-filter)

<a name="framework-mapper"></a>

[MAP]({{ site.baseurl }}/reference/frameworks/framework-map)

<a name="framework-reducer"></a>

[REDUCE]({{ site.baseurl }}/reference/frameworks/framework-reduce)

<a name="framework-apply"></a>

[APPLY]({{ site.baseurl }}/reference/frameworks/framework-apply)


<a name="framework-bucketizers"></a>

#### Bucketizers

[bucketizer.sum]({{ site.baseurl }}/reference/frameworks/bucketizer_sum)

[bucketizer.max]({{ site.baseurl }}/reference/frameworks/bucketizer_max)

[bucketizer.min]({{ site.baseurl }}/reference/frameworks/bucketizer_min)

[bucketizer.mean]({{ site.baseurl }}/reference/frameworks/bucketizer_mean)

[bucketizer.mean.circular]({{ site.baseurl }}/reference/frameworks/mapper_mean_circular)

[bucketizer.mean.circular.exclude-nulls]({{ site.baseurl }}/reference/frameworks/mapper_mean_circular)

[bucketizer.first]({{ site.baseurl }}/reference/frameworks/bucketizer_first)

[bucketizer.last]({{ site.baseurl }}/reference/frameworks/bucketizer_last)

[bucketizer.join]({{ site.baseurl }}/reference/frameworks/bucketizer_join)

[bucketizer.median]({{ site.baseurl }}/reference/frameworks/bucketizer_median)

[bucketizer.count]({{ site.baseurl }}/reference/frameworks/bucketizer_count)

[bucketizer.and]({{ site.baseurl }}/reference/frameworks/bucketizer_and)

[bucketizer.or]({{ site.baseurl }}/reference/frameworks/bucketizer_or)

##### Custom bucketizer

[MACROBUCKETIZER]({{ site.baseurl }}/reference/frameworks/bucketizer_MACROBUCKETIZER)

<a name="framework-filters"></a>

#### Filters

[filter.byclass]({{ site.baseurl }}/reference/frameworks/filter_byclass)

[filter.bylabels]({{ site.baseurl }}/reference/frameworks/filter_bylabels)

[filter.last.eq]({{ site.baseurl }}/reference/frameworks/filter_last_eq)

[filter.last.ne]({{ site.baseurl }}/reference/frameworks/filter_last_ne)

[filter.last.gt]({{ site.baseurl }}/reference/frameworks/filter_last_gt)

[filter.last.ge]({{ site.baseurl }}/reference/frameworks/filter_last_ge)

[filter.last.lt]({{ site.baseurl }}/reference/frameworks/filter_last_lt)

[filter.last.le]({{ site.baseurl }}/reference/frameworks/filter_last_le)


<a name="framework-mappers"></a>

#### Mappers

##### Single-value mapper

[mapper.abs]({{ site.baseurl }}/reference/frameworks/mapper_abs)

[mapper.add]({{ site.baseurl }}/reference/frameworks/mapper_add)

[mapper.mul]({{ site.baseurl }}/reference/frameworks/mapper_mul)

[mapper.ceil]({{ site.baseurl }}/reference/frameworks/mapper_ceil)

[mapper.floor]({{ site.baseurl }}/reference/frameworks/mapper_floor)

[mapper.round]({{ site.baseurl }}/reference/frameworks/mapper_round)

[mapper.toboolean]({{ site.baseurl }}/reference/frameworks/mapper_toboolean)

[mapper.todouble]({{ site.baseurl }}/reference/frameworks/mapper_todouble)

[mapper.tolong]({{ site.baseurl }}/reference/frameworks/mapper_tolong)

[mapper.tostring]({{ site.baseurl }}/reference/frameworks/mapper_tostring)

[mapper.tick]({{ site.baseurl }}/reference/frameworks/mapper_tick)

[mapper.year]({{ site.baseurl }}/reference/frameworks/mapper_year)

[mapper.month]({{ site.baseurl }}/reference/frameworks/mapper_month)

[mapper.day]({{ site.baseurl }}/reference/frameworks/mapper_day)

[mapper.weekday]({{ site.baseurl }}/reference/frameworks/mapper_weekday)

[mapper.hour]({{ site.baseurl }}/reference/frameworks/mapper_hour)

[mapper.minute]({{ site.baseurl }}/reference/frameworks/mapper_minute)

[mapper.second]({{ site.baseurl }}/reference/frameworks/mapper_second)

[mapper.exp]({{ site.baseurl }}/reference/frameworks/mapper_exp)

[mapper.log]({{ site.baseurl }}/reference/frameworks/mapper_log)

[mapper.pow]({{ site.baseurl }}/reference/frameworks/mapper_pow)

[mapper.tanh]({{ site.baseurl }}/reference/frameworks/mapper_tanh)

[mapper.sigmoid]({{ site.baseurl }}/reference/frameworks/mapper_sigmoid)


##### Geo mappers

[mapper.geo.within]({{ site.baseurl }}/reference/frameworks/mapper_geo_within)

[mapper.geo.outside]({{ site.baseurl }}/reference/frameworks/mapper_geo_outside)


##### Sliding-window mapper

[mapper.replace]({{ site.baseurl }}/reference/frameworks/mapper_replace)

[mapper.eq]({{ site.baseurl }}/reference/frameworks/mapper_eq)

[mapper.ne]({{ site.baseurl }}/reference/frameworks/mapper_ne)

[mapper.gt]({{ site.baseurl }}/reference/frameworks/mapper_gt)

[mapper.ge]({{ site.baseurl }}/reference/frameworks/mapper_ge)

[mapper.lt]({{ site.baseurl }}/reference/frameworks/mapper_lt)

[mapper.le]({{ site.baseurl }}/reference/frameworks/mapper_le)

[mapper.highest]({{ site.baseurl }}/reference/frameworks/mapper_highest)

[mapper.lowest]({{ site.baseurl }}/reference/frameworks/mapper_lowest)

[mapper.max]({{ site.baseurl }}/reference/frameworks/mapper_max)

[mapper.min]({{ site.baseurl }}/reference/frameworks/mapper_min)

[mapper.delta]({{ site.baseurl }}/reference/frameworks/mapper_delta)

[mapper.rate]({{ site.baseurl }}/reference/frameworks/mapper_rate)

[mapper.first]({{ site.baseurl }}/reference/frameworks/mapper_first)

[mapper.last]({{ site.baseurl }}/reference/frameworks/mapper_last)

[mapper.sum]({{ site.baseurl }}/reference/frameworks/mapper_sum)

[mapper.product]({{ site.baseurl }}/reference/frameworks/mapper_product)

[mapper.mean]({{ site.baseurl }}/reference/frameworks/mapper_mean)

[mapper.mean.circular]({{ site.baseurl }}/reference/frameworks/mapper_mean_circular)

[mapper.mean.circular.exclude-nulls]({{ site.baseurl }}/reference/frameworks/mapper_mean_circular)

[mapper.and]({{ site.baseurl }}/reference/frameworks/mapper_and)

[mapper.or]({{ site.baseurl }}/reference/frameworks/mapper_or)

[mapper.var]({{ site.baseurl }}/reference/frameworks/mapper_var)

[mapper.sd]({{ site.baseurl }}/reference/frameworks/mapper_sd)

[mapper.hspeed]({{ site.baseurl }}/reference/frameworks/mapper_hspeed)

[mapper.vspeed]({{ site.baseurl }}/reference/frameworks/mapper_vspeed)

[mapper.hdist]({{ site.baseurl }}/reference/frameworks/mapper_hdist)

[mapper.vdist]({{ site.baseurl }}/reference/frameworks/mapper_vdist)

[mapper.count]({{ site.baseurl }}/reference/frameworks/mapper_count)

[mapper.max.x]({{ site.baseurl }}/reference/frameworks/mapper_max_x)

[mapper.min.x]({{ site.baseurl }}/reference/frameworks/mapper_min_x)

[mapper.dotproduct]({{ site.baseurl }}/reference/frameworks/mapper_dotproduct)

[mapper.dotproduct.positive]({{ site.baseurl }}/reference/frameworks/mapper_dotproduct.positive)

[mapper.dotproduct.sigmoid]({{ site.baseurl }}/reference/frameworks/mapper_dotproduct.sigmoid)

[mapper.dotproduct.tanh]({{ site.baseurl }}/reference/frameworks/mapper_dotproduct.tanh)

[mapper.geo.within]({{ site.baseurl }}/reference/frameworks/mapper_geo_within)

[mapper.geo.outside]({{ site.baseurl }}/reference/frameworks/mapper_geo_outside)

##### Custom mapper

[MACROMAPPER]({{ site.baseurl }}/reference/frameworks/mapper_MACROMAPPER)

[STRICTMAPPER]({{ site.baseurl }}/reference/frameworks/mapper_STRICTMAPPER)


<a name="framework-reducers"></a>

#### Reducers

[reducer.argmax]({{ site.baseurl }}/reference/frameworks/reducer_argmax)

[reducer.argmin]({{ site.baseurl }}/reference/frameworks/reducer_argmin)

[reducer.count]({{ site.baseurl }}/reference/frameworks/reducer_count)

[reducer.count.exclude-nulls]({{ site.baseurl }}/reference/frameworks/reducer_count_exclude-nulls)

[reducer.count.include-nulls]({{ site.baseurl }}/reference/frameworks/reducer_count_include-nulls)

[reducer.join]({{ site.baseurl }}/reference/frameworks/reducer_join)

[reducer.join.forbid-nulls]({{ site.baseurl }}/reference/frameworks/reducer_join_forbid-nulls)

[reducer.max]({{ site.baseurl }}/reference/frameworks/reducer_max)

[reducer.max.forbid-nulls]({{ site.baseurl }}/reference/frameworks/reducer_max_forbid-nulls)

[reducer.mean]({{ site.baseurl }}/reference/frameworks/reducer_mean)

[reducer.mean.exclude-nulls]({{ site.baseurl }}/reference/frameworks/reducer_mean_exclude-nulls)

[reducer.mean.circular]({{ site.baseurl }}/reference/frameworks/mapper_mean_circular)

[reducer.mean.circular.exclude-nulls]({{ site.baseurl }}/reference/frameworks/mapper_mean_circular)

[reducer.median]({{ site.baseurl }}/reference/frameworks/reducer_median)

[reducer.min]({{ site.baseurl }}/reference/frameworks/reducer_min)

[reducer.min.forbid-nulls]({{ site.baseurl }}/reference/frameworks/reducer_min_forbid-nulls)

[reducer.and]({{ site.baseurl }}/reference/frameworks/reducer_and)

[reducer.and.exclude-nulls]({{ site.baseurl }}/reference/frameworks/reducer_and_exclude-nulls)

[reducer.or]({{ site.baseurl }}/reference/frameworks/reducer_or)

[reducer.or.exclude-nulls]({{ site.baseurl }}/reference/frameworks/reducer_or_exclude-nulls)

[reducer.sd]({{ site.baseurl }}/reference/frameworks/reducer_sd)

[reducer.shannonentropy.0]({{ site.baseurl }}/reference/frameworks/reducer_shannonentropy.0)

[reducer.shannonentropy.1]({{ site.baseurl }}/reference/frameworks/reducer_shannonentropy.1)

[reducer.sum]({{ site.baseurl }}/reference/frameworks/reducer_sum)

[reducer.sum.forbid-nulls]({{ site.baseurl }}/reference/frameworks/reducer_sum_forbid-nulls)

[reducer.var]({{ site.baseurl }}/reference/frameworks/reducer_var)

##### Custom reducer

[MACROREDUCER]({{ site.baseurl }}/reference/frameworks/reducer_MACROREDUCER)

<a name="framework-operations"></a>

#### Operations

[op.add]({{ site.baseurl }}/reference/frameworks/op_add)

[op.and]({{ site.baseurl }}/reference/frameworks/op_and)

[op.div]({{ site.baseurl }}/reference/frameworks/op_div)

[op.eq]({{ site.baseurl }}/reference/frameworks/op_eq)

[op.ge]({{ site.baseurl }}/reference/frameworks/op_ge)

[op.gt]({{ site.baseurl }}/reference/frameworks/op_gt)

[op.le]({{ site.baseurl }}/reference/frameworks/op_le)

[op.lt]({{ site.baseurl }}/reference/frameworks/op_lt)

[op.mask]({{ site.baseurl }}/reference/frameworks/op_mask)

[op.negmask]({{ site.baseurl }}/reference/frameworks/op_negmask)

[op.mul]({{ site.baseurl }}/reference/frameworks/op_mul)

[op.ne]({{ site.baseurl }}/reference/frameworks/op_ne)

[op.or]({{ site.baseurl }}/reference/frameworks/op_or)

[op.sub]({{ site.baseurl }}/reference/frameworks/op_sub)

</div>
<div class="col-sm-3">


<a name="functions-constant"></a>

### Constant values

[e]({{ site.baseurl }}/reference/functions/function_e)

[MAXLONG]({{ site.baseurl }}/reference/functions/function_MAXLONG)

[MINLONG]({{ site.baseurl }}/reference/functions/function_MINLONG)

[NaN]({{ site.baseurl }}/reference/functions/function_NaN)

[NULL]({{ site.baseurl }}/reference/functions/function_NULL)

[PI]({{ site.baseurl }}/reference/functions/function_PI_UC)

[pi]({{ site.baseurl }}/reference/functions/function_pi)


<a name="functions-math"></a>

### Mathematical functions and operators


[&amp;&amp;]({{ site.baseurl }}/reference/functions/function_COND_AND)

[&#124;&#124;]({{ site.baseurl }}/reference/functions/function_COND_OR)

[&]({{ site.baseurl }}/reference/functions/function_BITWISE_AND)

[&#124;]({{ site.baseurl }}/reference/functions/function_BITWISE_OR)

[&#94;]({{ site.baseurl }}/reference/functions/function_BITWISE_XOR)

[+]({{ site.baseurl }}/reference/functions/function_ADD)

[-]({{ site.baseurl }}/reference/functions/function_SUB)

[*]({{ site.baseurl }}/reference/functions/function_MUL)

[/]({{ site.baseurl }}/reference/functions/function_DIV)

[%]({{ site.baseurl }}/reference/functions/function_MOD)

[~]({{ site.baseurl }}/reference/functions/function_BITWISE_COMPLEMENT)

[**]({{ site.baseurl }}/reference/functions/function_POW)

[&lt;&lt;]({{ site.baseurl }}/reference/functions/function_LEFT_SHIFT)

[&gt;&gt;]({{ site.baseurl }}/reference/functions/function_RIGHT_SHIFT)

[&gt;&gt;&gt;]({{ site.baseurl }}/reference/functions/function_UNSIGNED_RIGHT_SHIFT)

[==]({{ site.baseurl }}/reference/functions/function_EQ)

[~=]({{ site.baseurl }}/reference/functions/function_ALMOSTEQ)

[!=]({{ site.baseurl }}/reference/functions/function_NE)

[<]({{ site.baseurl }}/reference/functions/function_LT)

[>]({{ site.baseurl }}/reference/functions/function_GT)

[<=]({{ site.baseurl }}/reference/functions/function_LE)

[>=]({{ site.baseurl }}/reference/functions/function_GE)

[!]({{ site.baseurl }}/reference/functions/function_NOT)

[ABS]({{ site.baseurl }}/reference/functions/function_ABS)

[AND]({{ site.baseurl }}/reference/functions/function_AND)

[CBRT]({{ site.baseurl }}/reference/functions/function_CBRT)

[CEIL]({{ site.baseurl }}/reference/functions/function_CEIL)

[EXP]({{ site.baseurl }}/reference/functions/function_EXP)

[FLOOR]({{ site.baseurl }}/reference/functions/function_FLOOR)

[IEEEREMAINDER]({{ site.baseurl }}/reference/functions/function_IEEEREMAINDER)

[ISNaN]({{ site.baseurl }}/reference/functions/function_ISNaN)

[ISNULL]({{ site.baseurl }}/reference/functions/function_ISNULL)

[LBOUNDS]({{ site.baseurl }}/reference/functions/function_LBOUNDS)

[LOG]({{ site.baseurl }}/reference/functions/function_LOG)

[LOG10]({{ site.baseurl }}/reference/functions/function_LOG10)

[MAX]({{ site.baseurl }}/reference/functions/function_MAX)

[MIN]({{ site.baseurl }}/reference/functions/function_MIN)

[NBOUNDS]({{ site.baseurl }}/reference/functions/function_NBOUNDS)

[NEXTAFTER]({{ site.baseurl }}/reference/functions/function_NEXTAFTER)

[NEXTUP]({{ site.baseurl }}/reference/functions/function_NEXTUP)

[NOT]({{ site.baseurl }}/reference/functions/function_NOT_TXT)

[NPDF]({{ site.baseurl }}/reference/functions/function_NPDF)

[OR]({{ site.baseurl }}/reference/functions/function_OR)

[PROBABILITY]({{ site.baseurl }}/reference/functions/function_PROBABILITY)

[RAND]({{ site.baseurl }}/reference/functions/function_RAND)

[REVBITS]({{ site.baseurl }}/reference/functions/function_REVBITS)

[RINT]({{ site.baseurl }}/reference/functions/function_RINT)

[ROUND]({{ site.baseurl }}/reference/functions/function_ROUND)

[SIGNUM]({{ site.baseurl }}/reference/functions/function_SIGNUM)

[SQRT]({{ site.baseurl }}/reference/functions/function_SQRT)


#### Time unit conversions

[w]({{ site.baseurl }}/reference/functions/function_w)

[d]({{ site.baseurl }}/reference/functions/function_d)

[h]({{ site.baseurl }}/reference/functions/function_h)

[m]({{ site.baseurl }}/reference/functions/function_m)

[s]({{ site.baseurl }}/reference/functions/function_s)

[ms]({{ site.baseurl }}/reference/functions/function_ms)

[us]({{ site.baseurl }}/reference/functions/function_us)

[ns]({{ site.baseurl }}/reference/functions/function_ns)

[ps]({{ site.baseurl }}/reference/functions/function_ps)

#### Type conversions

[->JSON]({{ site.baseurl }}/reference/functions/function_TOJSON)

[JSON->]({{ site.baseurl }}/reference/functions/function_JSONTO)

[TOBOOLEAN]({{ site.baseurl }}/reference/functions/function_TOBOOLEAN)

[TODOUBLE]({{ site.baseurl }}/reference/functions/function_TODOUBLE)

[TOLONG]({{ site.baseurl }}/reference/functions/function_TOLONG)

[TOSTRING]({{ site.baseurl }}/reference/functions/function_TOSTRING)

[TOTIMESTAMP]({{ site.baseurl }}/reference/functions/function_TOTIMESTAMP)

#### Trigonometry

[COS]({{ site.baseurl }}/reference/functions/function_COS)

[COSH]({{ site.baseurl }}/reference/functions/function_COSH)

[ACOS]({{ site.baseurl }}/reference/functions/function_ACOS)

[SIN]({{ site.baseurl }}/reference/functions/function_SIN)

[SINH]({{ site.baseurl }}/reference/functions/function_SINH)

[ASIN]({{ site.baseurl }}/reference/functions/function_ASIN)

[TAN]({{ site.baseurl }}/reference/functions/function_TAN)

[TANH]({{ site.baseurl }}/reference/functions/function_TANH)

[ATAN]({{ site.baseurl }}/reference/functions/function_ATAN)

[TODEGREES]({{ site.baseurl }}/reference/functions/function_TODEGREES)

[TORADIANS]({{ site.baseurl }}/reference/functions/function_TORADIANS)


<a name="functions-standalone"></a>

### Standalone functions

#### Date functions

[ADDMONTHS]({{ site.baseurl }}/reference/functions/function_ADDMONTHS)

[ADDYEARS]({{ site.baseurl }}/reference/functions/function_ADDYEARS)

[AGO]({{ site.baseurl }}/reference/functions/function_AGO)

[DURATION]({{ site.baseurl }}/reference/functions/function_DURATION)

[HUMANDURATION]({{ site.baseurl }}/reference/functions/function_HUMANDURATION)

[ISODURATION]({{ site.baseurl }}/reference/functions/function_ISODURATION)

[ISO8601]({{ site.baseurl }}/reference/functions/function_ISO8601)

[MSTU]({{ site.baseurl }}/reference/functions/function_MSTU)

[NOW]({{ site.baseurl }}/reference/functions/function_NOW)

[STU]({{ site.baseurl }}/reference/functions/function_STU)

[TSELEMENTS]({{ site.baseurl }}/reference/functions/function_TSELEMENTS)

#### String functions

[-&gt;HEX]({{ site.baseurl }}/reference/functions/function_2HEX)

[B64TOHEX]({{ site.baseurl }}/reference/functions/function_B64TOHEX)

[B64-&gt;]({{ site.baseurl }}/reference/functions/function_B64TO)

[B64URL-&gt;]({{ site.baseurl }}/reference/functions/function_B64URL)

[BINTOHEX]({{ site.baseurl }}/reference/functions/function_BINTOHEX)

[BYTES-&gt;]({{ site.baseurl }}/reference/functions/function_BYTESTO)

[FROMBIN]({{ site.baseurl }}/reference/functions/function_FROMBIN)

[FROMBITS]({{ site.baseurl }}/reference/functions/function_FROMBITS)

[FROMHEX]({{ site.baseurl }}/reference/functions/function_FROMHEX)

[HASH]({{ site.baseurl }}/reference/functions/function_HASH)

[HEX-&gt;]({{ site.baseurl }}/reference/functions/function_HEXTO)

[HEXTOB64]({{ site.baseurl }}/reference/functions/function_HEXTOB64)

[HEXTOBIN]({{ site.baseurl }}/reference/functions/function_HEXTOBIN)

[JOIN]({{ site.baseurl }}/reference/functions/function_JOIN)

[MATCH]({{ site.baseurl }}/reference/functions/function_MATCH)

[MATCHER]({{ site.baseurl }}/reference/functions/function_MATCHER)

[OPB64-&gt;]({{ site.baseurl }}/reference/functions/function_OPB64TO)

[SPLIT]({{ site.baseurl }}/reference/functions/function_SPLIT)

[SUBSTRING]({{ site.baseurl }}/reference/functions/function_SUBSTRING)

[TEMPLATE]({{ site.baseurl }}/reference/functions/function_TEMPLATE)

[-&gt;B64URL]({{ site.baseurl }}/reference/functions/function_TOB64URL)

[-&gt;B64]({{ site.baseurl }}/reference/functions/function_TOB64)

[-&gt;BYTES]({{ site.baseurl }}/reference/functions/function_TOBYTES)

[-&gt;OPB64]({{ site.baseurl }}/reference/functions/function_TOOPB64)

[TOBIN]({{ site.baseurl }}/reference/functions/function_TOBIN)

[TOBITS]({{ site.baseurl }}/reference/functions/function_TOBITS)

[TOHEX]({{ site.baseurl }}/reference/functions/function_TOHEX)

[TOLOWER]({{ site.baseurl }}/reference/functions/function_TOLOWER)

[TOUPPER]({{ site.baseurl }}/reference/functions/function_TOUPPER)

[TRIM]({{ site.baseurl }}/reference/functions/function_TRIM)

[URLDECODE]({{ site.baseurl }}/reference/functions/function_URLDECODE)

[URLENCODE]({{ site.baseurl }}/reference/functions/function_URLENCODE)

[UUID]({{ site.baseurl }}/reference/functions/function_UUID)

#### Cryptographic functions

[AESUNWRAP]({{ site.baseurl }}/reference/functions/function_AESUNWRAP)

[AESWRAP]({{ site.baseurl }}/reference/functions/function_AESWRAP)

#### Util functions

[GZIP]({{ site.baseurl }}/reference/functions/function_GZIP)

[RANGE]({{ site.baseurl }}/reference/functions/function_RANGE)

[CUDF]({{ site.baseurl }}/reference/functions/function_CUDF)

[UDF]({{ site.baseurl }}/reference/functions/function_UDF)

[UNGZIP]({{ site.baseurl }}/reference/functions/function_UNGZIP)

<a name="functions-lists-maps"></a>

### Lists and maps functions


[[]]({{ site.baseurl }}/reference/functions/function_EMPTYLIST)

[{}]({{ site.baseurl }}/reference/functions/function_EMPTYMAP)

[-&gt;LIST]({{ site.baseurl }}/reference/functions/function_TOLIST)

[-&gt;MAP]({{ site.baseurl }}/reference/functions/function_TOMAP)

[-&gt;SET]({{ site.baseurl }}/reference/functions/function_TOSET)

[APPEND]({{ site.baseurl }}/reference/functions/function_APPEND)

[CLONEREVERSE]({{ site.baseurl }}/reference/functions/function_CLONEREVERSE)

[CONTAINSKEY]({{ site.baseurl }}/reference/functions/function_CONTAINSKEY)

[CONTAINS]({{ site.baseurl }}/reference/functions/function_CONTAINS)

[CONTAINSVALUE]({{ site.baseurl }}/reference/functions/function_CONTAINSVALUE)

[DIFFERENCE]({{ site.baseurl }}/reference/functions/function_DIFFERENCE)

[FLATTEN]({{ site.baseurl }}/reference/functions/function_FLATTEN)

[GET]({{ site.baseurl }}/reference/functions/function_GET)

[INTERSECTION]({{ site.baseurl }}/reference/functions/function_INTERSECTION)

[KEYLIST]({{ site.baseurl }}/reference/functions/function_KEYLIST)

[LFLATMAP]({{ site.baseurl }}/reference/functions/function_LFLATMAP)

[LIST-&gt;]({{ site.baseurl }}/reference/functions/function_LISTTO)

[LMAP]({{ site.baseurl }}/reference/functions/function_LMAP)

[LSORT]({{ site.baseurl }}/reference/functions/function_LSORT)

[MAP-&gt;]({{ site.baseurl }}/reference/functions/function_MAPTO)

[MAPID]({{ site.baseurl }}/reference/functions/function_MAPID)

[MSORT]({{ site.baseurl }}/reference/functions/function_MSORT)

[PUT]({{ site.baseurl }}/reference/functions/function_PUT)

[REMOVE]({{ site.baseurl }}/reference/functions/function_REMOVE)

[REVERSE]({{ site.baseurl }}/reference/functions/function_REVERSE)

[SET]({{ site.baseurl }}/reference/functions/function_SET)

[SET-&gt;]({{ site.baseurl }}/reference/functions/function_SETTO)

[SIZE]({{ site.baseurl }}/reference/functions/function_SIZE)

[SUBLIST]({{ site.baseurl }}/reference/functions/function_SUBLIST)

[SUBMAP]({{ site.baseurl }}/reference/functions/function_SUBMAP)

[UNION]({{ site.baseurl }}/reference/functions/function_UNION)

[UNIQUE]({{ site.baseurl }}/reference/functions/function_UNIQUE)

[VALUELIST]({{ site.baseurl }}/reference/functions/function_VALUELIST)

[ZIP]({{ site.baseurl }}/reference/functions/function_ZIP)



</div>
<div class="col-sm-3">

<a name="functions-logic"></a>

### Logic structures and transfer of control

[ASSERT]({{ site.baseurl }}/reference/functions/function_ASSERT)

[BREAK]({{ site.baseurl }}/reference/functions/function_BREAK)

[CONTINUE]({{ site.baseurl }}/reference/functions/function_CONTINUE)

[DEFINED]({{ site.baseurl }}/reference/functions/function_DEFINED)

[EVAL]({{ site.baseurl }}/reference/functions/function_EVAL)

[FAIL]({{ site.baseurl }}/reference/functions/function_FAIL)

[FOREACH]({{ site.baseurl }}/reference/functions/function_FOREACH)

[FOR]({{ site.baseurl }}/reference/functions/function_FOR)

[FORSTEP]({{ site.baseurl }}/reference/functions/function_FORSTEP)

[IFTE]({{ site.baseurl }}/reference/functions/function_IFTE)

[IFT]({{ site.baseurl }}/reference/functions/function_IFT)

[MSGFAIL]({{ site.baseurl }}/reference/functions/function_MSGFAIL)

[NRETURN]({{ site.baseurl }}/reference/functions/function_NRETURN)

[RETURN]({{ site.baseurl }}/reference/functions/function_RETURN)

[STOP]({{ site.baseurl }}/reference/functions/function_STOP)

[SWITCH]({{ site.baseurl }}/reference/functions/function_SWITCH)

[UNTIL]({{ site.baseurl }}/reference/functions/function_UNTIL)

[WHILE]({{ site.baseurl }}/reference/functions/function_WHILE)


<a name="functions-stack"></a>

### Stack related functions

[<% ... %>]({{ site.baseurl }}/reference/functions/macros)

[<' ... '>]({{ site.baseurl }}/reference/functions/multiline_strings)

[&#91;]({{ site.baseurl }}/reference/functions/function_OPEN_BRACKET)

[&#93;]({{ site.baseurl }}/reference/functions/function_CLOSE_BRACKET)

[{]({{ site.baseurl }}/reference/functions/function_OPEN_MARK)

[}]({{ site.baseurl }}/reference/functions/function_CLOSE_MARK)

[AUTHENTICATE]({{ site.baseurl }}/reference/functions/function_AUTHENTICATE)

[BOOTSTRAP]({{ site.baseurl }}/reference/functions/function_BOOTSTRAP)

[COUNTTOMARK]({{ site.baseurl }}/reference/functions/function_COUNTTOMARK)

[CLEAR]({{ site.baseurl }}/reference/functions/function_CLEAR)

[CLEARTOMARK]({{ site.baseurl }}/reference/functions/function_CLEARTOMARK)

[CSTORE]({{ site.baseurl }}/reference/functions/function_CSTORE)

[DEF]({{ site.baseurl }}/reference/functions/function_DEF)

[DEPTH]({{ site.baseurl }}/reference/functions/function_DEPTH)

[DEBUGON]({{ site.baseurl }}/reference/functions/function_DEBUGON)

[DEBUGOFF]({{ site.baseurl }}/reference/functions/function_DEBUGOFF)

[DOC]({{ site.baseurl }}/reference/functions/function_DOC)

[DOCMODE]({{ site.baseurl }}/reference/functions/function_DOCMODE)

[DROP]({{ site.baseurl }}/reference/functions/function_DROP)

[DROPN]({{ site.baseurl }}/reference/functions/function_DROPN)

[DUP]({{ site.baseurl }}/reference/functions/function_DUP)

[DUPN]({{ site.baseurl }}/reference/functions/function_DUPN)

[EXPORT]({{ site.baseurl }}/reference/functions/function_EXPORT)

[FORGET]({{ site.baseurl }}/reference/functions/function_FORGET)

[LOAD]({{ site.baseurl }}/reference/functions/function_LOAD)

[MARK]({{ site.baseurl }}/reference/functions/function_MARK)

[NDEBUGON]({{ site.baseurl }}/reference/functions/function_NDEBUGON)

[PICK]({{ site.baseurl }}/reference/functions/function_PICK)

[ROLL]({{ site.baseurl }}/reference/functions/function_ROLL)

[ROLLD]({{ site.baseurl }}/reference/functions/function_ROLLD)

[ROT]({{ site.baseurl }}/reference/functions/function_ROT)

[RUN]({{ site.baseurl }}/reference/functions/function_RUN)

[STORE]({{ site.baseurl }}/reference/functions/function_STORE)

[SWAP]({{ site.baseurl }}/reference/functions/function_SWAP)

[TYPEOF]({{ site.baseurl }}/reference/functions/function_TYPEOF)

<a name="functions-platform"></a>

### Platform functions

[&lt;S ... S&gt;]({{ site.baseurl }}/reference/functions/securedscripts)

[EVALSECURE]({{ site.baseurl }}/reference/functions/function_EVALSECURE)

[IDENT]({{ site.baseurl }}/reference/functions/function_IDENT)

[JSONLOOSE]({{ site.baseurl }}/reference/functions/function_JSONLOOSE)

[JSONSTRICT]({{ site.baseurl }}/reference/functions/function_JSONSTRICT)

[LIMIT]({{ site.baseurl }}/reference/functions/function_LIMIT)

[MAXBUCKETS]({{ site.baseurl }}/reference/functions/function_MAXBUCKETS)

[MAXDEPTH]({{ site.baseurl }}/reference/functions/function_MAXDEPTH)

[MAXGTS]({{ site.baseurl }}/reference/functions/function_MAXGTS)

[MAXLOOP]({{ site.baseurl }}/reference/functions/function_MAXLOOP)

[MAXOPS]({{ site.baseurl }}/reference/functions/function_MAXOPS)

[MAXSYMBOLS]({{ site.baseurl }}/reference/functions/function_MAXSYMBOLS)

[NOOP]({{ site.baseurl }}/reference/functions/function_NOOP)

[OPS]({{ site.baseurl }}/reference/functions/function_OPS)

[RESTORE]({{ site.baseurl }}/reference/functions/function_RESTORE)

[REV]({{ site.baseurl }}/reference/functions/function_REV)

[SAVE]({{ site.baseurl }}/reference/functions/function_SAVE)

[SECUREKEY]({{ site.baseurl }}/reference/functions/function_SECUREKEY)

[TOKENINFO]({{ site.baseurl }}/reference/functions/function_TOKENINFO)

[UNSECURE]({{ site.baseurl }}/reference/functions/function_UNSECURE)

[URLFETCH]({{ site.baseurl }}/reference/functions/function_URLFETCH)

[WEBCALL]({{ site.baseurl }}/reference/functions/function_WEBCALL)



<a name="functions-gts"></a>

### Geo Time Series related functions

[ADDVALUE]({{ site.baseurl }}/reference/functions/function_ADDVALUE)

[ATINDEX]({{ site.baseurl }}/reference/functions/function_ATINDEX)

[ATTICK]({{ site.baseurl }}/reference/functions/function_ATTICK)

[ATTRIBUTES]({{ site.baseurl }}/reference/functions/function_ATTRIBUTES)

[BBOX]({{ site.baseurl }}/reference/functions/function_BBOX)

[CHUNK]({{ site.baseurl }}/reference/functions/function_CHUNK)

[CLONE]({{ site.baseurl }}/reference/functions/function_CLONE)

[CLONEEMPTY]({{ site.baseurl }}/reference/functions/function_CLONEEMPTY)

[COMMONTICKS]({{ site.baseurl }}/reference/functions/function_COMMONTICKS)

[COMPACT]({{ site.baseurl }}/reference/functions/function_COMPACT)

[CORRELATE]({{ site.baseurl }}/reference/functions/function_CORRELATE)

[DEDUP]({{ site.baseurl }}/reference/functions/function_DEDUP)

[DISCORDS]({{ site.baseurl }}/reference/functions/function_DISCORDS)

[ELEVATIONS]({{ site.baseurl }}/reference/functions/function_ELEVATIONS)

[FETCH]({{ site.baseurl }}/reference/functions/function_FETCH)

[FETCHBOOLEAN]({{ site.baseurl }}/reference/functions/function_FETCHBOOLEAN)

[FETCHDOUBLE]({{ site.baseurl }}/reference/functions/function_FETCHDOUBLE)

[FETCHLONG]({{ site.baseurl }}/reference/functions/function_FETCHLONG)

[FETCHSTRING]({{ site.baseurl }}/reference/functions/function_FETCHSTRING)

[FILLTICKS]({{ site.baseurl }}/reference/functions/function_FILLTICKS)

[FIND]({{ site.baseurl }}/reference/functions/function_FIND)

[FIRSTTICK]({{ site.baseurl }}/reference/functions/function_FIRSTTICK)

[INTEGRATE]({{ site.baseurl }}/reference/functions/function_INTEGRATE)

[ISONORMALIZE]({{ site.baseurl }}/reference/functions/function_ISONORMALIZE)

[LABELS]({{ site.baseurl }}/reference/functions/function_LABELS)

[LASTSORT]({{ site.baseurl }}/reference/functions/function_LASTSORT)

[LASTTICK]({{ site.baseurl }}/reference/functions/function_LASTTICK)

[LOCATIONS]({{ site.baseurl }}/reference/functions/function_LOCATIONS)

[LOWESS]({{ site.baseurl }}/reference/functions/function_LOWESS)

[MERGE]({{ site.baseurl }}/reference/functions/function_MERGE)

[META]({{ site.baseurl }}/reference/functions/function_META)

[METASORT]({{ site.baseurl }}/reference/functions/function_METASORT)

[MUSIGMA]({{ site.baseurl }}/reference/functions/function_MUSIGMA)

[NAME]({{ site.baseurl }}/reference/functions/function_NAME)

[NEWGTS]({{ site.baseurl }}/reference/functions/function_NEWGTS)

[NONEMPTY]({{ site.baseurl }}/reference/functions/function_NONEMPTY)

[NORMALIZE]({{ site.baseurl }}/reference/functions/function_NORMALIZE)

[NSUMSUMSQ]({{ site.baseurl }}/reference/functions/function_NSUMSUMSQ)

[PARSESELECTOR]({{ site.baseurl }}/reference/functions/function_PARSESELECTOR)

[PARTITION]({{ site.baseurl }}/reference/functions/function_PARTITION)

[PATTERNDETECTION]({{ site.baseurl }}/reference/functions/function_PATTERNDETECTION)

[PATTERNS]({{ site.baseurl }}/reference/functions/function_PATTERNS)

[QUANTIZE]({{ site.baseurl }}/reference/functions/function_QUANTIZE)

[RANGECOMPACT]({{ site.baseurl }}/reference/functions/function_RANGECOMPACT)

[RELABEL]({{ site.baseurl }}/reference/functions/function_RELABEL)

[RENAME]({{ site.baseurl }}/reference/functions/function_RENAME)

[RESETS]({{ site.baseurl }}/reference/functions/function_RESETS)

[RLOWESS]({{ site.baseurl }}/reference/functions/function_RLOWESS)

[RSORT]({{ site.baseurl }}/reference/functions/function_RSORT)

[RVALUESORT]({{ site.baseurl }}/reference/functions/function_RVALUESORT)

[SETATTRIBUTES]({{ site.baseurl }}/reference/functions/function_SETATTRIBUTES)

[SETVALUE]({{ site.baseurl }}/reference/functions/function_SETVALUE)

[SHRINK]({{ site.baseurl }}/reference/functions/function_SHRINK)

[SINGLEEXPONENTIALSMOOTHING]({{ site.baseurl }}/reference/functions/function_SINGLEEXPONENTIALSMOOTHING)

[SORT]({{ site.baseurl }}/reference/functions/function_SORT)

[SORTBY]({{ site.baseurl }}/reference/functions/function_SORTBY)

[STANDARDIZE]({{ site.baseurl }}/reference/functions/function_STANDARDIZE)

[TICKINDEX]({{ site.baseurl }}/reference/functions/function_TICKINDEX)

[TICKLIST]({{ site.baseurl }}/reference/functions/function_TICKLIST)

[TICKS]({{ site.baseurl }}/reference/functions/function_TICKS)

[TIMECLIP]({{ site.baseurl }}/reference/functions/function_TIMECLIP)

[TIMEMODULO]({{ site.baseurl }}/reference/functions/function_TIMEMODULO)

[TIMESCALE]({{ site.baseurl }}/reference/functions/function_TIMESCALE)

[TIMESHIFT]({{ site.baseurl }}/reference/functions/function_TIMESHIFT)

[TIMESPLIT]({{ site.baseurl }}/reference/functions/function_TIMESPLIT)

[TOSELECTOR]({{ site.baseurl }}/reference/functions/function_TOSELECTOR)

[UNWRAP]({{ site.baseurl }}/reference/functions/function_UNWRAP)

[UPDATE]({{ site.baseurl }}/reference/functions/function_UPDATE)

[VALUES]({{ site.baseurl }}/reference/functions/function_VALUES)

[VALUEDEDUP]({{ site.baseurl }}/reference/functions/function_VALUEDEDUP)

[VALUEHISTOGRAM]({{ site.baseurl }}/reference/functions/function_VALUEHISTOGRAM)

[VALUESORT]({{ site.baseurl }}/reference/functions/function_VALUESORT)

[VALUESPLIT]({{ site.baseurl }}/reference/functions/function_VALUESPLIT)

[WRAP]({{ site.baseurl }}/reference/functions/function_WRAP)

[WRAPRAW]({{ site.baseurl }}/reference/functions/function_WRAPRAW)

[ZSCORE]({{ site.baseurl }}/reference/functions/function_ZSCORE)

#### Outlier detection

[THRESHOLDTEST]({{ site.baseurl }}/reference/functions/function_THRESHOLDTEST)

[ZSCORETEST]({{ site.baseurl }}/reference/functions/function_ZSCORETEST)

[GRUBBSTEST]({{ site.baseurl }}/reference/functions/function_GRUBBSTEST)

[ESDTEST]({{ site.baseurl }}/reference/functions/function_ESDTEST)

[STLESDTEST]({{ site.baseurl }}/reference/functions/function_STLESDTEST)

[HYBRIDTEST]({{ site.baseurl }}/reference/functions/function_HYBRIDTEST)

[HYBRIDTEST2]({{ site.baseurl }}/reference/functions/function_HYBRIDTEST2)

<a name="functions-bucketized-gts"></a>

### Bucketized Geo Time Series related functions

[ATBUCKET]({{ site.baseurl }}/reference/functions/function_ATBUCKET)

[BUCKETCOUNT]({{ site.baseurl }}/reference/functions/function_BUCKETCOUNT)

[BUCKETSPAN]({{ site.baseurl }}/reference/functions/function_BUCKETSPAN)

[CROP]({{ site.baseurl }}/reference/functions/function_CROP)

[FILLNEXT]({{ site.baseurl }}/reference/functions/function_FILLNEXT)

[FILLPREVIOUS]({{ site.baseurl }}/reference/functions/function_FILLPREVIOUS)

[FILLVALUE]({{ site.baseurl }}/reference/functions/function_FILLVALUE)

[INTERPOLATE]({{ site.baseurl }}/reference/functions/function_INTERPOLATE)

[LASTBUCKET]({{ site.baseurl }}/reference/functions/function_LASTBUCKET)

[STL]({{ site.baseurl }}/reference/functions/function_STL)

[UNBUCKETIZE]({{ site.baseurl }}/reference/functions/function_UNBUCKETIZE)

<a name="functions-geo"></a>

### Geo manipulation functions  

[GEO.DIFFERENCE]({{ site.baseurl }}/reference/functions/function_GEO_DIFFERENCE)

[GEO.INTERSECTION]({{ site.baseurl }}/reference/functions/function_GEO_INTERSECTION)

[GEO.INTERSECTS]({{ site.baseurl }}/reference/functions/function_GEO_INTERSECTS)

[GEO.UNION]({{ site.baseurl }}/reference/functions/function_GEO_UNION)

[GEO.WITHIN]({{ site.baseurl }}/reference/functions/function_GEO_WITHIN)

[GEO.WKT]({{ site.baseurl }}/reference/functions/function_GEO_WKT)

[HAVERSINE]({{ site.baseurl }}/reference/functions/function_HAVERSINE)

</div>
