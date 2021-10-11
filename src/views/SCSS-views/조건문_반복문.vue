<template>
  <h1 class="div-line">조건문 반복문</h1>
  <hr />
  <br />
  <div v-for="item in items" :key="item.id">
    <code-convert>
      <template #title>{{ item.title }} </template>
      <template #content>{{ item.content }}</template>
      <template #code>{{ item.code }} </template>
    </code-convert>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";

export default defineComponent({
  setup() {
    const items = reactive([
      {
        title: "if",
        code: codeProcess(`---- if(조건 , ture , false)

      div{
        $width : 300px;
        width : if($width > 200px , $width , 100px);
      }`),
      },
      {
        title: "if ~ else if",
        code: codeProcess(`---- @if (조건1){

---- } @else if (조건2) {

---- }@else {

---- }

$color : red ;

      div{
        /tt@if $color == orange {
        /tt/ttcolor : #FE9A2E;
        /tt}
        /tt@else if $color == banana {
        /tt/ttcolor : $FFFFFF;
        /tt}
        /tt@ else {
        /tt/ttcolor : red;
        /tt}
      }
`),
      },
      {
        title: "for",
        code: codeProcess(` // 종료 만큼 반복 ( through )
      ----@for $변수 from 시작 through 종료 {
        // ...
      }

      // 종료 진적까지 반복 ( to )
      ----@for $변수 from 시작 to 종료 {
        // ...
      }
      
     // 결과 :

      // 1부터 3번 반복
      ----@for $i from 1 through 3 {
      /tt#through:nth-child(#{$i}) {
      /tt/ttwidth : 20px * $i
      /tt}
      }

      // 1부터 3 직전까지만 반복(2번 반복)
      ----@for $i from 1 to 3 {
      /tt#to:nth-child(#{$i}) {
      /tt/ttwidth : 20px * $i
      /tt}
      }

      // for 결과
      ----#through:nth-child(1) { width: 20px; }
      ----#through:nth-child(2) { width: 40px; }
      ----#through:nth-child(3) { width: 60px; }
      
      ----#to:nth-child(1) { width: 20px; }
      ----#to:nth-child(2) { width: 40px; }
      `),
      },
      {
        title: "each",
        code: codeProcess(`// List 와 Map을 반복할떄 사용
      @each $변수 in 데이터 {
        //...
      }

      ---- // list타입
      @each $변수 in List타입 {}
      @each $변수,... in List타입,... {}

      ---- // map타입
      @each $key변수 , $value변수 in 데이터 {}`),
      },
      {
        title: "while",
        code: codeProcess(`@while 조건 {
            //...
        }`),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
