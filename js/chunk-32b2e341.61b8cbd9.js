(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b2e341"],{"25f0":function(e,n,t){"use strict";var r=t("6eeb"),a=t("825a"),c=t("577e"),o=t("d039"),u=t("ad6d"),i="toString",l=RegExp.prototype,f=l[i],s=o((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),b=f.name!=i;(s||b)&&r(RegExp.prototype,i,(function(){var e=a(this),n=c(e.source),t=e.flags,r=c(void 0===t&&e instanceof RegExp&&!("flags"in l)?u.call(e):t);return"/"+n+"/"+r}),{unsafe:!0})},2618:function(e,n,t){"use strict";t.r(n);var r=t("7a23"),a=Object(r["h"])("div",null,"예제 _ 테스트",-1),c=Object(r["h"])("h2",null,"Email",-1),o=Object(r["h"])("h2",null,"phone",-1);function u(e,n,t,u,i,l){var f=Object(r["G"])("code-test");return Object(r["y"])(),Object(r["g"])(r["a"],null,[a,Object(r["h"])("div",null,[c,Object(r["R"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=function(n){return e.emailStr=n})},null,512),[[r["O"],e.emailStr]]),Object(r["h"])("span",null,Object(r["K"])(e.isEmail),1),Object(r["l"])(f,{codeText:e.emailCode()},null,8,["codeText"])]),Object(r["h"])("div",null,[o,Object(r["R"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=function(n){return e.phone[0].value=n})},null,512),[[r["O"],e.phone[0].value]]),Object(r["h"])("span",null,Object(r["K"])(e.phone[1].value),1),Object(r["l"])(f,{codeText:e.phone[2]()},null,8,["codeText"])])],64)}function i(e){if(Array.isArray(e))return e}t("a4d3"),t("e01a"),t("d3b7"),t("d28b"),t("3ca3"),t("ddb0");function l(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,c=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(r=t.next()).done);o=!0)if(c.push(r.value),n&&c.length===n)break}catch(i){u=!0,a=i}finally{try{o||null==t["return"]||t["return"]()}finally{if(u)throw a}}return c}}var f=t("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e,n){return i(e)||l(e,n)||Object(f["a"])(e,n)||s()}t("4d63"),t("ac1f"),t("25f0"),t("a15b");var d=t("6c51"),p=Object(r["m"])({components:{codeTest:d["c"]},setup:function(){var e=h(),n=b(e,3),t=n[0],r=n[1],a=n[2],c=v(),o=b(c,3);o[0],o[1],o[2];return{isEmail:r,emailStr:t,emailCode:a,phone:v()}}}),h=function(){var e=Object(r["D"])(),n=Object(r["D"])();Object(r["P"])(e,(function(){var t=new RegExp("^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-.]+$");n.value=t.test(e.value)}));var t=function(){return[Object(d["b"])("// 정규화\n      \n      \"/^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-.]+$/\"\n      \n      // 해설\n      1. '@' 앞에 한개 이상의 숫자,알파벳이 있어여하고 '-' , '_' , '.' 문자는 두번쨰 문자 부터 사용 가능\n      2. '@' 뒤에는 문자숫자 한개이상 + '.'문자 + 문자숫자 한개이상 조합\n      ")].join("")};return[e,n,t]},v=function(){var e=Object(r["D"])(),n=Object(r["D"])();Object(r["P"])(e,(function(){var t=new RegExp("^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$");n.value=t.test(e.value)}));var t=function(){return[Object(d["b"])("// 정규화\n      \n      \"/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/\"\n      \n      // 해설\n      1. 01로 시작하고 세번째 숫자가 (0,1,6,7,8,9)들 숫자중 하나\n      2. 숫자 중간중간 '-' 는 있어도 되고 없어도됨\n      3. 중간 자리 숫자는 0-9 사이 숫자가 {3,4} : 최소 3개 최대4개 \n      4. 마지막 자리 숫자는 0-9자리 숫자가 {4} : 4개\n      ")].join("")};return[e,n,t]},O=t("d959"),j=t.n(O);const g=j()(p,[["render",u]]);n["default"]=g},"4d63":function(e,n,t){var r=t("83ab"),a=t("da84"),c=t("94ca"),o=t("7156"),u=t("9112"),i=t("9bf2").f,l=t("241c").f,f=t("44e7"),s=t("577e"),b=t("ad6d"),d=t("9f7f"),p=t("6eeb"),h=t("d039"),v=t("5135"),O=t("69f3").enforce,j=t("2626"),g=t("b622"),y=t("fce3"),m=t("107c"),x=g("match"),w=a.RegExp,A=w.prototype,E=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,R=/a/g,S=/a/g,z=new w(R)!==R,Z=d.UNSUPPORTED_Y,k=r&&(!z||Z||y||m||h((function(){return S[x]=!1,w(R)!=R||w(S)==S||"/a/i"!=w(R,"i")}))),T=function(e){for(var n,t=e.length,r=0,a="",c=!1;r<=t;r++)n=e.charAt(r),"\\"!==n?c||"."!==n?("["===n?c=!0:"]"===n&&(c=!1),a+=n):a+="[\\s\\S]":a+=n+e.charAt(++r);return a},D=function(e){for(var n,t=e.length,r=0,a="",c=[],o={},u=!1,i=!1,l=0,f="";r<=t;r++){if(n=e.charAt(r),"\\"===n)n+=e.charAt(++r);else if("]"===n)u=!1;else if(!u)switch(!0){case"["===n:u=!0;break;case"("===n:E.test(e.slice(r+1))&&(r+=2,i=!0),a+=n,l++;continue;case">"===n&&i:if(""===f||v(o,f))throw new SyntaxError("Invalid capture group name");o[f]=!0,c.push([f,l]),i=!1,f="";continue}i?f+=n:a+=n}return[a,c]};if(c("RegExp",k)){for(var _=function(e,n){var t,r,a,c,i,l,d=this instanceof _,p=f(e),h=void 0===n,v=[],j=e;if(!d&&p&&h&&e.constructor===_)return e;if((p||e instanceof _)&&(e=e.source,h&&(n="flags"in j?j.flags:b.call(j))),e=void 0===e?"":s(e),n=void 0===n?"":s(n),j=e,y&&"dotAll"in R&&(r=!!n&&n.indexOf("s")>-1,r&&(n=n.replace(/s/g,""))),t=n,Z&&"sticky"in R&&(a=!!n&&n.indexOf("y")>-1,a&&(n=n.replace(/y/g,""))),m&&(c=D(e),e=c[0],v=c[1]),i=o(w(e,n),d?this:A,_),(r||a||v.length)&&(l=O(i),r&&(l.dotAll=!0,l.raw=_(T(e),t)),a&&(l.sticky=!0),v.length&&(l.groups=v)),e!==j)try{u(i,"source",""===j?"(?:)":j)}catch(g){}return i},P=function(e){e in _||i(_,e,{configurable:!0,get:function(){return w[e]},set:function(n){w[e]=n}})},U=l(w),$=0;U.length>$;)P(U[$++]);A.constructor=_,_.prototype=A,p(a,"RegExp",_)}j("RegExp")}}]);
//# sourceMappingURL=chunk-32b2e341.61b8cbd9.js.map