(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ccd2e3d"],{c301:function(n,c,a){},c7b5:function(n,c,a){"use strict";a.r(c);var t=a("7a23"),i=["innerHTML"];function e(n,c,a,e,o,d){var r=Object(t["E"])("code-new");return Object(t["w"])(),Object(t["f"])("div",null,[(Object(t["w"])(!0),Object(t["f"])(t["a"],null,Object(t["C"])(n.items,(function(n){return Object(t["w"])(),Object(t["f"])(t["a"],{key:n.id},[Object(t["g"])("h1",null,Object(t["I"])(n.title),1),Object(t["g"])("div",{innerHTML:n.html},null,8,i),Object(t["j"])(r,{codeText:n.code},null,8,["codeText"])],64)})),128))])}a("a15b"),a("99af");var o=a("6c51"),d=Object(t["k"])({setup:function(){var n=[r(),l()];return Object(t["u"])((function(){var n=document.querySelector(".click-animation");n&&(null===n||void 0===n||n.addEventListener("click",(function(){n.animate({backgroundColor:["white","#5252f1db","red"]},1e3)})))})),{items:n}}}),r=function(){return{title:"백그라운드 그라데이션 애니메이션",html:'<div class="bg-graident-animation">bg graident animation</div>',code:[Object(o["e"])('//html\n        <div class="bg-graident-animation">bg graident animation</div>'),Object(o["b"])("//css\n      .bg-graident-animation {\n  ".concat(o["a"],"background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  ").concat(o["a"],"background-size: 400% 400%;\n  ").concat(o["a"],"animation: graident-animation 10s ease infinite;\n\n  ").concat(o["a"],"width: 400px;\n  ").concat(o["a"],"height: 400px;\n}\n\n@keyframes graident-animation {\n  ").concat(o["a"],"0% {\n  ").concat(o["a"]).concat(o["a"],"background-position: 0% 50%;\n  ").concat(o["a"],"}\n  ").concat(o["a"],"50% {\n  ").concat(o["a"]).concat(o["a"],"background-position: 100% 50%;\n  ").concat(o["a"],"}\n  ").concat(o["a"],"100% {\n  ").concat(o["a"]).concat(o["a"],"background-position: 0% 50%;\n  ").concat(o["a"],"}\n}"))].join("\n")}},l=function(){return{title:"클릭시 애니메이션 호출",html:'<div class="click-animation">클릭</div>',code:[Object(o["e"])('// html\n      <div class="click-animation">클릭</div>'),Object(o["b"])("// css\n      .click-animation {\n      ".concat(o["a"],"border: 1px solid black;\n      ").concat(o["a"],"width: 100px;\n      ").concat(o["a"],"height: 100px;\n      }")),Object(o["f"])('\n       // js\n      const clickAni = document.querySelector(".click-animation");\n\n      if (!clickAni) return;\n\n      clickAni?.addEventListener("click", () => {\n        // 애니메이션 실행\n        '.concat(o["a"],"clickAni.animate(\n        ").concat(o["a"]).concat(o["a"],"  {\n        ").concat(o["a"]).concat(o["a"]).concat(o["a"],'    backgroundColor: ["white", "#5252f1db","red"], \n        ').concat(o["a"]).concat(o["a"],"  },\n        ").concat(o["a"],"  1000 );\n      });\n      "))].join("\n")}},b=(a("f5a4"),a("d959")),u=a.n(b);const s=u()(d,[["render",e]]);c["default"]=s},f5a4:function(n,c,a){"use strict";a("c301")}}]);
//# sourceMappingURL=chunk-2ccd2e3d.ac490bd6.js.map