<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <code-new :codeText="item.code" />
    </template>
  </div>
</template>

<script lang="ts">
import {
  cssToCode,
  htmlToCode,
  HTML_TAB,
  jsToCode,
} from "@/components/NewCodeConvert.vue";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const items = [
      { title: "img 태그의 src를 이용한 불러오기" },
      { title: "background 를 이용한 이미지 그리기" },
      { title: "::after backgound를 이용한 이미지 그리기" },
      {
        title:
          "picture 와 source 태그를 이용한 미디어크기에 따른 이미지 그리기",
      },
    ];

    return { items };
  },
});
</script>

<style lang="scss"></style>
