---
title: Quantumviz widget
layout: function
isPage: true
oldPath: 31-quantumviz.html.md.eco
category: howto
---



The **Quantumviz** widget is a [Polymer webcomponent](https://www.polymer-project.org/) to visualize data from the Warp 10 platform.

## Utilisation of the widget ##

To use the widget in an HTML page you need:

1. Import the `webcomponents.js` polyfill from the Polymer CDN:

    `<script src="https://cdn.cityzendata.net/quantumviz/dependencies/webcomponentsjs/webcomponents.js"></script>`


<!-- TODO: Change those links -->
1. Import the `czd-quantumviz.html` widget from the SenX website:

    `<link rel="import" href="https://cdn.cityzendata.net/quantumviz/czd-quantumviz.html">`

1. Use the `<czd-quantumviz>` tag in your HTML

    `<czd-quantumviz>YOUR_WARPSCRIPT_CODE_HERE</czd-quantumviz>`

## Input parameters ##

The **Quantumviz** widget puts onto the stack a series of variables to allow you to interact with them into your WarpScript
script. These variables are:

* `width`: the width in pixels of the widget. It allows you to do a `BUCKETIZE` to limit the number of points in each series
  according to your visualisation capabilities.

  * `host`: if you aren't using a Warp 10 entry point in the same domain from which you're serving the widget,
    you must configure the `host` parameter with the base URL (protocol and domain or IP address) of the
    platform version you want to use.


      &lt;czd-quantumviz host='https://example.org'>YOUR_WARPSCRIPT_CODE_HERE&lt;/czd-quantumviz>


## Expected output format ###

The **Quantumviz** widget expects to find in only one item in the WarpScript stack, a MAP with the following properties:

* `gts`: a LIST of GTS to plot
* `params`: a LIST of visualisation parameters for each GTS to plot
* `globalParams` (optional): a MAP of global visualisations parameters

The two list must have the same size.

Each item in `param` is a MAP of (mostly optional) parameters to apply to the corresponding item in `gts` LIST.
Available parameters are:

* `key`: the legend to associate to the GTS
* `color` (optional): the color of the line, as an CSS compliant color STRING (e.g.: `#cc0505`)


`globalParams` is an optional MAP of parameters to apply to the whole chart.
Available parameters are:

* `interpolate`: the interpolating function used.  Default mode is `step-before`, other
  usual modes are `linear`, `basis` and `cardinal`. The complete list of interpolation functions is
  [here](https://github.com/mbostock/d3/wiki/SVG-Shapes#line_interpolate)


## Example of use ##

    <script src="https://cdn.cityzendata.net/quantumviz/dependencies/webcomponentsjs/webcomponents.js"></script>
    <link rel="import" href="https://cdn.cityzendata.net/quantumviz/czd-quantumviz.html">

    <czd-quantumviz width="500" height="400">
      [
        '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kBlQisxjnVyLaxkgLZcm0wPiDifRj5k..KV.N_.cUXkV.........UOWzdCSM5BTj_65CiKkaddbyiPbEyOlUrrED8y99_7koZQWXGaOYQhf7nJWRBTBPNqs_JY7XZQW5d1GHOcmBY5jBPAO7mOYhyz_ynlyjCvTyUuI6DTRtnrZzvyUxE8zvyRIujnzOhYFvBShyiEjexBAex6xbnrLnvSDAYmOr69r5ZwKC9zjz60jabxMWjWEKq26Uvuj5Wi5i8sjKc2UncEwxfBPxUa4ESLq5zlzi60g68rhzSOh333PzPjFAwtU5WbqEJNhfbf5BnU7TysY5wxhARnBjeb4fcjxKskAigRUrxt0JsmwwkGpP6jvDp8JzTbSQej3dFAH6yqYTfROM7lHfFJ.gFQHEOrdrPurwkZiUwS_Uw2rQZIZ0gOo6paNOrdeQH6.nVzTNhyOuguugYg9OucrGEqisBdhlcp_3Ehc8.Cqy2utcrZxm5lpNlh9DRjC0CRVwTq.3vKfta1DqZhp1NseiKvVXfiwmhewOkRefX5C8SzgSDRZPPwy2DDOvt3CkBkh7SHCb8Z3q7sKCGdXSFxswjpDC7uCUxJQMWjnHVdga71HDEJTghn7AU9ZKQk7j7l2MALit8Sy3NZPVsWB3CrK.qLgd3mrfJY_9LWfmfUZSX3cPnGAEoAJWfsp3kET771dJIAqKyW5yUJigWMkBKCK3j7pMc.Dmr.cOpc4bhFCGF6YFM9RN1EC7CXDBcDsAEKGcdNgF.5q33VurKF5g9mGQ7kZ_ERkap5JfSJaOB4FViPSWipCt_NQA_me723TfIxcSmTNyNvgYeGoYgATGLEgYBC0iSNlKIeVo8SGbaFlJuLG_Cx0d59VB9VoUpoX1Cvx93DLB3S5G5NVH8X_d8FjggSA9h6lzO_rHVPLBDoA_xg5Q7kzRKGdZ_TTnETROIlMqSDotFAXM79mv29Knxo4mEkjmyGh.p8BWVQ7Mrg6Yt3mFe6w.QbcEKRgIPrTCIq09r9ycJo66RJ8o87MbXDZ4T0Ph7u9D9insQBaROHTe.kJZoyuX4Biw7MBCeoDa8034wlBb6h4RuNsmAf0CCCF0AHwt7tqDgP_VmPWBaSJ8VSmot9N_BlkpKmOrGwus.TMjCCE6JRPzkOKzFH0EmUIw9E2g7K83LcMBeUy72DFVsIWeDaAhe3HDss8YGI_efgc4SSdlRCK.qRvx_wG..94Z0gNLy4oI536Vd0VsocQU335VfVLtWmcOH69K56O_1SGI4.88cK5ATf6akgS7UL1v2GhttWi5kowcTJxZ5iEsqS10m7sM5JPZQVtN.t5kGWOGc.t3XaWZ5HjVv.D0s3L14pbVZFJGAFcXgATfVpD772AA.p7fgg_4PhH._IiVy3HmSZ1a2pYu.rtn8puPu1qllLGuHuGkOc4b3YMnynDzXUlbIVeOUBsReVenMOXtn5FK1brWHnhDqcMRABlEGsOoO586kTfZ25bOYRZCEWR8J5taZmjgCxrQc5E6A6RgX7tH9LR9PKAsLSxG8VevKy6cMCWj1biJNZll9riGdBnGDMB3n6l1O_sHCI0GiGCIZKVrXKD4J1gGyBGXIPnqlAZaJR7HXoWe77plFtNIzxHFeEy8sDZqcd87eJk0mKUkxgm9nRFfRxeIQNLM4fuYZDv9ISO_7JHjsQCJABTHkVPXqpXZWGdNq7JA0z01fTosI0LHcM.gAKHhA6caegKH9JlYsFGMD2xrp9Oir02z0v2RVP5T4V..4flP3F.'
        '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kBWQisxjnVyLaxkgLnEMeseIyuE2N.Gg..4N.5DF86sg7.........6LNQsHaKGY5GoeBm27UgoagHJZwtnnrUL7Nmtegm1FH7l7fGHPpO0COGaFO3S_qGIOfXG583O5Hm1OAf3XBH3keBZaZraUaUEYxvDvvvMuUwtlnzvbiuvuTwxARnQwzTxzawhlmEAXngfMkmg8ztwurtU56lQrECxTuwTQili6hGvhlU5bxkhMt.uEyVrUe4HufgxRMzyf57IuOqzwSacnys_SQ1uSq6if5szEI.SosRaAu6GY_OlYpmTrKrNovir5NlWCbOvxriY4tgUS4EzZa5jAdzdZ2goVDY9SL8byuwSayhxpsQjQ9uezSy5XNUhrNq6TW5whsdwffELO_YghyaGvSosqMKmUbij302qK1lbRGxbVj_xqyChLj5wUVLzqPtSj_DkzBz_xucGijIeiLfjDZBX5K1PZznKPhjxyCemXYB2DTO.tD3MHrMOvxjib55W47fwRU5IQIDqsYQyCryrhrVl.AlWC6.NesWLMR7XX7tpt5F4V.RcvUVWjpNyvm23jDLhO36DKU_98kLT6LtHuVhW2R.nRNuB4ktJQA1XhL1Dv1kdQAe4VWOvV_WR.K_B7QjBqhuLYONM0gXAf.x1fMnvBZHkYD4BCJ4S84TFp7SuvOsDJXDJfpLFUD1bihU.AN_oj.FH5FmX9Ur76oihcjVcZ9JKMDVVgAZKvN9iKvAXDb4oAOtv1aWQC26Vk9aspMH5M2WrVmm.DmgPj.N_JmM_MXWLgajXe8jl3iI4JxImNHgl8wsyj.xJViY9SdX7Z7gMXBisZzLOzFO5MzP4P4tWjIux6BK7q3LCJva_KZpZcqfglp8Mxu5Qrqx6y3OHIjH4pcR4MlndyRmWffhz7RHGdWGsumEZ8K8Kl5KTtAnW.i1tsIO4Wdfm2n0UgoH2K0L1P21z8cUBh2eIAXER.z86csK.oZxcybdOHLK0DUTCmmbNCw6PlE37_881O898_TEp4q54lHOHH2HnePW67H7Qb8FxZzDF18HPd8KhgQZ2QP9bAFaDj5iO03H9D3PVmWBSUPLcRei3NSshrcSKENf6NHzZbW_tHsH_LF6D7osJA30sTsTKFo91Xf4nW_sV7daYZ7HjNVisFXtHW7HWl2Y5Gb726gGjLZaXQSPRl0sxYCExVmNVce_DHrJbALCoeR8ERq3_RmXNrZbGk4Ug7FZVKDVhnoS7PVN.XieSuWfWAniGgt2ZoQ48c5fAnL0XcxHIMde.gwnwGnhmPac.WiNWSKI_jIuoOCoIWR5vpi857rD_atJKj9JRKYl4C0aey439KMDG16e0U7KJa4ZdGUyH_VaOGgHFvlDOHhlc3wND9IFpm_So97PwE_t7pF4S9Lz4.Exdm8XkX8jlb11Nt2xIO2P4F0keX2czG7.gZxGyqUjBeGQx76WViffJWCPQnlBKBFzWOB5cRXvsSOA49CJCLcChnp2B3Ce2OY2WcAv6QLF9NZPAlKgNkFGcJ2_O6j0BLqxPXadY09HH.45GmJkHZI21tJN5ohEJdD6BMyl4iFes7RfoyfZUdup8R3FI4TTzr2CWvjtYoNhPgzSMIYdsgo_gyrPYn6hsIuRC7CXInFpNRyc2ZhevvbyJ5YHxW1nDYulnR9tAL0c0jT.CwBx52VY0x7tvceu8R7zkDOF5TnlWN..0PBLl3.'
        '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kBGQisxjnVyLaxkgLbUEd_RTgYDIS.Gg..4N.5CB86sg7.........6LNUuITOGY5YnFlZM47O3bBHJbTtvbjtmZDGwmOG3sXBO47X_Zeocn3G57Xgdf7ZcVY3WDG8O3_3GD8XRGHZHJYxMvUxzbYwu6rzPhvnzRwrzj6SKzMxTrOhPhzUzAqZphfLz6XqjGQzzThorShlMrbtvyjGv0rwyXO1riMFQqkX3OkOEq4Xxiv7xWruRIygkwgVzA_vjnco.YsL4bwtv3GEAvszSz8qOrdiW4wkWCTMTxTTGAbIWvTy5g3xv932yNMvzkuVWwqAgwU6B4rXlG5wBvqSCo7hh1Sqd4QOSPyvIEyYJtNM6oCUPhrnhERU6c3b38x3AaKmmXij75G_7SEnMxjYi05jAIc.drBvtd67vVOORzyACCj05xEPSwo6_h2RTKP84eisTYOhv9U4tla0YetbjJwIlmgcsIOExC7CwU82g6r6AinOr6r1.smD.2knNFr_Y.Y2aPMV0oMdq_n4ydhl8i.x.Y9xaDjRjFMZJ3F7U6ypBCQGz.uiWEU7cCZDZ6s0wgDQZZRtMiysgb6P5xwXXbZ8cEvVPdw0Z29_mQ.UIs1OdpA8DuQVj3jUmE0r.LGCEPf3N48YZdiWxzwozIRimEs6bjYQAaUTFBU7rg_tt9Z8IT1TBsCY1yEgrZj.s3y7LP18FHA1p8arBBI.TVkhY0DcIX2VGb3JkIe6vlh5pZ6XugUZhS3nJzVgP9S8fVAmvNsXEtDRB6jcDt79RGTv3tWRTJQ3eCm3qKmLEuQ9siM.gx4YH.2_Nw.iefaRPre5Nmwgi5a4h5G8gOyKH9xgW5KGUZxYp7NOFscY7MPJHJ9l3kWjGNiT13nT1vZByi.N37txsZkktULLxWTpJBLAiT75OLVBLf.dA817PaJ8QLeZa7oZX13Vsdbtfu9euyS8Z7g8.yWDo53013L3XlD7PXtlhiEO9z1Kdqbsh6U0AZxH9OL7W88R.d8HlD3dTYR_1Zm4RVtGjTPr0sP7pye3icjn4e8EZOi8lz3Tk04o3R4nPX6GKD_s_77sGG1T8DvJ2cH0yK5FltmBR90rXBcor75pnbOMaaXpOwy9ZaSHGA9bt4pslHH33i1ECaelapgGpQP_Dhc0IWuikle_RfqKlctlBt3OcGTEpw0_8EafO6g5daX3Uud_pAgZ_sXPRX6bu9hovC3icoNULUectFI3tJ_5qvrGx6qN6Jp.HFXBNH4L_qhUgaO1eX3HO2lj89oCB6iTCitJJ_0RIeH2J4AIZtofWu7wRHHcY9OPruJ1bHTIpzdYU_xa4kXTKPI.diNx1l8At6ZIxhiITvsehKERbjY4qfY2aXxx2UX96z792S_FByX8cdX5gLvXQ1sLNoCPSGGzwoMF4JY2nIapYYuGfXcD8yc01uVHx0vK1_xLyB6GiEzxn.p3tOCT0DWMB5PCLtk7shtk5mKQagJseHyyMhJbu0e1BpK7rJqmaqb06Iuxou8vWHJIgUF1NdDM6TiLPT8ullktwspieQ5Yu1azL3EDapycyEib6QbabJmTPTDSjOCxIGyIYNqGAadJXTuv2MonPCFxmLnFVNthl3OM_O9V8h6xacJyZQy4.7QRvERH_2N_LFYA9fP5rphz3Q1ZWvc.eLnLgaM_EZUXNLH.QsL...Lz4cG..'
        '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kC0QisxjnVyLaxkgLgyMpjgPJtzOL5k..KV.Ns.ZUXkV.........SOWWW9OK4BS6HimMhFm8_3FaxIvrb6iUe5JNZJoXZoXBH9kJqKGZKXGL83O3eWMO8584NZKZZoW8l7f3XBHa7dC3PdvriGxyjnIjhzETtvbrr6Eytrzytr_mtS8U6v_dOqC_7ouRiM0czU6KUpszUTh5jCyarqnZpTRqAtuudWgrbxzOLjiY5sULdvTuRLftM2TsLzumifpvv5krAZvEzIkQxSv_FYTsFQphztXxIvflujGvvRWZx6yyLxjQSuFQAw1CTYjSq9DrQlyUUhps2jjbbSVVUhYrzBGQrOWEvcxS1HDybXtmInSoYi8pEnUFQWyjIAxiUAFBLAx1NzHza6tUxdM2LxDxywcvouZrSDCW5_mdPnHTkCOKLzyD_JPj5xxdYm5MxISZiMu9kASfxtzOrir5gvWdiqKn1_kr19297AOK79ES1BmoHsXBBoXLCeXvwB.rEFREucUIRmTvwUnomWrSZ5xPiFivtJwBQn.Vqxnu.zd5jCLbi97g33Wqx6CiF.zPoTKYA0L4xHfJYKClaXhQCCP8nPy.FEbJm.nhEFHXBT2h2Kme3UQh55DggEvClrF43ZYQVLwh2g8aUNXNcIiKg6U9EuEl2.DXVYY984q6Rz8Q_Ys89nS083Zk81grKUf6HLMrAO6uUokZ4iPpwppJK7cmMmHslSmge4H6JD3G0kNrmvYmq_L3xIpIRdQW8O6Jdpb5s_ktejgcjE8Pl1W6AmCqm5gas.5DlgnheB7Vac9S9.YJkitNu50t31R62mhz.MI0F0GThv2t44tey06i45rCZckKGAyk4lOLWkw_KFtZ_N5gBd1U1uhY7BvgCQ_YFIqk7DkMYCh16W10XzEc9VBfHY3NL6V2KkcQpZ2pJaX3sgOnSCD0xz69co27F5NS90gJ6IZuB2xTNPV5Zear8ezOJPL3u0qc4.NqlZ9HBwHsSO2pWQTNFN4P9olg6960kVvT7sXB72j5rBdNmqmKTFMO_kolK2mBcDGpw8cdCzt3SiBKbYCI86qXaVkHc4wZpIiBfCHX2NGUGO.udf15GJE04WZ63kTGQHHFc0l8gHvvRd1d1y3MdEeVs6Ao9Ie1_ogeo1FkZwWDDUcCuB5DRik8mgHw6C48xfuZv3q9YaFC8nZqaQ_wZsylZmNtCgVjkLIdgPHFI1eeK9_g39B9j9O9lNopsEmkKLQwhoXI1hHhbfjJimafd2mZjew6.ig2M55H9eRk9rQLOvq.ZfI9_pHaBaX62lAT_H9hgLsPysi5eBdqto44toYig11eWV8hc12edVlX7mopP_BEbmy0jYLYY1GqvwQAYFc77Sl7RZrI9mBugdiBl5QIs3JwYsINHEcQXOqGClr89XDno2GagR.xLQBZaoOBgdT.pCXxeeNlwde6PNozQ8Muxi9j50kQZn478XgtpydAJU8nXny2X8Qannc6wV0Oq1iXB2Zc4aPzoURVZyYAE3T6uXiO0YnGDAK2Hg9FyhqPyR416Rweb0FY5IyFiPM1rSj4kW8G258kRjBvt.3EGicFTZluF.9H3OJ9plJw53ZE3AK0VTy7Hjcn1oLEPRkX2dkgbHClc35EipZE1frZPIK5Hoo8jYabA0M80HKLwTANPqy_yWGLrNCQLkADLUsMGW0C8ONL...Lf4cG..'
      ]
      UNWRAP
      [ SWAP bucketizer.mean 0 0 $width ] BUCKETIZE
      'fetch' STORE
      [ $fetch 0 GET $fetch 1 GET ] 'gts' STORE

      [
        { 'color' '#ff1010' 'key' 'Temperature A' }
        { 'color' '#1010ff' 'key' 'Temperature B' }
      ]
      'params' STORE

      { 'interpolate' 'cardinal' }
      'globalParams' STORE

      { 'gts' $gts
      'params' $params
      'globalParams' $globalParams }
    </czd-quantumviz>


## The example in action ##

<div class="box">
<czd-quantumviz width="500" height="400" tooltip="false" host="https://warp.cityzendata.net">
  [
    '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kBlQisxjnVyLaxkgLZcm0wPiDifRj5k..KV.N_.cUXkV.........UOWzdCSM5BTj_65CiKkaddbyiPbEyOlUrrED8y99_7koZQWXGaOYQhf7nJWRBTBPNqs_JY7XZQW5d1GHOcmBY5jBPAO7mOYhyz_ynlyjCvTyUuI6DTRtnrZzvyUxE8zvyRIujnzOhYFvBShyiEjexBAex6xbnrLnvSDAYmOr69r5ZwKC9zjz60jabxMWjWEKq26Uvuj5Wi5i8sjKc2UncEwxfBPxUa4ESLq5zlzi60g68rhzSOh333PzPjFAwtU5WbqEJNhfbf5BnU7TysY5wxhARnBjeb4fcjxKskAigRUrxt0JsmwwkGpP6jvDp8JzTbSQej3dFAH6yqYTfROM7lHfFJ.gFQHEOrdrPurwkZiUwS_Uw2rQZIZ0gOo6paNOrdeQH6.nVzTNhyOuguugYg9OucrGEqisBdhlcp_3Ehc8.Cqy2utcrZxm5lpNlh9DRjC0CRVwTq.3vKfta1DqZhp1NseiKvVXfiwmhewOkRefX5C8SzgSDRZPPwy2DDOvt3CkBkh7SHCb8Z3q7sKCGdXSFxswjpDC7uCUxJQMWjnHVdga71HDEJTghn7AU9ZKQk7j7l2MALit8Sy3NZPVsWB3CrK.qLgd3mrfJY_9LWfmfUZSX3cPnGAEoAJWfsp3kET771dJIAqKyW5yUJigWMkBKCK3j7pMc.Dmr.cOpc4bhFCGF6YFM9RN1EC7CXDBcDsAEKGcdNgF.5q33VurKF5g9mGQ7kZ_ERkap5JfSJaOB4FViPSWipCt_NQA_me723TfIxcSmTNyNvgYeGoYgATGLEgYBC0iSNlKIeVo8SGbaFlJuLG_Cx0d59VB9VoUpoX1Cvx93DLB3S5G5NVH8X_d8FjggSA9h6lzO_rHVPLBDoA_xg5Q7kzRKGdZ_TTnETROIlMqSDotFAXM79mv29Knxo4mEkjmyGh.p8BWVQ7Mrg6Yt3mFe6w.QbcEKRgIPrTCIq09r9ycJo66RJ8o87MbXDZ4T0Ph7u9D9insQBaROHTe.kJZoyuX4Biw7MBCeoDa8034wlBb6h4RuNsmAf0CCCF0AHwt7tqDgP_VmPWBaSJ8VSmot9N_BlkpKmOrGwus.TMjCCE6JRPzkOKzFH0EmUIw9E2g7K83LcMBeUy72DFVsIWeDaAhe3HDss8YGI_efgc4SSdlRCK.qRvx_wG..94Z0gNLy4oI536Vd0VsocQU335VfVLtWmcOH69K56O_1SGI4.88cK5ATf6akgS7UL1v2GhttWi5kowcTJxZ5iEsqS10m7sM5JPZQVtN.t5kGWOGc.t3XaWZ5HjVv.D0s3L14pbVZFJGAFcXgATfVpD772AA.p7fgg_4PhH._IiVy3HmSZ1a2pYu.rtn8puPu1qllLGuHuGkOc4b3YMnynDzXUlbIVeOUBsReVenMOXtn5FK1brWHnhDqcMRABlEGsOoO586kTfZ25bOYRZCEWR8J5taZmjgCxrQc5E6A6RgX7tH9LR9PKAsLSxG8VevKy6cMCWj1biJNZll9riGdBnGDMB3n6l1O_sHCI0GiGCIZKVrXKD4J1gGyBGXIPnqlAZaJR7HXoWe77plFtNIzxHFeEy8sDZqcd87eJk0mKUkxgm9nRFfRxeIQNLM4fuYZDv9ISO_7JHjsQCJABTHkVPXqpXZWGdNq7JA0z01fTosI0LHcM.gAKHhA6caegKH9JlYsFGMD2xrp9Oir02z0v2RVP5T4V..4flP3F.'
    '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kBWQisxjnVyLaxkgLnEMeseIyuE2N.Gg..4N.5DF86sg7.........6LNQsHaKGY5GoeBm27UgoagHJZwtnnrUL7Nmtegm1FH7l7fGHPpO0COGaFO3S_qGIOfXG583O5Hm1OAf3XBH3keBZaZraUaUEYxvDvvvMuUwtlnzvbiuvuTwxARnQwzTxzawhlmEAXngfMkmg8ztwurtU56lQrECxTuwTQili6hGvhlU5bxkhMt.uEyVrUe4HufgxRMzyf57IuOqzwSacnys_SQ1uSq6if5szEI.SosRaAu6GY_OlYpmTrKrNovir5NlWCbOvxriY4tgUS4EzZa5jAdzdZ2goVDY9SL8byuwSayhxpsQjQ9uezSy5XNUhrNq6TW5whsdwffELO_YghyaGvSosqMKmUbij302qK1lbRGxbVj_xqyChLj5wUVLzqPtSj_DkzBz_xucGijIeiLfjDZBX5K1PZznKPhjxyCemXYB2DTO.tD3MHrMOvxjib55W47fwRU5IQIDqsYQyCryrhrVl.AlWC6.NesWLMR7XX7tpt5F4V.RcvUVWjpNyvm23jDLhO36DKU_98kLT6LtHuVhW2R.nRNuB4ktJQA1XhL1Dv1kdQAe4VWOvV_WR.K_B7QjBqhuLYONM0gXAf.x1fMnvBZHkYD4BCJ4S84TFp7SuvOsDJXDJfpLFUD1bihU.AN_oj.FH5FmX9Ur76oihcjVcZ9JKMDVVgAZKvN9iKvAXDb4oAOtv1aWQC26Vk9aspMH5M2WrVmm.DmgPj.N_JmM_MXWLgajXe8jl3iI4JxImNHgl8wsyj.xJViY9SdX7Z7gMXBisZzLOzFO5MzP4P4tWjIux6BK7q3LCJva_KZpZcqfglp8Mxu5Qrqx6y3OHIjH4pcR4MlndyRmWffhz7RHGdWGsumEZ8K8Kl5KTtAnW.i1tsIO4Wdfm2n0UgoH2K0L1P21z8cUBh2eIAXER.z86csK.oZxcybdOHLK0DUTCmmbNCw6PlE37_881O898_TEp4q54lHOHH2HnePW67H7Qb8FxZzDF18HPd8KhgQZ2QP9bAFaDj5iO03H9D3PVmWBSUPLcRei3NSshrcSKENf6NHzZbW_tHsH_LF6D7osJA30sTsTKFo91Xf4nW_sV7daYZ7HjNVisFXtHW7HWl2Y5Gb726gGjLZaXQSPRl0sxYCExVmNVce_DHrJbALCoeR8ERq3_RmXNrZbGk4Ug7FZVKDVhnoS7PVN.XieSuWfWAniGgt2ZoQ48c5fAnL0XcxHIMde.gwnwGnhmPac.WiNWSKI_jIuoOCoIWR5vpi857rD_atJKj9JRKYl4C0aey439KMDG16e0U7KJa4ZdGUyH_VaOGgHFvlDOHhlc3wND9IFpm_So97PwE_t7pF4S9Lz4.Exdm8XkX8jlb11Nt2xIO2P4F0keX2czG7.gZxGyqUjBeGQx76WViffJWCPQnlBKBFzWOB5cRXvsSOA49CJCLcChnp2B3Ce2OY2WcAv6QLF9NZPAlKgNkFGcJ2_O6j0BLqxPXadY09HH.45GmJkHZI21tJN5ohEJdD6BMyl4iFes7RfoyfZUdup8R3FI4TTzr2CWvjtYoNhPgzSMIYdsgo_gyrPYn6hsIuRC7CXInFpNRyc2ZhevvbyJ5YHxW1nDYulnR9tAL0c0jT.CwBx52VY0x7tvceu8R7zkDOF5TnlWN..0PBLl3.'
    '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kBGQisxjnVyLaxkgLbUEd_RTgYDIS.Gg..4N.5CB86sg7.........6LNUuITOGY5YnFlZM47O3bBHJbTtvbjtmZDGwmOG3sXBO47X_Zeocn3G57Xgdf7ZcVY3WDG8O3_3GD8XRGHZHJYxMvUxzbYwu6rzPhvnzRwrzj6SKzMxTrOhPhzUzAqZphfLz6XqjGQzzThorShlMrbtvyjGv0rwyXO1riMFQqkX3OkOEq4Xxiv7xWruRIygkwgVzA_vjnco.YsL4bwtv3GEAvszSz8qOrdiW4wkWCTMTxTTGAbIWvTy5g3xv932yNMvzkuVWwqAgwU6B4rXlG5wBvqSCo7hh1Sqd4QOSPyvIEyYJtNM6oCUPhrnhERU6c3b38x3AaKmmXij75G_7SEnMxjYi05jAIc.drBvtd67vVOORzyACCj05xEPSwo6_h2RTKP84eisTYOhv9U4tla0YetbjJwIlmgcsIOExC7CwU82g6r6AinOr6r1.smD.2knNFr_Y.Y2aPMV0oMdq_n4ydhl8i.x.Y9xaDjRjFMZJ3F7U6ypBCQGz.uiWEU7cCZDZ6s0wgDQZZRtMiysgb6P5xwXXbZ8cEvVPdw0Z29_mQ.UIs1OdpA8DuQVj3jUmE0r.LGCEPf3N48YZdiWxzwozIRimEs6bjYQAaUTFBU7rg_tt9Z8IT1TBsCY1yEgrZj.s3y7LP18FHA1p8arBBI.TVkhY0DcIX2VGb3JkIe6vlh5pZ6XugUZhS3nJzVgP9S8fVAmvNsXEtDRB6jcDt79RGTv3tWRTJQ3eCm3qKmLEuQ9siM.gx4YH.2_Nw.iefaRPre5Nmwgi5a4h5G8gOyKH9xgW5KGUZxYp7NOFscY7MPJHJ9l3kWjGNiT13nT1vZByi.N37txsZkktULLxWTpJBLAiT75OLVBLf.dA817PaJ8QLeZa7oZX13Vsdbtfu9euyS8Z7g8.yWDo53013L3XlD7PXtlhiEO9z1Kdqbsh6U0AZxH9OL7W88R.d8HlD3dTYR_1Zm4RVtGjTPr0sP7pye3icjn4e8EZOi8lz3Tk04o3R4nPX6GKD_s_77sGG1T8DvJ2cH0yK5FltmBR90rXBcor75pnbOMaaXpOwy9ZaSHGA9bt4pslHH33i1ECaelapgGpQP_Dhc0IWuikle_RfqKlctlBt3OcGTEpw0_8EafO6g5daX3Uud_pAgZ_sXPRX6bu9hovC3icoNULUectFI3tJ_5qvrGx6qN6Jp.HFXBNH4L_qhUgaO1eX3HO2lj89oCB6iTCitJJ_0RIeH2J4AIZtofWu7wRHHcY9OPruJ1bHTIpzdYU_xa4kXTKPI.diNx1l8At6ZIxhiITvsehKERbjY4qfY2aXxx2UX96z792S_FByX8cdX5gLvXQ1sLNoCPSGGzwoMF4JY2nIapYYuGfXcD8yc01uVHx0vK1_xLyB6GiEzxn.p3tOCT0DWMB5PCLtk7shtk5mKQagJseHyyMhJbu0e1BpK7rJqmaqb06Iuxou8vWHJIgUF1NdDM6TiLPT8ullktwspieQ5Yu1azL3EDapycyEib6QbabJmTPTDSjOCxIGyIYNqGAadJXTuv2MonPCFxmLnFVNthl3OM_O9V8h6xacJyZQy4.7QRvERH_2N_LFYA9fP5rphz3Q1ZWvc.eLnLgaM_EZUXNLH.QsL...Lz4cG..'
    '60VgNqxhAaCdS6_uOLtZNMGWAbGpS5xmPL4gAbC_QbCjRbBiS5KhR5KmNMGpRaJQ.cV3Aa4kR.WZQqBiO54oNFWnOLtnQr88O.7kC0QisxjnVyLaxkgLgyMpjgPJtzOL5k..KV.Ns.ZUXkV.........SOWWW9OK4BS6HimMhFm8_3FaxIvrb6iUe5JNZJoXZoXBH9kJqKGZKXGL83O3eWMO8584NZKZZoW8l7f3XBHa7dC3PdvriGxyjnIjhzETtvbrr6Eytrzytr_mtS8U6v_dOqC_7ouRiM0czU6KUpszUTh5jCyarqnZpTRqAtuudWgrbxzOLjiY5sULdvTuRLftM2TsLzumifpvv5krAZvEzIkQxSv_FYTsFQphztXxIvflujGvvRWZx6yyLxjQSuFQAw1CTYjSq9DrQlyUUhps2jjbbSVVUhYrzBGQrOWEvcxS1HDybXtmInSoYi8pEnUFQWyjIAxiUAFBLAx1NzHza6tUxdM2LxDxywcvouZrSDCW5_mdPnHTkCOKLzyD_JPj5xxdYm5MxISZiMu9kASfxtzOrir5gvWdiqKn1_kr19297AOK79ES1BmoHsXBBoXLCeXvwB.rEFREucUIRmTvwUnomWrSZ5xPiFivtJwBQn.Vqxnu.zd5jCLbi97g33Wqx6CiF.zPoTKYA0L4xHfJYKClaXhQCCP8nPy.FEbJm.nhEFHXBT2h2Kme3UQh55DggEvClrF43ZYQVLwh2g8aUNXNcIiKg6U9EuEl2.DXVYY984q6Rz8Q_Ys89nS083Zk81grKUf6HLMrAO6uUokZ4iPpwppJK7cmMmHslSmge4H6JD3G0kNrmvYmq_L3xIpIRdQW8O6Jdpb5s_ktejgcjE8Pl1W6AmCqm5gas.5DlgnheB7Vac9S9.YJkitNu50t31R62mhz.MI0F0GThv2t44tey06i45rCZckKGAyk4lOLWkw_KFtZ_N5gBd1U1uhY7BvgCQ_YFIqk7DkMYCh16W10XzEc9VBfHY3NL6V2KkcQpZ2pJaX3sgOnSCD0xz69co27F5NS90gJ6IZuB2xTNPV5Zear8ezOJPL3u0qc4.NqlZ9HBwHsSO2pWQTNFN4P9olg6960kVvT7sXB72j5rBdNmqmKTFMO_kolK2mBcDGpw8cdCzt3SiBKbYCI86qXaVkHc4wZpIiBfCHX2NGUGO.udf15GJE04WZ63kTGQHHFc0l8gHvvRd1d1y3MdEeVs6Ao9Ie1_ogeo1FkZwWDDUcCuB5DRik8mgHw6C48xfuZv3q9YaFC8nZqaQ_wZsylZmNtCgVjkLIdgPHFI1eeK9_g39B9j9O9lNopsEmkKLQwhoXI1hHhbfjJimafd2mZjew6.ig2M55H9eRk9rQLOvq.ZfI9_pHaBaX62lAT_H9hgLsPysi5eBdqto44toYig11eWV8hc12edVlX7mopP_BEbmy0jYLYY1GqvwQAYFc77Sl7RZrI9mBugdiBl5QIs3JwYsINHEcQXOqGClr89XDno2GagR.xLQBZaoOBgdT.pCXxeeNlwde6PNozQ8Muxi9j50kQZn478XgtpydAJU8nXny2X8Qannc6wV0Oq1iXB2Zc4aPzoURVZyYAE3T6uXiO0YnGDAK2Hg9FyhqPyR416Rweb0FY5IyFiPM1rSj4kW8G258kRjBvt.3EGicFTZluF.9H3OJ9plJw53ZE3AK0VTy7Hjcn1oLEPRkX2dkgbHClc35EipZE1frZPIK5Hoo8jYabA0M80HKLwTANPqy_yWGLrNCQLkADLUsMGW0C8ONL...Lf4cG..'
  ]
  UNWRAP
  &#10;
  [ SWAP bucketizer.mean 0 0 $width ] BUCKETIZE
  'fetch' STORE
  &#10;
  [ $fetch 0 GET $fetch 1 GET ] 'gts' STORE
  &#10;
  [
  { 'color' '#ff1010' 'key' 'Temperature A' }
  { 'color' '#1010ff' 'key' 'Temperature B' }
  ]
  'params' STORE
  &#10;
  { 'interpolate' 'cardinal' } 'globalParams' STORE
  &#10;
  { 'gts' $gts
  'params' $params
  'globalParams' $globalParams }
</czd-quantumviz>
</div>


## Another example using the `host` parameter ##


    <script src="https://cdn.cityzendata.net/quantumviz/dependencies/webcomponentsjs/webcomponents.js"></script>
    <link rel="import" href="https://cdn.cityzendata.net/quantumviz/czd-quantumviz.html">

    <czd-quantumviz width="500" height="400" host="https://warp1.cityzendata.net">
    [
      NEWGTS
      100000000 NaN NaN NaN 110 ADDVALUE
      200000000 NaN NaN NaN 120 ADDVALUE
      300000000 NaN NaN NaN 130 ADDVALUE
      400000000 NaN NaN NaN 140 ADDVALUE
      500000000 NaN NaN NaN 140 ADDVALUE
      600000000 NaN NaN NaN 140 ADDVALUE

      NEWGTS
      100000000 NaN NaN NaN 10 ADDVALUE
      200000000 NaN NaN NaN 9 ADDVALUE
      300000000 NaN NaN NaN 8 ADDVALUE
      400000000 NaN NaN NaN 7 ADDVALUE
      500000000 NaN NaN NaN 6 ADDVALUE
      600000000 NaN NaN NaN 8 ADDVALUE
    ]
    'gts' STORE

    [
      { 'color' '#ff1010' 'key' 'Heartrate' }
      { 'color' '#1010ff' 'key' 'Speed' }
    ]
    'params' STORE

    { 'interpolate' 'cardinal' } 'globalParams' STORE

    {
      'gts' $gts
      'params' $params
      'globalParams' $globalParams
    }
    </czd-quantumviz>


And the example in action:


<div class="box">
<czd-quantumviz width="500" height="400" host="https://warp.cityzendata.net" tooltip="false">
  [
    NEWGTS
    100000000 NaN NaN NaN 110 ADDVALUE
    200000000 NaN NaN NaN 120 ADDVALUE
    300000000 NaN NaN NaN 130 ADDVALUE
    400000000 NaN NaN NaN 140 ADDVALUE
    500000000 NaN NaN NaN 140 ADDVALUE
    600000000 NaN NaN NaN 140 ADDVALUE
    &#10;
    NEWGTS
    100000000 NaN NaN NaN 10 ADDVALUE
    200000000 NaN NaN NaN 9 ADDVALUE
    300000000 NaN NaN NaN 8 ADDVALUE
    400000000 NaN NaN NaN 7 ADDVALUE
    500000000 NaN NaN NaN 6 ADDVALUE
    600000000 NaN NaN NaN 8 ADDVALUE
  ]
  'gts' STORE
  &#10;
  [
    { 'color' '#ff1010' 'key' 'Heartrate' }
    { 'color' '#1010ff' 'key' 'Speed' }
  ]
  'params' STORE
  &#10;
  { 'interpolate' 'cardinal' } 'globalParams' STORE
  &#10;
  { 'gts' $gts
  'params' $params
  'globalParams' $globalParams }
</czd-quantumviz>
</div>
