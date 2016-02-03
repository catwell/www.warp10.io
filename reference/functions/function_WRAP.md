---
title: "WRAP"
layout: function
desc: "Encode efficiently a Geo Time Series or a list thereof into a string."
category: reference
---

Encode efficiently a Geo Time Series or a list thereof into a string. This function is handy when you want to provide data without giving away an access token.

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">NEWGTS
1 100
<% DUP DUP DUP DUP ADDVALUE %>
FOR
WRAP
</warp10-warpscript-widget>
{% endraw %}    

## Unit Test ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">NEWGTS
1 100
<% DUP DUP DUP DUP ADDVALUE %>
FOR
WRAP
'60V.5k.L.0N.5k..KV.NWFBUXkV.........IO7WHoCG57Njdsrx.7gg2OgBatY5aZlgKhDk2Q5iqqHBqwFZ4_ayA.Y2NGbYXVnQL2oRG2XRBhQ5tAgEkjjm_XTyrzSwMfXOulSLtsPMQ_PQA9p.Zk06uvNKP6JqKa03V6nUgk8EzRk94.HNpdSLs6rKh4QkoH6.TLhf0Qevr.fR37.4UL280i1Q.1lN.lgq.4g1g50UkH8Y.p.Y..jeF8BCk230LB1d4YZQV3R14ExjBD.83q099XWOo.Os.eReikGVFFzV1Kmbj1J.1nWKmGCLk8c.AD.u8JzNKT.n.eW7MZMm9d8MZQm9t4JZfm8t4RafH4t4wXdHJ851XWGJd9.X0GJde3W0GFceJ_1GVccJK9Hc7ZJK9Pd7JJL99_8JZP9944LZe1844HaeH3_4HXdHJd5HXdGJd9FX8GJdeJW8GJceJ_9GrgN3T8orfB2AsR.92.bkRESf0Ttzfer.5F4DfvugkB_wQ.JP02Ws6_XSykCjkTFS4.J..0Pc403.' == ASSERT
'unit test successful'
</warp10-warpscript-widget>
{% endraw %}   