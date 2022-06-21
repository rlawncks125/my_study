<template>
  <h1 class="div-line">Class_Style 바인딩</h1>
  <span>공식홈페이지 : </span
  ><a href="https://kr.vuejs.org/v2/guide/class-and-style.html" target="_black"
    >https://kr.vuejs.org/v2/guide/class-and-style.html</a
  >
  <hr />
  <br />
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <!-- <code-new :codeText="item.code" /> -->
      <div style="margin: 0.5rem 0" v-for="code in item.code" :key="code.id">
        <CodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";
import { codeReutrnType, ELanguages } from "@/plugins/simple-code-editor.vue";

export default defineComponent({
  setup() {
    const items = [클래스객체(), 클래스배열(), 스타일객체(), 스타일배열()];

    return { items };
  },
});

const 클래스객체 = (): codeReutrnType => ({
  title: "클래스 객체 구문",
  code: [
    {
      lang: ELanguages.xml,
      code: `<div v-bind:class="{ active: isActive }"></div>
<!-- 결과 --> <div class="active"></div>

<script setup>
const isActive = true;
'</'script>

<!-- -->
<div class="static"
v-bind:class="{ active: data.isActive, 'text-danger' : data.hasError }"></div>
<!-- 결과 --><div class="static active" ></div>

<script setup>
const data = {
    isActive: true,
    hasError: false
}
'</'script>

<!-- -->
<div v-bind:class="classObject"></div>
<!-- 결과 --> <div class="active text-danger" > </div>

<script setup>
const classObject = {
    active: true,
    "text-danger": true,
},
'</'script>

`.replaceAll("'</'", "</"),
    },
  ],
});

const 클래스배열 = (): codeReutrnType => ({
  title: "클래스 배열 구문",
  code: [
    {
      lang: ELanguages.xml,
      code: `<div v-bind:class="[ data.activeClass , data.errorClass ]"></div>
<!-- 결과 --> <div class="active text-danger" ></div>

<script setup>
const data = {
    activeClass : "active",
    errorClass : "text-danger",
}
'</'script>

<!-- -->

<!-- 삼항 연산자 이용 -->
<div v-bind:class="[ isActive ? data.activeClass : '', data.errorClass ]"></div>

<!-- 배열 구문 내에 객체구문을 사용 -->
<div v-bind:class="[ { active: isActive }, data.errorClass ]"></div>

<!-- 결과 --><div class="active text-danger" > </div>

<script setup>
const isActive = true,
const data = {
    activeClass: "active",
    errorClass: "text-danger",
}
'</'script>


`.replaceAll("'</'", "</"),
    },
  ],
});

const 스타일객체 = (): codeReutrnType => ({
  title: "스타일 객체 구문",
  code: [
    {
      lang: ELanguages.xml,
      code: `<div v-bind:style="{ color: data.activeColor, fontSize: data.fontSize + 'px' }"></div>
<!-- 결과 --> <div style="color : red; font-size : 30px;" > </div>

<script setup>
const data = {
    activeColor: "red",
    fontSize: 30,
}
'</'script>

<!-- -->

<div v-bind:style="styleObject"></div>
<!-- 결과 --> <div style="color : red; font-size : 14px;"></div>

<script setup>
const styleObject: {
    color: "red",
    fontSize: "14px",
}
'</'script>
`.replaceAll("'</'", "</"),
    },
  ],
});
const 스타일배열 = (): codeReutrnType => ({
  title: "스타일 배열 구문",
  code: [
    {
      lang: ELanguages.xml,
      code: `<div v-bind:style="[baseStyles, divStyles]"></div>
<!-- 결과 --> 
<div style="font-size: 12px; border: 1px solid black; color: red; "> </div>

<script setup>
const baseStyles = {
    fontSize: "12px",
    border: "1px solid black",
},
const divStyles = {
    color: "red",
},

'</'script>

`.replaceAll("'</'", "</"),
    },
  ],
});
</script>

<style scoped></style>
