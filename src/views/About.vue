<template>
  <div>리턴값으로 함수호출</div>
  <input type="text" v-model.number="s.setX" />
  <input type="text" v-model.number="s.setY" />
  <button @click="click">클릭</button>

  <div class="loader"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const { x: funX, y: funY, Func } = functionReturn();

    const click = () => {
      Func((sum, avg) => {
        console.log(`sum : ${sum}, avg : ${avg}`);
      });
    };

    const data = reactive({
      s: {
        setX: funX,
        setY: funY,
      },
    });

    return { ...toRefs(data), click };
  },
});

const functionReturn = () => {
  const data = reactive({
    x: 0,
    y: 0,
  });

  type CallFunction = (sum: number, avg: number) => void;
  interface IFunc {
    (callFunc: CallFunction): void;
  }
  const Func: IFunc = (callFunc: CallFunction) => {
    const sum = data.x + data.y;
    const avg = data.x / data.y;
    callFunc(sum, avg);
  };

  return { ...toRefs(data), Func };
};
</script>

<style lang="scss">
// variables
$size: 100px !default;
$thickness: 6px !default;
$base-color: rgb(192, 187, 187) !default;
$wheel-color: #c30 !default;
$speed: 800ms !default;

// styles

.loader {
  margin: 5% auto;
  height: $size;
  width: $size;
  border: $thickness solid $base-color;
  border: {
    // right-color: $wheel-color;
    top-color: $wheel-color;
    radius: 100%;
  }
  // animation: spin $speed infinite linear;

  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
