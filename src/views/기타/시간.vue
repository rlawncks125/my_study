<template>
  <div>시간 계산</div>

  <p>
    {{ pastDate(time) }}
  </p>
  <p>
    {{ nextDate(nuxtTime) }}
  </p>
</template>

<script setup lang="ts">
const time = new Date("2022-11-23T11:45:00");
const nuxtTime = new Date("2022-11-24T11:45:00");

const pastDate = (date: Date) => {
  const format = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
  const answerTime = Date.now() - date.getTime();
  const answerDate = new Date(answerTime);

  const sec = answerTime / 1000;
  const min = sec / 60;
  const horus = min / 60;
  const day = answerDate.getDate() - 1;
  const month = answerDate.getMonth();
  const year = answerDate.getFullYear() - 1970;

  if (year < 0) {
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
  const format = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
  const answerTime = date.getTime() - Date.now();
  const answerDate = new Date(answerTime);

  const sec = answerTime / 1000;
  const min = sec / 60;
  const horus = min / 60;
  const day = answerDate.getDate() - 1;
  const month = answerDate.getMonth();
  const year = answerDate.getFullYear() - 1970;

  if (year < 0) {
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
    return format.format(Math.floor(horus), "hours");
  }
  if (Math.floor(min)) {
    return format.format(Math.floor(min), "minutes");
  }
  if (Math.floor(sec)) {
    return format.format(Math.floor(sec), "seconds");
  }
  return "방금전";
};
</script>

<style scoped></style>
