<template>
  <code-convert>
    <template #title> ol</template>
    <template #content>
      <ol>
        <li>li1</li>
        <li>li2</li>
      </ol>
    </template>
    <template #code>{{ ol }} </template>
  </code-convert>
  <code-convert>
    <template #title> ul</template>
    <template #content>
      <ul>
        <dl>정의 목록(dl)</dl>
        <dt>정의 기술(dt)</dt>
        <dd>뜻 풀이(dd)</dd>
        <li>li1</li>
        <li>li2</li>
      </ul>
    </template>
    <template #code>{{ ul }} </template>
  </code-convert>
  <code-convert>
    <template #title> li</template>
    <template #content>
      <li>li</li>
    </template>
    <template #code>{{ li }} </template>
  </code-convert>
  <code-convert>
    <template #title> dl</template>
    <template #content>
      <dl>dl 태그입니다.</dl>
    </template>
    <template #code>{{ dl }} </template>
  </code-convert>
  <code-convert>
    <template #title> dt</template>
    <template #content>
      <dt>dt 태그입니다.</dt>
    </template>
    <template #code>{{ dt }} </template>
  </code-convert>
  <code-convert>
    <template #title> dd</template>
    <template #content>
      <dd>dd 태그입니다.</dd>
    </template>
    <template #code>{{ dd }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      ol: codeProcess(
        `<ol>: 순서 있는 목록(ordered list)을 표시한다.( 기능은 ul와 차이없고 비주얼적인 태그)`
      ),
      ul: codeProcess(`<ul>: 순서 없는 목록(unordered list)을 표시한다.`),
      li: codeProcess(
        `<li>: 목록에서 각 항목(list item)은 <li>와 </li>사이에 넣는다.`
      ),
      dl: codeProcess(`<dl>: 정의 목록(definition list)을 표시한다.`),
      dt: codeProcess(`<dt>: 정의 목록의 정의(definition term)를 기술한다.`),
      dd: codeProcess(
        `<dd>: 정의 목록의 뜻풀이(definition description)를 기술한다. 기본적으로 들여쓰기가 되어 있는데 CSS로 없앨 수 있다.`
      ),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
