(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c604fe60"],{2197:function(e,t,n){e.exports=n.p+"media/mov_bbb.198918f4.mp4"},"4de4":function(e,t,n){"use strict";var c=n("23e7"),r=n("b727").filter,o=n("1dde"),i=o("filter");c({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var c=n("ade3");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},a69f:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=n("2197"),o=n.n(r),i=Object(c["g"])("h1",{class:"div-line"},"멀티미디어 관련",-1),b=Object(c["j"])(" video"),a=Object(c["g"])("video",{width:"320",height:"240",controls:""},[Object(c["g"])("source",{src:o.a,type:"video/mp4"})],-1),u=Object(c["j"])(" audio"),l=Object(c["j"])(" canvas"),j={ref:"canvasID"},f=Object(c["g"])("br",null,null,-1),O=Object(c["g"])("br",null,null,-1),d=Object(c["g"])("h1",{class:"div-line"},"외부 페이지 삽입",-1),s=Object(c["j"])(" object_embed"),p=Object(c["g"])("br",null,null,-1),v=Object(c["g"])("br",null,null,-1),m=Object(c["g"])("h1",{class:"div-line"},"프레임",-1),g=Object(c["j"])(" Iframe"),w=Object(c["g"])("iframe",{width:"500",height:"285",src:"https://www.youtube.com/embed/mw6pCi1IluU?list=RDmw6pCi1IluU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1);function h(e,t,n,r,o,h){var y=Object(c["F"])("code-convert");return Object(c["x"])(),Object(c["f"])(c["a"],null,[i,Object(c["k"])(y,null,{title:Object(c["P"])((function(){return[b]})),content:Object(c["P"])((function(){return[a]})),code:Object(c["P"])((function(){return[Object(c["j"])(Object(c["J"])(e.video),1)]})),_:1}),Object(c["k"])(y,null,{title:Object(c["P"])((function(){return[u]})),content:Object(c["P"])((function(){return[]})),code:Object(c["P"])((function(){return[Object(c["j"])(Object(c["J"])(e.audio),1)]})),_:1}),Object(c["k"])(y,null,{title:Object(c["P"])((function(){return[l]})),content:Object(c["P"])((function(){return[Object(c["g"])("canvas",j,null,512)]})),code:Object(c["P"])((function(){return[Object(c["j"])(Object(c["J"])(e.canvas),1)]})),_:1}),f,O,d,Object(c["k"])(y,null,{title:Object(c["P"])((function(){return[s]})),content:Object(c["P"])((function(){return[]})),code:Object(c["P"])((function(){return[Object(c["j"])(Object(c["J"])(e.object_embed),1)]})),_:1}),p,v,m,Object(c["k"])(y,null,{title:Object(c["P"])((function(){return[g]})),content:Object(c["P"])((function(){return[w]})),code:Object(c["P"])((function(){return[Object(c["j"])(Object(c["J"])(e.iframe),1)]})),_:1})],64)}var y=n("5530"),P=n("dd39"),D=Object(c["l"])({setup:function(){var e=Object(c["B"])({video:Object(P["a"])('<video>: 비디오 재생\n    \n        // 코드 \n        <video width="320" height="240" controls>\n        /tt<source src="../../assets/mov_bbb.mp4" type="video/mp4" />\n        </video>  \n      '),audio:Object(P["a"])("<audio>: 오디오 재생"),canvas:Object(P["a"])('<canvas>: 스크립트를 통해 그래픽을 그리는 데 사용될 수 있다. 예를 들어, 그래프 그리기, 사진 합성, 애니메이션 제작, 실시간 비디오 처리, 렌더링에 쓰일 수 있다\n        \n        //코드\n        // html\n        <canvas ref="canvasID"></canvas>\n\n        // script\n        const canvasID = ref<HTMLCanvasElement>();\n\n    watch(canvasID, () => {\n      /ttconst ctx = canvasID.value?.getContext("2d");\n\n      if (ctx) {\n        /ttctx.fillStyle = "green";\n        /ttctx.fillRect(10, 10, 150, 100);\n      }\n    });\n        '),object_embed:Object(P["a"])("<object>, <embed>: 웹 페이지 또는 외부 프로그램을 임베드한다.\nHTML 4.01에서 <embed>가 삭제되고 <object>로 대체되었으나 <object> 태그의 사용법이 워낙 복잡하다는 문제점이 있어서 HTML 5 규격에서 다시 표준으로 들어갔다. <embed>의 경우 파이어폭스에서 웹 페이지를 첨부할 수 없는 문제가 있었다."),iframe:Object(P["a"])('<iframe> : inline frame의 줄임말이다. <iframe>은 문서 전체가 프레임인 게 아니라 문서 안에 박스형으로 프레임을 넣을 때 쓴다. 이 태그는 HTML5에서도 계속 지원된다. 물론 iframe도 남용하면 웹 접근성 저하되는 건 똑같다.\n        \n        // 코드\n        // 유투브 소스 코드 복사로 끌어옴\n      <iframe\n        /ttwidth="500"\n        /ttheight="285"\n        /ttsrc="https://www.youtube.com/embed/mw6pCi1IluU?list=RDmw6pCi1IluU"\n        /tttitle="YouTube video player"\n        /ttframeborder="0"\n        /ttallow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n        /ttallowfullscreen>\n        </iframe>')}),t=Object(c["C"])();return Object(c["O"])(t,(function(){var e,n=null===(e=t.value)||void 0===e?void 0:e.getContext("2d");n&&(n.fillStyle="green",n.fillRect(10,10,150,100))})),Object(y["a"])(Object(y["a"])({},Object(c["K"])(e)),{},{canvasID:t})}}),I=n("d959"),k=n.n(I);const _=k()(D,[["render",h]]);t["default"]=_},b64b:function(e,t,n){var c=n("23e7"),r=n("7b0b"),o=n("df75"),i=n("d039"),b=i((function(){o(1)}));c({target:"Object",stat:!0,forced:b},{keys:function(e){return o(r(e))}})},dbb4:function(e,t,n){var c=n("23e7"),r=n("83ab"),o=n("56ef"),i=n("fc6a"),b=n("06cf"),a=n("8418");c({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,c=i(e),r=b.f,u=o(c),l={},j=0;while(u.length>j)n=r(c,t=u[j++]),void 0!==n&&a(l,t,n);return l}})},e439:function(e,t,n){var c=n("23e7"),r=n("d039"),o=n("fc6a"),i=n("06cf").f,b=n("83ab"),a=r((function(){i(1)})),u=!b||a;c({target:"Object",stat:!0,forced:u,sham:!b},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})}}]);
//# sourceMappingURL=chunk-c604fe60.cf62210e.js.map