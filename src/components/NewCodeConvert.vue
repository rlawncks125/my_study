<template>
  <h1>
    <slot name="title"></slot>
  </h1>
  <p>
    <slot name="content"></slot>
  </p>
  <div class="code-warp" v-html="viewHtml"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    codeText: String,
  },
  setup(props) {
    const { codeText } = toRefs(props);

    const getCodeData = ref<HTMLDivElement>();
    const viewHtml = ref<string>();

    onMounted(() => {
      viewHtml.value = codeText.value;
    });

    return { getCodeData, viewHtml };
  },
});

export const htmlToCode = (code: string) => {
  return code;
};

export const cssToCode = (code: string) => {
  return code;
};
export const jsToCode = (code: string) => {
  return code;
};

const splitsCode = (code: string) => {
  let resultText = "";

  // 한줄 한줄 변환
  //   const split = code.split("\n");
  const split = code.split("/n");

  return split;
};

const commonConvert = (text: string) => {
  let tabString = "";

  // 탭 처리
  if (text.includes("&nbsp;")) {
    const da = text.split("&nbsp;");
    tabString = "&nbsp;".repeat(da.length - 1);

    text = da[da.length - 1];
  }

  // 주석 처리
  if (text.slice(0, 2) === "//") {
    return `${tabString}<span class=footnote>${text}</span><br />`;
  }

  // 설명 처리
  if (text.slice(0, 4) === "----") {
    return `${tabString}<span class=co-설명>${text.slice(
      4,
      text.length
    )}</span><br />`;
  }

  // ex) 처리
  if (text.slice(0, 3) === "ex)") {
    return `${tabString}<span class=co-ex>ex)</span>${text.slice(
      3,
      text.length
    )}<br />`;
  }
};

export const codeProcess = (txt: string): string => {
  // slot 으로 넘기기 전에 String값으로 줄시 전처리
  return txt
    .replaceAll("\n", "/n") // \n문자열 인식이 안돼서 /n바꿔서 줄바꿈
    .replaceAll("/tt", "&nbsp;&nbsp;&nbsp;&nbsp;") // \n문자열 인식이 안돼서 /n바꿔서 주바꿈
    .replaceAll("<", "&lt")
    .replaceAll(">", "&gt");
};
</script>

<style scoped></style>
