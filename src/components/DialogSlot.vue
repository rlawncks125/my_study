<script setup lang="ts">
import { ref, PropType, toRefs, StyleValue } from "vue";

enum animationType {
  "dialog-bound" = "dialog-bound",
  "dialog-opacity" = "dialog-opacity",
}

const props = defineProps({
  title: String,
  animation: {
    type: String as PropType<keyof typeof animationType>,
  },
});
const { animation } = toRefs(props);

const dialogRef = ref<HTMLDialogElement>();

const dilaogAniStyle = {
  animationName: animation?.value,
  animationDuration: ".4s",
  animationTimingFunction: "ease-in-out",
} as StyleValue;

const closeBackDropClick = (e: any) => {
  const rect = dialogRef.value?.getBoundingClientRect();
  if (!rect) return;
  if (
    rect.left > e.clientX ||
    rect.right < e.clientX ||
    rect.top > e.clientY ||
    rect.bottom < e.clientY
  ) {
    dialogRef.value!.close();
  }
};

const showModel = () => {
  dialogRef.value?.showModal();
};

defineExpose({
  showModel,
});
</script>

<template>
  <dialog
    ref="dialogRef"
    class="mx-auto"
    @click="closeBackDropClick"
    :style="dilaogAniStyle"
  >
    <div class="head">
      <h2>{{ props.title }}</h2>
      <button @click="dialogRef?.close()">X</button>
    </div>
    <div class="content">
      <slot />
    </div>
  </dialog>
</template>

<style lang="scss">
// max-width , max-height 가 - (2rem + 6px ) 설정되있음
$dialog-width: 90vw;
$dialog-x-center: (100vw - $dialog-width) / 2;

$dialog-height: 95vh;
$dialog-y-center: (100vh - $dialog-height) / 2;

dialog {
  width: $dialog-width;
  left: $dialog-x-center;
  height: $dialog-height;
  top: $dialog-y-center;

  border-radius: 1rem;
  box-sizing: border-box;
  max-width: 100vw;
  overflow: auto;

  // animation: dialog-bound 0.4s ease-in-out;

  &::backdrop {
    background-color: rgba($color: #000000, $alpha: 0.7);
  }
}

dialog .head {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: white;

  padding: 0 2rem;
  border-bottom: 2px solid black;

  & button {
    margin: 1rem 0;
    padding: 1rem;
    cursor: pointer;
  }
}

dialog .content {
  padding: 0 2rem;
}

@keyframes dialog-bound {
  0% {
    transform: translateY(-100%);
  }
  80% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes dialog-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
