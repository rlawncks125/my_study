<template>
  <h1 class="div-line">Extend ( 확장 )</h1>
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
        title: "확장",
        content: `@extend 선택자`,
        code: codeProcess(`// , 로 구분하는 다중 선택자로 만들어짐
      // 부작용이 생길수 있어 권장하지 않으며 , Mixin을 대체 기능으로 권유

      .btn {
      /ttpadding : 5px;
      /ttmargin : 2px;
      /ttbackground-color : blue;
      }

      .btn-pramiary {
      /tt@extend .btn;
      /ttbackground-color : sky;
      }

      //결과 : 

      .btn , .btn-pramiary{
      /ttpadding : 5px;
      /ttmargin : 2px;
      /ttbackground-color : blue;
      }

      .btn-pramiary {
      /ttbackground-color : sky;
      }`),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
