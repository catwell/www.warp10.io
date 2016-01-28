---
title: "Getting started - Getting data from the platform"
layout: "function"
isPage: "true"
link: "/gettingStarted/process"
categoryTree: ["getting-stated"]
oldPath: ["3_Process","02-getData.html.md"]
category: "getting-started"
---


Data is now available inside warp. In this page some methods are given to explain how fetching data is done on Warp 10. To directly access the data stored in an application. The first method available to use is `curl`. The second one will introduce WarpScript and how to create a WarpScript script.

## Using `curl` ##

The following simple command is a first introduction to `curl` requests. This will load data contained inside GTS, which have a named starting by the this string `example.drone.captor`. The selector parameter defines the pattern that the GTS have to match to be fetched. `{}` correspond to the labels.  This command load data points starting from the `now` parameter (in this example, 1449222473312000 micro-seconds after Epoch). As `timespan` equals -10, Warp10 will only fetch the last ten data points before `now`. A positive timespan corresponds to a duration, a negative one to a number of data points to get.

```
curl -H 'X-Warp10-Token: TOKEN_READ' --data-binary "now=1449222473312000&timespan=-10&selector=~example.drone.captor.*{}" 'https://API_ENDPOINT/api/v0/fetch?'
```

To find more information about the Fetch API to get data, please refers on the page [Fetch API]({{ site.baseurl }}/apis/fetch).

Note that the data returned by the Fetch API can be fed into the `update` endpoint verbatim.


## Using WarpScript ##

The second way to fetch data is to execute WarpScript scripts. Store the following small script in a file `file.mc2`.

```
'Your read token'  // Put your token on the stack
'token' STORE // Store it in a variable
[ $token '~example.drone.*' { 'source' 'example' } NOW -10 ] FETCH  // Fetch the data
```

This command looks for all your GTS having a name matching `example.drone` and having the label `source` equals to `example`. Then only the last ten points of those GTS before time equals to NOW will be extracted.

Launch the following `curl` command to submit your WarpScript and get your data.

```
curl -H 'Transfer-Encoding:chunked' --data-binary @file.mc2 'https://API_ENDPOINT/api/v0/exec'
```

This script can also be launched in [Quantum](/quantum/). Besides, Quantum gives the possibility to plot GTS extracted on a graph.

-----------------------------------

In the [next step]({{ site.baseurl }}/getting-started/analyze-data) of this *getting started* you see leanrn how to use WarpScript to analyse your data directly in a Warp10 instance.
