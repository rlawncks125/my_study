<template>
  <h1 class="div-line">Class_Style 바인딩</h1>
  <span>공식홈페이지 : </span
  ><a href="https://kr.vuejs.org/v2/guide/class-and-style.html" target="_black"
    >https://kr.vuejs.org/v2/guide/class-and-style.html</a
  >
  <hr />
  <br />

  <code-convert>
    <template #title>{{ class_object.title }} </template>
    <template #content>
      <div v-bind:class="{ active: class_object.data.isActive }"></div>
      <div
        class="static"
        v-bind:class="{
          active: class_object.data.isActive,
          'text-danger': class_object.data.hasError,
        }"
      ></div>
      <div v-bind:class="class_object.classObject"></div>
    </template>
    <template #code>{{ class_object.code }} </template>
  </code-convert>

  <code-convert>
    <template #title>{{ class_Array.title }} </template>
    <template #content>
      <div
        v-bind:class="[
          class_Array.data.activeClass,
          class_Array.data.errorClass,
        ]"
      ></div>
      <div
        v-bind:class="[
          class_Array.isActive ? class_Array.data.activeClass : '',
          class_Array.data.errorClass,
        ]"
      ></div>
      <div
        v-bind:class="[
          { active: class_Array.isActive },
          class_Array.data.errorClass,
        ]"
      ></div>
      <div :class="[class_Array.data]"></div>
    </template>
    <template #code>{{ class_Array.code }} </template>
  </code-convert>

  <code-convert>
    <template #title>{{ style_Object.title }} </template>
    <template #content>
      <div
        v-bind:style="{
          color: style_Object.data.activeColor,
          fontSize: style_Object.data.fontSize + 'px',
        }"
      ></div>
      <div v-bind:style="style_Object.styleObject"></div>
    </template>
    <template #code>{{ style_Object.code }} </template>
  </code-convert>

  <code-convert>
    <template #title>{{ style_Array.title }} </template>
    <template #content>
      <div :style="[style_Array.baseStyles, style_Array.divStyles]"></div>
    </template>
    <template #code>{{ style_Array.code }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";

export default defineComponent({
  setup() {
    const class_object = reactive({
      title: "클래스_객체 구문",
      code: codeProcess(`

      ---- <div v-bind:class = "{ active: isActive }"></div>
      
      // 데이터
      isActive: true
      
      // 결과
      <div class="active"></div>

      // =====================================================

      ---- <div class = "static" 
      ---- v-bind:class = "{ active: data.isActive, 'text-danger' : data.hasError }"></div>

      // 데이터
      data: {
  /ttisActive: true,
  /tthasError: false
}
      // 결과 

      <div class="static active"></div>

      // =====================================================
  ---- <div v-bind:class = "classObject"></div>

// 데이터
classObject: {
        /ttactive: true,
        /tt"text-danger": true,
},

// 결과
<div class="active text-danger"></div>
      `),
      data: {
        isActive: true,
        hasError: false,
      },
      classObject: {
        active: true,
        "text-danger": true,
      },
    });
    const class_Array = reactive({
      title: "클래스_배열 구문",
      code: codeProcess(`
      ---- <div v-bind:class="[ data.activeClass , data.errorClass ]"></div>

      // 데이터 
       data: {
        /ttactiveClass : "active",
        /tterrorClass : "text-danger",
      },

      // 결과
      <div class="active text-danger"></div>

      // ===========================================================

      // 삼항 연산자 이용하여 줄시
      ---- <div v-bind:class="[ isActive ? data.activeClass : ' ',
        ----  data.errorClass ]"></div>

      // 배열 구문 내에 객체구문을 사용할시
      ---- <div v-bind:class="[ { active: isActive }, data.errorClass ]"></div>

      // 데이터
         isActive: true,
       data: {
        /ttactiveClass: "active",
        /tterrorClass: "text-danger",
      }

      // 결과
      <div class="active text-danger"></div>

      `),
      data: {
        activeClass: "active",
        errorClass: "text-danger",
      },
      isActive: true,
    });
    const style_Object = reactive({
      title: "스타일_객체 구문",
      code: codeProcess(`
       ---- <div v-bind:style = "{ color: data.activeColor, fontSize: data.fontSize + 'px' }"></div>

      // 데이터 
      data: {
        /ttactiveColor: "red",
        /ttfontSize: 30,
      },

      // 결과
      <div style="color : red; font-size : 30px;"></div>

      //===========================================================

      ---- <div v-bind:style="styleObject"></div>

      // 데이터
      styleObject: {
        /ttcolor: "red",
        /ttfontSize: "14px",
      },

      // 결과
      <div style="color : red; font-size : 14px;></div>

      `),
      data: {
        activeColor: "red",
        fontSize: 30,
      },
      styleObject: {
        color: "red",
        fontSize: "14px",
      },
    });
    const style_Array = reactive({
      title: "스타일_배열 구문",
      code: codeProcess(`
      ---- <div v-bind:style = "[baseStyles, divStyles]"></div>

      // 데이터
       baseStyles: {
        /ttfontSize: "12px",
        /ttborder: "1px solid black",
      },
      divStyles: {
        /ttcolor: "red",
      },

      // 결과
      <div style="font-size: 12px; border: 1px solid black; color: red;></div>

      `),
      baseStyles: {
        fontSize: "12px",
        border: "1px solid black",
      },
      divStyles: {
        color: "red",
      },
    });

    return { class_object, class_Array, style_Object, style_Array };
  },
});
</script>

<style scoped></style>
