---
title: "Getting started - Creating your own data files"
layout: "function"
isPage: "true"
link: "/gettingStarted/process"
categoryTree: ["getting-stated"]
oldPath: ["3_Process","01-createData.html.md"]
category: "getting-started"
---


This section aimed is to present how to structure data in order to push them successfully. At the end of this page, a structured data file is available as example. Data contained on this file will be used later to complete some step of this tutorial.

## Data Structure ##

To write data, the following form have to be respected.

```
   TS/LAT:LON/ELEV NAME{LABELS} VALUE
```

Here the seven parameter of a GTS Input format are presented. Only the name of the GTS is mandatory.

<div class="panel panel-default">
  <div class="panel-body"><table class="table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>TS</code></td>
          <td>Timestamp of the reading, in <b>microseconds</b> since the Unix Epoch</td>
        </tr>
        <tr>
          <td><code>LAT:LON</code></td>
          <td>*Optional* geographic coordinates of the reading, using [WGS84](http://en.wikipedia.org/wiki/WGS84)</td>
        </tr>
        <tr>
          <td><code>ELEV</code></td>
          <td>*Optional* elevation of the reading, in millimeters</td>
        </tr>
        <tr>
          <td><code>NAME</code></td>
          <td>Class name of the reading as a [URL encoded](http://en.wikipedia.org/wiki/Percent-encoding) UTF-8 character string. The encoding of character `{` (Unicode *LEFT CURLY BRACKET*, *0x007B*) is MANDATORY.</td>
        </tr>
         <tr>
          <td><code>LABELS</code></td>
          <td>Comma separated list of labels, using the syntax `key=value` where both `key` and `value` are URL encoded UTF-8 character strings. If a key or value contains `,` (Unicode COMMA, 0x002C),`}` (Unicode RIGHT CURLY BRACKET, 0x007D) or `=` (Unicode EQUALS SIGN, 0x003D), those characters MUST be encoded.</td>
        </tr>
        <tr>
          <td><code>VALUE</code></td>
          <td>The value of the reading. It can be of one of four types: `LONG`, `DOUBLE`, `BOOLEAN`, `STRING`</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Data example ##

Those lines are valid data-form.

```
1380475081000000// foo{label0=val0,label1=val1} 123
/48.0:-4.5/ bar{label0=val0} 3.14
1380475081123456/45.0:-0.01/10000000 foobar{label1=val1} 'string'
// foo{label0=val0,label1=val1} true
/49.0:-4.6/ bar{} 42
```

If no timestamp are declared, then the timestamp associated will be the one of the engine when the data are pushed. As value, you can push boolean, long, double or string. In order to push a string you have to put some quote around it.

## Example file ##

[Here, a file]({{ site.baseurl }}/assets/data/drones) containing some example data to push in an application.  This data set contain 10 GTS simulating captors integrated in 5 drones. Each drone have two captors one counting fly times, one corresponding to a GPS sensor recording current position and registering a boolean value true only if the drone moves.


-----------------------------------

In the [next step]({{ site.baseurl }}/getting-started/push-data) of this *getting started* you will learn to push your data into a Warp10 instance.
