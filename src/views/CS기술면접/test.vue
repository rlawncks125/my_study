<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <h2>{{ item.title }}</h2>

      <h4>{{ item.dsc }}</h4>
      <details v-Accordion>
        <summary>상세</summary>
        <div v-html="item.detail" />
      </details>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const items = [
      {
        title: "test ss",
        dsc: "이해하기",
        detail: `
        <span>asdasdwsoo sss sss asdasdasdasdadwdadsadadawdadsaodpaodpadwopdoads</span>
        <span>가가가나</span>
        <span>zzz</span>
        `.trim(),
      },
    ];

    return { items };
  },
});
</script>

<style scoped></style>
