---
title: "WarpScript functions"
layout: "function"
isPage: "true"
categoryTree: ["functions","functions.html.md.eco"]
oldPath: ["30-functions","00-functions.html.md.eco"]
category: "reference"
---


The following functions can be used to manipulate the stack or Geo Time Series. They are used outside of WarpScript frameworks and are therefore called *standalone functions*.

### Constant values ###


* [NOW]({{ site.baseurl}}/reference/functions/function_NOW)

* [pi]({{ site.baseurl}}/reference/functions/function_pi)
* [e]({{ site.baseurl}}/reference/functions/function_e)

* [NaN]({{ site.baseurl}}/reference/functions/function_NaN)


### Mathematical functions and operators ###

Mathematical functions and unary operators

* [ABS]({{ site.baseurl}}/reference/functions/function_ABS)
* [!]({{ site.baseurl}}/reference/functions/function_NOT)

* [CEIL]({{ site.baseurl}}/reference/functions/function_CEIL)
* [FLOOR]({{ site.baseurl}}/reference/functions/function_FLOOR)
* [ROUND]({{ site.baseurl}}/reference/functions/function_ROUND)

* [SIGNUM]({{ site.baseurl}}/reference/functions/function_SIGNUM)

* [TODOUBLE]({{ site.baseurl}}/reference/functions/function_TODOUBLE)
* [TOLONG]({{ site.baseurl}}/reference/functions/function_TOLONG)
* [TOSTRING]({{ site.baseurl}}/reference/functions/function_TOSTRING)

* [COS]({{ site.baseurl}}/reference/functions/function_COS)
* [COSH]({{ site.baseurl}}/reference/functions/function_COSH)
* [ACOS]({{ site.baseurl}}/reference/functions/function_ACOS)

* [SIN]({{ site.baseurl}}/reference/functions/function_SIN)
* [SINH]({{ site.baseurl}}/reference/functions/function_SINH)
* [ASIN]({{ site.baseurl}}/reference/functions/function_ASIN)

* [SQRT]({{ site.baseurl}}/reference/functions/function_SQRT)
* [CBRT]({{ site.baseurl}}/reference/functions/function_CBRT)
* [EXP]({{ site.baseurl}}/reference/functions/function_EXP)
* [LOG]({{ site.baseurl}}/reference/functions/function_LOG)

* [NPDF]({{ site.baseurl}}/reference/functions/function_NPDF)

* [RAND]({{ site.baseurl}}/reference/functions/function_RAND)

Binary operators

* [+]({{ site.baseurl}}/reference/functions/function_ADD)
* [-]({{ site.baseurl}}/reference/functions/function_SUB)
* [*]({{ site.baseurl}}/reference/functions/function_MUL)
* [/]({{ site.baseurl}}/reference/functions/function_DIV)
* [%]({{ site.baseurl}}/reference/functions/function_MOD)
* [**]({{ site.baseurl}}/reference/functions/function_POW)

* [==]({{ site.baseurl}}/reference/functions/function_EQ)
* [~=]({{ site.baseurl}}/reference/functions/function_ALMOSTEQ)
* [!=]({{ site.baseurl}}/reference/functions/function_NE)
* [<]({{ site.baseurl}}/reference/functions/function_LT)
* [>]({{ site.baseurl}}/reference/functions/function_GT)
* [<=]({{ site.baseurl}}/reference/functions/function_LE)
* [>=]({{ site.baseurl}}/reference/functions/function_GE)

* [MAX]({{ site.baseurl}}/reference/functions/function_MAX)
* [MIN]({{ site.baseurl}}/reference/functions/function_MIN)


### Standalone functions ###

Date functions

* [DURATION]({{ site.baseurl }}/einstein/function_DURATION)
* [ISO8601]({{ site.baseurl }}/einstein/function_ISO8601)

String functions

* [MATCH]({{ site.baseurl }}/einstein/function_MATCH)
* [SPLIT]({{ site.baseurl}}/reference/functions/function_SPLIT)
* [URLDECODE]({{ site.baseurl}}/reference/functions/function_URLDECODE)


### Lists and maps functions ###

