<template>
  <h1 class="div-line">SCSS 중첩</h1>
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
        title: "구조",
        code: codeProcess(`.btn {
        /tt&.active {
        /tt    /ttcolor : blue;
        /tt}
        /tt&:hover {
        /tt    //ttcolor : yellow;
        /tt}
        /tt& p {
        /tt    //ttfont-size : 12px;
        /tt}
}`),
      },
      {
        title: "@at-root",
        code: codeProcess(`// : 중첩 벗어나기
        
        .btn{
        /tt&f-s : 10px;
        /tt/ttspan {
          /tt/tt/ttfont-size : $f-s;
        /tt/tt}
        /tt@at-root body{
          /tt/ttfont-size : $f-s;
        /tt}
      }`),
      },
      {
        title: "중첩된 속성",
        code: codeProcess(`// 중첩된 속성 : 같은 네임 스페이스 속성들을 중첩으로 사용

        .box {
        /ttfont: {
        /tt/ttweight : bold;
        /tt/ttsize : 5px;
        /tt}
        /ttmargin: {
        /tt/tttop : 5px;
        /tt/ttleft : 5px;
        /tt}
        /ttpadding: {
        /tt/tttop : 5px;
        /tt/ttbottom : 10px;
        /tt}
      }`),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
