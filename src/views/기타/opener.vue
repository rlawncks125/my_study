<template>
  <div>opener</div>

  <button @click="openPopup">open</button>
  <p>받은 데이터 : {{ txt }}</p>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const txt = ref();

const openPopup = () => {
  const width = 300;
  const height = 300;
  // 포지션 center로 맞춘 값
  const left = (window.innerWidth - width) / 2 + window.screenX;
  const top = (window.innerHeight - height) / 2 + window.screenY;

  const windowFeatures = `popup=true,width=${width},height=${height},left=${left},top=${top}`;
  const popup = window.open(
    "http://localhost:8080/opener_popup",
    "popup_test",
    windowFeatures
  );
  popup?.focus();
};

const onHandlePopupRetrunValue = (d: any) => {
  console.log(d);
  txt.value = d;
};

onMounted(() => {
  // popup 페이지 에서 접근하여 데이터를 줄수 있는 함수 선언
  // @ts-ignore
  self.HandlePopupMsg = onHandlePopupRetrunValue;
});
onUnmounted(() => {
  // @ts-ignore
  delete self.HandlePopupMsg;
});
</script>

<style scoped></style>
