<template>
  <code-convert>
    <template #title> 폼관련</template>
    <template #content></template>
    <template #code>{{ 폼관련 }} </template>
  </code-convert>
  <code-convert>
    <template #title> input type</template>
    <template #content>
      <label for="text">text </label>
      <input type="text" id="text" /><br />
      <label for="number">number </label>
      <input type="number" id="number" /><br />
      <label for="url">url </label>
      <input type="url" id="url" /><br />
      <input type="email" id="email" placeholder="myEmail@email.com" /><br />
      <label for="tel">tel </label>
      <input type="tel" id="tel" /><br />
      <label for="search">search </label>
      <input type="search" id="search" /><br />
      <label for="range">range </label>
      <input type="range" id="range" /><br />
      <label for="color">color </label>
      <input type="color" id="color" /><br />
      <label for="date"> </label>
      <input type="date" id="date" /><br />
      <label for="time"> </label>
      <input type="time" id="time" /><br />
      <label for="datetime">datetime </label>
      <input type="datetime" id="datetime" /><br />
      <!-- checkbox -->
      <label for="checkboxA">checkboxA </label>
      <input type="checkbox" id="checkboxA" name="checkboxA" /><br />
      <label for="checkboxB">checkboxB </label>
      <input type="checkbox" id="checkboxB" name="checkboxB" /><br />
      <!-- radio -->
      <label for="radioA">radioA </label>
      <input type="radio" id="radioA" name="radio" value="radioA" /><br />
      <label for="radioB">radioB </label>
      <input type="radio" id="radioB" name="radio" value="radioB" /><br />
      <!--  -->
      <label for="button">button </label>
      <input type="button" id="button" value="button" /><br />
      <label for="submit">submit </label>
      <input type="submit" id="submit" /><br />
      <label for="image">image </label>
      <input
        type="image"
        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/v1633711399/1633339608_gt2nbq.gif"
        alt=""
        id="image"
        width="100"
        height="100"
      /><br />
      <label for="reset">reset</label>
      <input type="reset" id="reset" /><br />
      <label for="hidden">hidden</label>
      <input type="hidden" id="hidden" /><br />
      <label for="file">file</label>
      <input type="file" id="file" /><br />
    </template>
    <template #code>{{ 인풋타입 }} </template>
  </code-convert>
  <code-convert>
    <template #title> 태그타입</template>
    <template #content>
      <textarea id="" cols="30" rows="10"></textarea><br />
      <button>button</button><br />
      <output>output</output><br />
      <select name="" id="">
        <option value="one">12</option>
        <option value="two">24</option></select
      ><br />
      <fieldset>
        <legend>그룹제목</legend>
        <input type="text" value="inputText입니당." /><br />
        <input type="range" name="" id="" />
      </fieldset>
      <br />
      <label for="">input 지정</label><br />
      <!-- datalist 쓰는법 -->
      <datalist id="data-list">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
      </datalist>
      <label for="list">datalist</label>
      <input list="data-list" id="list" name="list" />
    </template>
    <template #code>{{ 태그타입 }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      폼관련: codeProcess(`
      <form>: 입력값을 받는 영역을 지정한다. 한 페이지에 여러 개가 들어갈 수는 있지만, 영역 안에 영역이 들어가는 것은 불가능하다.

<input>: 입력값 요소를 지정한다. type에 따라 다른 입력값을 취한다
// input 타입
input type :

- text: 한 줄 짜리 문자열 값. 기본값이다.

- number: 숫자.

- url: 도메인 주소.

- email: 이메일.

- tel: 전화번호.

- search: 검색어.

- range: 지정한 범위의 숫자.

- color: 색.

- date: 날짜.

- time: 시각.

- datetime: 날짜+시각.

- checkbox: 선택/해제할 수 있는 항목.

- radio: 선택/해제할 수 있는 항목이나 중복 선택은 불가능하다. 그리고 해당 항목을 선택할 때는 마음대로이나 해제하는 것은 아니다. 이 속성은 하나의 form 태그 영역 내에서 name 속성이 같은 2개 이상의 <input type="radio">가 있을 경우 선택되지 않은 다른 항목을 누르면 이미 선택되어 있는 것이 해제되는 방식으로 동작한다. 따라서 단독으로 써서는 안 되는 속성이다.

