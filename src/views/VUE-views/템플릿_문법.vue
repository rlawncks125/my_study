<template>
  <h1 class="div-line">템블릿 문법</h1>
  <span>공식홈페이지 : </span
  ><a href="https://kr.vuejs.org/v2/guide/syntax.html" target="_black"
    >https://kr.vuejs.org/v2/guide/syntax.html</a
  >
  <hr />
  <br />

  <code-convert>
    <template #title>{{ 문자열.title }} </template>
    <template #content>
      <p>{{ msg }}</p>
      <p v-once>업데이트 하지 않습니다.{{ msg }}</p>
    </template>
    <template #code>{{ 문자열.code }} </template>
  </code-convert>
  <code-convert>
    <template #title>{{ 원시HTML.title }} </template>
    <template #content>
      <p>텍스트 보간시 : {{ rawHtml }}</p>
      <p>v-html 디렉티브시 : <span v-html="rawHtml"></span></p>
    </template>
    <template #code>{{ 원시HTML.code }} </template>
  </code-convert>
  <code-convert>
    <template #title>{{ 속성.title }} </template>
    <template #content>
      <div :id="attrId">HTMl 속성사용시 v-bind디렉티브 사용</div>
      <button :disabled="disabled">Button</button>
    </template>
    <template #code>{{ 속성.code }} </template>
  </code-convert>
  <code-convert>
    <template #title>{{ JavaScrpit_표현식.title }} </template>
    <template #content>
      <p>
        {{ js.number + 1 }}
      </p>
      <p>
        {{ js.ok ? "yes" : "no" }}
      </p>
      <p>
        {{ js.message.split("").reverse().join("") }}
      </p>
      <div :id="'list-' + js.name"></div>
      <button @click="js.boolean = !js.boolean">
        값 할당 : {{ js.boolean }}
      </button>
    </template>
    <template #code>{{ JavaScrpit_표현식.code }} </template>
  </code-convert>
  <code-convert>
    <template #title>{{ 동적전달.title }} </template>
    <template #content>
      <p :[attrName]="attrNameValue"></p>
    </template>
    <template #code>{{ 동적전달.code }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      msg: "문자열 보간입니다.",
      rawHtml: "<span style='color: red;'>rawHtml</span>",
      attrId: "attr_Id",
      disabled: true,
      js: {
        number: 22,
        ok: true,
        message: "안녕 하세요 템플릿 문법 입니다.",
        name: "키오스크",
        boolean: true,
      },
      attrName: "id",
      attrNameValue: "동적전달_Id",
    });
    const 문자열 = reactive({
      title: "문자열",
      code: codeProcess(`
      <span>{{ msg }}</span>
      <span v-once>변경시 업데이트 하지 않습니다.{{ msg }}</span>

    //   데이터
    msg: "문자열 보간입니다.",
      `),
    });
    const 원시HTML = reactive({
      title: "원시HTML",
      code: codeProcess(`
      ---- <p>텍스트 보간시 : {{ rawHtml }}</p>
      ---- <p>v-html 디렉티브시 : <span v-html="rawHtml"></span></p>

    //   데이터
    ---- rawHtml: "<span style='color: red;'>rawHtml</span>",
      `),
    });
    const 속성 = reactive({
      title: "속성",
      code: codeProcess(`
      <div :id="attrId">HTMl 속성사용시 v-bind디렉티브 사용</div>
      <button :disabled="disabled">Button</button>

    //   데이터
     attrId: "attr_Id",
      disabled: true,
      `),
    });
    const JavaScrpit_표현식 = reactive({
      title: "JavaScrpit_표현식",
      code: codeProcess(`
        {{ js.number + 1 }}
        {{ js.ok ? "yes" : "no" }}
        {{ js.message.split(" ").reverse().join(" ") }}
      <div :id = "'list-' + js.name"></div>
      <button @click="js.boolean = !js.boolean">값 할당 : {{ js.boolean }}</button>

    //   데이터
     js: {
        /ttnumber: 22,
        /ttok: true,
        /ttmessage: "안녕 하세요 템플릿 문법 입니다.",
        /ttname: "키오스크",
        /ttboolean: true,
      },
      `),
    });
    const 동적전달 = reactive({
      title: "동적 전달",
      code: codeProcess(`
        <p :[attrName]="attrNameValue"></p>

        // 데이터
         attrName: "id",
      attrNameValue: "동적전달_Id",
      `),
    });

    return {
      ...toRefs(data),
      문자열,
      원시HTML,
      속성,
      JavaScrpit_표현식,
      동적전달,
    };
  },
});
</script>

<style scoped></style>
