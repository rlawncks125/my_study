(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f25c5cc"],{"0329":function(t,e,n){"use strict";n.r(e);var c=n("ade3"),b=(n("a15b"),n("ac1f"),n("1276"),n("b0c0"),n("7a23")),j=Object(b["g"])("h1",{class:"div-line"},"템블릿 문법",-1),a=Object(b["g"])("span",null,"공식홈페이지 : ",-1),l=Object(b["g"])("a",{href:"https://kr.vuejs.org/v2/guide/syntax.html",target:"_black"},"https://kr.vuejs.org/v2/guide/syntax.html",-1),r=Object(b["g"])("hr",null,null,-1),i=Object(b["g"])("br",null,null,-1),o=Object(b["i"])("v-html 디렉티브시 : "),u=["innerHTML"],O=["id"],s=["disabled"],d=["id"];function p(t,e,n,p,m,g){var f=Object(b["E"])("code-convert");return Object(b["w"])(),Object(b["f"])(b["a"],null,[j,a,l,r,i,Object(b["j"])(f,null,{title:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.문자열.title),1)]})),content:Object(b["N"])((function(){return[Object(b["g"])("p",null,Object(b["I"])(t.msg),1),e[0]||(Object(b["G"])(-1),e[0]=Object(b["g"])("p",null,[Object(b["i"])("업데이트 하지 않습니다."+Object(b["I"])(t.msg),1)]),Object(b["G"])(1),e[0])]})),code:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.문자열.code),1)]})),_:1}),Object(b["j"])(f,null,{title:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.원시HTML.title),1)]})),content:Object(b["N"])((function(){return[Object(b["g"])("p",null,"텍스트 보간시 : "+Object(b["I"])(t.rawHtml),1),Object(b["g"])("p",null,[o,Object(b["g"])("span",{innerHTML:t.rawHtml},null,8,u)])]})),code:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.원시HTML.code),1)]})),_:1}),Object(b["j"])(f,null,{title:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.속성.title),1)]})),content:Object(b["N"])((function(){return[Object(b["g"])("div",{id:t.attrId},"HTMl 속성사용시 v-bind디렉티브 사용",8,O),Object(b["g"])("button",{disabled:t.disabled},"Button",8,s)]})),code:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.속성.code),1)]})),_:1}),Object(b["j"])(f,null,{title:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.JavaScrpit_표현식.title),1)]})),content:Object(b["N"])((function(){return[Object(b["g"])("p",null,Object(b["I"])(t.js.number+1),1),Object(b["g"])("p",null,Object(b["I"])(t.js.ok?"yes":"no"),1),Object(b["g"])("p",null,Object(b["I"])(t.js.message.split("").reverse().join("")),1),Object(b["g"])("div",{id:"list-"+t.js.name},null,8,d),Object(b["g"])("button",{onClick:e[1]||(e[1]=function(e){return t.js.boolean=!t.js.boolean})}," 값 할당 : "+Object(b["I"])(t.js.boolean),1)]})),code:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.JavaScrpit_표현식.code),1)]})),_:1}),Object(b["j"])(f,null,{title:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.동적전달.title),1)]})),content:Object(b["N"])((function(){return[Object(b["g"])("p",Object(b["q"])(Object(c["a"])({},t.attrName||"",t.attrNameValue)),null,16)]})),code:Object(b["N"])((function(){return[Object(b["i"])(Object(b["I"])(t.동적전달.code),1)]})),_:1})],64)}var m=n("5530"),g=n("dd39"),f=Object(b["k"])({setup:function(){var t=Object(b["A"])({msg:"문자열 보간입니다.",rawHtml:"<span style='color: red;'>rawHtml</span>",attrId:"attr_Id",disabled:!0,js:{number:22,ok:!0,message:"안녕 하세요 템플릿 문법 입니다.",name:"키오스크",boolean:!0},attrName:"id",attrNameValue:"동적전달_Id"}),e=Object(b["A"])({title:"문자열",code:Object(g["a"])('\n      <span>{{ msg }}</span>\n      <span v-once>변경시 업데이트 하지 않습니다.{{ msg }}</span>\n\n    //   데이터\n    msg: "문자열 보간입니다.",\n      ')}),n=Object(b["A"])({title:"원시HTML",code:Object(g["a"])('\n      ---- <p>텍스트 보간시 : {{ rawHtml }}</p>\n      ---- <p>v-html 디렉티브시 : <span v-html="rawHtml"></span></p>\n\n    //   데이터\n    ---- rawHtml: "<span style=\'color: red;\'>rawHtml</span>",\n      ')}),c=Object(b["A"])({title:"속성",code:Object(g["a"])('\n      <div :id="attrId">HTMl 속성사용시 v-bind디렉티브 사용</div>\n      <button :disabled="disabled">Button</button>\n\n    //   데이터\n     attrId: "attr_Id",\n      disabled: true,\n      ')}),j=Object(b["A"])({title:"JavaScrpit_표현식",code:Object(g["a"])('\n        {{ js.number + 1 }}\n        {{ js.ok ? "yes" : "no" }}\n        {{ js.message.split(" ").reverse().join(" ") }}\n      <div :id = "\'list-\' + js.name"></div>\n      <button @click="js.boolean = !js.boolean">값 할당 : {{ js.boolean }}</button>\n\n    //   데이터\n     js: {\n        /ttnumber: 22,\n        /ttok: true,\n        /ttmessage: "안녕 하세요 템플릿 문법 입니다.",\n        /ttname: "키오스크",\n        /ttboolean: true,\n      },\n      ')}),a=Object(b["A"])({title:"동적 전달",code:Object(g["a"])('\n        <p :[attrName]="attrNameValue"></p>\n\n        // 데이터\n         attrName: "id",\n      attrNameValue: "동적전달_Id",\n      ')});return Object(m["a"])(Object(m["a"])({},Object(b["J"])(t)),{},{"문자열":e,"원시HTML":n,"속성":c,"JavaScrpit_표현식":j,"동적전달":a})}}),v=n("d959"),I=n.n(v);const N=I()(f,[["render",p]]);e["default"]=N},b0c0:function(t,e,n){var c=n("83ab"),b=n("9bf2").f,j=Function.prototype,a=j.toString,l=/^\s*function ([^ (]*)/,r="name";c&&!(r in j)&&b(j,r,{configurable:!0,get:function(){try{return a.call(this).match(l)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-4f25c5cc.5cdb2c92.js.map