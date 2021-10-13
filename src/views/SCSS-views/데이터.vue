<template>
  <h1 class="div-line">SCSS 데이터</h1>
  <hr />
  <br />
  <div v-for="item in items" :key="item.id">
    <code-convert>
      <template #title>{{ item.title }} </template>
      <template v-if="item.content" #content>
        <div v-html="item.content" />
      </template>
      <template #code>{{ item.code }} </template>
    </code-convert>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";

export default defineComponent({
  components: {},
  setup() {
    const items = reactive([
      {
        title: "데이터 종류",
        code: codeProcess(`---- Number : 숫자
      /tt/tt/ttex) 1, .02 , 10px , 1rem ···
      ---- String : 문자
      /tt/tt/ttex) bold , flex , "/images/a.png" , "string"
      ---- Colors : 색상 표현
      /tt/tt/ttex) red , blue , #FFFFFF , rgba(255,255,255,1)
      ---- Boolean : 논리
      /tt/tt/ttex) true, false
      ---- Null : null

      ---- List : 공백이나 ',' 로 구분된 값의 목록
      /tt/tt/ttex) (ab,bc,cd) , ab bc cd
      ---- Map :  List와 유사하나 Key:Value 형태
      /tt/tt/ttex) (ab : first , bc : two , cd : three)`),
      },
      {
        title: "변수",
        code: codeProcess(`
       // $변수이름 : 값;
      
       $color-primary : #e030300;
      $image : "/assets/images/";
      $w : 200px;

      .box{
        /ttwidth : $w;
        /ttcolor : $color-primary;
        /ttbackgorund-image : url($images + 'bg.jpg')
      }

      // 재할당 
      $red : $FF0000;

      $color-primary : $red;

      //전역 설정 : !global
      .box1{
      /tt$color: #ffffff !global;
      /ttbackground: $color;
      }
      .box2 {
      /ttbackground : $color
      }

      // 초기값 설정 : !default
      // 기존의 변수가 있다면 기존 값을 할당
      .box {
      /tt$color-primary : yellow !default;
      }

      // #{} 문자보간 
      // #{} 문자보간 = $ {변수}와 활용 같음
      $family: unquote("Droid+Sans");
      @import url("http://fonts.googleapis.com/css?family=#{$family}"); 


      // @use 사용시 Praviate member 생성가능
      // underscore ( _ ) or Hyphen ( - ) 를 사용
      $_border : 1px solid #fff;
      `),
      },
      {
        title: "연산",
        code: codeProcess(`산술 : 
      + : 더하기
      = : 빼기
      * : 곱하기 = 하나 이상의 값이 반드시 숫자
      / : 나누기 = 오른쪽 값이 반드시 숫자
      % : 나머지

      비교 : 
      == : 동등
      != : 부등
      <
      >
      <=
      >=

      논리 :
      and
      or
      not

      // 숫자 
      // 상대적 단위(%,em,vw) 시 calc()함수 이용
      상대적 단위 연산시 :
      width : 50% - 5px; // 에러
      width : calc(50% - 5px) // 연산 가능

      나누기 연산시 :
      $w : 100px;
      width : $w / 4;
      height : (100px / 2);
      font-size : 10px + 12px / 3;

      // 문자
      // 첫번째 연산자에 따라 따옴표 처리가됨
      content : "hello " + World; // "Hello World";
      content : row + "-reverse" + " " + wrap; // row-reverse wrap;
      

      // color
      color : #123456 + #31456; 
      color : rgba(50,50,50,.2) + rgba(10,20,30,.3);

      // 논리
      $width : 80px;
      div{
        /tt@if not ($width > 100px){
          /tt/ttheight : 200px;
        /tt}
      }`),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
