---
title: Calling external Python programs from WarpScript
layout: function
isPage: true
category: howto
---

At times your data analysis needs to leverage existing python tools. For this purpose, WarpScript has the `CALL` function which enables to call (as its name implies) external programs.

## Virtual Environment ##

When it comes to Python, the versions of both the interpreter and packages can sometimes turn into a nightmare. For this reason, it might be better to define a [virtual environment](http://docs.python-guide.org/en/latest/dev/virtualenvs/) to isolate the python environments of the different external programs you intend to call.

For the rest of this document, we'll assume you have created a Python virtual environment in `/path/to/virtual/environment`.

## External program deployment ##

For Warp 10 to support calling external programs, the `warpscript.call.directory` configuration option must be configured. It points to a directory where callable programs will be stored.

In order to support the Python virtual environment, your external program will not be called directly by Warp 10 but instead the use of `CALL` will address an intermediate shell script whose role is to initialize the Python virtual environment and then within that environment execute your external program.

It is assumed that your external program resides in `/path/to/virtual/environment/bin/callable.py`.

The intermediate shell script will reside in `callable.sh` in the directory configured in `warpscript.call.directory`. This shell script should have the following structure:

```
#!/bin/sh

VIRTUAL_ROOT=/path/to/virtual/environment
CALLABLE_PATH=${VIRTUAL_ROOT}/bin/callable.py

# Load the environment variables for virtual python environment
# source ${VIRTUAL_ROOT}/bin/activate

cd ${VIRTUAL_ROOT}

# Call python with unbuffered output
exec python -u ${CALLABLE_PATH}
```

## WarpScript invocation ##

Assuming your external program was built according to the [template](https://raw.githubusercontent.com/cityzendata/warp10-platform/master/warp10/src/main/python/callable.py) in the Warp 10 source tree, it can then be invoked from WarpScript using the following fragment:

```
// Convert the top of the stack to Pickle
->PICKLE
// Convert the Pickled content to base 64
->B64
// Invoke the external intermediate program
'callable.sh' CALL
// Decode the return value
B64-> PICKLE->
```
