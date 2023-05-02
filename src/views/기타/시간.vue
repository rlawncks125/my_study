<template>
  <div>시간 계산</div>

  <input type="date" name="" id="" v-model="date" />
  <input type="time" name="" id="" v-model="time" />
  <br />
  {{ `${date}T${time}` }}
  <p>지난 시간 : {{ pastDate(new Date(`${date}T${time}`)) }}</p>
  <p>이후 시간 : {{ nextDate(new Date(`${date}T${time}`)) }}</p>
  <p>
    시간 차이 :
    {{ gapTime }}
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const pastTime = new Date("2022-11-23T11:00:00");
const nextTime = new Date("2022-11-23T13:00:00");

const gapTime = ref();

const date = ref("");
const time = ref("00:00:00");

const pastDate = (date: Date) => {
  const answerTime = Date.now() - date.getTime();
  const answerDate = new Date(answerTime);

  const format = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

  const _sec = answerTime / 1000;
  const _min = _sec / 60;
  const _horus = _min / 60;

  const sec = Math.floor(_sec);
  const min = Math.floor(_min);
  const horus = Math.floor(_horus);
  const day = answerDate.getDate() - 1;
  const month = answerDate.getMonth();
  const year = answerDate.getFullYear() - 1970;

  if (year < 0 || horus < 0 || min < 0 || sec < 0) {
    return "이후에 날짜입니다.";
  }

  if (year) {
    return format.format(-year, "year");
  }
  if (month) {
    return format.format(-month, "month");
  }
  if (day) {
    return format.format(-day, "day");
  }
  if (Math.floor(horus)) {
    return format.format(-Math.floor(horus), "hours");
  }
  if (Math.floor(min)) {
    return format.format(-Math.floor(min), "minutes");
  }
  if (Math.floor(sec)) {
    return format.format(-Math.floor(sec), "seconds");
  }
  return "방금전";
};

const nextDate = (date: Date) => {
  const answerTime = date.getTime() - Date.now();
  const answerDate = new Date(answerTime);
  gapTime.value = answerTime;

  const format = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });

  const _sec = answerTime / 1000;
  const _min = _sec / 60;
  const _horus = _min / 60;

  const sec = Math.floor(_sec);
  const min = Math.floor(_min);
  const horus = Math.floor(_horus);
  const day = answerDate.getDate() - 1;
  const month = answerDate.getMonth();
  const year = answerDate.getFullYear() - 1970;

  if (year < 0 || horus < 0 || min < 0 || sec < 0) {
    return "이전 날짜 입니다.";
  }

  if (year) {
    return format.format(year, "year");
  }
  if (month) {
    return format.format(month, "month");
  }
  if (day) {
    return format.format(day, "day");
  }
  if (Math.floor(horus)) {
    return (
      format.format(Math.floor(horus), "hours") +
      format.format(Math.floor(min % 60), "minutes")
    );
  }
  if (Math.floor(min)) {
    return (
      format.format(Math.floor(min), "minutes") +
      format.format(Math.floor(sec % 60), "seconds")
    );
  }
  if (Math.floor(sec)) {
    return format.format(Math.floor(sec), "seconds");
  }
  return "방금전";
};
</script>

<style scoped></style>
