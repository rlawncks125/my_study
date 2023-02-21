<script setup lang="ts">
import { ref } from "vue";
import { codeReutrnType, ELanguages } from "@/plugins/simple-code-editor.vue";

const dialogRef = ref<HTMLDialogElement>();

const dialogCode = {
  code: [
    {
      lang: ELanguages.xml,
      code: `
<button @click="() => dialogRef?.showModal()">클릭</button>

<dialog ref="dialogRef" class="mx-auto" 
@click="closeBackDropClick">
  <div class="head">
    <h2>다이얼 로그</h2>
    <button @click="dialogRef?.close()">X</button>
  </div>
  <div class="content">
    <h2>안녕</h2>
    <h2>안녕</h2>
    <h2>안녕</h2>
    <h2>안녕</h2>
    <h2>안녕</h2>
    ...
  </div>
</dialog>
  `,
    },
    {
      lang: ELanguages.typescript,
      code: `
const dialogRef = ref<HTMLDialogElement>();

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
      `,
    },
    {
      lang: ELanguages.scss,
      code: `
// max-width , max-height 가 - (2rem + 6px ) 설정되있음
$dialog-width: 70vw;
$dialog-x-center: (100vw - $dialog-width) / 2;

$dialog-height: 90vh;
$dialog-y-center: (100vh - $dialog-height) / 2;

dialog {
  width: $dialog-width;
  left: $dialog-x-center;
  height: $dialog-height;
  top: $dialog-y-center;

  box-sizing: border-box;
  max-width: 100vw;
  overflow: auto;

  border-radius: 1rem;


  &::backdrop {
    background-color: rgba($color: #000000, $alpha: 0.8);
  }
}
      `,
    },
  ],
} as codeReutrnType;

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
</script>

<template>
  <div>
    <h2>Dialog</h2>
    <button @click="() => dialogRef?.showModal()">클릭</button>

    <dialog ref="dialogRef" class="mx-auto" @click="closeBackDropClick">
      <div class="head">
        <h2>다이얼 로그</h2>
        <button @click="dialogRef?.close()">X</button>
      </div>
      <div class="content">
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
        <h2>안녕</h2>
      </div>
    </dialog>

    <div
      style="margin: 0.5rem 0"
      v-for="(code, cindex) in dialogCode.code"
      :key="cindex"
    >
      <CodeEditor :value="code.code" :lang="code.lang" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// max-width , max-height 가 - (2rem + 6px ) 설정되있음
$dialog-width: 70vw;
$dialog-x-center: (100vw - $dialog-width) / 2;

$dialog-height: 90vh;
$dialog-y-center: (100vh - $dialog-height) / 2;

dialog {
  width: $dialog-width;
  left: $dialog-x-center;
  height: $dialog-height;
  top: $dialog-y-center;

  box-sizing: border-box;
  max-width: 100vw;
  overflow: auto;

  border-radius: 1rem;

  &::backdrop {
    background-color: rgba($color: #000000, $alpha: 0.7);
  }

  animation: dialog-show 0.4s ease-in-out;
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

@keyframes dialog-show {
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
</style>
