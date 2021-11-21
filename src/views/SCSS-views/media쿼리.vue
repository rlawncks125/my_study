<template>
  <h1 class="div-line">SCSS 미디어쿼리</h1>
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
        title: "미디어 ",
        code: codeProcess(`all : 모든 장치
    print : 인쇄 결과물 및 출력 미리보기 화면에 표시 중인 문서
    screen : 주로 화면이 새당
    speech : 음성 합성장치 대상`),
      },
      {
        title: "내가 쓰는 기본구조",
        code: codeProcess(`@media (max-width: 400px) {
    /ttcontent: "mobile";
    /ttcolor: red;
    }

    @media (min-width: 400px) {
        /ttcontent: "doublephon";
        /ttcolor: goldenrod;
    }
    
    @media (min-width: 700px) {
        /ttcontent: "table";
        /ttcolor: green;
        }`),
      },
      {
        title: "Mixins을 사용한 미디어쿼리",
        code: codeProcess(`$screen: (
  /ttxs: 475px,
  /ttsm: 640px,
  /ttmd: 768px,
  /ttlg: 1024px,
  /ttxl: 1280px,
  /ttxxl: 1536px,
);

@mixin xs {
  /tt----@media (min-width: 0) and (max-width: map-get($screen,xs)) {
    /tt/tt@content();
  /tt}
}
@mixin sm {
  /tt----@media (min-width: calc(map-get($screen,xs) + 1px)) and (max-width: map-get($screen,sm)) {
    /tt/tt@content();
  /tt}
}
@mixin md {
  /tt----@media (min-width: calc(map-get($screen,sm) + 1px)) and (max-width: map-get($screen,md)) {
    /tt/tt@content();
  /tt}
}
@mixin lg {
  /tt----@media (min-width: calc(map-get($screen,md) + 1px)) and (max-width: map-get($screen,lg)) {
   /tt/tt@content();
  /tt}
}
@mixin xl {
  /tt----@media (min-width: calc(map-get($screen,lg) + 1px)) and (max-width: map-get($screen,xl)) {
    /tt/tt@content();
  /tt}
}
@mixin xxl {
  /tt----@media (min-width: calc(map-get($screen,xl) + 1px)) {
    /tt/tt@content();
  /tt}
}`),
      },
      {
        title: "Mixins 사용 = include() ",
        code: codeProcess(`
          @include 믹스인 이름;
          @include 믹스인 이름(인수);
          // 변수 키워드 할당
          @include 믹스인 이름($매개변수 : 인수);

            // ex)
            .box {
                /ttdisplay : none;
                /tt@icnlude md(){
                    /tt/ttdisplay: "block";
                /tt}
            }
          `),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
