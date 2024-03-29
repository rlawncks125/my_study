<template>
  <h1 class="div-line">SCSS 내장 함수</h1>
  <hr />
  <br />
  <div v-for="item in items" :key="item.id">
    <code-convert>
      <template #title>{{ item.title }} </template>
      <template #content>{{ item.content }}</template>
      <template #code>{{ item.code }} </template>
    </code-convert>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";

export default defineComponent({
  setup() {
    const items = reactive([
      {
        title: "색상(RGB / HSL / Opacity) 함수",
        code: codeProcess(`mix($color1, $color2) : 두 개의 색을 섞습니다.

lighten($color, $amount) : 더 밝은색을 만듭니다.

darken($color, $amount) : 더 어두운색을 만듭니다.

saturate($color, $amount) : 색상의 채도를 올립니다.

desaturate($color, $amount) : 색상의 채도를 낮춥니다.

grayscale($color) : 색상을 회색으로 변환합니다.

invert($color) : 색상을 반전시킵니다.

rgba($color, $alpha) : 색상의 투명도를 변경합니다.

opacify($color, $amount) / fade-in($color, $amount) : 색상을 더 불투명하게 만듭니다.

transparentize($color, $amount) / fade-out($color, $amount) : 색상을 더 투명하게 만듭니다.`),
      },
      {
        title: "문자(String) 함수",
        code: codeProcess(`unquote($string) : 문자에서 따옴표를 제거합니다.

quote($string) : 문자에 따옴표를 추가합니다.

str-insert($string, $insert, $index) : 문자의 index번째에 특정 문자를 삽입합니다.

str-index($string, $substring) : 문자에서 특정 문자의 첫 index를 반환합니다.

str-slice($string, $start-at, [$end-at]) : 문자에서 특정 문자(몇 번째 글자부터 몇 번째 글자까지)를 추출합니다.

to-upper-case($string) : 문자를 대문자를 변환합니다.

to-lower-case($string) : 문자를 소문자로 변환합니다.`),
      },
      {
        title: "숫자(Number) 함수",
        code: codeProcess(`percentage($number) : 숫자(단위 무시)를 백분율로 변환합니다.

round($number) : 정수로 반올림합니다.

ceil($number) : 정수로 올림합니다.

floor($number) : 정수로 내림(버림)합니다.

abs($number) : 숫자의 절대 값을 반환합니다.

min($numbers…) : 숫자 중 최소 값을 찾습니다.

max($numbers…) : 숫자 중 최대 값을 찾습니다.

random() : 0 부터 1 사이의 난수를 반환합니다.`),
      },
      {
        title: "List 함수",
        code: codeProcess(`----모든 List 내장 함수는 기존 List 데이터를 갱신하지 않고 새 List 데이터를 반환합니다.
----모든 List 내장 함수는 Map 데이터에서도 사용할 수 있습니다.

length($list) : List의 개수를 반환합니다.

nth($list, $n) : List에서 n번째 값을 반환합니다.

set-nth($list, $n, $value) : List에서 n번째 값을 다른 값으로 변경합니다.

join($list1, $list2, [$separator]) : 두 개의 List를 하나로 결합합니다.

zip($lists…) : 여러 List들을 하나의 다차원 List로 결합합니다.

index($list, $value) : List에서 특정 값의 index를 반환합니다.`),
      },
      {
        title: "Map 함수",
        code: codeProcess(`---- 모든 Map 내장 함수는 기존 Map 데이터를 갱신하지 않고 새 Map 데이터를 반환합니다.

map-get($map, $key) : Map에서 특정 key의 value를 반환합니다.

map-merge($map1, $map2) : 두 개의 Map을 병합하여 새로운 Map를 만듭니다.

map-keys($map) : Map에서 모든 key를 List로 반환합니다.

map-values($map) : Map에서 모든 value를 List로 반환합니다.`),
      },
      {
        title: "관리(Introspection) 함수",
        code: codeProcess(`variable-exists(name) : 변수가 현재 범위에 존재하는지 여부를 반환합니다.(인수는 $없이 변수의 이름만 사용합니다.)

unit($number) : 숫자의 단위를 반환합니다.

unitless($number) : 숫자에 단위가 있는지 여부를 반환합니다.

comparable($number1, $number2) : 두 개의 숫자가 연산 가능한지 여부를 반환합니다.`),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
