(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-adb6bd28"],{"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,o=n("1dde"),u=o("filter");r({target:"Array",proto:!0,forced:!u},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var r=n("ade3");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},b64b:function(t,e,n){var r=n("23e7"),c=n("7b0b"),o=n("df75"),u=n("d039"),b=u((function(){o(1)}));r({target:"Object",stat:!0,forced:b},{keys:function(t){return o(c(t))}})},be21:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),c=Object(r["g"])("h1",{class:"div-line"},":root 의사 클래스",-1),o=Object(r["g"])("hr",null,null,-1),u=Object(r["g"])("br",null,null,-1),b=Object(r["j"])(" 변수선언"),i=Object(r["j"])("변수사용 "),a=Object(r["j"])(" Root접근");function O(t,e,n,O,j,f){var l=Object(r["F"])("code-convert");return Object(r["x"])(),Object(r["f"])(r["a"],null,[c,o,u,Object(r["k"])(l,null,{title:Object(r["P"])((function(){return[b]})),content:Object(r["P"])((function(){return[]})),code:Object(r["P"])((function(){return[Object(r["j"])(Object(r["J"])(t.변수선언),1)]})),_:1}),Object(r["k"])(l,null,{title:Object(r["P"])((function(){return[i]})),content:Object(r["P"])((function(){return[]})),code:Object(r["P"])((function(){return[Object(r["j"])(Object(r["J"])(t.변수사용),1)]})),_:1}),Object(r["k"])(l,null,{title:Object(r["P"])((function(){return[a]})),content:Object(r["P"])((function(){return[]})),code:Object(r["P"])((function(){return[Object(r["j"])(Object(r["J"])(t.Root접근),1)]})),_:1})],64)}var j=n("5530"),f=n("dd39"),l=Object(r["l"])({setup:function(){var t=Object(r["B"])({"변수선언":Object(f["a"])(" // 문서의 루트 요소 선택 = HTML에서는 <html>\n      // 전역 변수 전언\n      :root {\n          /tt변수 : 값\n          /tt--main-color : hotpink;\n      }"),"변수사용":Object(f["a"])(" // var(변수,유효하지 않을시 대체값)\n      .root-span {\n        /ttcolor: var(--main-color);\n        // 변수가 유효하지않을떄 2번째 값으로대체\n        /ttcolor: var(--main-color,red);\n      }"),"Root접근":Object(f["a"])('\n      //root값 get\n      // :root값 접근 해서 값얻을수있다\n      const rootVar = getComputedStyle(document.documentElement).getPropertyValue("접근할변수"); \n      \n      // :root 접근x set값을 주면 변수접근가능\n      const setVar = document.documentElement.style.getPropertyValue("접근할변수"); \n\n      \n      //변수값 set\n      // 최상위 html의 변수값 지정\n      document.documentElement.style.setProperty("변수", "값"); \n      ')});return Object(j["a"])({},Object(r["K"])(t))}}),s=n("d959"),d=n.n(s);const p=d()(l,[["render",O]]);e["default"]=p},dbb4:function(t,e,n){var r=n("23e7"),c=n("83ab"),o=n("56ef"),u=n("fc6a"),b=n("06cf"),i=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,n,r=u(t),c=b.f,a=o(r),O={},j=0;while(a.length>j)n=c(r,e=a[j++]),void 0!==n&&i(O,e,n);return O}})},e439:function(t,e,n){var r=n("23e7"),c=n("d039"),o=n("fc6a"),u=n("06cf").f,b=n("83ab"),i=c((function(){u(1)})),a=!b||i;r({target:"Object",stat:!0,forced:a,sham:!b},{getOwnPropertyDescriptor:function(t,e){return u(o(t),e)}})}}]);
//# sourceMappingURL=chunk-adb6bd28.985993fb.js.map