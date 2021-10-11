<template>
  <h1 class="div-line">CSS 함수</h1>
  <hr />
  <br />
  <div></div>
  <code-convert>
    <template #title> Transform 함수</template>
    <template #code>{{ transForm }} </template>
  </code-convert>
  <code-convert>
    <template #title> Math 함수</template>
    <template #code>{{ math }} </template>
  </code-convert>
  <code-convert>
    <template #title>filter 함수 </template>
    <template #code>{{ filter }} </template>
  </code-convert>
  <code-convert>
    <template #title>color 함수 </template>
    <template #code>{{ color }} </template>
  </code-convert>
  <code-convert>
    <template #title>image 함수 </template>
    <template #code>{{ image }} </template>
  </code-convert>
  <code-convert>
    <template #title>도형 함수 </template>
    <template #content>잘안쓸거같음</template>
    <template #code>{{ Shape }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      transForm:
        codeProcess(`matrix() : 2D 변환 행렬 정의 matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )

        perspective() : 사이의 거리를 설정하는 변환을 구체화함

        rotate() : 회전하는 변환을 정의

        scale() : 크기를 조정하는 변환을 정의

        skew() : 비스듬히 움직이는 변환을 정의

        translate() : 수평/수직 으로 위치시킨다.`),
      math: codeProcess(`calc() : 사직 계삭을 수행

        max() : 제일 큰값 적용

        min() : 제일 작은값 적용

        abs() : 절대값으로 반환

        sign() : 양수일경우 1 음수일경우 -1 , 0일경우 0을 반환`),
      filter: codeProcess(`blur() : 이미지에 흐림을 적용

    brightness() : 이미지의 밝기를 적용

    contrast() : 이미지의 대비를 조정

    drop-shadow() : 이미지에 새도우 효과를 적용

    grayscale() : 회색 이미지 정도를 적용

    hue-rotate() : 색상의 내용을 회전 = 색바뀜

    invert() : 색상을 반전 시킴

    opacity() : 투명성을 적용

    saturate() : 이미지를 과포화 시키거나 불포화시킴

    sepia() : 노란/갈색 으로 보이게 하는 정도`),
      color:
        codeProcess(`hsl[a]() : H = 색상(r=0deg=360deg,b=240deg,g=120deg) , S = 포화도 , L = 백분율 , A = 투명성

    rgb[a]() : r = red , g = green , b = blue , a = 투명성
    `),
      image:
        codeProcess(`conic-gradient() : 중앙점 기준으로 색전환이 회전하는 그라데이션

    linear-gradient() : 직선을 따라 둘 이상의 색상 사이에서 점진적인 전환으로 구성된 이미지

    radial-gradient() : 원점에서 방사되어 원또는 타원일수있다. 두개 이상의 생상 사이의 점진적인 전환으로 구성된 이미지

    repeating-linear-gradient() : 반복적인 선형 그라데이션

    repeating-radial-gradient() : 원점에서 방사되어 반복적인 그라데이션

    repeating-conic-gradient() : 중심점을 중심으로 반복적으로 회전하는 그라데이션`),
      Shape: codeProcess(`circle()
    ellipse()
    inset()
    polygon()`),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
