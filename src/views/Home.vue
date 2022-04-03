<template>
  <div>HOME</div>
  <p>actions githubpages 배포 확인</p>
  <p>정리 홈페이지 리메이크</p>
  <p>env 문자열 준값 : {{ envTest }}</p>

  <span>github secerts로 준 페이지 링크 : </span>
  <a id="Mainpage" :href="envPORTFOLIO" target="_blank">{{ envPORTFOLIO }} </a>
  <br />
  <label for="text">문자을 입력하세요</label>
  <input
    type="text"
    name="text"
    @input="
      (e) => {
        textModel = e.target.value;
      }
    "
    :value="textModel"
  />
  <br />
  <label for="text">Watch X 입력하세요</label>
  <input type="text" name="text" v-model="twoModel" />
  <br />
  <span class="텍스트넓이감지" ref="텍스트넓이감지" :style="spanStyle">
    {{ textModel }}
  </span>

  <template v-for="item in items" :key="item.id">
    <code-test :codeText="item.code">
      <template #title>{{ item.title }} </template>
    </code-test>
  </template>
</template>

<script lang="ts">
import codeTest, {
  Char_TAB,
  cssToCode,
  htmlToCode,
  jsToCode,
} from "@/components/NewCodeConvert.vue";
import { defineComponent, reactive, ref, toRefs, watch } from "vue";

export default defineComponent({
  components: { codeTest },
  setup() {
    const 텍스트넓이감지 = ref<HTMLSpanElement>();
    const data = reactive({
      spanStyle: {
        width: 0 + "px",
        color: "red",
      },
      textModel: "",
      twoModel: "",
    });

    const envTest = process.env.VUE_APP_TEST || "env 적용안됌";
    const envPORTFOLIO = process.env.VUE_APP_PORTFOLIO;

    const items = reactive([
      {
        title: "코드 테스트",
        code: [
          htmlToCode(`// html
        html 테스트
        <h1>h1h1</h1>
        ${Char_TAB}<p id='aw'>ad</p>
        ${Char_TAB}${Char_TAB}<span id='asd'>ad</span>        
        `),
          cssToCode(`// css
        css 테스트
        div p .ssw #idid {
        ${Char_TAB}background: url('adw');
        }
        ${Char_TAB}div p .sda #ida {
        ${Char_TAB}${Char_TAB}color : red;
        }
        `),
          jsToCode(`// javasciprt
        ll
        `),
        ].join("<br />"),
      },
    ]);

    watch(
      // 배열 혹은 Object의 특정 값만 감지하고싶을떄
      () => data.textModel,
      () => {
        setTimeout(() => {
          data.spanStyle.width = 텍스트넓이감지.value?.offsetWidth + "px";
        }, 0);
      }
    );

    return { items, 텍스트넓이감지, ...toRefs(data), envTest, envPORTFOLIO };
  },
});
</script>

<style lang="scss">
.텍스트넓이감지 {
  width: 100%;
  &::after {
    width: inherit;
    display: block;
    content: "";
    border-bottom: 1px solid black;
  }
}
</style>
