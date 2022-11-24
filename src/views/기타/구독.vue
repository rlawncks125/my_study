<template>
  <div>
    <button @click="subscribe">구독 하기</button>
    <button @click="unSubcribe">구독 취소</button>
    <button @click="showSubcribe">구독 정보</button>
    <button @click="login">구독 로그인</button>
    <button @click="logout">구독 로그아웃</button>
  </div>
</template>

<script setup lang="ts">
import { Worker } from "@/registerServiceWorker";
import { onMounted } from "vue";

const subscribe = async () => {
  await Worker.insatce.subscribe();
};
const unSubcribe = async () => {
  const isSubscrib = await Worker.insatce.isSubscribe();

  if (!isSubscrib) {
    alert("구독하지 않으셨습니다.");
    return;
  }

  await Worker.insatce.unSubcribe();
  alert("구독취소 완료");
};

const showSubcribe = async () => {
  console.log(await Worker.insatce.getSubcribeAuth());
};

const login = async () => {
  const res = await Worker.insatce.registerByUser(8);
  console.log(res);
};
const logout = async () => {
  const res = await Worker.insatce.removeRegisterByUser();
  console.log(res);
};
</script>

<style scoped></style>
