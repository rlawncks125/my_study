<template>
  <code-convert>
    <template #title> table</template>
    <template #content>
      <table style="width: 100%; text-align: center">
        <caption style="text-align: left">
          caption : 테이블 제목넣는곳입니다.
        </caption>
        <thead>
          <tr>
            <th>성</th>
            <th>이름</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>김</td>
            <td>두루미</td>
            <td>010-0101-0101</td>
          </tr>
          <tr>
            <td>이</td>
            <td>선생</td>
            <td>010-0101-0101</td>
          </tr>
          <tr>
            <td colspan="2">성 + 이름</td>
            <td>colspan col병합</td>
          </tr>
          <tr>
            <td rowspan="2">성 + 성<br />(row병합)</td>
            <td>이름1</td>
            <td>연란처1</td>
          </tr>
          <tr>
            <td>이름2</td>
            <td>연락처2</td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #code>{{ table }} </template>
  </code-convert>
  <code-convert>
    <template #title>tr </template>
    <template #content></template>
    <template #code>{{ tr }} </template>
  </code-convert>
  <code-convert>
    <template #title> th</template>
    <template #content></template>
    <template #code>{{ th }} </template>
  </code-convert>
  <code-convert>
    <template #title>td </template>
    <template #content></template>
    <template #code>{{ td }} </template>
  </code-convert>
  <code-convert>
    <template #title>caption </template>
    <template #content></template>
    <template #code>{{ caption }} </template>
  </code-convert>
  <code-convert>
    <template #title>colgroup_col </template>
    <template #content></template>
    <template #code>{{ colgroup_col }} </template>
  </code-convert>
  <code-convert>
    <template #title>thead_tbody_tfoot </template>
    <template #content></template>
    <template #code>{{ thead_tbody_tfoot }} </template>
  </code-convert>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      table: codeProcess(`<table>: 테이블을 만드는 태그이다.
      
      // 구조 
       <table style="width: 100vw; text-align: center">
        /tt<caption style="text-align: left">
          /tt/ttcaption : 테이블 제목넣는곳입니다.
        /tt</caption>
        /tt<thead>
          /tt/tt<tr>
            /tt/tt/tt<th>성</th>
            /tt/tt/tt<th>이름</th>
            /tt/tt/tt<th>연락처</th>
          /tt/tt</tr>
        /tt</thead>
        /tt<tbody>
          /tt/tt<tr>
            /tt/tt/tt<td>김</td>
            /tt/tt/tt<td>두루미</td>
            /tt/tt/tt<td>010-0101-0101</td>
          /tt/tt</tr>
          /tt/tt<tr>
            /tt/tt/tt<td>이</td>
            /tt/tt/tt<td>선생</td>
            /tt/tt/tt<td>010-0101-0101</td>
          /tt/tt</tr>
          /tt/tt<tr>
            /tt/tt/tt<td colspan="2">성 + 이름</td>
            /tt/tt/tt<td>colspan col병합</td>
          /tt/tt</tr>
          /tt/tt<tr>
            /tt/tt/tt<td rowspan="2">성 + 성 br/ (row병합)</td>
            /tt/tt/tt<td>이름1</td>
            /tt/tt/tt<td>연란처1</td>
          /tt/tt</tr>
          /tt/tt<tr>
            /tt/tt/tt<td>이름2</td>
            /tt/tt/tt<td>연락처2</td>
          /tt/tt</tr>
        /tt</tbody>
      </table>
    // css
        tr,
        td,
        th {
        /ttborder: 1px solid black;
        }
      `),
      tr: codeProcess(`<tr>: 행(table row)을 시작한다.`),
      th: codeProcess(
        `<th>: 테이블의 행, 열의 머리말(table heading)을 나타낸다. 기본적으로 가운데로 정렬되고 굵은 글씨로 표시된다.`
      ),
      td: codeProcess(`<td>: 표의 내용(table data), 셀을 표현한다.`),
      caption: codeProcess(`<caption>: 테이블의 제목을 기술한다.`),
      colgroup_col: codeProcess(
        `<colgroup>, <col>: 테이블 상단에 넣어 테이블의 열 정보를 기술한다. 주로 일괄적으로 셀의 너비를 지정할 때 쓰인다.`
      ),
      thead_tbody_tfoot: codeProcess(
        `<thead>, <tbody>, <tfoot>: 테이블의 세부 구조를 기술한다. 각각 표의 상단, 본문, 하단 부분에 대응한다.`
      ),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped>
tr,
td,
th {
  border: 1px solid black;
}
</style>
