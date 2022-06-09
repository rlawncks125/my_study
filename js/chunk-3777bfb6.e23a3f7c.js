(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3777bfb6"],{"0170":function(a,c,n){"use strict";n.r(c);var t=n("7a23"),o={style:{"margin-bottom":"1rem"}},e=["innerHTML"];function i(a,c,n,i,d,s){var r=Object(t["F"])("code-new");return Object(t["x"])(),Object(t["f"])("div",null,[(Object(t["x"])(!0),Object(t["f"])(t["a"],null,Object(t["D"])(a.items,(function(a){return Object(t["x"])(),Object(t["f"])(t["a"],{key:a.id},[Object(t["g"])("h1",o,Object(t["J"])(a.title),1),Object(t["g"])("div",{innerHTML:a.html},null,8,e),Object(t["k"])(r,{codeText:a.code},null,8,["codeText"])],64)})),128))])}n("a15b"),n("99af");var d=n("6c51"),s=Object(t["l"])({setup:function(){var a=[r(),l(),u(),h(),m(),p()];return{items:a}}}),r=function(){return{title:"img 태그의 src를 이용한 불러오기",html:'\n  <img\n    src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"\n    alt=""\n  />',code:[Object(d["e"])('// html\n       <img src="이미지 주소" alt="" />\n      ')].join("\n")}},l=function(){return{title:"background 를 이용한 이미지 그리기",html:'<div class="image-bg"></div>',code:[Object(d["e"])('// html\n      <div class="image-bg"></div>'),Object(d["b"])("// css\n      .image-bg {\n          ".concat(d["a"],"background-image: url(이미지 주소);\n          ").concat(d["a"],"width: 300px;\n          ").concat(d["a"],"height: 250px;\n        }\n      "))].join("\n")}},u=function(){return{title:"::after backgound를 이용한 이미지 그리기",html:'<div class="after-bg"></div>',code:[Object(d["e"])('// html\n      <div class="after-bg"></div>'),Object(d["b"])("// scss\n$after-bg-width: 300px;\n$after-bg-height: 250px;\n\n      .after-bg {\n  ".concat(d["a"],"width: 400px;\n  ").concat(d["a"],"height: 400px;\n  ").concat(d["a"],"position: relative;\n  ").concat(d["a"],"background: rgb(18, 90, 150);\n\n  ").concat(d["a"],"&::after {\n  ").concat(d["a"]).concat(d["a"],"display: block;\n  ").concat(d["a"]).concat(d["a"],'content: "";\n  ').concat(d["a"]).concat(d["a"],"width: $after-bg-width;\n  ").concat(d["a"]).concat(d["a"],"height: $after-bg-height;\n  ").concat(d["a"]).concat(d["a"],"\n  ").concat(d["a"]).concat(d["a"],"position: absolute;\n  ").concat(d["a"]).concat(d["a"],"top: calc(50% - (#{$after-bg-height} / 2));\n  ").concat(d["a"]).concat(d["a"],"left: calc(50% - (#{$after-bg-width} / 2));\n  ").concat(d["a"]).concat(d["a"],"\n  ").concat(d["a"]).concat(d["a"],"background-image: url(이미지 주소);\n  ").concat(d["a"],"}\n}\n      "))].join("\n")}},h=function(){return{title:"picture 와 source 태그를 이용한 미디어크기에 따른 이미지 그리기",html:'\n    <picture>\n      <source\n        media="(min-width: 800px)"\n        srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_350,h_250/v1603952836/sample.jpg"\n      />\n      <source\n        media="(min-width: 700px)"\n        srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"\n      />\n      <img\n        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg"\n        alt="기본 이미지"\n      />\n    </picture>',code:[Object(d["e"])("// html\n      // soruce media 정의 순서 중요 ( 큰값 -> 작은값 -> 기본값(img) )\n      <picture>\n      ".concat(d["a"],"<source\n      ").concat(d["a"]).concat(d["a"],'media="(min-width: 800px)"\n      ').concat(d["a"]).concat(d["a"],'srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_350,h_250/v1603952836/sample.jpg"\n      ').concat(d["a"],"/>\n      ").concat(d["a"],"<source\n      ").concat(d["a"]).concat(d["a"],'media="(min-width: 700px)"\n      ').concat(d["a"]).concat(d["a"],'srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"\n      ').concat(d["a"],"/>\n      ").concat(d["a"],"<img\n      ").concat(d["a"]).concat(d["a"],'src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg"\n      ').concat(d["a"]).concat(d["a"],'alt="기본 이미지"\n      ').concat(d["a"],"/>\n    </picture>"))].join("\n")}},m=function(){return{title:"이미지 위에 글자 시인성 ( 잘보이게 )",html:'<div class="bg-text">\n            <p>text 입력 하세요.</p>\n          </div>',code:[Object(d["e"])('//html\n      <div class="bg-text">\n            '.concat(d["a"],"<p>text 입력 하세요.</p>\n          </div>\n      ")),Object(d["b"])("//css\n      .bg-text {\n  ".concat(d["a"],"width: 250px;\n  ").concat(d["a"],"height: 250px;\n  ").concat(d["a"],"position: relative;\n  ").concat(d["a"],'background: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg")\n  ').concat(d["a"]).concat(d["a"],"  no-repeat center/contain;\n\n  ").concat(d["a"],"& p {\n  ").concat(d["a"]).concat(d["a"],"color: white;\n  ").concat(d["a"]).concat(d["a"],"position: absolute;\n  ").concat(d["a"]).concat(d["a"],"bottom: 1rem;\n  ").concat(d["a"]).concat(d["a"],"left: 1rem;\n  ").concat(d["a"],"}\n  ").concat(d["a"],"&::before {\n  ").concat(d["a"]).concat(d["a"],"display: block;\n  ").concat(d["a"]).concat(d["a"],'content: "";\n  ').concat(d["a"]).concat(d["a"],"width: 100%;\n  ").concat(d["a"]).concat(d["a"],"height: 100%;\n  ").concat(d["a"]).concat(d["a"],"// !! 이부분\n  ").concat(d["a"]).concat(d["a"],"background: linear-gradient(to bottom, transparent, black);\n  ").concat(d["a"]).concat(d["a"],"opacity: 0.6;\n  ").concat(d["a"],"}\n}\n      "))].join("\n")}},p=function(){return Object(t["v"])((function(){var a,c=document.querySelector(".youtube-struct"),n=800;c.addEventListener("mouseenter",(function(c){a=setTimeout((function(){c.target.classList.add("hover-event")}),n)})),c.addEventListener("mouseleave",(function(c){clearTimeout(a),c.target.classList.remove("hover-event")}))})),{title:"유튜브 썸네일 마우스 오버시 딜레이후 동영상 재생으로 바뀜",html:' <div class="youtube-struct">\n    <div class="image-view">\n      <img\n        class="d-img"\n        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"\n      />\n      <video class="d-video" autoplay controls>\n        <source src="https://res.cloudinary.com/dhdq4v4ar/video/upload/v1652539977/mov_bbb_a1qrkh.mp4" type="video/mp4" />\n      </video>\n    </div>\n  </div>',code:[Object(d["e"])('// html\n     <div class="youtube-struct">\n    '.concat(d["a"],'<div class="image-view">\n    ').concat(d["a"]).concat(d["a"],'<img class="d-img" src="이미지 주소" />\n    ').concat(d["a"]).concat(d["a"],'<video class="d-video" autoplay controls>\n    ').concat(d["a"]).concat(d["a"]).concat(d["a"],'<source src="동영상 주소" type="video/mp4" />\n    ').concat(d["a"]).concat(d["a"],"</video>\n    ").concat(d["a"],"</div>\n    </div>\n    ")),Object(d["f"])("// js\n     onMounted(() => {\n    ".concat(d["a"],'const yb = document.querySelector(".youtube-struct") as HTMLElement;\n    ').concat(d["a"],"let addClassEvent: any;\n").concat(d["a"],"const delay = 800;\n\n    ").concat(d["a"]).concat(d["a"],"// 마우스 호버시 \n    ").concat(d["a"],'yb.addEventListener("mouseenter", (e: any) => {\n      ').concat(d["a"]).concat(d["a"],"// 딜레이후 evnet 작동 클래스 추가\n    ").concat(d["a"]).concat(d["a"],"  addClassEvent = setTimeout( () => {\n    ").concat(d["a"]).concat(d["a"],'    (e.target as HTMLElement).classList.add("hover-event");\n    ').concat(d["a"]).concat(d["a"],"  }, delay);\n    ").concat(d["a"],"});\n    ").concat(d["a"]).concat(d["a"],"// 마우스 이탈시  \n    ").concat(d["a"],'yb.addEventListener("mouseleave", (e: any) => {\n    ').concat(d["a"]).concat(d["a"],"// timeout 설정 제거\n    ").concat(d["a"]).concat(d["a"],"// evnet 작동 클래스 삭제\n    ").concat(d["a"]).concat(d["a"],"  clearTimeout(addClassEvent);\n    ").concat(d["a"]).concat(d["a"],'  (e.target as HTMLElement).classList.remove("hover-event");\n    ').concat(d["a"],"});\n  });\n    ")),Object(d["b"])("// css\n    .youtube-struct {\n  ".concat(d["a"],"$youtube-width: 300px;\n  ").concat(d["a"],"$youtube-height: 200px;\n  ").concat(d["a"],"$youtube-scale: 1.4;\n").concat(d["a"],"\n  ").concat(d["a"],"width: $youtube-width;\n  ").concat(d["a"],"height: $youtube-height;\n  ").concat(d["a"],"border: 1px solid black;\n  ").concat(d["a"],"overflow: hidden;\n\n  ").concat(d["a"],".image-view {\n  ").concat(d["a"]).concat(d["a"],"  width: 100%;\n  ").concat(d["a"]).concat(d["a"],"  height: 250px;\n\n  ").concat(d["a"]).concat(d["a"],"  .d-img {\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    width: 100%;\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    max-height: 250px;\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    display: block;\n  ").concat(d["a"]).concat(d["a"],"  }\n  ").concat(d["a"]).concat(d["a"],"  .d-video {\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    display: none;\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    width: 100%;\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    max-height: 250px;\n  ").concat(d["a"]).concat(d["a"],"  }\n  ").concat(d["a"],"}\n\n  ").concat(d["a"],"&.hover-event {\n  ").concat(d["a"]).concat(d["a"],"  transition: all 0.3s ease-in;  \n  ").concat(d["a"]).concat(d["a"],"  width: $youtube-width * $youtube-scale;\n  ").concat(d["a"]).concat(d["a"],"  height: $youtube-height * $youtube-scale;\n\n  ").concat(d["a"]).concat(d["a"],"  .image-view {\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    .d-img {\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"]).concat(d["a"],"      display: none;\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    }\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    .d-video {\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"]).concat(d["a"],"      display: block;\n  ").concat(d["a"]).concat(d["a"]).concat(d["a"],"    }\n  ").concat(d["a"]).concat(d["a"],"  }\n  ").concat(d["a"],"}\n}\n    "))].join("\n")}},b=(n("9db6"),n("d959")),v=n.n(b);const g=v()(s,[["render",i]]);c["default"]=g},"9db6":function(a,c,n){"use strict";n("f675")},f675:function(a,c,n){}}]);
//# sourceMappingURL=chunk-3777bfb6.e23a3f7c.js.map