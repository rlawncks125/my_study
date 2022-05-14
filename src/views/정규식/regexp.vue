<template>
  <fieldset :style="{ border: '1px solid black', padding: '1rem' }">
    <legend>정규식 테스트</legend>
    <label for="text1">텍스트</label>
    <input
      type="text"
      id="text1"
      v-model="stateText"
      :style="{ width: '100%' }"
    /><br />
    <label for="regexp">정규식 </label
    ><input
      type="text"
      id="regexp"
      placeholder="/ 정규식 작성후 Enter of 변환 버튼 클릭 /"
      @keydown="onKeydown"
      @input="
        (e) => {
          regexpStr = e.target.value;
        }
      "
      :style="{ width: '100%' }"
    />
    <br />
    <button @click.prevent="testBtn">변환 버튼</button> <br />
    <label>결과 : </label>
    <span class="regexpRender"></span>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

enum EkeyCode {
  Enter = 13,
}

export default defineComponent({
  setup() {
    const regexpStr = ref("");
    const regexpResult = ref("");
    const stateText = ref("");
    let innerDom = ref<HTMLElement>();

    onMounted(() => {
      innerDom.value = document.querySelector(".regexpRender")! as HTMLElement;
    });

    const testBtn = () => {
      if (!regexpStr.value) {
        innerDom.value!.innerHTML = "";
        return;
      }

      const reg = new RegExp(regexpStr.value, "g");
      regexpResult.value = stateText.value.replace(reg, "●");

      innerDom.value!.innerHTML = regexpResult.value;
    };

    const onKeydown = (e: any) => {
      if (e.keyCode === EkeyCode.Enter) {
        testBtn();
      }
    };

    return { regexpStr, stateText, testBtn, onKeydown };
  },
});
</script>

<style scoped></style>
