<template>
  <h1 class="div-line">CSS 선택자</h1>
  <hr />
  <br />
  <div v-for="item in items" :key="item.id">
    <code-convert>
      <template #title>{{ item.title }} </template>
      <template #content>{{ item.content }}</template>
      <template #code>{{ item.code }} </template>
    </code-convert>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const items = reactive([
      {
        title: "기본선택자",
        code: codeProcess(`// 전체 선택자
          * : 모든 요소를 선택한다
      
          // 태그 선택자
          태그 : 해당 태그의 요소를 선택한다.
      
          // 아이디 선택자
          #아이디 : 해당 아이디의 요소를 선택한다 {
          
          // 클래스 선택자
          .클래스 : 해당 클래스의 요소를 선택한다 {`),
      },
      {
        title: "후손선택자",
        code: codeProcess(
          `(선택자1) (선택자2) : 선택자1의 모든 하위 요소(자식, 자식의 자식, ...) 중 선택자2를 선택한다.`
        ),
      },
      {
        title: "다중선택자",
        code: codeProcess(
          `(선택자1)(선택자2) : 선택자1이면서 선태작2인 요소를 선택한다.`
        ),
      },
      {
        title: "자손선택자",
        code: codeProcess(
          `(선택자1) > (선택자2) : 선택자1 바로 밑의 자식 중 선택자2를 선택한다.`
        ),
      },
      {
        title: "속성선택자",
        code: codeProcess(`[속성] : 태그에 해당 속성이 명시되어 있는 요소를 선택한다.[1]

          [속성=문자열] : 태그에 해당 속성이 명시되어 있고 그 값이 해당 문자열인 요소를 선택한다.

          [속성~=문자열] : 해당 속성의 값에 해당 문자열이 완전한 단어로(즉, 앞뒤가 띄어쓰기로 구분되어서) 포함되어 있는 요소를 선택한다.

          [속성|=문자열] : 해당 속성의 값이 해당 문자열이거나 그 뒤에 하이픈(-)이 붙는 것으로 시작하는 요소를 선택한다.[2]

          [속성*=문자열] : 해당 속성의 값에 해당 문자열이 포함되어 있는 요소를 선택한다.[3]

          [속성^=문자열] : 해당 속성의 값이 해당 문자열로 시작하는 요소를 선택한다.

          [속성$=문자열] : 해당 속성의 값이 해당 문자열로 끝나는 요소를 선택한다.`),
      },
      {
        title: "동위선택자",
        code: codeProcess(`(선택자1) + (선택자2) : 선택자1의 형제 중 바로 다음에 오는 선택자2 하나를 선택한다.

      (선택자1) ~ (선택자2) : 선택자1의 형제 중 자신보다 다음에 오는 모든 선택자2를 선택한다.`),
      },
      {
        title: "구조선택자",
        code: codeProcess(`:first-child = 형제 중 첫 번째로 오는 요소를 선택한다.
        :last-child = 형제 중 마지막으로 오는 요소를 선택한다.
        :nth-child(수열) = 형제 중 (수열) 번째에 있는 요소를 선택한다.
        :nth-last-child(수열) = 형제 중 뒤에서 (수열) 번째에 있는 요소를 선택한다.
        :nth-of-type(수열) = 태그별로 형제 중 (수열) 번째에 있는 요소를 선택한다. 태그 이외 다른 선택자에는 반응하지 않는다.`),
      },
      {
        title: "반응선택자",
        code: codeProcess(`:active = 클릭하고 있는 요소를 선택한다.
          :hover = 커서가 올라와 있는 요소를 선택한다.`),
      },
      {
        title: "상태선택자",
        code: codeProcess(`:checked = 체크되어 있는 <input> 체크박스, 라디오 버튼이나 드롭다운 메뉴의 선택되어 있는 선택지(<option>)를 선택한다.
          :focus = 현재 입력하고 있는, 즉 커서가 깜박이고 있는 <input> 요소를 선택한다.
          :enabled = 활성화되어 있는, 즉 내용을 수정할 수 있는 <input> 요소를 선택한다.
          :disabled = 비활성화되어 있는, 즉 내용을 수정할 수 없는 <input> 요소를 선택한다.`),
      },
      {
        title: "링크선택자",
        code: codeProcess(`:link = href 속성이 명시된[4] <a> 요소를 선택한다.
        :visited = 방문했던 링크가 걸린 <a> 요소를 선택한다.`),
      },
      {
        title: "부정선택자",
        code: codeProcess(
          `:not(선택자) = 해당 선택자에 해당하지 않는 요소들을 선택한다`
        ),
      },
      {
        title: "가상요소",
        code: codeProcess(`::first-letter = 첫 번째 글자를 선택한다. ::before의 영향을 받는다. 특정한 CSS 속성만 사용할 수 있는 제한이 있다(영어).[6]
          ::first-line = 첫 번째 줄을 선택한다. 특정한 CSS 속성만 사용할 수 있는 제한이 있다(영어).
          ::before = 태그 앞에 위치하는 공간을 선택한다. CSS 속성 'content'를 이용하여 이 공간에 추가로 내용을 입력할 수 있다.
          ::after = 태그 뒤에 위치하는 공간을 선택한다. ::before와 같이 'content'를 이용하여 이 공간에 추가로 내용을 입력할 수 있다.
          ::selection = 드래그한 글자를 선택한다. 'color', 'background-color', 'cursor', 'caret-color', 'outline-*', 'text-decoration-*', 'text-shadow' 속성만 적용할 수 있다.`),
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.선택자1 {
  color: blue;
}
.선택자2 {
  color: green;
}
</style>
