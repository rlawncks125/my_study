<template>
  <div>
    <h1>시맨틱 태그</h1>
    <h3>{{ 시멘택C }}</h3>
    <br />
    <br />
    <br />
    <code-convert>
      <template #title> 선언문 </template>
      <template #code>{{ 선언문 }} </template>
    </code-convert>
    <br />
    <br />
    <h1 class="div-line">레이아웃태그</h1>
    <code-convert>
      <template #title> header </template>
      <template #code>{{ header }} </template>
    </code-convert>
    <code-convert>
      <template #title> nav </template>
      <template #code>{{ nav }} </template>
    </code-convert>
    <code-convert>
      <template #title> main </template>
      <template #code>{{ main }} </template>
    </code-convert>
    <code-convert>
      <template #title> article </template>
      <template #code>{{ article }} </template>
    </code-convert>
    <code-convert>
      <template #title> section </template>
      <template #code>{{ section }} </template>
    </code-convert>
    <code-convert>
      <template #title> aside </template>
      <template #code>{{ aside }} </template>
    </code-convert>
    <code-convert>
      <template #title> footer </template>
      <template #code>{{ footer }} </template>
    </code-convert>
    <br />
    <br />
    <h1 class="div-line">멀티미디어 태그</h1>
    <code-convert>
      <template #title>audio </template>
      <template #code>{{ audio }} </template>
    </code-convert>
    <code-convert>
      <template #title>video </template>
      <template #code>{{ video }} </template>
    </code-convert>
    <code-convert>
      <template #title>canvas </template>
      <template #code>{{ canvas }} </template>
    </code-convert>
    <br />
    <br />
    <h1 class="div-line">폼관련 태그</h1>
    <code-convert>
      <template #title>output </template>
      <template #code>{{ output }} </template>
    </code-convert>
    <code-convert>
      <template #title>datalist </template>
      <template #code>{{ datalist }} </template>
    </code-convert>
    <code-convert>
      <template #title>새로운 input 속성 </template>
      <template #code>{{ 폼기타 }} </template>
    </code-convert>
    <br />
    <br />
    <h1 class="div-line">기타 태그</h1>
    <code-convert>
      <template #code>{{ 기타태그 }} </template>
    </code-convert>
    <br />
    <br />
    <h1 class="div-line">용도가 바뀐 태그</h1>
    <code-convert>
      <template #code>{{ 용도바뀐태그 }} </template>
    </code-convert>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      선언문: codeProcess(`<!DOCTYPE html >`),
      header:
        codeProcess(`<header> : 일반적으로 페이지나 해당 섹션의 가장 윗부분에 위치한다.
        페이지 맨 위에 쓸 때는 사이트의 제목이 보통 들어가며, 선택적으로 상단바나 검색창 등이 안에 들어갈 수 있다.`),
      nav: codeProcess(`<nav> : 내비게이션(navigation)의 약자로, 일반적으로 상단바 등 사이트를 안내하는 요소에 사용된다.
        보통은 안에 <ul>을 넣어 목록 형태로 사용한다.`),
      main: codeProcess(`<main> : 문서의 주된 콘텐츠를 표시한다. 이 태그는 두 개 이상 보여져서는 안 된다
        두 개 이상의 main 요소를 쓸 경우 하나 이외의 전부를 hidden 속성을 써서 가려야 한다`),
      article: codeProcess(`<article> : 웹 페이지의 내용에 사용하는 태그이다.
        문서나 페이지, 사이트에서 독립적으로 배포 혹은 재사용(예를 들어 투고 같은)할 수 있는 섹션에 사용한다`),
      section: codeProcess(`<section> : 웹 페이지의 섹션에 사용하는 태그이다.
        웹 페이지를 의미적으로 각각의 파트로 구분하기 위해 쓰는 태그이다.`),
      aside:
        codeProcess(`<aside> : 본문의 주요 부분을 표시하고 남은 부분을 설명하는 태그이다.
        특별한 일이 아니면 사이드바나 광고창 등 중요하지 않은 부분에 사용된다.`),
      footer:
        codeProcess(`<footer> : 일반적으로 페이지나 해당 파트의 가장 아랫부분에 위치한다.
        페이지 맨 아래에 쓸 때는 사이트의 라이선스, 주소, 연락처 등을 넣는다.`),
      audio: codeProcess(`<audio> : 음성, 음악 파일 등을 재생할 수 있는 태그
        멀티브라우저 지원을 위해서는 <source> 태그를 안에 넣어 두가지 이상의 확장자를 가진 음악 파일을 넣어야 한다. 가장 많이 사용하는 조합은 mp3+ogg.
`),
      video: codeProcess(`<video> : 영상 파일을 재생할 수 있는 태그
        별다른 플러그인 없이도 자체 재생이 가능하다는 점이 가장 큰 장점이다.
        <audio> 태그와 마찬가지로 <source> 태그를 넣어 mp4+ogv의 조합으로 짜주면 거의 대부분의 브라우저를 지원한다.`),
      canvas:
        codeProcess(`<canvas> : 스크립트를 이용하여 그래픽을 표현하는 태그이다.
        일반적으로는 JavaScript를 많이 사용하며, 응용하면 웹에서 게임 앱, 3D 엔진 등을 돌리는 다양한 응용이 가능하다`),
      output: codeProcess(`<output> : 계산의 결과값을 전송하는 데에 쓰인다.`),
      datalist: codeProcess(
        `<datalist> : <input>의 type="text"와 같은 속성을 가진 것들에 들어갈 값을 미리 정의하는 태그이다.`
      ),
      폼기타:
        codeProcess(`새로운 <input>의 type 속성 : date, datetime, time, color, range 등
        JavaScript를 통해서만 구현됐던 기능이 내장되었다. 현 시점에서는 크롬이 사실상 전부를 지원한다`),
      기타태그: codeProcess(`// 기타 태그

<menu> : 툴바, 팝업 메뉴를 넣을 때 쓴다. 현재는 FireFox에서만 적용된다

<menuitem> : 툴바, 팝업 메뉴의 각 항목을 정의한다.

<details> : 보이거나 숨기게 해주는 요약글 형식의 위젯에 사용되는 태그이다. <summary> 태그와 함께 쓰인다.

<embed> : 외부 애플리케이션이나 플러그인을 삽입할 때 쓰는 태그이다. 대표적으로 어도비 플래시를 웹페이지에 삽입할 때 이걸 쓴다.

<object> : 외부 문서, 매체, 플러그인 등을 웹페이지에 삽입할 때 쓰는 태그

<figure> : 그림, 도표, 다이어그램 등의 글의 이해를 돕기 위한 내용들을 나타내는 태그

<figcaption> : <figure> 태그 안에 사용되는 태그로, <figure> 태그 안에 있는 내용의 설명을 적는 태그이다.

<iframe> : 외부 문서를 해당 영역에 삽입하는 태그이다. HTML 5에서 sandbox 속성이 추가되었다

<time> : 기계가 이해하기 쉽게 시간을 표현한다. CSS를 정하지 않았다면 외관상의 변화는 없다.
<time datetime="2001-05-15 19:00">n시간 전</time> 같이 datetime에 그레고리력 시간을 넣어 태그를 작성해야 기계가 이해하기 쉬워진다.

<mark> : 특정한 부분을 형광펜으로 마킹한다.`),
      용도바뀐태그: codeProcess(`// 용도가 바뀐 태그

<b> :본래는 굵은 글씨를 표현하는 비주얼적인 요소만 있던 태그였고 HTML 4.01에서 비권장 태그로 들어갔으나, HTML5에서 <strong>보다 약한 강조의 의미를 갖는 태그로 변경되었다. 여전히 별도의 CSS 없이 쓰면 브라우저에서는 굵은 글씨가 나오는 것이 기본값이다.

<s> : 더이상 옳지 않은 내용을 나타내는 데에 쓴다. 별도의 CSS 없이 쓰면 브라우저에서는 취소선을 긋는 것이 기본값이다.

<u> : 양식상 일반적인 텍스트보다 돋보여야 할때 쓴다. 예를 들어 철자가 틀린 단어나, 중국어로 번역된 고유 명사 등이 있다. 별도의 CSS 없이 쓰면 브라우저에서는 밑줄을 긋는 것이 기본값이다.

<i> : 어떠한 이유로 일반적인 텍스트보다 돋보여야 할때 쓴다. 예를 들어 전문 용어, 외국어의 구절 등이 있다. 별도의 CSS 없이 쓰면 브라우저에서는 이탤릭체로 표기하는 것이 기본값이다. font-awesome 같은 글꼴 형태로 된 아이콘이 이 태그를 사용해서 아이콘을 출력한다. 아이콘의 특징이 텍스트보다 돋보여야 하니 사용법이 틀린 것은 아니다.

더 적절한 시맨틱 태그가 있을 경우 그쪽을 쓴다.

<hr> : 원래 단순한 가로줄을 나타내는 태그였으나, 페이지의 주제가 바뀔 때 내용을 분리시키는 의미가 HTML5에서 추가되었다.

<wbr> : 원래 <nobr> 태그 안에서 <br> 태그를 대신하여 강제개행 기능을 하는 태그였으나, HTML5 표준으로 편입되면서 띄어쓰기 없이 이 태그를 사용한 부분에서 자동개행을 하는 기능으로 변경되었다.(<nobr> 태그는 CSS로 대체 가능하여 폐기되었다)`),
    });
    const content = reactive({
      시멘택C: `HTML5에서 추가된 태그들이다. 디자인을 할 때 <table> 대신 <div>를 쓸 것을 권장했더니 그 부작용으로 코드가 온통 <div> 투성이라 알아보기 어렵다는 지적이 있었다. 그래서 HTML5에서 나온 것이 시맨틱 태그이다.`,
    });
    return { ...toRefs(data), ...toRefs(content) };
  },
});
</script>

<style scoped></style>
