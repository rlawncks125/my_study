<template>
  <h1 class="div-line">Mixin ( 재활용 )</h1>
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
        title: "정의",
        code: codeProcess(`@mixin 믹스인 이름;
      @mixin 믹스인 이름($매개변수);
      @mixin 믹스인 이름($매개변수 : 기본값);
      @mixin 믹스인 이름($매개변수 , $매개변수_가변인수...);
      
      // 예
       @mixin 믹스인 이름($fontSize , $color : red){
        /ttfont : {
          /tt/ttsize : $fontSize;
          /tt/ttweight : bold;
          /tt/ttcolor : $color
        /tt}

        /tt---- &::after{
          /tt/ttcontent : '';
          /tt/ttdisplay:block;
         /tt/ttwidth : 100vw;
          /tt/ttborder-bottom : 1px solid black;
        /tt}
        /tt@content();
      };
      `),
      },
      {
        title: "사용",
        code: codeProcess(`@include 믹스인 이름;
      @include 믹스인 이름(인수);
      // 변수 키워드 할당
      @include 믹스인 이름($매개변수 : 인수);
      
    //   예
    @include 믹스인 이름(12px);
      `),
      },
      {
        title: "@content ",
        code: codeProcess(
          `---- @ontent : Minxin @content 부분에 원하는 블록 전달 
          
           @mixin 믹스인 이름 {
        /ttfont-size : 10px;
        /tt@content 

        .box{
            /ttdisplay : none;

            /tt@include 믹스인 이름 {
            /tt/tt//스타일...
            /tt/ttcolor : red;
        /tt}
      }

        // 결과

        .box{
            /ttdisplay : none;
            /ttfont-size : 10px;
            /ttcolor : red;
        }`
        ),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
