<template>
  <div v-if="markdown" v-html="markdown"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { marked } from "marked";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const markdown = ref("");
    const { meta } = useRoute();

    onMounted(async () => {
      if (meta.page) {
        const { data } = await axios.get(
          `https://raw.githubusercontent.com/rlawncks125/markdown/main/${meta.page}.md`
        );

        data && (markdown.value = marked(data));
      }
    });

    return { markdown };
  },
});
</script>

<style></style>
