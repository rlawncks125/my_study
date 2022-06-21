<template>
  <h1 class="div-line">DOM 접근</h1>
  <hr />
  <br />
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <!-- <code-new :codeText="item.code" /> -->
      <div style="margin: 0.5rem 0" v-for="code in item.code" :key="code.id">
        <CodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
  <p ref="elRef">단일 Elemnt</p>
  <div v-for="item in arrayItems" :key="item.id" :ref="setItemRef">
    {{ item }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";

import { codeReutrnType, ELanguages } from "@/plugins/simple-code-editor.vue";

export default defineComponent({
  setup() {
    // 단일
    const elRef = ref<HTMLElement>();
    // 배열
    const arrayItems = ["AAAAA", "BBBBB", "CCCC", "DDDD"];
    const arrayRef = ref<HTMLElement[]>([]);
    const setItemRef = (el: HTMLElement) => {
      arrayRef.value.push(el);
    };
    onMounted(() => {
      console.log("단일", elRef.value);
      console.log("배열", arrayRef);
    });

    const items = [단일접근(), 복수접근(), 자식컴포넌트()];

    return { items, arrayItems, setItemRef, elRef };
  },
});

const 단일접근 = (): codeReutrnType => ({
  title: "단일 Element 접근",
  code: [
    {
      lang: ELanguages.xml,
      code: `<p ref="elRef" > 단일 Elemnt </p>

<script setup>
const elRef = ref<HTMLElement> ();
'</'script>`.replaceAll("'</'", "</"),
    },
  ],
});
const 복수접근 = (): codeReutrnType => ({
  title: "복수 Element 접근",
  code: [
    {
      lang: ELanguages.xml,
      code: `<div v-for="item in arrayItems" :key="item.id" :ref="setItemRef" >
{{ item }}
</div>

<script setup>
const arrayItems = ["AAAAA", "BBBBB", "CCCC", "DDDD"];
const arrayRef = ref<HTMLElement[]>([]);
// function을 이용하여 각각의 Element를 배열에 push 해준다
const setItemRef = (el: HTMLElement) => {
    arrayRef.value.push(el);
};
'</'script>`.replaceAll("'</'", "</"),
    },
  ],
});
const 자식컴포넌트 = (): codeReutrnType => ({
  title: "자식 컴포넌트 Type 접근",
  code: [
    {
      lang: ELanguages.xml,
      code: `<ChildComponet ref="childComponetRef" />
`,
    },
    {
      lang: ELanguages.typescript,
      code: `import ChildComponet from "../components/ChildComponet.vue";

export default defineComponent({
  components: { ChildComponet  },
  setup() {

  // 접근
  const childComponetRef = ref<InstanceType<typeof ChildComponet>>()

  return { childComponetRef }
  }
})`,
    },
  ],
});
</script>

<style scoped></style>
