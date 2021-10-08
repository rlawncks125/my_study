<template>
  <code-convert>
    <template #title> 선택자 </template>
    <template #content><p class="선택자1">선택자1</p></template>
    <template #code> {{ 선택자1 }} </template>
  </code-convert>
  <code-convert>
    <template #title> 선택자2 </template>
    <template #content><p class="선택자2">선택자2</p></template>
    <template #code> {{ 선택자2 }} </template>
  </code-convert>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      선택자1: codeProcess(`
      <p class="선택자1">선택자1</p>
        //선택자 테스트

       .선택자1 {
            /ttcolor: blue;
        }
        `),
      선택자2: codeProcess(`
      <p class="선택자2">선택자2</p>

      .선택자2 {
        /ttcolor: green;
        }
        `),
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
.선택자1 {
  color: blue;
}
.선택자2 {
  color: green;
}
</style>
