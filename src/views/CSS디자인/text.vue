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
    const items = [text그라데이션()];

    return { items };
  },
});

const text그라데이션 = () => {
  return {
    title: "TEXT 그라데이션",
    html: `<p class="text-gradient">gradient Font Test </p>`,
    code: [
      htmlToCode(
        `// html
        <p class="text-gradient">gradient Font Test </p>
        `
      ),
      cssToCode(
        `// css
          .text-gradient {
          ${HTML_TAB}background: linear-gradient(
          ${HTML_TAB}${HTML_TAB}${HTML_TAB}118deg,
          ${HTML_TAB}${HTML_TAB}${HTML_TAB}rgba(2, 0, 36, 1) 0%,
          ${HTML_TAB}${HTML_TAB}${HTML_TAB}rgba(205, 29, 142, 1) 20%,
          ${HTML_TAB}${HTML_TAB}${HTML_TAB}rgba(7, 110, 144, 1) 45%,
          ${HTML_TAB}${HTML_TAB}${HTML_TAB}rgba(75, 105, 187, 1) 69%,
          ${HTML_TAB}${HTML_TAB}${HTML_TAB}rgba(73, 108, 189, 1) 70%,
          ${HTML_TAB}${HTML_TAB}${HTML_TAB}rgba(0, 212, 255, 1) 100%
          ${HTML_TAB});  
          ${HTML_TAB}background-clip: text;
          ${HTML_TAB}color: transparent;
          ${HTML_TAB}font-size: 2rem;
        }
      `
      ),
    ].join("<br />"),
  };
};
</script>

<style lang="scss">
.text-gradient {
  // bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-violet-700 to-indigo-600 text-3xl

  background: linear-gradient(
    118deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(205, 29, 142, 1) 20%,
    rgba(7, 110, 144, 1) 45%,
    rgba(75, 105, 187, 1) 69%,
    rgba(73, 108, 189, 1) 70%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  color: transparent;
  font-size: 2rem;
}
</style>
