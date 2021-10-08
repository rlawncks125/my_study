<template>
  <div></div>
  <!-- <code-convert>
    <template #title> </template>
    <template #content></template>
    <template #code>{{ }} </template>
  </code-convert> -->
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      data: codeProcess(``),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
