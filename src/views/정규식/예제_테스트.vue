<template>
  <div>예제 _ 테스트</div>
  <div>
    <h2>Email</h2>
    <input type="text" v-model="emailStr" />
    <span>{{ isEmail }}</span>
    <code-test :codeText="emailCode()" />
  </div>
  <div>
    <h2>phone</h2>
    <input type="text" v-model="phone[0].value" />
    <span>{{ phone[1].value }}</span>
    <code-test :codeText="phone[2]()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from "vue";
import codeTest, { cssToCode, jsToCode } from "@/components/NewCodeConvert.vue";

export default defineComponent({
  components: { codeTest },
  setup() {
    const [emailStr, isEmail, emailCode] = emailReg();
    const [phoneStr, isPhone, phoneCode] = phoneReg();

    return { isEmail, emailStr, emailCode, phone: phoneReg() };
  },
});

// email
const emailReg = () => {
  const str = ref();
  const isValue = ref();

  watch(str, () => {
    const reg = new RegExp(
      "^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-.]+$"
    );
    isValue.value = reg.test(str.value);
  });

  const code = () => {
    return [
      cssToCode(`// 정규화
      
      "/^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9-]+[.]{1}[a-zA-Z0-9-.]+$/"
      
      // 해설
      1. '@' 앞에 한개 이상의 숫자,알파벳이 있어여하고 '-' , '_' , '.' 문자는 두번쨰 문자 부터 사용 가능
      2. '@' 뒤에는 문자숫자 한개이상 + '.'문자 + 문자숫자 한개이상 조합
      `),
    ].join("");
  };

  return [str, isValue, code];
};

// phone
const phoneReg = () => {
  const str = ref();
  const isValue = ref();

  watch(str, () => {
    const reg = new RegExp("^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$");

    isValue.value = reg.test(str.value);
  });

  const code = () => {
    return [
      cssToCode(`// 정규화
      
      "/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/"
      
      // 해설
      1. 01로 시작하고 세번째 숫자가 (0,1,6,7,8,9)들 숫자중 하나
      2. 숫자 중간중간 '-' 는 있어도 되고 없어도됨
      3. 중간 자리 숫자는 0-9 사이 숫자가 {3,4} : 최소 3개 최대4개 
      4. 마지막 자리 숫자는 0-9자리 숫자가 {4} : 4개
      `),
    ].join("");
  };

  return [str, isValue, code];
};
</script>

<style scoped></style>
