<template>
  <div>
    <!-- <span>한재엽 님의 github의 글을 인용 하여 정리 하였습니다. </span>
    <a
      href="https://github.com/JaeYeopHan/Interview_Question_for_Beginner"
      target="_blank"
      ><ins>사이트</ins></a
    > -->
    <router-view />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
