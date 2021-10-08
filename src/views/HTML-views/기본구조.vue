<template>
  <code-convert>
    <template #title> HTML 구조</template>
    <template #code> {{ 구조 }}</template>
  </code-convert>
  <code-convert>
    <template #title> !DOCTYPE</template>
    <template #content></template>
    <template #code> {{ DOCTYPE }}</template>
  </code-convert>
  <code-convert>
    <template #title> HTML</template>
    <template #code> {{ HTML }}</template>
  </code-convert>
  <code-convert>
    <template #title> HEAD</template>
    <template #code> {{ HEAD }}</template>
  </code-convert>
  <code-convert>
    <template #title> TITLE</template>
    <template #code> {{ TITLE }}</template>
  </code-convert>
  <code-convert>
    <template #title> META</template>
    <template #code> {{ META }}</template>
  </code-convert>
  <code-convert>
    <template #title> LINK</template>
    <template #code> {{ LINK }}</template>
  </code-convert>
  <code-convert>
    <template #title> BODY</template>
    <template #code> {{ BODY }}</template>
  </code-convert>
  <code-convert>
    <template #title> 기타구조</template>
    <template #code> {{ 기타구조 }}</template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      구조: codeProcess(`
    <!DOCTYPE html>
    <html lang="">
    /tt<head>
    /tt/tt<meta charset="utf-8" />
    /tt/tt<meta http-equiv="X-UA-Compatible" content="IE=edge" />
    /tt/tt<meta name="viewport" content="width=device-width,initial-scale=1.0" />
    /tt/tt<link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    /tt/tt<title> title </title>    
    /tt</head>

    /tt<body>
    /tt/tt/tt<strong>
    /tt/tt/tt/ttWe're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
    /tt/tt/tt/ttproperly without JavaScript enabled. Please enable it to
    /tt/tt/tt/ttcontinue.
    /tt/tt/tt</strong>
    /tt/tt<div id="app"></div>
    /tt/tt<!-- built files will be auto injected -->
    </body>
</html>
      `),
      DOCTYPE: codeProcess(`
        <!DOCTYPE> : 마크업 언어용 DTD 태그이다. HTML5의 경우 맨 위에 다음과 같이 써 주면 된다.
        /ttex)<!DOCTYPE html>
        `),
      HTML: codeProcess(`
      <html> : 위의 DTD를 제외한 전체를 이 태그로 둘러싼다.
      `),
      HEAD: codeProcess(`
      <head> : HTML 문서의 속성을 지정하기 위한 태그이다. 이 태그 안에 타이틀이나 메타 태그 등을 넣는다.
      `),
      TITLE: codeProcess(`
      <title> : HTML의 제목을 선언하는 태그.
      `),
      META: codeProcess(`
      <meta> : HTML의 부가 정보를 선언하는 태그. 예를 들어 charset 속성을 쓰면 인코딩을 선언할 수 있다.
      `),
      LINK: codeProcess(`
      <link> : 별도의 CSS 선언 파일, 파비콘(홈페이지 제목과 같이 나오는 아이콘) 등을 연결하는 태그.
     `),
      BODY: codeProcess(`
      <body> : HTML 문서의 본 모양을 나타내기 위한 태그이다. 표시될 문서의 레이아웃을 이 태그 안에 넣으면 된다
    `),
      기타구조: codeProcess(`
      <base>: 상대 링크(relative link) 해석의 기준이 되는 URL을 지정한다. tistory.com에 올라온 HTML 파일에 base href가 "http://cafe.naver.com/cafesupport"로 지정되어 있다면 "joonggonara"라는 링크를 걸었을 때 https://cafe.naver.com/joonggonara로 해석된다.

      <style>: CSS 사용. 되도록이면 <link> 태그를 쓰기를 권장한다.

      <script>: 스크립트를 사용한다. &ltscript type="text/javascript"> ... &lt/script > 식으로 스크립트 타입을 지정해서 사용한다. HTML5에서는 type 속성을 생략하면 일반적으로 사용되는 자바스크립트로 인식한다. 인터넷 익스플로러에서는 VB스크립트를 사용할 수도 있었으나

      <div>: 박스 또는 레이어. 일명 '웹 표준' 개념이 많은 사람들에게 퍼지게 된 이후 테이블 태그 대신 레이아웃을 만드는 데 자주 사용되고 있다
      사실 div만 남발하는 것도 올바른 사용법은 아니고, 용도에 따라 여러가지 태그를 적절히 사용하는 것이 중요하다. <div> 이외에도 많은 태그가 <div>와 같은 박스 스타일로 렌더링되기 때문에 CSS만 잘 지정하면 된다.

      <span>: <div>의 인라인 버전.

      <figure>, <figcaption>: 그림이 덧붙여지는 내용 작성에 사용한다.

      `),
    });

    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
