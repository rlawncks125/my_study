<template>
  <p>markdown</p>
  <!-- marked -->
  <!-- 설치 npm install --save marked -->
  <!-- @types 설치 npm install --save @types/marked-->

  <!-- github-markdown-css -->
  <!-- https://github.com/sindresorhus/github-markdown-css -->
  <!-- 참고 사이트 : https://sukvvon.tistory.com/74 -->
  <div class="markdown-body">
    <router-view :key="route.fullPath" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { marked } from "marked";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    marked.setOptions({
      // renderer: new marked.Renderer(),
      // gfm: true,
      headerIds: false,
      // breaks: true,
      // pedantic: false,
      // sanitize: true,
      // smartLists: true,
      // smartypants: false,
    });
    return { route: useRoute() };
  },
});
</script>

<style lang="scss">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 10px;
  @include mobile() {
    padding: 8px;
  }
}

// @media (max-width: 767px) {
//   .markdown-body {
//     padding: 8px;
//   }
// }
</style>
