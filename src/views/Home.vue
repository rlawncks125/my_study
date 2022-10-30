<template>
  <div>Home github -> Netlify 배포 변경</div>
  <div>
    퍼블 연습 사이트
    <a
      href="https://rlawncks125.github.io/front-git-practice/"
      target="_blank"
      :style="{ color: '#f51f78' }"
      >링크</a
    >
  </div>

  <div>
    <br />
    <h1 :style="{ borderBottom: `1px solid black` }">CSS 디자인</h1>
    <div>
      <h2>text</h2>
      <ul>
        <li>TEXT 그라데이션</li>
      </ul>
    </div>
    <div>
      <h2>image</h2>
      <ul>
        <li>img 태그의 src를 이용한 불러오기</li>
        <li>background 를 이용한 이미지 그리기</li>
        <li>::after backgound를 이용한 이미지 그리기</li>
        <li>picture 와 source 태그를 이용한 미디어크기에 따른 이미지 그리기</li>
        <li>이미지 위에 글자 시인성 ( 잘보이게 )</li>
        <li>유튜브 썸네일 마우스 오버시 딜레이후 동영상 재생으로 바뀜</li>
      </ul>
    </div>
  </div>

  <simCode
    value="const s = 'a';"
    :language_selector="true"
    :languages="lamguages"
    width="100%"
  />

  <button @click="subscribe">구독 하기</button>
  <button @click="unSubcribe">구독 취소</button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import simCode from "simple-code-editor";
import { ELanguages } from "@/plugins/simple-code-editor.vue";
import { Worker } from "@/registerServiceWorker";

export default defineComponent({
  components: { simCode },
  setup() {
    const cl = Object.keys(ELanguages);
    const lamguages = cl.map((v) => [v, v]);

    const subscribe = async () => {
      const isSubscrib = await Worker.insatce.isSubscribe();

      if (isSubscrib) {
        alert("이미 구독 하셨습니다.");
        return;
      }

      await Worker.insatce.subscribe();
      alert("구독 하였습니다.");
    };
    const unSubcribe = async () => {
      const isSubscrib = await Worker.insatce.isSubscribe();

      if (!isSubscrib) {
        alert("구독하지 않으셨습니다.");
        return;
      }

      await Worker.insatce.unSubcribe();
      alert("구독취소 완료");
    };

    onMounted(async () => {});

    return { lamguages, subscribe, unSubcribe };
  },
});
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
}

li {
  list-style: square;
}
</style>
