(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4402a45d"],{"49e1":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r=Object(c["g"])("div",null,"리턴값으로 함수호출",-1),u=Object(c["g"])("br",null,null,-1),o=Object(c["g"])("p",null,"Promise",-1),i=Object(c["g"])("br",null,null,-1),a=Object(c["g"])("p",null,"function & Promise",-1);function b(t,e,n,b,l,f){return Object(c["x"])(),Object(c["f"])(c["a"],null,[r,Object(c["Q"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.f.x=e})},null,512),[[c["N"],t.f.x,void 0,{number:!0}]]),Object(c["Q"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.f.y=e})},null,512),[[c["N"],t.f.y,void 0,{number:!0}]]),Object(c["g"])("button",{onClick:e[2]||(e[2]=function(){var e;return t.f.click&&(e=t.f).click.apply(e,arguments)})},"클릭"),u,o,Object(c["Q"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.p.x=e})},null,512),[[c["N"],t.p.x,void 0,{number:!0}]]),Object(c["Q"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.p.y=e})},null,512),[[c["N"],t.p.y,void 0,{number:!0}]]),Object(c["g"])("button",{onClick:e[5]||(e[5]=function(){var e;return t.p.click&&(e=t.p).click.apply(e,arguments)})},"클릭"),i,a,Object(c["Q"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=function(e){return t.d.x=e})},null,512),[[c["N"],t.d.x,void 0,{number:!0}]]),Object(c["Q"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=function(e){return t.d.y=e})},null,512),[[c["N"],t.d.y,void 0,{number:!0}]]),Object(c["g"])("button",{onClick:e[8]||(e[8]=function(){var e;return t.d.click&&(e=t.d).click.apply(e,arguments)})},"클릭")],64)}var l=n("5530"),f=(n("99af"),n("d3b7"),Object(c["l"])({setup:function(){var t=O(),e=t.x,n=t.y,r=t.Func,u=p(),o=u.x,i=u.y,a=u.Func,b=s(),f=b.x,j=b.y,d=b.Func,v=Object(c["B"])({f:{x:e,y:n,click:function(){r((function(t){var e=t.sum,n=t.avg;console.log("sum : ".concat(e,", avg : ").concat(n))}))}},p:{x:o,y:i,click:function(){a().then((function(t){var e=t.sum,n=t.avg;return console.log("Promise , Sum : ".concat(e," Avg : ").concat(n))}))}},d:{x:f,y:j,click:function(){d((function(t){var e=t.sum,n=t.avg;console.log("Function | sum : ".concat(e," avg : ").concat(n))})).then((function(t){var e=t.sum,n=t.avg;return console.log("promise | sum :".concat(e,", avg: ").concat(n))}))}}});return Object(l["a"])({},Object(c["K"])(v))}})),O=function(){var t=Object(c["B"])({x:0,y:0}),e=function(e){var n=t.x+t.y,c=t.x/t.y;e({sum:n,avg:c})};return Object(l["a"])(Object(l["a"])({},Object(c["K"])(t)),{},{Func:e})},p=function(){var t=Object(c["B"])({x:0,y:0}),e=function(){var e=t.x+t.y,n=t.x/t.y;return new Promise((function(t){setTimeout((function(){t({sum:e,avg:n})}),1e3)}))};return Object(l["a"])(Object(l["a"])({},Object(c["K"])(t)),{},{Func:e})},s=function(){var t=Object(c["B"])({x:0,y:0}),e=function(e){var n=t.x+t.y,c=t.x/t.y;return e({sum:n,avg:c}),new Promise((function(t){setTimeout((function(){t({sum:n,avg:c})}),1e3)}))};return Object(l["a"])(Object(l["a"])({},Object(c["K"])(t)),{},{Func:e})},j=n("d959"),d=n.n(j);const v=d()(f,[["render",b]]);e["default"]=v},"4de4":function(t,e,n){"use strict";var c=n("23e7"),r=n("b727").filter,u=n("1dde"),o=u("filter");c({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var c=n("ade3");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},b64b:function(t,e,n){var c=n("23e7"),r=n("7b0b"),u=n("df75"),o=n("d039"),i=o((function(){u(1)}));c({target:"Object",stat:!0,forced:i},{keys:function(t){return u(r(t))}})},dbb4:function(t,e,n){var c=n("23e7"),r=n("83ab"),u=n("56ef"),o=n("fc6a"),i=n("06cf"),a=n("8418");c({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,c=o(t),r=i.f,b=u(c),l={},f=0;while(b.length>f)n=r(c,e=b[f++]),void 0!==n&&a(l,e,n);return l}})},e439:function(t,e,n){var c=n("23e7"),r=n("d039"),u=n("fc6a"),o=n("06cf").f,i=n("83ab"),a=r((function(){o(1)})),b=!i||a;c({target:"Object",stat:!0,forced:b,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o(u(t),e)}})}}]);
//# sourceMappingURL=chunk-4402a45d.68b10b0f.js.map