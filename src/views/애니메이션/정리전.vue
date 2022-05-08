<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <code-new :codeText="item.code" />
    </template>
  </div>
</template>

<script lang="ts">
import {
  cssToCode,
  htmlToCode,
  HTML_TAB,
  jsToCode,
} from "@/components/NewCodeConvert.vue";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    const items = [bgGradientAni(), btnClickAnimate()];

    onMounted(() => {
      // btnClickAnimate
      const clickAni = document.querySelector(".click-animation");

      if (!clickAni) return;
      clickAni?.addEventListener("click", () => {
        clickAni.animate(
          {
            backgroundColor: ["white", "#5252f1db", "red"], // offset: 0, 0.5, 1
          },
          1000
        );
      });
      //
    });

    return { items };
  },
});

const bgGradientAni = () => {
  return {
    title: "백그라운드 그라데이션 애니메이션",
    html: `<div class="bg-graident-animation">bg graident animation</div>`,
    code: [
      htmlToCode(
        `//html
        <div class="bg-graident-animation">bg graident animation</div>`
      ),
      cssToCode(`//css
      .bg-graident-animation {
  ${HTML_TAB}background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  ${HTML_TAB}background-size: 400% 400%;
  ${HTML_TAB}animation: graident-animation 10s ease infinite;

  ${HTML_TAB}width: 400px;
  ${HTML_TAB}height: 400px;
}

@keyframes graident-animation {
  ${HTML_TAB}0% {
  ${HTML_TAB}${HTML_TAB}background-position: 0% 50%;
  ${HTML_TAB}}
  ${HTML_TAB}50% {
  ${HTML_TAB}${HTML_TAB}background-position: 100% 50%;
  ${HTML_TAB}}
  ${HTML_TAB}100% {
  ${HTML_TAB}${HTML_TAB}background-position: 0% 50%;
  ${HTML_TAB}}
}`),
    ].join("\n"),
  };
};

const btnClickAnimate = () => {
  return {
    title: "클릭시 애니메이션 호출",
    html: `<div class="click-animation">클릭</div>`,
    code: [
      htmlToCode(`// html
      <div class="click-animation">클릭</div>`),
      cssToCode(`// css
      .click-animation {
      ${HTML_TAB}border: 1px solid black;
      ${HTML_TAB}width: 100px;
      ${HTML_TAB}height: 100px;
      }`),
      jsToCode(`
       // js
      const clickAni = document.querySelector(".click-animation");

      if (!clickAni) return;

      clickAni?.addEventListener("click", () => {
        // 애니메이션 실행
        ${HTML_TAB}clickAni.animate(
        ${HTML_TAB}${HTML_TAB}  {
        ${HTML_TAB}${HTML_TAB}${HTML_TAB}    backgroundColor: ["white", "#5252f1db","red"], 
        ${HTML_TAB}${HTML_TAB}  },
        ${HTML_TAB}  1000 );
      });
      `),
    ].join("\n"),
  };
};
</script>

<style lang="scss">
.bg-graident-animation {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: graident-animation 10s ease infinite;

  width: 400px;
  height: 400px;
}

@keyframes graident-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.click-animation {
  border: 1px solid black;
  width: 100px;
  height: 100px;
}
</style>
