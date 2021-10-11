<template>
  <h1 class="div-line">라이브러리 가져오기</h1>
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
        title: "@import",
        code: codeProcess(`확장자 : @import "color.css";
      ---- http로시작 : @import "http://color.com/red";
      url사용 : @import url(color) screen;
      미디어쿼리 있을시 : @import "color" screen;
      여러 파일 가죠오기 : @import "header , footer";`),
      },
      {
        title: "@use",
        code: codeProcess(`// 기본
        @use "size"; 
        // 별칭
      @use "color" as c ; 
      // 내장함수 모듈가져오기
      @use "sass:math"; 

      box {
        /ttfont-size : size.$basic-size; // 기본 사용
        /ttcolor : c.$color-primary; // 별칭 사용
        /ttfont-size : math.round(12.2px); // 내장함수 사용
      }`),
      },
      {
        title: "@use 장점",
        code: codeProcess(`---- - @import를 사용시 모듈마다 변수와 함수 , 전역 namespace 등이 존재하기떄문에 다른 모듈과 중첩되는 상황이 발생함
      ---- - @use를 사용시 별도의 namespace를 가지고 있어 모듈마다 독립적으로 사용가능하다
      ---- - @use를 사용시 Praivate Member를 사용할수있다`),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
