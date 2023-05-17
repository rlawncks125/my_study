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
  <Icon icon="logos-google-play-icon" />
  <BuggerType1 />
  <!-- <ButtonType1 /> -->
  <ButtonType2 />

  <template v-for="item in items" :key="item.id">
    <h1>{{ item.title }}</h1>
    <div v-html="item.html"></div>
    <code-test :codeText="item.code" />
  </template>
</template>

<script lang="ts">
import codeTest, {
  HTML_TAB,
  cssToCode,
  htmlToCode,
  jsToCode,
  descriptionTocode,
} from "@/components/NewCodeConvert.vue";
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
import { Icon } from "@iconify/vue";
import ButtonType1 from "@/components/button/list-type1.vue";
import ButtonType2 from "@/components/button/list-type2.vue";
import BuggerType1 from "@/components/button/hambugger1.vue";
export default defineComponent({
  components: { codeTest, Icon, ButtonType2, BuggerType1 },
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

    const items = [NewConvert테스트()];

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

const NewConvert테스트 = () => {
  return {
    title: "코드 테스트",
    html: `
        <h2 class='home-test-class'>sds</h2>`,
    code: [
      htmlToCode(
        `// html
        html 테스트
        <h1>h1h1</h1>
        ${HTML_TAB}<p id='aw'>ad</p>
        ${HTML_TAB}${HTML_TAB}<span id='asd'>ad</span>        
        `
      ),
      cssToCode(
        `// css
        css 테스트
        div p .ssw #idid {
        ${HTML_TAB}background: url('adw');
        }
        ${HTML_TAB}div p .sda #ida {
        ${HTML_TAB}${HTML_TAB}color : red;
        }
        `
      ),
      jsToCode(
        `// javasciprt
        javascript 테스트
        ${HTML_TAB}ex) ex테스트
        const var = 1;
        const var = 'ss';
        export const var = '44';
        const var : number = 2;
        const var = 3 as number;
        const var = <string>3;
        const vueref = ref<string>('s');
        const { var1,var2 } = props;
        const [ var1,var2 ] = func(var);

        const func = () => {
        ${HTML_TAB}return {
        ${HTML_TAB}${HTML_TAB}sdas,
        ${HTML_TAB}${HTML_TAB}dwppa
        ${HTML_TAB}};
        }
        const func : = ( data : any ) => {
        }
        const func : = ( data : any ) : Promise<string> => {
        }
        const func : boolean = ( data : any , time : string ) : boolean => {

        ${HTML_TAB}const ds = 2;

        ${HTML_TAB}if(ds === 2) {
        ${HTML_TAB}${HTML_TAB}return { 
        ${HTML_TAB}${HTML_TAB}ok : true ,
        ${HTML_TAB}${HTML_TAB} data : 'ss'
        ${HTML_TAB}${HTML_TAB}};
        ${HTML_TAB}}

        ${HTML_TAB}return false;        

        }

      
        interface Idd {
        ${HTML_TAB}vava : number
        }

         enum Enns {
        ${HTML_TAB}'r' = 'r'
        }

        export interface Idd {
        ${HTML_TAB}vava : string
        }
        
        import { ref , toRefs } form "vue";
        import form 'sss.css';


        `
      ),
      descriptionTocode(
        `// 설명 테스트
        ㅋㅋ
        ${HTML_TAB}ㅋㅋ
        설명 : 해설
        ${HTML_TAB}<설명> : 해설
        ${HTML_TAB}설명 = 해설
        <설명> = 해설
        `
      ),
      descriptionTocode(
        `${HTML_TAB}// '=' 테스트
        설명 = 해설
        ${HTML_TAB}<설명> = 해설
        ${HTML_TAB}설명 : 해설
        <설명> : 해설
        `,
        "="
      ),
      descriptionTocode(
        `// ex) 테스트
      ex) ㅋㅋ1
      ${HTML_TAB}ex) ㅋㅋ2
      ㅋㅋ
      ex) {
      ${HTML_TAB}asdadw
      }
      ex) {
      ${HTML_TAB}s
      }
      
      `
      ),
    ].join("<br />"),
  };
};
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
.home-test-class {
  color: red;
}
</style>
