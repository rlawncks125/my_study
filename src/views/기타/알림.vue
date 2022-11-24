<template>
  <button @click="requestPermission">권한 요청</button>

  <div :style="status === 'granted' ? { color: 'green' } : { color: 'red' }">
    {{ status }}
  </div>
  <p>
    워커 상태 :
    {{ workerStatus }}
  </p>
</template>

<script setup lang="ts">
import { Worker } from "@/registerServiceWorker";
import { computed, onMounted, ref } from "vue";

console.log(Notification.permission);

const workerStatus = computed(() => Worker.insatce.getterIsSubscribe);

/**
 * 알람의 상태를 확인
 * @desc default = 사용자에게 권한을 요구하지 않음
 * @desc denied = 사용자가 알림 표시 권한을 '거부'
 * @desc granted = 권한을 요구했으며 사용자가 권한을 '허용'
 *  */
const status = ref<NotificationPermission>(Notification.permission);

/** 알림 권한 요청 */
const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    console.log(permission);

    if (["default", "denied", "granted"].includes(permission)) {
      status.value = permission;
    }
  });
};
</script>

<style scoped></style>