* [SIZE]({{ site.baseurl }}/einstein/function_SIZE)

* [[]]({{ site.baseurl }}/einstein/function_EMPTYLIST)
* [{}]({{ site.baseurl }}/einstein/function_EMPTYMAP)

* [->LIST]({{ site.baseurl }}/einstein/function_TOLIST)
* [LIST->]({{ site.baseurl }}/einstein/function_LISTTO)

* [->MAP]({{ site.baseurl }}/einstein/function_TOMAP)
* [MAP->]({{ site.baseurl }}/einstein/function_MAPTO)
* [PUT]({{ site.baseurl }}/einstein/function_PUT)
* [GET]({{ site.baseurl }}/einstein/function_GET)

* [APPEND]({{ site.baseurl }}/einstein/function_APPEND)
* [REMOVE]({{ site.baseurl }}/einstein/function_REMOVE)

* [FLATTEN]({{ site.baseurl }}/einstein/function_FLATTEN)
* [LSORT]({{ site.baseurl }}/einstein/function_LSORT)
* [MSORT]({{ site.baseurl }}/einstein/function_MSORT)

* [CONTAINS]({{ site.baseurl }}/einstein/function_CONTAINS)
* [CONTAINSKEY]({{ site.baseurl }}/einstein/function_CONTAINSKEY)
* [CONTAINSVALUE]({{ site.baseurl }}/einstein/function_CONTAINSVALUE)

* [KEYLIST]({{ site.baseurl }}/einstein/function_KEYLIST)
* [VALUELIST]({{ site.baseurl }}/einstein/function_VALUELIST)

* [REVERSE]({{ site.baseurl }}/einstein/function_REVERSE)
* [CLONEREVERSE]({{ site.baseurl }}/einstein/function_CLONEREVERSE)

* [UNIQUE]({{ site.baseurl }}/einstein/function_UNIQUE)

* [SUBLIST]({{ site.baseurl }}/einstein/function_SUBLIST)
* [SUBMAP]({{ site.baseurl }}/einstein/function_SUBMAP)

### Logic structures ###

* [IFT]({{ site.baseurl }}/einstein/function_IFT)
* [IFTE]({{ site.baseurl }}/einstein/function_IFTE)

### Stack related functions ###

* [CLEAR]({{ site.baseurl }}/einstein/function_CLEAR)

* [DUP]({{ site.baseurl }}/einstein/function_DUP)
* [DUPN]({{ site.baseurl }}/einstein/function_DUPN)

* [CLONE]({{ site.baseurl }}/einstein/function_CLONE)


* [DROP]({{ site.baseurl }}/einstein/function_DROP)
* [DROPN]({{ site.baseurl }}/einstein/function_DROPN)

* [SWAP]({{ site.baseurl }}/einstein/function_SWAP)
* [ROT]({{ site.baseurl }}/einstein/function_ROT)
* [ROLL]({{ site.baseurl }}/einstein/function_ROLL)
* [ROLLD]({{ site.baseurl }}/einstein/function_ROLLD)

* [PICK]({{ site.baseurl }}/einstein/function_PICK)

* [DEPTH]({{ site.baseurl }}/einstein/function_DEPTH)

* [EVAL]({{ site.baseurl }}/einstein/function_EVAL)

* [STORE]({{ site.baseurl }}/einstein/function_STORE)

* [ASSERT]({{ site.baseurl}}/reference/functions/function_ASSERT)
* [FAIL]({{ site.baseurl}}/reference/functions/function_FAIL)

### Geo Time Series related functions ###

* [FETCH]({{ site.baseurl }}/einstein/function_FETCH)
* [NEWGTS]({{ site.baseurl }}/einstein/function_NEWGTS)
* [ADDVALUE]({{ site.baseurl }}/einstein/function_ADDVALUE)



* [TICKS]({{ site.baseurl }}/einstein/function_TICKS)
* [NAME]({{ site.baseurl }}/einstein/function_NAME)
* [TICKLIST]({{ site.baseurl}}/reference/functions/function_TICKLIST)
* [LABELS]({{ site.baseurl }}/einstein/function_LABELS)
* [LOCATIONS]({{ site.baseurl }}/einstein/function_LOCATIONS)
* [ELEVATIONS]({{ site.baseurl }}/einstein/function_ELEVATIONS)
* [VALUES]({{ site.baseurl }}/einstein/function_VALUES)

