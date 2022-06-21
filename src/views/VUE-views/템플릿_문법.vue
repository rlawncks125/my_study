<template>
  <h1 class="div-line">템블릿 문법</h1>
  <span>공식홈페이지 : </span
  ><a href="https://kr.vuejs.org/v2/guide/syntax.html" target="_black"
    >https://kr.vuejs.org/v2/guide/syntax.html</a
  >
  <hr />
  <br />

  <h1>문자열</h1>
  <p>{{ msg }}</p>
  <p v-once>업데이트 하지 않습니다.{{ msg }}</p>
  <div style="margin: 0.5rem 0" v-for="code in items[0].code" :key="code.id">
    <CodeEditor :value="code.code" :lang="code.lang" />
  </div>

  <h1>원시HTML</h1>
  <p>텍스트 보간시 : {{ rawHtml }}</p>
  <p>v-html 디렉티브시 : <span v-html="rawHtml"></span></p>
  <div style="margin: 0.5rem 0" v-for="code in items[1].code" :key="code.id">
    <CodeEditor :value="code.code" :lang="code.lang" />
  </div>

  <h1>속성</h1>
  <div :id="attrId">HTMl 속성사용시 v-bind디렉티브 사용</div>
  <button :disabled="disabled">Button</button>
  <div style="margin: 0.5rem 0" v-for="code in items[2].code" :key="code.id">
    <CodeEditor :value="code.code" :lang="code.lang" />
  </div>

  <h1>JavaScript 표현식</h1>
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
  <button @click="js.boolean = !js.boolean">값 할당 : {{ js.boolean }}</button>
  <div style="margin: 0.5rem 0" v-for="code in items[3].code" :key="code.id">
    <CodeEditor :value="code.code" :lang="code.lang" />
  </div>

  <h1 :[attrName]="attrNameValue">동적 전달</h1>
  <div style="margin: 0.5rem 0" v-for="code in items[4].code" :key="code.id">
    <CodeEditor :value="code.code" :lang="code.lang" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

import { codeReutrnType, ELanguages } from "@/plugins/simple-code-editor.vue";

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

    const items = [
      문자열s(),
      원시HTMLs(),
      속성s(),
      자바스스크립트s(),
      동적전달s(),
    ];

    return {
      ...toRefs(data),
      items,
    };
  },
});

const 문자열s = (): codeReutrnType => ({
  code: [
    {
      lang: ELanguages.xml,
      code: `<span> {{ msg }} </span>
<span v-once > 변경시 업데이트 하지 않습니다.{{ msg }} </span>

<script setup>
const msg =  "문자열 보간입니다."
'</'script>
`.replace("'</'", "</"),
    },
  ],
});
const 원시HTMLs = (): codeReutrnType => ({
  code: [
    {
      lang: ELanguages.xml,
      code: `<p>텍스트 보간시 : {{ rawHtml }}</p>
<p>v-html 디렉티브시 : <span v-html="rawHtml"></span></p>

<script setup>
const rawHtml = "<span style='color: red;'>rawHtml</span>",
'</'script>
`.replace("'</'", "</"),
    },
  ],
});
const 속성s = (): codeReutrnType => ({
  code: [
    {
      lang: ELanguages.xml,
      code: `<div :id="attrId" > HTMl 속성사용시 v-bind디렉티브 사용 </div>
<button :disabled="disabled" > Button </button>

<script setup>
const attrId = "attr_Id",
const disabled = true,
'</'script>
`.replace("'</'", "</"),
    },
  ],
});
const 자바스스크립트s = (): codeReutrnType => ({
  code: [
    {
      lang: ELanguages.xml,
      code: `<p>{{ js.number + 1 }}</p>
<p>{{ js.ok ? "yes" : "no" }}</p>
<p>{{ js.message.split("").reverse().join("") }}</p>
<div :id="'list-' + js.name"></div>
<button @click="js.boolean = !js.boolean">값 할당 : {{ js.boolean }}</button>

<script setup>
js: {
    number: 22,
    ok: true,
    message: "안녕 하세요 템플릿 문법 입니다.",
    name: "키오스크",
    boolean: true,
},
'</'script>
`.replace("'</'", "</"),
    },
  ],
});
const 동적전달s = (): codeReutrnType => ({
  code: [
    {
      lang: ELanguages.xml,
      code: `<h1 :[attrName]="attrNameValue">동적 전달</h1>

<script setup>
const attrName = "id",
const attrNameValue = "동적전달_Id",
'</'script>
`.replace("'</'", "</"),
    },
  ],
});
</script>

<style scoped></style>
