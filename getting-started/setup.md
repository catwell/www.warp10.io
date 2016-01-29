---
title: "Getting Started - Setup"
layout: "function"
isPage: "true"
link: "/gettingStarted/setup"
categoryTree: ["getting-stated"]
oldPath: ["1_setup","00-setup.html.md"]
category: "getting-stated"
---


## What will you need

This tutorial explains, how to setup our platform using [Docker](https://www.docker.com/). Our `Dockerfile` to create a container image for [Warp10](https://www.warp10.io/) is available on github.

## Clone the repository 

```
  git clone https://github.com/cityzendata/warp10-docker.git
```

## Build the Warp 10 image

Enter in docker-warp10 directory and execute `docker build` inside your local copy

```
cd warp10-docker
docker build -t warp10/warp10:1.0.1 .
```

## Start the Image 

### First Step - Warp 10 daemon

Run a container on daemon mode to start the Warp10 platform using:

```
docker run -p 8080:8080 -d -i warp10/warp10:1.0.1
```

### Second Step - Worf Cliend

The precedent command starts the platform in daemon mode. In order to manage the user/token/application system, an interactive access to Warp10's [Worf](http://www.warp10.io/tools/worf) component is needed. You get it by starting another container in interactive mode:

```
docker run -t -i warp10/warp10:1.0.1 worf.sh
```

This command must be executed when the platform is used for the first time. This container run in interactive mode with Worf, in order to:

  * Generate a WRITE token
  * Generate a READ token

*For both of them, choose a big enough TTL (in microseconds). Our recommendation is a value of at least 3600000000 (one hour).*

To generate a token inside worf, enter the following command and follow the procedure.

```
encodeToken
```

By choosing a new application name, you create a new application. This application will be instanciated only after a push on it.

## Push some data using your WRITE token

Once your token are generated, to push some data in the platform using enter the following command replacing YOUR_WRITE_TOKEN, by your real write token.

```
curl -v -H 'X-Warp10-Token: YOUR_WRITE_TOKEN' --data-binary "1// test{} 42" 'http://127.0.0.1:8080/api/v0/update'
```
If everything is OK, you should receive a HTTP 200

*When using Docker on a mac or Windows, there is no binding between Warp 10 API address and the host (docker is runned throw a Virtual Machine). To reach Warp10 you need to replace 127.0.0.1 by the real Ip address of the container. To get it, use a simple `docker inspect <container id>`, the container address is also shown in the Settings/Ports page of your container.*

*On Windows, there is not curl available on PowerShell. You can use the git batch to execute a curl, or use any tool to execute a [POST]({{ site.baseurl }}/howto/pushing-data). Docker also run a Virtual Machine on Windows, meaning there is no binding between the host and Warp 10. To reach Warp10 you need to replace 127.0.0.1 by the real Ip address of the container. To get it, use a simple `docker inspect <container id>`, the container address is also shown in the Settings/Ports page of your container.* 

## Get your data using your READ token

Replace YOUR_READ_TOKEN, by your real read token.

```
curl -v  --data-binary "'YOUR_READ_TOKEN' 'test' {} NOW -1 FETCH" 'http://127.0.0.1:8080/api/v0/exec'
```

If everything is OK, you should receive a HTTP 200 OK with your datapoint in JSON format.

Keep all token in a secure place and quickly accessible, they will be needed to complete some tutorials.

-----------------------------------

In the [next tutorial]({{ site.baseurl }}/getting-started/create-data) of this *getting started* you will lean how the data are structured in a Warp10 instance.