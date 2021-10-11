<template>
  <h1 class="div-line">Function ( 함수 )</h1>
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
        title: "선언",
        code: codeProcess(` // @return 지시어를 통해 값을 반환
      ---- @function 함수이름($매개변수){
      ---- /tt@return 값
      }`),
      },
      {
        title: "사용",
        code: codeProcess(`함수이름(인수)`),
      },
      {
        title: "예",
        code: codeProcess(`$max-width : 1280px;

        // 선언
      ---- @function division-row($number:1 , $rows : 12){
        /tt@return $max-width * ($number / $rows);
      }

      .box1{
          // 사용
        /ttwidth : division-row(2);
      }
      .box2{
          // 사용
        /ttwidth : division-row(4);
      }`),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
