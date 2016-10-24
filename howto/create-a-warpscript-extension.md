---
title: Create a WarpScript extension
layout: function
isPage: true
category: howto
---

The aim of this tutorial is to show the user how to developp it's own defined WarpScript extension. This tutorial will defines the same function seen in the [create a UDF one](http://www.warp10.io/howto/create-a-udf/).

In this page, we will learn how to implement a WarpScript set of function and how to deploy it in your own platform. In this tutorial the set contains a single function which generate one single string from 2 strings that are currently on top of the WarpScript stack.
The full code is available on github [here](https://github.com/aurrelhebert/warp10-extension-tuto).

## Functions and extension interfaces

The JAVA function implemented in the extension have to implement the Java class [WarpScriptStackFunction](https://github.com/cityzendata/warp10-platform/blob/master/warp10/src/main/java/io/warp10/script/WarpScriptStackFunction.java) and extends the [NamedWarpScriptFunction](https://github.com/cityzendata/warp10-platform/blob/master/warp10/src/main/java/io/warp10/script/NamedWarpScriptFunction.java) one. Then an extension class must extends the Java class [WarpScriptExtension](https://github.com/cityzendata/warp10-platform/blob/8e83f966c939e4b58b9eb11cd86c396394a8e7f7/warp10/src/main/java/io/warp10/warp/sdk/WarpScriptExtension.java).

## Getting starterd

First of all, create a new Gradle project in your favorite IDE, and add a new package in src/main/java: io.warp10.tutorial.

Then create the class HELLOWARP10 that implements WarpScriptStackFunction and extends NamedWarpScriptFunction.

Create also a class called TutorialExtension that extends the WarpScriptExtension. 

Use this [file]({{ site.baseurl }}/assets/data/build.gradle) as build.gradle. 

Inside the build.gradle file notice that it doesn't include in the JAR the WarpScript libraries, but indicated that those library are needed at execution. This is done when declaring in the build.gradle file the following instruction: 

```
provided 'io.warp10:warpscript:1.0.17'
```

This operation is important because it means the UDF doesn't need to be recompiled for each new Warp 10 version as **it will dynamically use the current version** deployed on the Warp 10 cluster.

## Develop a WarpScript function -- HELLOWARP10

Inside the class HELLOWARP10, add a contructor to set the name of the function. This name will be used to call this function in a WarpScript script.

```
public HELLOWARP10(String name) {
    super(name);
}
```

Then implement the necessary function apply. This function as the same functionnality of the one defined in the UDF tutorial, except that the stack is directly given to the function.

```
public Object apply(WarpScriptStack stack) throws WarpScriptException {
  
  //
  // Get params
  //
  
  Object firstText = stack.pop();
  Object secondText = stack.pop();
  
  if (!(firstText instanceof String)) {
    throw new WarpScriptException("First param must be a String");
    //throw new WarpScriptJavaFunctionException();
  }
  if (!(secondText instanceof String)) {
    throw new WarpScriptException("Second param must be a String");
    //throw new WarpScriptJavaFunctionException();
  }
  try {
    stack.push(firstText.toString() + ' ' + secondText.toString());
  } catch (WarpScriptException e) {
    // TODO Auto-generated catch block
    e.printStackTrace();
    throw new WarpScriptException("Stack exception" + e.getMessage() + e.getStackTrace().toString());
    //throw new WarpScriptJavaFunctionException();
  }
  
  return stack;  
}
```

The class WarpScriptStackFunction needs two other function, in this case they will stays empty.

```
public int argDepth() {
  return 0;
}

public boolean isProtected() {
    return false;
}
```

## The extension class -- TutorialExtension

In the class TutorialExtension, only the method getFunctions needs to be overwritten. In this methos the user just have to declare the set of function to add when using this defined extension. The function have to be added inside a Map, that contains the function name, and the function instantiated.

```
public Map<String, Object> getFunctions() {
  Map<String, Object> functions = new HashMap<String, Object>();
  functions.put("HELLOWARP10", new HELLOWARP10("HELLOWARP10"));
  return functions;
}
```

## Add this extension in a Warp10 plate-form

Build this project executing the following command.

```
gradle shadowJar
```

Then add the warpscript.extensions properties in your warp10.conf.

```
//
// Comma separated list of WarpScriptExtension classes to instantiate to modify the defined WarpScript functions
//
warpscript.extensions = io.warp10.tutorial.TutorialExtension
```

Finally add the compiled jar in the classpath used to launch the Warp10 platform.

Restart the platform.

## Use the function defined in the extension

To execute it just run the following WarpScript on your Warp 10 backend.

```
'WARP 10' 'HELLO' HELLOWARP10
```

Congrats you managed to create your first WarpScript extension for a Warp 10 cluster !

## About extension

Inside an extension, you can define as many new functions as you want, the the will be added to your WarpScript library on your cluster. It is also possible to redefine some existing function. In a way, this method can be used to forbid the access to some sort of functions to all the user of a Warp 10 cluster.


