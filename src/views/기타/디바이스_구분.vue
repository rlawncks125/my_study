<template>
  <div>
    <h2>디바이스 구분</h2>
    <p>
      {{ userAgent }}
    </p>
    <p>{{ isMobile() ? "mobile" : "pc" }}</p>
    <p>{{ isMobile2() ? "mobile" : "pc" }}</p>
    <p>{{ isMobile3() ? "mobile" : "pc" }}</p>
    <h2>터치 여부 구분</h2>
    <p>
      {{ isTouch() }}
    </p>
    <p>
      {{ isTouch2() }}
    </p>
    <p>
      {{ isTouch3() }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const userAgent = navigator.userAgent;

const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
const isMobile2 = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const isMobile3 = () =>
  /iPhone|iPod|BlackBerry|Android|Windows CE|LG|MOT|SAMSUNG|SonyEricsson|webOS|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const isTouch = () => "ontouchstart" in document.documentElement;
/** 2in1노트북, 터치내장 모니터등 체크 */
const isTouch2 = () =>
  navigator.maxTouchPoints || "ontouchstart" in document.documentElement;
const isTouch3 = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

onMounted(() => {});
</script>

<style scoped></style>
