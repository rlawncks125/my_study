<template>
  <div></div>
  <code-convert>
    <template #title>h[1-6] </template>
    <template #content>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
    </template>
    <template #code>{{ h }} </template>
  </code-convert>
  <code-convert>
    <template #title> p</template>
    <template #content><p>p 태그입니다.</p></template>
    <template #code>{{ p }} </template>
  </code-convert>
  <code-convert>
    <template #title>b </template>
    <template #content><b>b 태그 입니다.</b></template>
    <template #code>{{ b }} </template>
  </code-convert>
  <code-convert>
    <template #title>strong </template>
    <template #content><strong>strong 태그입니다.</strong></template>
    <template #code>{{ strong }} </template>
  </code-convert>
  <code-convert>
    <template #title> em</template>
    <template #content><em>em 태그입니다.</em></template>
    <template #code>{{ em }} </template>
  </code-convert>
  <code-convert>
    <template #title> i</template>
    <template #content><i>i 태그입니다.</i></template>
    <template #code>{{ i }} </template>
  </code-convert>
  <code-convert>
    <template #title>ins </template>
    <template #content><ins>ins 태그입니다.</ins></template>
    <template #code>{{ ins }} </template>
  </code-convert>
  <code-convert>
    <template #title> u</template>
    <template #content><u>u 태그입니다.</u></template>
    <template #code>{{ u }} </template>
  </code-convert>
  <code-convert>
    <template #title>del </template>
    <template #content><del>del 태그입니다.</del></template>
    <template #code>{{ del }} </template>
  </code-convert>
  <code-convert>
    <template #title>s </template>
    <template #content><s>s 태그입니다.</s></template>
    <template #code>{{ s }} </template>
  </code-convert>
  <code-convert>
    <template #title>sup </template>
    <template #content>글<sup>sup 태그입니다.</sup></template>
    <template #code>{{ sup }} </template>
  </code-convert>
  <code-convert>
    <template #title>sub </template>
    <template #content>글<sub>sub 태그입니다.</sub></template>
    <template #code>{{ sub }} </template>
  </code-convert>
  <code-convert>
    <template #title> small</template>
    <template #content><small>small 태그입니다.</small></template>
    <template #code>{{}} </template>
  </code-convert>
  <code-convert>
    <template #title> br</template>
    <template #content><br /></template>
    <template #code>{{ br }} </template>
  </code-convert>
  <code-convert>
    <template #title>hr </template>
    <template #content><hr /></template>
    <template #code>{{ hr }} </template>
  </code-convert>
  <code-convert>
    <template #title> pre</template>
    <template #content
      >글
      <pre>pre 태그입니다.</pre>
    </template>
    <template #code>{{ pre }} </template>
  </code-convert>
  <code-convert>
    <template #title>abbr </template>
    <template #content
      ><abbr title="약어에대한 설명입니다. title속성"
        >abbr 태그입니다.마우스올려보세요</abbr
      ></template
    >
    <template #code>{{ abbr }} </template>
  </code-convert>
  <code-convert>
    <template #title>기타태그 </template>
    <template #code>{{ 기타태그 }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      h: codeProcess(`<h[1-6]>: 제목(heading)을 표시할 때 사용된다. <h1>이 가장 크고 <h6>이 가장 작다
            /tt<h1>은 한 문서 안에 하나만 사용하는 것을 권장한다.`),
      p: codeProcess(`<p>: 새 문단(paragraph)을 연다.`),
      b: codeProcess(`<b>: 두껍게(bold) 효과를 준다`),
      strong: codeProcess(
        `<strong>: 포함된 텍스트를 강하게 강조할 때 사용한다.`
      ),
      em: codeProcess(`<em>: <strong>보다 약한 강조를 나타낼 때 사용한다.`),
      i: codeProcess(
        `<i>: 텍스트를 기울임꼴(italic)로 표시한다. 기술 용어, 외국어, 일반적으로 기울임꼴로 사용되는 용어 등을 강조한다.`
      ),
      ins: codeProcess(`<ins>: 문서에 밑줄을 표시한다.`),
      u: codeProcess(`<u>: 밑줄을 표시한다. 철자 오류를 지적하는데 사용`),
      del: codeProcess(`<del>: 문서에서 취소선을 표시한다.`),
      s: codeProcess(`<s>: 취소선을 표시한다. <del>보다 약한 의미`),
      sup: codeProcess(`<sup>: 텍스트를 위첨자(superscript)로 표시한다.`),
      sub: codeProcess(`<sub>: 텍스트를 아래첨자(subscript)로 표시한다.`),
      small: codeProcess(`<small>: 텍스트를 조금 더 작게 표시한다.`),
      br: codeProcess(`<br />: 문단 내 줄바꿈(line break)`),
      hr: codeProcess(`<hr />: 가로줄(horizontal rule)을 넣는다`),
      pre: codeProcess(
        `<pre>: 서식 있는(Preformatted) 텍스트를 넣기 위한 태그이다. 이 태그 안에는 <br> 태그 없이 개행하더라도 개행을 인식하고 공백 문자가 두 개 이상 연속으로 있어도 하나로 취급하지 않고 그대로 표시된다. 또한, 일반적으로 이 태그 안에 들어간 텍스트는 고정폭 글꼴로 표시된다. 이 태그 안에 다른 태그를 넣으면 경우에 따라 의도치 않게 표시될 수도 있으므로 가급적이면 다른 태그를 넣지 않는 것이 좋다.`
      ),
      abbr: codeProcess(
        `<abbr>: 약어를 이 태그로 묶어서 무엇의 약어인지 설명하기 위한 태그이다. <abbr title="약어에 대한 설명">약어</abbr> 식으로 써서 마우스 커서를 대면 설명이 떠서 읽을 수 있게 한다`
      ),
      기타태그: codeProcess(`// 잘안쓰일거 같은 태그

    <wbr>: 글이 길어질 때 띄어쓰기가 없더라도 이 태그가 쓰인 부분에서 자동개행이 이루어진다. 예를 들어, Java<wbr>Programming이라고 쓰면 개행되지 않을 때는 'JavaProgramming'으로 붙어서 나오지만 자동개행시 <wbr> 태그 앞뒤로 위치한 'Java'와 'Programming'이 서로 분리될 수 있다. 원래는 개행을 방지하는 비표준 태그 <nobr> 안애서 <br> 태그와 같은 기능을 하는 태그였으나 HTML5에서 표준으로 채택되면서 기능이 변경된 것. 코더들 사이에서 이 태그와 SHY 중 무엇을 써야 할 지 의견이 분분하다. 다만 한글은 글자 단위로 개행이 되기 때문에 한글에다가 이 태그를 쓸 필요성은 거의 없다.
    <blockquote>: 인용구를 기술하는 태그이다. 기본적으로 들여쓰기가 되어 있는데 CSS로 없앨 수 있다.
    <q>: <blockquote>의 인라인 버전.
    <dfn>: 후술할 <dl>의 인라인 버전.
    <var>, <samp>, <kbd>, <code>: 변수 등 프로그래밍 언어와의 연계를 위한 태그.
    <ruby>: 후리가나(루비 문자) 표기에 쓰이는 기본 태그. 절대 Ruby를 프로그래밍하기 위한 태그가 아니다!
    <rp>: 후리가나가 지원되지 않는 환경에서 표기할 텍스트를 지정한다.
    <rt>: 후리가나를 쓴다.
    <rb>: 합성어 등으로 후리가나가 여러 단어로 이루어지는 경우 등에 후리가나 영역을 지정하는데 쓰인다. W3C HTML 표준이나 WHATWG HTML Living Standard 표준이 아니다.
    <rtc>: 후리가나의 의미적 주석을 넣는다. W3C HTML 표준이나 WHATWG HTML Living Standard 표준이 아니다.`),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
