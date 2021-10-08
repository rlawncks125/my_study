<template>
  <code-convert>
    <template #title> a</template>
    <template #content>
      <p style="color: green">속성 :</p>
      <p style="color: green">target : 링크를 클릭할때 창이 열릴 위치</p>
      <ul>
        <li>_self : 현재 창에서 열음 (기본값)</li>
        <li>_blank : 새로운 창이나 탭(tab) 으로 열음</li>
        <li>_parent : 현재 프레임의 부모 프레임에서 오픈</li>
        <li>_top : 현재 윈도우 전체에서 오픈</li>
        <li>프레임 이름 : 명시된 프레임에서 오픈 이름</li>
      </ul>
      <p style="color: green">title : 마우스커서 올릴때 도움말 설명</p>
      <hr />
      <br />
      <a href="https://blog.naver.com/rlawncks125" target="_blank"
        >네이버블로그 새창 열기</a
      >
    </template>
    <template #code>{{ a }} </template>
  </code-convert>
  <code-convert>
    <template #title> img</template>
    <template #content>
      <p style="color: green">속성 :</p>
      <p style="color: green">src : 경로 지정</p>
      <ul>
        <li>절대 경로 - http:// 또는 https</li>
        <li>상대 경로 - path/to/image/file</li>
        <li>data:image/jpeg|png|gif;base64, A1bC2dE3fG...</li>
      </ul>
      <p style="color: green">
        alt : 이미지를 볼 수 없는 경우에 이미지에 대한 설명을 제공한다. 이
        속성값이 없어도 이미지파일의 경로가 유효하다면 표시되기는 하지만 웹표준
        검사기에서 걸린다.
      </p>
      <p style="color: green">
        title : 이미지에 대한 추가 정보를 제공한다. 세피로트 이미지에 마우스를
        갖다대면 말풍선으로 뜨는 것을 확인할 수 있다
      </p>
      <p style="color: green">
        height , width : 이미지의 세로, 가로폭을 지정한다. HTML 4.01까지는 그냥
        숫자만 쓰면 픽셀로, 뒤에 %를 붙이면 백분율로 지정할 수 있었으나,
        HTML5에서는 픽셀로만 지정할 수 있게 되었으므로 백분율로 지정하려면 CSS를
        이용해야 한다.
      </p>
      <hr />
      <br />
      <img
        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/v1633711399/1633339608_gt2nbq.gif"
        alt="강아지 사진"
      />
    </template>
    <template #code>{{ img }} </template>
  </code-convert>
  <code-convert>
    <template #title>svg </template>
    <template #code>{{ svg }} </template>
  </code-convert>
  <code-convert>
    <template #title> progress</template>
    <template #content>
      <progress></progress><br />
      <progress value="40" max="100"></progress>
    </template>
    <template #code>{{ progress }} </template>
  </code-convert>
  <code-convert>
    <template #title> picture</template>
    <template #code>{{ picture }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      a: codeProcess(
        `<a>: 하이퍼링크를 생성하는 태그이다. href 속성을 써서 <a href="링크할 페이지">내용</a>와 같이 작성한다. 페이지 내의 책갈피를 위한 속성으로 name이 있었으나, id로 대체 가능하여 HTML5에서는 폐기되었다.`
      ),
      img: codeProcess(`페이지에 이미지를 추가하는 태그이다.`),
      svg: codeProcess(
        `<svg>: 페이지에 SVG 형식의 그래픽을 추가하는 태그이다. SVG 파일은 위의 <img> 태그로 넣어도 되지만 SVG 파일이 XML 형식으로 만들어져 있기에 별도의 SVG 파일을 만들지 않고 직접 코딩해서 넣는 것도 가능하다. 이 때 <svg> 태그를 사용한다.`
      ),
      progress: codeProcess(
        `<progress>: 페이지에 진행 상황 막대를 추가하는 태그이다. 예를 들어 <progress value="22" max="100"></progress>와 같이 쓸 경우 22% 진행된 막대가 표시된다`
      ),
      picture: codeProcess(
        `<picture>: 최신 HTML Living Standard에 추가된 이미지 태그로 <audio> 태그와 <video> 태그에 대응한다. 다양한 환경에서 서로 다른 이미지를 띄울 수 있게 한다. W3C HTML 표준에 반영되어 있지 않다.`
      ),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped>
li {
  list-style: square inside;
}
</style>
