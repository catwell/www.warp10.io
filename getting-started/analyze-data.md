---
title: "Getting started - First analysis"
layout: "function"
isPage: "true"
link: "/gettingStarted/process"
categoryTree: ["getting-stated"]
oldPath: ["3_Process","04-analyzeData.html.md"]
category: "getting-started"
---

The data is available and ready to be processed. This section introduces some small scripts to begin to compute and extract information from them. In the previous page, a first warpscript script was realized. Now it's time to improve it to extract information about the data.

## How to run a WarpScript ##

* With a curl request, write your WarpScript code inside a file.mc2 and then run the following curl request. If everything is OK, you should receive a HTTP 200 OK with your datapoint in JSON format.
```
curl -H 'Transfer-Encoding:chunked' --data-binary @file.mc2 'https://API_ENDPOINT/api/v0/exec'
```

## Compute the mean of all data points ##

Get all the sensor GTS.

```
'Your read token'  // Put your token on the stack
'token' STORE // Store it in a variable
[ $token '~example.drone.*' { 'type' 'captor.time' } NOW -1000 ] FETCH  // Fetch the data
```

Now a `BUCKETIZE` function will be used.

```
[ SWAP bucketizer.mean 0 0 1 ] BUCKETIZE
```

What happened here is that all captor.time GTS are on top of the stack in one list. We swap it with "\[" so we can included it in the parameter list of the function `BUCKETIZE`. This function will apply a *bucketizer* for each GTS to synchronized the ticks. The only parameter given is a *bucketcount* which correspond to the number of bucket expected. The goal here is to compute the mean of all the data points, that's why 1 is given as parameter. To find more information, please refers to the documentation page [`BUCKETIZE`]({{ site.baseurl }}/reference/frameworks/framework-bucketize).

* What is on the stack now ? There is five GTS containing one tick which have a value equals to the mean of all the data points of the GTS. Moreover, those GTS have their ticks synchronized.

## Compute multiple mean for a GTS with a duration of 2 minutes ##

Get all the GTS of all the sensors.

```
'Your read token'           // Put your token on the stack
'token' STORE               // Store it in a variable
[
  $token
  '~example.drone.*'
  { 'type' 'captor.time' }
  NOW -1000
] FETCH  // Fetch the data
```

Get the last timestamp of the GTS. As all GTS are synchronized, they all have the same last timestamp. So here we can get the first GTS fetched and get its last tick.

```
'gts' STORE                 // Store the GTS list in a variable
$gts 0 GET                  // Get the first element, the first matching GTS
LASTTICK                    // Get the last tick of that GTS
'lasttick' STORE            // Store it
```

Now a `BUCKETIZE` function will be used.

```
[
  $gts
  bucketizer.mean
  $lasttick
  120 STU *
  0
] BUCKETIZE
```

What happened here : this WarpScript will generate buckets starting from the last tick and having a duration of 2 minutes. `STU` correspond to the number of time units in seconds (bucket have a duration of 120 * 1 second). As many bucket as necessary will be generated for each GTS. Those buckets will have values equals to the mean of all data points inside two minutes. Moreover the timestamp of each bucket of each GTS are now synchronized.

## Get how many drones are flying at each timestamp ##

Get all the GPS metrics.

```
'Your read token'  // Put your token on the stack
'token' STORE // Store it in a variable
[ $token '~example.drone.*' { 'type' 'gps.state'  } NOW -1000 ] FETCH // Fetch the data
```

Get the last timestamp.

```
'gts' STORE                 // Store the GTS list in a variable
$gts 0 GET                  // Get the first element, the first matching GTS
LASTTICK                    // Get the last tick of that GTS
'lasttick' STORE            // Store it
```

`BUCKETIZE` is used to have a bucket size of 1 seconds. To compute an OR, *bucketizer* max will be used (for the operator and, use min).

```
[ $gts bucketizer.max $lastt STU 0 ] BUCKETIZE
'bucketized_gts' STORE
```

Now that the ticks are synchronized, execute an operation on this list of GTS to get the number of flying drones at each times. The values in the GTS are boolean ones, but they can be converted in integer (true is 1, and false 0) in order to apply numerical function on it. The operator of the framework `APPLY` will the be used here. Parameter "[]" equals to a list of labels that have to respect each GTS.  To find more information, please refers to the documentation page [`APPLY`]({{ site.baseurl}}/reference/frameworks/framework-apply).

  ```
  [ $bucketized_gts [] op.add ] APPLY
  ```

Now you can simply compute the mean of this new GTS, or for example the mean by minute during the fly.

## Find all objects near starting point at each timestamp ##

Get all the GPS metrics.

```
'Your read token'  // Put your token on the stack
'token' STORE // Store it in a variable
[ $token '~example.drone.*' { 'type' 'gps.state'  } NOW -1000 ] FETCH // Fetch the data
```

Get the last timestamp.

```
'gts' STORE                 // Store the GTS list in a variable
$gts 0 GET                  // Get the first element, the first matching GTS
LASTTICK                    // Get the last tick of that GTS
'lasttick' STORE            // Store it
```

`BUCKETIZE` is used to get a bucket size of 1 seconds. To compute an OR, *bucketizer* max will be used (for the operator and, use min).

```
[ $gts bucketizer.max $lastt STU 0 ] BUCKETIZE
'bucketized_gts' STORE
```

Find all points in the area around the starting point (Correspond to a square which have a size equals to 5 steps (one step equals to a movement of 0.01 in latitude or longitude)). To find more information, please refers to the documentation page [`MAP`]({{ site.baseurl}}/reference/frameworks/framework-map).

```
[
  $bucketized_gts
  'POLYGON((-4.539472 48.415777,-4.539472 48.315777,-4.439472 48.315777,-4.439472 48.415777, -4.539472 48.415777))'
  0.1 true GEO.WKT

  mapper.geo.within
  0 0 0         // Sliding window of 1 (0 pre and 0 post), no options
]
MAP
```

The three 0 correspond to the option of the Geo within. For example, a window integrating x previous and y following points in the area are required to considered current point as valid.

To conclude, calculate speed of drones for each timestamp when they are in the starting area.

```
[
  SWAP
  mapper.hspeed
  // pre-window
  3
  // post-window
  0
  // occurrences
  0
]
MAP
```

Here it's same than in previous case. A sliding window is necessary to compute the speed at each timestamp of the drone. So that's why 3 points are taken before and none after the current tick.

To have realistic result this calculation have to be included before the previous step which kept only the data points in a small area near the starting point.

Finally, you already know how to compute the average speed and in the same way you can compute a lot of other statistics. You will find more information about the supported function in the rest of the documentation. Here you can find a page resuming all the [existing warpscript functions]({{ site.baseurl}}/reference/full-function-list).

-----------------------------------

Access [here]({{ site.baseurl }}/howto/intro-bucketize) to the *`BUCKETIZE` tutorial*, it will give you more explanation about this important framework in the GTS analysis.
