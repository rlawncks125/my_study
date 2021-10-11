<template>
  <h1 class="div-line">:root 의사 클래스</h1>
  <hr />
  <br />

  <code-convert>
    <template #title> 변수선언</template>
    <template #content></template>
    <template #code>{{ 변수선언 }} </template>
  </code-convert>
  <code-convert>
    <template #title>변수사용 </template>
    <template #content></template>
    <template #code>{{ 변수사용 }} </template>
  </code-convert>
  <code-convert>
    <template #title> Root접근</template>
    <template #content></template>
    <template #code>{{ Root접근 }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      변수선언: codeProcess(` // 문서의 루트 요소 선택 = HTML에서는 <html>
      // 전역 변수 전언
      :root {
          /tt변수 : 값
          /tt--main-color : hotpink;
      }`),
      변수사용: codeProcess(` // var(변수,유효하지 않을시 대체값)
      .root-span {
        /ttcolor: var(--main-color);
        // 변수가 유효하지않을떄 2번째 값으로대체
        /ttcolor: var(--main-color,red);
      }`),
      Root접근: codeProcess(`
      //root값 get
      // :root값 접근 해서 값얻을수있다
      const rootVar = getComputedStyle(document.documentElement).getPropertyValue("접근할변수"); 
      
      // :root 접근x set값을 주면 변수접근가능
      const setVar = document.documentElement.style.getPropertyValue("접근할변수"); 

      
      //변수값 set
      // 최상위 html의 변수값 지정
      document.documentElement.style.setProperty("변수", "값"); 
      `),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
