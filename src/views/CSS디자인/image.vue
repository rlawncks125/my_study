<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1 style="margin-bottom: 1rem">{{ item.title }}</h1>
      <div v-html="item.html" />
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
import { codeReutrnType } from "@/common/common";

export default defineComponent({
  setup() {
    const items: codeReutrnType[] = [
      imgeSrc(),
      imageBg(),
      imageBgAfter(),
      picture(),
      bgText(),
    ];

    return { items };
  },
});

const imgeSrc = (): codeReutrnType => {
  return {
    title: "img 태그의 src를 이용한 불러오기",
    html: `
  <img
    src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
    alt=""
  />`,
    code: [
      htmlToCode(`// html
       <img src="이미지 주소" alt="" />
      `),
    ].join("\n"),
  };
};

const imageBg = (): codeReutrnType => {
  return {
    title: "background 를 이용한 이미지 그리기",
    html: `<div class="image-bg"></div>`,
    code: [
      htmlToCode(`// html
      <div class="image-bg"></div>`),
      cssToCode(`// css
      .image-bg {
          ${HTML_TAB}background-image: url(이미지 주소);
          ${HTML_TAB}width: 300px;
          ${HTML_TAB}height: 250px;
        }
      `),
    ].join("\n"),
  };
};
const imageBgAfter = (): codeReutrnType => {
  return {
    title: "::after backgound를 이용한 이미지 그리기",
    html: `<div class="after-bg"></div>`,
    code: [
      htmlToCode(`// html
      <div class="after-bg"></div>`),
      cssToCode(`// scss
$after-bg-width: 300px;
$after-bg-height: 250px;

      .after-bg {
  ${HTML_TAB}width: 400px;
  ${HTML_TAB}height: 400px;
  ${HTML_TAB}position: relative;
  ${HTML_TAB}background: rgb(18, 90, 150);

  ${HTML_TAB}&::after {
  ${HTML_TAB}${HTML_TAB}display: block;
  ${HTML_TAB}${HTML_TAB}content: "";
  ${HTML_TAB}${HTML_TAB}width: $after-bg-width;
  ${HTML_TAB}${HTML_TAB}height: $after-bg-height;
  ${HTML_TAB}${HTML_TAB}
  ${HTML_TAB}${HTML_TAB}position: absolute;
  ${HTML_TAB}${HTML_TAB}top: calc(50% - (#{$after-bg-height} / 2));
  ${HTML_TAB}${HTML_TAB}left: calc(50% - (#{$after-bg-width} / 2));
  ${HTML_TAB}${HTML_TAB}
  ${HTML_TAB}${HTML_TAB}background-image: url(이미지 주소);
  ${HTML_TAB}}
}
      `),
    ].join("\n"),
  };
};
const picture = (): codeReutrnType => {
  return {
    title: "picture 와 source 태그를 이용한 미디어크기에 따른 이미지 그리기",
    html: `
    <picture>
      <source
        media="(min-width: 800px)"
        srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_350,h_250/v1603952836/sample.jpg"
      />
      <source
        media="(min-width: 700px)"
        srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
      />
      <img
        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg"
        alt="기본 이미지"
      />
    </picture>`,
    code: [
      htmlToCode(`// html
      // soruce media 정의 순서 중요 ( 큰값 -> 작은값 -> 기본값(img) )
      <picture>
      ${HTML_TAB}<source
      ${HTML_TAB}${HTML_TAB}media="(min-width: 800px)"
      ${HTML_TAB}${HTML_TAB}srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_350,h_250/v1603952836/sample.jpg"
      ${HTML_TAB}/>
      ${HTML_TAB}<source
      ${HTML_TAB}${HTML_TAB}media="(min-width: 700px)"
      ${HTML_TAB}${HTML_TAB}srcset="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
      ${HTML_TAB}/>
      ${HTML_TAB}<img
      ${HTML_TAB}${HTML_TAB}src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg"
      ${HTML_TAB}${HTML_TAB}alt="기본 이미지"
      ${HTML_TAB}/>
    </picture>`),
    ].join("\n"),
  };
};
const bgText = (): codeReutrnType => {
  return {
    title: "이미지 위에 글자 시인성 ( 잘보이게 )",
    html: `<div class="bg-text">
            <p>text 입력 하세요.</p>
          </div>`,
    code: [
      htmlToCode(`//html
      <div class="bg-text">
            ${HTML_TAB}<p>text 입력 하세요.</p>
          </div>
      `),
      cssToCode(`//css
      .bg-text {
  ${HTML_TAB}width: 250px;
  ${HTML_TAB}height: 250px;
  ${HTML_TAB}position: relative;
  ${HTML_TAB}background: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg")
  ${HTML_TAB}${HTML_TAB}  no-repeat center/contain;

  ${HTML_TAB}& p {
  ${HTML_TAB}${HTML_TAB}color: white;
  ${HTML_TAB}${HTML_TAB}position: absolute;
  ${HTML_TAB}${HTML_TAB}bottom: 1rem;
  ${HTML_TAB}${HTML_TAB}left: 1rem;
  ${HTML_TAB}}
  ${HTML_TAB}&::before {
  ${HTML_TAB}${HTML_TAB}display: block;
  ${HTML_TAB}${HTML_TAB}content: "";
  ${HTML_TAB}${HTML_TAB}width: 100%;
  ${HTML_TAB}${HTML_TAB}height: 100%;
  ${HTML_TAB}${HTML_TAB}// !! 이부분
  ${HTML_TAB}${HTML_TAB}background: linear-gradient(to bottom, transparent, black);
  ${HTML_TAB}${HTML_TAB}opacity: 0.6;
  ${HTML_TAB}}
}
      `),
    ].join("\n"),
  };
};
</script>

<style lang="scss">
.image-bg {
  background-image: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg");
  width: 300px;
  height: 250px;
}

$after-bg-width: 300px;
$after-bg-height: 250px;

.after-bg {
  width: 400px;
  height: 400px;
  position: relative;
  background: rgb(18, 90, 150);

  &::after {
    display: block;
    content: "";

    width: $after-bg-width;
    height: $after-bg-height;

    position: absolute;
    top: calc(50% - (#{$after-bg-height} / 2));
    left: calc(50% - (#{$after-bg-width} / 2));

    background-image: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg");
  }
}

.bg-text {
  width: 250px;
  height: 250px;
  position: relative;
  background: url("https://res.cloudinary.com/dhdq4v4ar/image/upload/w_250,h_250/v1603952836/sample.jpg")
    no-repeat center/contain;

  & p {
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }
  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    // !! 이부분
    background: linear-gradient(to bottom, transparent, black);
    opacity: 0.6;
  }
}
</style>
