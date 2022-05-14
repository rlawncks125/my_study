<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1 style="margin-bottom: 1rem">{{ item.title }}</h1>
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
import { codeReutrnType } from "@/common/common";

export default defineComponent({
  setup() {
    const items: codeReutrnType[] = [
      imgeSrc(),
      imageBg(),
      imageBgAfter(),
      picture(),
      bgText(),
      youtubeImage(),
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

const youtubeImage = (): codeReutrnType => {
  onMounted(() => {
    const yb = document.querySelector(".youtube-struct") as HTMLElement;
    let addClassEvent: any;
    const delay = 800;

    yb.addEventListener("mouseenter", (e: any) => {
      addClassEvent = setTimeout(() => {
        (e.target as HTMLElement).classList.add("hover-event");
      }, delay);
    });
    yb.addEventListener("mouseleave", (e: any) => {
      clearTimeout(addClassEvent);
      (e.target as HTMLElement).classList.remove("hover-event");
    });
  });

  return {
    title: "유튜브 이미지 마우스 오버시 동영상 재생으로 바뀜",
    html: ` <div class="youtube-struct">
    <div class="image-view">
      <img
        class="d-img"
        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/w_300,h_250/v1603952836/sample.jpg"
      />
      <video class="d-video" autoplay controls>
        <source src="https://res.cloudinary.com/dhdq4v4ar/video/upload/v1652539977/mov_bbb_a1qrkh.mp4" type="video/mp4" />
      </video>
    </div>
  </div>`,
    code: [
      htmlToCode(`// html
     <div class="youtube-struct">
    ${HTML_TAB}<div class="image-view">
    ${HTML_TAB}${HTML_TAB}<img class="d-img" src="이미지 주소" />
    ${HTML_TAB}${HTML_TAB}<video class="d-video" autoplay controls>
    ${HTML_TAB}${HTML_TAB}${HTML_TAB}<source src="동영상 주소" type="video/mp4" />
    ${HTML_TAB}${HTML_TAB}</video>
    ${HTML_TAB}</div>
    </div>
    `),
      jsToCode(`// js
     onMounted(() => {
    ${HTML_TAB}const yb = document.querySelector(".youtube-struct") as HTMLElement;
    ${HTML_TAB}let addClassEvent: any;
${HTML_TAB}const delay = 800;

    ${HTML_TAB}${HTML_TAB}// 마우스 호버시 
    ${HTML_TAB}yb.addEventListener("mouseenter", (e: any) => {
      ${HTML_TAB}${HTML_TAB}// 딜레이후 evnet 작동 클래스 추가
    ${HTML_TAB}${HTML_TAB}  addClassEvent = setTimeout( () => {
    ${HTML_TAB}${HTML_TAB}    (e.target as HTMLElement).classList.add("hover-event");
    ${HTML_TAB}${HTML_TAB}  }, delay);
    ${HTML_TAB}});
    ${HTML_TAB}${HTML_TAB}// 마우스 이탈시  
    ${HTML_TAB}yb.addEventListener("mouseleave", (e: any) => {
    ${HTML_TAB}${HTML_TAB}// timeout 설정 제거
    ${HTML_TAB}${HTML_TAB}// evnet 작동 클래스 삭제
    ${HTML_TAB}${HTML_TAB}  clearTimeout(addClassEvent);
    ${HTML_TAB}${HTML_TAB}  (e.target as HTMLElement).classList.remove("hover-event");
    ${HTML_TAB}});
  });
    `),
      cssToCode(`// css
    .youtube-struct {
  ${HTML_TAB}$youtube-width: 300px;
  ${HTML_TAB}$youtube-height: 200px;
  ${HTML_TAB}$youtube-scale: 1.4;
${HTML_TAB}
  ${HTML_TAB}width: $youtube-width;
  ${HTML_TAB}height: $youtube-height;
  ${HTML_TAB}border: 1px solid black;
  ${HTML_TAB}overflow: hidden;

  ${HTML_TAB}.image-view {
  ${HTML_TAB}${HTML_TAB}  width: 100%;
  ${HTML_TAB}${HTML_TAB}  height: 250px;

  ${HTML_TAB}${HTML_TAB}  .d-img {
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    width: 100%;
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    max-height: 250px;
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    display: block;
  ${HTML_TAB}${HTML_TAB}  }
  ${HTML_TAB}${HTML_TAB}  .d-video {
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    display: none;
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    width: 100%;
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    max-height: 250px;
  ${HTML_TAB}${HTML_TAB}  }
  ${HTML_TAB}}

  ${HTML_TAB}&.hover-event {
  ${HTML_TAB}${HTML_TAB}  transition: all 0.3s ease-in;  
  ${HTML_TAB}${HTML_TAB}  width: $youtube-width * $youtube-scale;
  ${HTML_TAB}${HTML_TAB}  height: $youtube-height * $youtube-scale;

  ${HTML_TAB}${HTML_TAB}  .image-view {
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    .d-img {
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}${HTML_TAB}      display: none;
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    }
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    .d-video {
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}${HTML_TAB}      display: block;
  ${HTML_TAB}${HTML_TAB}${HTML_TAB}    }
  ${HTML_TAB}${HTML_TAB}  }
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

.youtube-struct {
  $youtube-width: 300px;
  $youtube-height: 200px;
  $youtube-scale: 1.4;

  width: $youtube-width;
  height: $youtube-height;
  border: 1px solid black;
  overflow: hidden;

  .image-view {
    width: 100%;
    height: 250px;

    .d-img {
      width: 100%;
      max-height: 250px;
      display: block;
    }
    .d-video {
      display: none;
      width: 100%;
      max-height: 250px;
    }
  }

  &.hover-event {
    transition: all 0.3s ease-in;
    // transition-delay: 0.4s;
    width: $youtube-width * $youtube-scale;
    height: $youtube-height * $youtube-scale;

    .image-view {
      .d-img {
        display: none;
      }
      .d-video {
        display: block;
      }
    }
  }
}
</style>
