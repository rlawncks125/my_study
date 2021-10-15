<template>
  <h1 class="div-line">DOM 접근</h1>
  <hr />
  <br />
  <div v-for="item in items" :key="item.id">
    <code-convert>
      <template #title>{{ item.title }} </template>
      <template #content>{{ item.content }}</template>
      <template #code>{{ item.code }} </template>
    </code-convert>
  </div>
  <p ref="elRef">단일 Elemnt</p>
  <div v-for="item in arrayItems" :key="item.id" :ref="setItemRef">
    {{ item }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";

export default defineComponent({
  setup() {
    const items = reactive([
      {
        title: "단일 Elemnt 접근",
        code: codeProcess(`
         <p ref="elRef">단일 Elemnt</p>
        
        const elRef = ref<HTMLElement>();
        `),
      },
      {
        title: "복수 Elemnt 접근",
        code: codeProcess(`
        <div v-for="item in arrayItems" :key="item.id" :ref="setItemRef">
    {{ item }}
  </div>

        const arrayItems = ["AAAAA", "BBBBB", "CCCC", "DDDD"];
    const arrayRef = reactive<HTMLElement[]>([]);
    // function을 이용하여 각각의 Element를 배열에 push 해준다
    const setItemRef = (el: HTMLElement) => {
      /ttarrayRef.push(el);
    };
        `),
      },
    ]);
    // 단일
    const elRef = ref<HTMLElement>();
    // 배열
    const arrayItems = ["AAAAA", "BBBBB", "CCCC", "DDDD"];
    const arrayRef = reactive<HTMLElement[]>([]);
    const setItemRef = (el: HTMLElement) => {
      arrayRef.push(el);
    };
    onMounted(() => {
      console.log("단일", elRef.value);
      console.log("배열", arrayRef);
    });

    return { items, arrayItems, setItemRef, elRef };
  },
});
</script>

<style scoped></style>