- button: 누를 수 있는 버튼을 생성한다.

- submit: 누를 경우 입력값을 전송시키는 버튼을 생성한다.

- image: submit + <img> 태그.

- reset: 누를 경우 입력값을 초기화시키는 버튼을 생성한다.

- hidden: 투명라인(...). 입력값을 수정하지 않고 곧바로 보낼 때 쓰인다. 소스를 열어보지 않으면 사용자에게는 보이지 않는다.[8]

- file: 파일 업로드에 쓰인다.

// 태그 타입

<textarea>: 여러 줄의 문자열 값을 받는다.

<button>: <input type="button">와 대동소이하다. 차이점은 태그 내에도 HTML 지정이 가능해서 표현의 폭이 넓다. type="submit"을 쓰면 <input type="submit">과 같은 기능을 한다.

<output>: input 태그처럼 입력값이지만 수정할 수 없다. 외형상으로는 그냥 문자열.

<datalist>: 검색어에 들어갈 목록을 지정한다.

<select>: 선택 목록.
    - <option>: 선택 목록에 들어갈 항목. <input type="radio">와 대동소이하다.

<fieldset>: 폼 요소를 그룹으로 묶어준다. 브라우저에는 이 태그 시작부터 끝까지의 모든 요소를 사각형 박스 안에 묶는 방식으로 렌더링된다
    - <legend>: <fieldset>으로 묶어준 그룹에 제목을 지정해 준다. 브라우저에서는 사각형 박스 왼쪽 상단에 나타난다.

<label>: 해당 요소의 이름을 지정한다. 해당 이름을 클릭하면 요소가 자동으로 선택된다.

      `),
      인풋타입: codeProcess(`
      //코드
      <label for="text">text </label>
      <input type="text" id="text" />

      <label for="number">number </label>
      <input type="number" id="number" />

      <label for="url">url </label>
      <input type="url" id="url" />

      <input type="email" id="email" placeholder="myEmail@email.com" />
      
      <label for="tel">tel </label>
      <input type="tel" id="tel" />
      
      <label for="search">search </label>
      <input type="search" id="search" />
      
      <label for="range">range </label>
      <input type="range" id="range" />
      
      <label for="color">color </label>
      <input type="color" id="color" />
      
      <label for="date"> </label>
      <input type="date" id="date" />
      
      <label for="time"> </label>
      <input type="time" id="time" />
      
      <label for="datetime">datetime </label>
      <input type="datetime" id="datetime" />
      
      // <!-- checkbox -->
      <label for="checkboxA">checkboxA </label>
      <input type="checkbox" id="checkboxA" name="checkboxA" />
      <label for="checkboxB">checkboxB </label>
      <input type="checkbox" id="checkboxB" name="checkboxB" />
      
      // <!-- radio -->
      <label for="radioA">radioA </label>
      <input type="radio" id="radioA" name="radio" value="radioA" />
      <label for="radioB">radioB </label>
      <input type="radio" id="radioB" name="radio" value="radioB" />
      
      <label for="button">button </label>
      <input type="button" id="button" value="button" />
      
      <label for="submit">submit </label>
      <input type="submit" id="submit" />
      
      <label for="image">image </label>
      <input type="image"
        src="https://res.cloudinary.com/dhdq4v4ar/image/upload/v1633711399/1633339608_gt2nbq.gif"
        alt=""
        id="image"
        width="100"
        height="100"
      />
      
      <label for="reset">reset</label>
      <input type="reset" id="reset" />
      
      <label for="hidden">hidden</label>
      <input type="hidden" id="hidden" />
      
      <label for="file">file</label>
      <input type="file" id="file" />
      `),
      태그타입: codeProcess(`
      //코드
       <textarea id="" cols="30" rows="10"></textarea>

      <button>button</button>

      <output>output</output>

      <select name="" id="">
        <option value="one">12</option>
        <option value="two">24</option>
        </select>

      <fieldset>
        <legend>그룹제목</legend>
        <input type="text" value="inputText입니당." />
        <input type="range" name="" id="" />
      </fieldset>      
      

      <label for="">input 지정</label>

      // <!-- datalist 쓰는법 -->
      <datalist id="data-list">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
      </datalist>
      <label for="list">datalist</label>
      <input list="data-list" id="list" name="list" />

      `),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
