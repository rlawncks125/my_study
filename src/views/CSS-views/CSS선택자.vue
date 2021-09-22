<template>
  <div class="view-warp">
    <p class="title">선택자</p>
    <!--  -->
    <p class="선택자1">선택자1</p>
    <code-convert>{{ 선택자1 }}</code-convert>
  </div>
  <div class="view-warp">
    <p class="title">선택자</p>
    <!--  -->
    <p class="선택자2">선택자2</p>
    <code-convert>{{ 선택자2 }}</code-convert>
    <!--  -->
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import codeConvert, { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  components: { codeConvert },
  setup() {
    const data = reactive({
      선택자1: codeProcess(`
      <p class="선택자1">선택자1</p>
        //선택자 테스트

       .선택자1 {
            /tcolor: blue;
        }
        `),
      선택자2: codeProcess(`
      <p class="선택자2">선택자2</p>

      .선택자2 {
        /tcolor: green;
        }
        `),
    });

    return {
      ...toRefs(data),
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
