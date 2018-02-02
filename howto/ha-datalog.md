---
title: High Availability using Datalog
layout: function
isPage: true
category: howto
---

## Intro ##

The Warp 10 standalone version can be made highly available via a feature called *datalog* which will replicate data from one instance to another.

Using *datalog*, one can configure multiple standalone Warp 10 instances to replicate data to each other, allowing for smart architectures combining in-memory and disk based instances.

## Overview ##

When the datalog feature is enabled, any *update*, *meta* or *delete* request is logged in a datalog file in a specific directory. Those files contain all the information needed to replay the request in a coherent manner on a remote Warp 10 instance. This includes the token used for the request and any information such as the datapoints, GTS selectors or attributes. These files are named in a way which will allow the replay in order thus guaranteeing the coherency between the original data and its replicas.

The datalog files are handled by a datalog *forwarder* which will read them in the order in which they were produced and forward them to a designated remote Warp 10 instance.

Each Warp 10 instance participating in the datalog chain must have a unique id and select ids can be excluded from replication by a forwarder. This mechanism is in place to avoid loops in the replication chain while still authorizing cross or circular replication between instances.

Note that datalog is a feature unique to the standalone version of Warp 10, distributed Warp 10 instances can only be defined as datalog forwarder targets.

## Configuration ##

Datalog configuration is done by setting the `datalog` properties in the Warp 10 configuration file. See the [template](https://github.com/cityzendata/warp10-platform/blob/master/etc/conf-standalone.template#L509) for a description of those properties.

## Setting up replication to multiple targets ##

The usual way of replicating data from one instance of Warp 10 to multiple remote instances is to configure datalog on each one of them by specifying the remote instance so they form a chain or cycle. This works well and is the simplest architecture, however, if one instance of the chain is down, the ones further down will not get replicated data and will lag behind for as long as the down instance is not back up.

If you wish to mitigate this situation, you may set up an architecture where one datalog instance replicates data to multiple remote instances. Each forwarder will run in its own JVM with its own configuration file. The source directory for each forwarder needs to be different and MUST be on the same device as the datalog directory of the primary instance but no forwarder should have the datalog directory as its source directory. An external script will periodically scan the datalog directory and create hard links for each file into the source directory of each forwarder, this way each forwarder will be able to function independently.
