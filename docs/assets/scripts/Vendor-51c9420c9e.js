!function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=7)}([,,,,,,,function(e,t,r){"use strict";r(8),r(9),r(10)},function(e,t,r){"use strict";var C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(s,f,d){var o=[],e={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var r=this;setTimeout(function(){t(r[e])},0)},addTest:function(e,t,r){o.push({name:e,fn:t,options:r})},addAsyncTest:function(e){o.push({name:null,fn:e})}},l=function(){};l.prototype=e,l=new l;var c=[];function p(e,t){return(void 0===e?"undefined":C(e))===t}var m=f.documentElement,v="svg"===m.nodeName.toLowerCase();l.addTest("svg",!!f.createElementNS&&!!f.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var t="Moz O ms Webkit",u=e._config.usePrefixes?t.split(" "):[];function h(e){return"function"!=typeof f.createElement?f.createElement(e):v?f.createElementNS.call(f,"http://www.w3.org/2000/svg",e):f.createElement.apply(f,arguments)}e._cssomPrefixes=u;var r={elem:h("modernizr")};l._q.push(function(){delete r.elem});var g={style:r.elem.style};function i(e,t,r,n){var i,s,a,o,l="modernizr",c=h("div"),u=function(){var e=f.body;return e||((e=h(v?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(a=h("div")).id=n?n[r]:l+(r+1),c.appendChild(a);return(i=h("style")).type="text/css",i.id="s"+l,(u.fake?u:c).appendChild(i),u.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(f.createTextNode(e)),c.id=l,u.fake&&(u.style.background="",u.style.overflow="hidden",o=m.style.overflow,m.style.overflow="hidden",m.appendChild(u)),s=t(c,e),u.fake?(u.parentNode.removeChild(u),m.style.overflow=o,m.offsetHeight):c.parentNode.removeChild(c),!!s}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function A(e,t){var r=e.length;if("CSS"in s&&"supports"in s.CSS){for(;r--;)if(s.CSS.supports(a(e[r]),t))return!0;return!1}if("CSSSupportsRule"in s){for(var n=[];r--;)n.push("("+a(e[r])+":"+t+")");return i("@supports ("+(n=n.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,r){var n;if("getComputedStyle"in s){n=getComputedStyle.call(s,e,t);var i=s.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(i)i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else n=!t&&e.currentStyle&&e.currentStyle[r];return n}(e,null,"position")})}return d}l._q.unshift(function(){delete g.style});var y=e._config.usePrefixes?t.toLowerCase().split(" "):[];function z(e,t){return function(){return e.apply(t,arguments)}}function n(e,t,r,n,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+u.join(s+" ")+s).split(" ");return p(t,"string")||p(t,"undefined")?function(e,t,r,n){if(n=!p(n,"undefined")&&n,!p(r,"undefined")){var i=A(e,r);if(!p(i,"undefined"))return i}for(var s,a,o,l,c,u=["modernizr","tspan","samp"];!g.style&&u.length;)s=!0,g.modElem=h(u.shift()),g.style=g.modElem.style;function f(){s&&(delete g.style,delete g.modElem)}for(o=e.length,a=0;a<o;a++)if(l=e[a],c=g.style[l],~(""+l).indexOf("-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,r){return t+r.toUpperCase()}).replace(/^-/,"")),g.style[l]!==d){if(n||p(r,"undefined"))return f(),"pfx"!==t||l;try{g.style[l]=r}catch(e){}if(g.style[l]!==c)return f(),"pfx"!==t||l}return f(),!1}(a,t,n,i):function(e,t,r){var n;for(var i in e)if(e[i]in t)return!1===r?e[i]:p(n=t[e[i]],"function")?z(n,r||t):n;return!1}(a=(e+" "+y.join(s+" ")+s).split(" "),t,r)}function w(e,t,r){return n(e,d,d,t,r)}e._domPrefixes=y,e.testAllProps=n,e.testAllProps=w,l.addTest("flexbox",w("flexBasis","1px",!0)),function(){var e,t,r,n,i,s;for(var a in o)if(o.hasOwnProperty(a)){if(e=[],(t=o[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(n=p(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?l[s[0]]=n:(!l[s[0]]||l[s[0]]instanceof Boolean||(l[s[0]]=new Boolean(l[s[0]])),l[s[0]][s[1]]=n),c.push((n?"":"no-")+s.join("-"))}}(),function(e){var t=m.className,r=l._config.classPrefix||"";if(v&&(t=t.baseVal),l._config.enableJSClass){var n=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");t=t.replace(n,"$1"+r+"js$2")}l._config.enableClasses&&(0<e.length&&(t+=" "+r+e.join(" "+r)),v?m.className.baseVal=t:m.className=t)}(c),delete e.addTest,delete e.addAsyncTest;for(var b=0;b<l._q.length;b++)l._q[b]();s.Modernizr=l}(window,document)},function(fe,de,pe){var me,e,t,i,r,n;function s(e){var t,r,n=e.parentNode;"PICTURE"===n.nodeName.toUpperCase()?(t=i.cloneNode(),n.insertBefore(t,n.firstElementChild),setTimeout(function(){n.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))}function a(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])}function o(){clearTimeout(t),t=setTimeout(a,99)}function l(){o(),r&&r.addListener&&r.addListener(o)}e=window,n=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(n)&&n.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),r=e.matchMedia&&matchMedia("(orientation: landscape)"),i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?l():document.addEventListener("DOMContentLoaded",l),o)),function(e,s,c){"use strict";var i,u,a;s.createElement("picture");function t(){}function r(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)}function n(t){var r={};return function(e){return e in r||(r[e]=t(e)),r[e]}}var y={},o=!1,l=s.createElement("img"),f=l.getAttribute,d=l.setAttribute,p=l.removeAttribute,m=s.documentElement,v={},z={algorithm:""},h="data-pfsrc",g=h+"set",A=navigator.userAgent,w=/rident/.test(A)||/ecko/.test(A)&&A.match(/rv\:(\d+)/)&&35<RegExp.$1,b="currentSrc",C=/\s+\+?\d+(e\d+)?w/,S=/(\([^)]+\))?\s*(.+)/,x=e.picturefillCFG,E="font-size:100%!important;",T=!0,M={},P={},R=e.devicePixelRatio,L={px:1,in:96},_=s.createElement("a"),N=!1,B=/^[ \t\n\r\u000c]+/,k=/^[, \t\n\r\u000c]+/,W=/^[^ \t\n\r\u000c]+/,$=/[,]+$/,D=/^\d+$/,I=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function O(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function U(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var F,H,j,q,Q,G,V,J,K,X,Z,Y,ee,te,re,ne,ie,se,ae=(F=/^([\d\.]+)(em|vw|px)$/,H=n(function(e){return"return "+function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var r;if(!(e in M))if(M[e]=!1,t&&(r=e.match(F)))M[e]=r[1]*L[r[2]];else try{M[e]=new Function("e",H(e))(L)}catch(e){}return M[e]}),oe=function(e){if(o){var t,r,n,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=(t=i.elements||y.qsa(i.context||s,i.reevaluate||i.reselect?y.sel:y.selShort)).length){for(y.setupRun(i),N=!0,r=0;r<n;r++)y.fillImg(t[r],i);y.teardownRun(i)}}};function le(e,t){return e.res-t.res}function ce(e,t){var r,n,i;if(e&&t)for(i=y.parseSet(t),e=y.makeUrl(e),r=0;r<i.length;r++)if(e===y.makeUrl(i[r].url)){n=i[r];break}return n}function ue(){2===Q.width&&(y.supSizes=!0),u=y.supSrcset&&!y.supSizes,o=!0,setTimeout(oe)}e.console&&console.warn,b in l||(b="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in l,y.supSizes="sizes"in l,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&(j=s.createElement("img"),l.srcset="data:,a",j.src="data:,a",y.supSrcset=l.complete===j.complete,y.supPicture=y.supSrcset&&y.supPicture),y.supSrcset&&!y.supSizes?(q="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",(Q=s.createElement("img")).onload=ue,Q.onerror=ue,Q.setAttribute("sizes","9px"),Q.srcset=q+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",Q.src=q):o=!0,y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=z,y.DPR=R||1,y.u=L,y.types=v,y.setSize=t,y.makeUrl=n(function(e){return _.href=e,_.href}),y.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},y.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?y.matchesMedia=function(e){return!e||matchMedia(e).matches}:y.matchesMedia=y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return!e||ae(e)},y.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},y.supportsType=function(e){return!e||v[e]},y.parseSize=n(function(e){var t=(e||"").match(S);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=function(n,f){function e(e){var t,r=e.exec(n.substring(a));if(r)return t=r[0],a+=t.length,t}var d,p,t,r,i,s=n.length,a=0,m=[];function o(){var e,t,r,n,i,s,a,o,l,c=!1,u={};for(n=0;n<p.length;n++)s=(i=p[n])[i.length-1],a=i.substring(0,i.length-1),o=parseInt(a,10),l=parseFloat(a),D.test(a)&&"w"===s?((e||t)&&(c=!0),0===o?c=!0:e=o):I.test(a)&&"x"===s?((e||t||r)&&(c=!0),l<0?c=!0:t=l):D.test(a)&&"h"===s?((r||t)&&(c=!0),0===o?c=!0:r=o):c=!0;c||(u.url=d,e&&(u.w=e),t&&(u.d=t),r&&(u.h=r),r||t||e||(u.d=1),1===u.d&&(f.has1x=!0),u.set=f,m.push(u))}function l(){for(e(B),t="",r="in descriptor";;){if(i=n.charAt(a),"in descriptor"===r)if(O(i))t&&(p.push(t),t="",r="after descriptor");else{if(","===i)return a+=1,t&&p.push(t),void o();if("("===i)t+=i,r="in parens";else{if(""===i)return t&&p.push(t),void o();t+=i}}else if("in parens"===r)if(")"===i)t+=i,r="in descriptor";else{if(""===i)return p.push(t),void o();t+=i}else if("after descriptor"===r)if(O(i));else{if(""===i)return void o();r="in descriptor",a-=1}a+=1}}for(;;){if(e(k),s<=a)return m;d=e(W),p=[],","===d.slice(-1)?(d=d.replace($,""),o()):l()}}(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!i&&(e=s.body)){var t=s.createElement("div"),r=m.style.cssText,n=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",m.style.cssText=E,e.style.cssText=E,e.appendChild(t),i=t.offsetWidth,e.removeChild(t),i=parseFloat(i,10),m.style.cssText=r,e.style.cssText=n}return i||16},y.calcListLength=function(e){if(!(e in P)||z.uT){var t=y.calcLength(function(e){var t,r,n,i,s,a,o,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,c=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=(r=function(e){var t,r="",n=[],i=[],s=0,a=0,o=!1;function l(){r&&(n.push(r),r="")}function c(){n[0]&&(i.push(n),n=[])}for(;;){if(""===(t=e.charAt(a)))return l(),c(),i;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,l();continue}a+=1}else{if(O(t)){if(e.charAt(a-1)&&O(e.charAt(a-1))||!r){a+=1;continue}if(0===s){l(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){l(),c(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}r+=t,a+=1}}}(e)).length,t=0;t<n;t++)if(s=(i=r[t])[i.length-1],o=s,l.test(o)&&0<=parseFloat(o)||c.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),y.matchesMedia(i))return a}return"100vw"}(e));P[e]=t||L.width}return P[e]},y.setRes=function(e){var t;if(e)for(var r=0,n=(t=y.parseSet(e)).length;r<n;r++)U(t[r],e.sizes);return t},y.setRes.res=U,y.applySetCandidate=function(e,t){if(e.length){var r,n,i,s,a,o,l,c,u,f,d,p,m,v,h,g=t[y.ns],A=y.DPR;if(o=g.curSrc||t[b],(l=g.curCan||function(e,t,r){var n;return!r&&t&&(r=(r=e[y.ns].sets)&&r[r.length-1]),(n=ce(t,r))&&(t=y.makeUrl(t),e[y.ns].curSrc=t,(e[y.ns].curCan=n).res||U(n,n.set.sizes)),n}(t,o,e[0].set))&&l.set===e[0].set&&((u=w&&!t.complete&&l.res-.1>A)||(l.cached=!0,l.res>=A&&(a=l))),!a)for(e.sort(le),a=e[(s=e.length)-1],n=0;n<s;n++)if((r=e[n]).res>=A){a=e[i=n-1]&&(u||o!==y.makeUrl(r.url))&&(f=e[i].res,d=r.res,p=A,m=e[i].cached,h=v=void 0,p<("saveData"===z.algorithm?2.7<f?p+1:(h=(d-p)*(v=Math.pow(f-.6,1.5)),m&&(h+=.1*v),f+h):1<p?Math.sqrt(f*d):f))?e[i]:r;break}a&&(c=y.makeUrl(a.url),g.curSrc=c,g.curCan=a,c!==o&&y.setSrc(t,a),y.setSize(t))}},y.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},y.getSet=function(e){var t,r,n,i=!1,s=e[y.ns].sets;for(t=0;t<s.length&&!i;t++)if((r=s[t]).srcset&&y.matchesMedia(r.media)&&(n=y.supportsType(r.type))){"pending"===n&&(r=n),i=r;break}return i},y.parseSets=function(e,t,r){var n,i,s,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[y.ns];l.src!==c&&!r.src||(l.src=f.call(e,"src"),l.src?d.call(e,h,l.src):p.call(e,h)),l.srcset!==c&&!r.srcset&&y.supSrcset&&!e.srcset||(n=f.call(e,"srcset"),l.srcset=n,a=!0),l.sets=[],o&&(l.pic=!0,function(e,t){var r,n,i,s,a=e.getElementsByTagName("source");for(r=0,n=a.length;r<n;r++)(i=a[r])[y.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,l.sets)),l.srcset?(i={srcset:l.srcset,sizes:f.call(e,"sizes")},l.sets.push(i),(s=(u||l.src)&&C.test(l.srcset||""))||!l.src||ce(l.src,i)||i.has1x||(i.srcset+=", "+l.src,i.cands.push({url:l.src,d:1,set:i}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(o||i&&!y.supSrcset||s&&!y.supSizes),a&&y.supSrcset&&!l.supported&&(n?(d.call(e,g,n),e.srcset=""):p.call(e,g)),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==y.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},y.fillImg=function(e,t){var r,n=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),r=e[y.ns],!n&&r.evaled===a||(r.parsed&&!t.reevaluate||y.parseSets(e,e.parentNode,t),r.supported?r.evaled=a:function(e){var t,r=y.getSet(e),n=!1;"pending"!==r&&(n=a,r&&(t=y.setRes(r),y.applySetCandidate(t,e))),e[y.ns].evaled=n}(e))},y.setupRun=function(){N&&!T&&R===e.devicePixelRatio||(T=!1,R=e.devicePixelRatio,M={},P={},y.DPR=R||1,L.width=Math.max(e.innerWidth||0,m.clientWidth),L.height=Math.max(e.innerHeight||0,m.clientHeight),L.vw=L.width/100,L.vh=L.height/100,a=[L.height,L.width,R].join("-"),L.em=y.getEmValue(),L.rem=L.em)},y.supPicture?(oe=t,y.fillImg=t):(Y=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=s.readyState||"";te=setTimeout(ee,"loading"===e?200:999),s.body&&(y.fillImgs(),(G=G||Y.test(e))&&clearTimeout(te))},te=setTimeout(ee,s.body?9:99),re=m.clientHeight,r(e,"resize",(V=function(){T=Math.max(e.innerWidth||0,m.clientWidth)!==L.width||m.clientHeight!==re,re=m.clientHeight,T&&y.fillImgs()},J=99,Z=function(){var e=new Date-X;e<J?K=setTimeout(Z,J-e):(K=null,V())},function(){X=new Date,K=K||setTimeout(Z,J)})),r(s,"readystatechange",ee)),y.picturefill=oe,y.fillImgs=oe,y.teardownRun=t,oe._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(z[t]=e[0],N&&y.fillImgs({reselect:!0}))}};for(;x&&x.length;)e.picturefillCFG.push(x.shift());e.picturefill=oe,"object"==typeof fe&&"object"==typeof fe.exports?fe.exports=oe:(me=function(){return oe}.call(de,pe,de,fe))===c||(fe.exports=me),y.supPicture||(v["image/webp"]=(ne="image/webp",ie="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(se=new e.Image).onerror=function(){v[ne]=!1,oe()},se.onload=function(){v[ne]=1===se.width,oe()},se.src=ie,"pending"))}(window,document)},function(e,t){var r,n;r=window,n=function(o,W){"use strict";if(!W.getElementsByClassName){return}var $,D,I=W.documentElement,l=o.Date,n=o.HTMLPictureElement,c="addEventListener",O="getAttribute",U=o[c],F=o.setTimeout,u=o.requestAnimationFrame||F,f=o.requestIdleCallback,H=/^picture$/i,i=["load","error","lazyincluded","_lazyloaded"],r={},j=Array.prototype.forEach,q=function(e,t){if(!r[t]){r[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return r[t].test(e[O]("class")||"")&&r[t]},Q=function(e,t){if(!q(e,t)){e.setAttribute("class",(e[O]("class")||"").trim()+" "+t)}},G=function(e,t){var r;if(r=q(e,t)){e.setAttribute("class",(e[O]("class")||"").replace(r," "))}},V=function(t,r,e){var n=e?c:"removeEventListener";if(e){V(t,r)}i.forEach(function(e){t[n](e,r)})},J=function(e,t,r,n,i){var s=W.createEvent("CustomEvent");if(!r){r={}}r.instance=$;s.initCustomEvent(t,!n,!i,r);e.dispatchEvent(s);return s},K=function(e,t){var r;if(!n&&(r=o.picturefill||D.pf)){r({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},X=function(e,t){return(getComputedStyle(e,null)||{})[t]},a=function(e,t,r){r=r||e.offsetWidth;while(r<D.minSize&&t&&!e._lazysizesWidth){r=t.offsetWidth;t=t.parentNode}return r},Z=function(){var r,n;var t=[];var i=[];var s=t;var a=function(){var e=s;s=t.length?i:t;r=true;n=false;while(e.length){e.shift()()}r=false};var e=function(e,t){if(r&&!t){e.apply(this,arguments)}else{s.push(e);if(!n){n=true;(W.hidden?F:u)(a)}}};e._lsFlush=a;return e}(),Y=function(r,e){return e?function(){Z(r)}:function(){var e=this;var t=arguments;Z(function(){r.apply(e,t)})}},ee=function(e){var r;var n=0;var i=125;var s=D.ricTimeout;var t=function(){r=false;n=l.now();e()};var a=f&&D.ricTimeout?function(){f(t,{timeout:s});if(s!==D.ricTimeout){s=D.ricTimeout}}:Y(function(){F(t)},true);return function(e){var t;if(e=e===true){s=33}if(r){return}r=true;t=i-(l.now()-n);if(t<0){t=0}if(e||t<9&&f){a()}else{F(a,t)}}},te=function(e){var t,r;var n=99;var i=function(){t=null;e()};var s=function(){var e=l.now()-r;if(e<n){F(s,n-e)}else{(f||i)(i)}};return function(){r=l.now();if(!t){t=F(s,n)}}};(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:300};D=o.lazySizesConfig||o.lazysizesConfig||{};for(e in t){if(!(e in D)){D[e]=t[e]}}o.lazySizesConfig=D;F(function(){if(D.init){s()}})})();var e=function(){var u,f,d,p,t;var m,v,h,g,A,y;var z,w,b;var s=/^img$/i;var C=/^iframe$/i;var S="onscroll"in o&&!/glebot/.test(navigator.userAgent);var x=0;var E=0;var T=0;var M=-1;var P=function(e){T--;if(e&&e.target){V(e.target,P)}if(!e||T<0||!e.target){T=0}};var R=function(e,t){var r;var n=e;var i=X(W.body,"visibility")=="hidden"||X(e,"visibility")!="hidden";h-=t;y+=t;g-=t;A+=t;while(i&&(n=n.offsetParent)&&n!=W.body&&n!=I){i=(X(n,"opacity")||1)>0;if(i&&X(n,"overflow")!="visible"){r=n.getBoundingClientRect();i=A>r.left&&g<r.right&&y>r.top-1&&h<r.bottom+1}}return i};var e=function(){var e,t,r,n,i,s,a,o,l;var c=$.elements;if((p=D.loadMode)&&T<8&&(e=c.length)){t=0;M++;if(w==null){if(!("expand"in D)){D.expand=I.clientHeight>500&&I.clientWidth>500?500:370}z=D.expand;w=z*D.expFactor}if(E<w&&T<1&&M>2&&p>2&&!W.hidden){E=w;M=0}else if(p>1&&M>1&&T<6){E=z}else{E=x}for(;t<e;t++){if(!c[t]||c[t]._lazyRace){continue}if(!S){k(c[t]);continue}if(!(o=c[t][O]("data-expand"))||!(s=o*1)){s=E}if(l!==s){m=innerWidth+s*b;v=innerHeight+s;a=s*-1;l=s}r=c[t].getBoundingClientRect();if((y=r.bottom)>=a&&(h=r.top)<=v&&(A=r.right)>=a*b&&(g=r.left)<=m&&(y||A||g||h)&&(D.loadHidden||X(c[t],"visibility")!="hidden")&&(f&&T<3&&!o&&(p<3||M<4)||R(c[t],s))){k(c[t]);i=true;if(T>9){break}}else if(!i&&f&&!n&&T<4&&M<4&&p>2&&(u[0]||D.preloadAfterLoad)&&(u[0]||!o&&(y||A||g||h||c[t][O](D.sizesAttr)!="auto"))){n=u[0]||c[t]}}if(n&&!i){k(n)}}};var r=ee(e);var L=function(e){Q(e.target,D.loadedClass);G(e.target,D.loadingClass);V(e.target,_);J(e.target,"lazyloaded")};var n=Y(L);var _=function(e){n({target:e.target})};var N=function(t,r){try{t.contentWindow.location.replace(r)}catch(e){t.src=r}};var B=function(e){var t;var r=e[O](D.srcsetAttr);if(t=D.customMedia[e[O]("data-media")||e[O]("media")]){e.setAttribute("media",t)}if(r){e.setAttribute("srcset",r)}};var a=Y(function(e,t,r,n,i){var s,a,o,l,c,u;if(!(c=J(e,"lazybeforeunveil",t)).defaultPrevented){if(n){if(r){Q(e,D.autosizesClass)}else{e.setAttribute("sizes",n)}}a=e[O](D.srcsetAttr);s=e[O](D.srcAttr);if(i){o=e.parentNode;l=o&&H.test(o.nodeName||"")}u=t.firesLoad||"src"in e&&(a||s||l);c={target:e};if(u){V(e,P,true);clearTimeout(d);d=F(P,2500);Q(e,D.loadingClass);V(e,_,true)}if(l){j.call(o.getElementsByTagName("source"),B)}if(a){e.setAttribute("srcset",a)}else if(s&&!l){if(C.test(e.nodeName)){N(e,s)}else{e.src=s}}if(i&&(a||l)){K(e,{src:s})}}if(e._lazyRace){delete e._lazyRace}G(e,D.lazyClass);Z(function(){if(!u||e.complete&&e.naturalWidth>1){if(u){P(c)}else{T--}L(c)}},true)});var k=function(e){var t;var r=s.test(e.nodeName);var n=r&&(e[O](D.sizesAttr)||e[O]("sizes"));var i=n=="auto";if((i||!f)&&r&&(e[O]("src")||e.srcset)&&!e.complete&&!q(e,D.errorClass)&&q(e,D.lazyClass)){return}t=J(e,"lazyunveilread").detail;if(i){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;T++;a(e,t,i,n,r)};var i=function(){if(f){return}if(l.now()-t<999){F(i,999);return}var e=te(function(){D.loadMode=3;r()});f=true;D.loadMode=3;r();U("scroll",function(){if(D.loadMode==3){D.loadMode=2}e()},true)};return{_:function(){t=l.now();$.elements=W.getElementsByClassName(D.lazyClass);u=W.getElementsByClassName(D.lazyClass+" "+D.preloadClass);b=D.hFac;U("scroll",r,true);U("resize",r,true);if(o.MutationObserver){new MutationObserver(r).observe(I,{childList:true,subtree:true,attributes:true})}else{I[c]("DOMNodeInserted",r,true);I[c]("DOMAttrModified",r,true);setInterval(r,999)}U("hashchange",r,true);["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){W[c](e,r,true)});if(/d$|^c/.test(W.readyState)){i()}else{U("load",i);W[c]("DOMContentLoaded",r);F(i,2e4)}if($.elements.length){e();Z._lsFlush()}else{r()}},checkElems:r,unveil:k}}(),re=function(){var r;var s=Y(function(e,t,r,n){var i,s,a;e._lazysizesWidth=n;n+="px";e.setAttribute("sizes",n);if(H.test(t.nodeName||"")){i=t.getElementsByTagName("source");for(s=0,a=i.length;s<a;s++){i[s].setAttribute("sizes",n)}}if(!r.detail.dataAttr){K(e,r.detail)}});var n=function(e,t,r){var n;var i=e.parentNode;if(i){r=a(e,i,r);n=J(e,"lazybeforesizes",{width:r,dataAttr:!!t});if(!n.defaultPrevented){r=n.detail.width;if(r&&r!==e._lazysizesWidth){s(e,i,n,r)}}}};var e=function(){var e;var t=r.length;if(t){e=0;for(;e<t;e++){n(r[e])}}};var t=te(e);return{_:function(){r=W.getElementsByClassName(D.autosizesClass);U("resize",t)},checkElems:t,updateElem:n}}(),s=function(){if(!s.i){s.i=true;re._();e._()}};return $={cfg:D,autoSizer:re,loader:e,init:s,uP:K,aC:Q,rC:G,hC:q,fire:J,gW:a,rAF:Z}}(r,r.document),r.lazySizes=n,"object"==typeof e&&e.exports&&(e.exports=n)}]);