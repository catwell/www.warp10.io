---
title: "FFT"
layout: "function"
isPage: "true"
link: "/warpscript/functions"
desc: "Computes a Fast Fourier Transform on a GTS."
categoryTree: ["reference","functions"]
category: "reference"
---
 
The `FFT` function computes a [Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) on a Geo Time Series or a list thereof it expects on top of the stack.

The result of the `FFT` execution is a list of two Geo Time Series per input GTS. The first resulting GTS contains the real parts of the FFT coefficients, the second the imaginary parts. The ticks of those Geo Time Series are the periods associated with the tick index value. Thus for index k, the timestamp is `Tk = bucketspan * (n/k)`. For index 0, the timestamp is `bucketspan`. The associated frequency is `1/Tk`.

`FFT` can only be applied to bucketized numerical Geo Time Series which contains a number of values which is a power of 2.

## Example ##

{% raw %}
<warp10-warpscript-widget backend="{{backend}}"  exec-endpoint="{{execEndpoint}}">NEWGTS
1 512
<% 'k' STORE $k 1000 * 500 + NaN NaN NaN $k 180.0 / DUP SIN SWAP 100 * COS + ADDVALUE %>
FOR
DUP
[ SWAP bucketizer.last 0 1000 0 ] BUCKETIZE
FFT
</warp10-warpscript-widget>
{% endraw %}        
