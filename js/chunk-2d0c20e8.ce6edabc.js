(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c20e8"],{"494a":function(n,t,e){"use strict";e.r(t);var o=e("7a23"),r=Object(o["g"])("h1",{class:"div-line"},"SCSS 데이터",-1),c=Object(o["g"])("hr",null,null,-1),l=Object(o["g"])("br",null,null,-1),i=["innerHTML"];function a(n,t,e,a,b,d){var u=Object(o["E"])("code-convert");return Object(o["w"])(),Object(o["f"])(o["a"],null,[r,c,l,(Object(o["w"])(!0),Object(o["f"])(o["a"],null,Object(o["C"])(n.items,(function(n){return Object(o["w"])(),Object(o["f"])("div",{key:n.id},[Object(o["j"])(u,null,Object(o["h"])({title:Object(o["N"])((function(){return[Object(o["i"])(Object(o["I"])(n.title),1)]})),code:Object(o["N"])((function(){return[Object(o["i"])(Object(o["I"])(n.code),1)]})),_:2},[n.content?{name:"content",fn:Object(o["N"])((function(){return[Object(o["g"])("div",{innerHTML:n.content},null,8,i)]}))}:void 0]),1024)])})),128))],64)}var b=e("dd39"),d=Object(o["k"])({components:{},setup:function(){var n=Object(o["A"])([{title:"데이터 종류",code:Object(b["a"])('---- Number : 숫자\n      /tt/tt/ttex) 1, .02 , 10px , 1rem ···\n      ---- String : 문자\n      /tt/tt/ttex) bold , flex , "/images/a.png" , "string"\n      ---- Colors : 색상 표현\n      /tt/tt/ttex) red , blue , #FFFFFF , rgba(255,255,255,1)\n      ---- Boolean : 논리\n      /tt/tt/ttex) true, false\n      ---- Null : null\n\n      ---- List : 공백이나 \',\' 로 구분된 값의 목록\n      /tt/tt/ttex) (ab,bc,cd) , ab bc cd\n      ---- Map :  List와 유사하나 Key:Value 형태\n      /tt/tt/ttex) (ab : first , bc : two , cd : three)')},{title:"변수",code:Object(b["a"])('\n       // $변수이름 : 값;\n      \n       $color-primary : #e030300;\n      $image : "/assets/images/";\n      $w : 200px;\n\n      .box{\n        /ttwidth : $w;\n        /ttcolor : $color-primary;\n        /ttbackgorund-image : url($images + \'bg.jpg\')\n      }\n\n      // 재할당 \n      $red : $FF0000;\n\n      $color-primary : $red;\n\n      //전역 설정 : !global\n      .box1{\n      /tt$color: #ffffff !global;\n      /ttbackground: $color;\n      }\n      .box2 {\n      /ttbackground : $color\n      }\n\n      // 초기값 설정 : !default\n      // 기존의 변수가 있다면 기존 값을 할당\n      .box {\n      /tt$color-primary : yellow !default;\n      }\n\n      // #{} 문자보간 \n      // #{} 문자보간 = $ {변수}와 활용 같음\n      $family: unquote("Droid+Sans");\n      @import url("http://fonts.googleapis.com/css?family=#{$family}"); \n\n\n      // @use 사용시 Praviate member 생성가능\n      // underscore ( _ ) or Hyphen ( - ) 를 사용\n      $_border : 1px solid #fff;\n      ')},{title:"연산",code:Object(b["a"])('산술 : \n      + : 더하기\n      = : 빼기\n      * : 곱하기 = 하나 이상의 값이 반드시 숫자\n      / : 나누기 = 오른쪽 값이 반드시 숫자\n      % : 나머지\n\n      비교 : \n      == : 동등\n      != : 부등\n      <\n      >\n      <=\n      >=\n\n      논리 :\n      and\n      or\n      not\n\n      // 숫자 \n      // 상대적 단위(%,em,vw) 시 calc()함수 이용\n      상대적 단위 연산시 :\n      width : 50% - 5px; // 에러\n      width : calc(50% - 5px) // 연산 가능\n\n      나누기 연산시 :\n      $w : 100px;\n      width : $w / 4;\n      height : (100px / 2);\n      font-size : 10px + 12px / 3;\n\n      // 문자\n      // 첫번째 연산자에 따라 따옴표 처리가됨\n      content : "hello " + World; // "Hello World";\n      content : row + "-reverse" + " " + wrap; // row-reverse wrap;\n      \n\n      // color\n      color : #123456 + #31456; \n      color : rgba(50,50,50,.2) + rgba(10,20,30,.3);\n\n      // 논리\n      $width : 80px;\n      div{\n        /tt@if not ($width > 100px){\n          /tt/ttheight : 200px;\n        /tt}\n      }')}]);return{items:n}}}),u=e("d959"),s=e.n(u);const f=s()(d,[["render",a]]);t["default"]=f}}]);
//# sourceMappingURL=chunk-2d0c20e8.ce6edabc.js.map