<script setup lang="ts">
import { ref, onMounted } from "vue";

const count = 4;
const hiddenRefLists = ref<HTMLElement[]>([]);

const animatePlay = () => {
  hiddenRefLists.value.forEach((el) => {
    const ani = el.animate(
      [
        {
          width: cacleWidth(),
        },
        {
          width: "0px",
        },
      ],
      {
        duration: 500,
      }
    );

    // 애니메이션 끝났을떄
    ani.finished.then((ani) => {
      el.style.width = "0px";
    });
  });
};

const calcLeft = (index: number) => {
  const w = document.documentElement.getBoundingClientRect().width;

  const res = w / count;

  return res * index + "px";
};

const cacleWidth = () => {
  const w = document.documentElement.getBoundingClientRect().width;

  return w / count + "px";
};

onMounted(() => {
  console.log(hiddenRefLists.value);
});
</script>

<template>
  <div>
    <div>
      <h2>image</h2>
      <button @click="animatePlay">애니메이션</button>
    </div>
    <!-- 가림막 -->
    <div
      :style="{
        position: 'relative',
        height: '15rem',
      }"
    >
      <div
        v-for="(item, index) in Array.from({ length: count }, (v, i) => i + 1)"
        :ref="(el) => hiddenRefLists.push(el)"
        :key="item"
        :style="{
          position: 'absolute',
          top: '0',
          left: calcLeft(index),
          width: '0',
          height: '100%',
          backgroundColor: 'black',
          color: 'gray',
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
