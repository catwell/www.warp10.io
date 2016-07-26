---
title: Data modeling
layout: function
isPage: true
category: howto
---




## Classname and labels

All data in Warp 10 is stored as [Geo-Time Series (GTS)](http://www.warp10.io/introduction/platform/#geo-time-seriessupsup). GTS are streams of datapoints, each datapoint defined by a timestamp, a position (optional) and a value. Every GTS is uniquely identified by its *classname* and its *labels*.

The *classname* of a GTS defines the metric, the measured feature (e.g. temperature, pressure, load...), and the *labels* are *key-value* pairs that allow to identify an instance of this metric (e.g. sensor id, owner...). Any changes on labels (changing any label value, adding or removing a label...) create a new GTS.

In this doc we will use a compact notation to describe a GTS classname and labels, `<classname>{<label key>=<label value>, ...}`.

### Example

Let's say we want have some connected weather sensors and we want to store their data into Warp 10. For this example, each weather sensor produces two different metrics: temperature and atmospheric pressure, and we know its owner and an identifiant (like a serial number).

There are two measurable features, temperature and pressure, so we define two classnames: `temperature` and `pressure`, and two label keys: `owner` and `sensor_id`.  

Then every sensor will generate two GTS:

```
temperature{sensorId=XXXX,owner=YYYY}
pressure{sensorId=XXXX,owner=YYYY}
```

where `XXXX` is the sensor id and `YYYY` the owner for that sensor.