* [RENAME]({{ site.baseurl }}/einstein/function_RENAME)
* [RELABEL]({{ site.baseurl }}/einstein/function_RELABEL)

* [ATINDEX]({{ site.baseurl }}/einstein/function_ATINDEXN)
* [ATTICK]({{ site.baseurl }}/einstein/function_ATTICK)

* [SORT]({{ site.baseurl }}/einstein/function_SORT)
* [RSORT]({{ site.baseurl }}/einstein/function_RSORT)

* [FILLTICKS]({{ site.baseurl }}/einstein/function_FILLTICKS)
* [SHRINK]({{ site.baseurl }}/einstein/function_SHRINK)

* [PARSESELECTOR]({{ site.baseurl }}/einstein/function_PARSESELECTOR)
* [TOSELECTOR]({{ site.baseurl }}/einstein/function_TOSELECTOR)
* [FIND]({{ site.baseurl }}/einstein/function_FIND)

* [FIRSTTICK]({{ site.baseurl }}/einstein/function_FIRSTTICK)
* [LASTTICK]({{ site.baseurl }}/einstein/function_LASTTICK)


* [NORMALIZE]({{ site.baseurl }}/einstein/function_NORMALIZE)
* [ISONORMALIZE]({{ site.baseurl }}/einstein/function_ISONORMALIZE)

* [MUSIGMA]({{ site.baseurl}}/reference/functions/function_MUSIGMA)

* [TIMECLIP]({{ site.baseurl }}/einstein/function_TIMECLIP)
* [TIMEMODULO]({{ site.baseurl }}/einstein/function_TIMEMODULO)
* [TIMESHIFT]({{ site.baseurl }}/einstein/function_TIMESHIFT)
* [TIMESPLIT]({{ site.baseurl }}/einstein/function_TIMESPLIT)



* [COMPACT]({{ site.baseurl }}/einstein/function_COMPACT)
* [RANGECOMPACT]({{ site.baseurl }}/einstein/function_RANGECOMPACT)
* [MERGE]({{ site.baseurl }}/einstein/function_MERGE)
* [NONEMPTY]({{ site.baseurl }}/einstein/function_NONEMPTY)
* [RESETS]({{ site.baseurl }}/einstein/function_RESETS)
* [STANDARDIZE]({{ site.baseurl }}/einstein/function_STANDARDIZE)


### Bucketized Geo Time Series related functions ###

* [FILLNEXT]({{ site.baseurl }}/einstein/function_FILLNEXT)
* [FILLPREVIOUS]({{ site.baseurl }}/einstein/function_FILLPREVIOUS)
* [FILLVALUE]({{ site.baseurl }}/einstein/function_FILLVALUE)

* [ATBUCKET]({{ site.baseurl }}/einstein/function_ATBUCKET)
* [BUCKETCOUNT]({{ site.baseurl }}/einstein/function_BUCKETCOUNT)
* [BUCKETSPAN]({{ site.baseurl }}/einstein/function_BUCKETSPAN)
* [CROP]({{ site.baseurl }}/einstein/function_CROP)
* [LASTBUCKET]({{ site.baseurl }}/einstein/function_LASTBUCKET)
* [UNBUCKETIZE]({{ site.baseurl }}/einstein/function_UNBUCKETIZE)


### Platform functions ###

* [JSONSTRICT]({{ site.baseurl }}/einstein/function_JSONSTRICT)
* [JSONLOOSE]({{ site.baseurl }}/einstein/function_JSONLOOSE)


### Geo manipulation functions ###

Most of geo-related functions aren't publically documented yet. If you need
to use them, please contact us at [contact@cityzendata.com](mailto:contact@cityzendata.com)

* [GEO.WKT]({{ site.baseurl}}/reference/functions/function_GEO_WKT)
* GEO.INTERSECTION
* GEO.SUBTRACTION
* GEO.UNION
