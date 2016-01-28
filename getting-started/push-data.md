---
title: "Getting started - pushing some data"
layout: "function"
isPage: "true"
link: "/gettingStarted/process"
categoryTree: ["getting-stated"]
oldPath: ["3_Process","03-pushData.html.md"]
category: "getting-started"
---


This section gives some explanation about pushing data using Curl. To find more methods : for example to push data using Post HTTP or Web Socket, please refers to the documentation pages [Pushing data]({{ site.baseurl }}/howto/pushing-data) and [Pushing data using the WebSocket interface]({{ site.baseurl }}//howto/websocket-push).

## Pushing data using `curl` ##

Pushing data can quickly be done using `curl`. A `curl` request must have the following form.

```
curl -H 'X-Warp10-Token: TOKEN_WRITE' -H 'Transfer-Encoding: chunked' --data-binary @METRICS_FILE 'https://API_ENDPOINT/api/v0/update'
```

Replace TOKEN_WRITE by the token saw on the credential page, METRICS_FILE by the URL of the file saved on previous page, or by an url of your own file containing data and replace API_ENDPOINT by the one available on your application page.

It also possible to push single data points using curl. A quick example is given below.

```
curl -H 'X-Warp10-Token: TOKEN_WRITE' -H 'Transfer-Encoding: chunked' --data-binary "1380475081000000// foo{label0=val0,label1=val1} 42" 'https://API_ENDPOINT/api/v0/update'
```

## Deleting data ##

The following simple command deletes an entire GTS using CURL (find the GTS named "foo" and delete it). To get more information about deleting data points and GTS, please refers to the documentation page [Delete API]({{ site.baseurl }}/apis/delete).

```
curl -H 'X-Warp10-Token: TOKEN_WRITE' 'https://API_ENDPOINT/api/v0/delete?deleteall&selector~=foo\{\}'
```

-----------------------------------

In the [next step]({{ site.baseurl }}/getting-started/get-data) of this *getting started* you will learn to fetch data from a Warp10 instance.
