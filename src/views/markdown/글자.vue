<template>
  <div v-if="markdown" v-html="markdown"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { marked } from "marked";

export default defineComponent({
  setup() {
    const markdown = ref("");

    onMounted(async () => {
      const { data } = await axios.get(
        "https://raw.githubusercontent.com/rlawncks125/markdown/main/글자.md"
      );

      markdown.value = marked(data);
    });

    return { markdown };
  },
});
</script>

<style></style>
