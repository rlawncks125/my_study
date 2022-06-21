<template>
  <div>vue3</div>
  <h1 class="div-line">라이프 사이클 비교</h1>
  <div>
    <div class="vue-diff">
      <div v-for="item in items1" :key="item.id">
        <h1>{{ item.title }}</h1>
        <div v-html="item.html"></div>
        <!-- <code-new :codeText="item.code" /> -->
        <div style="margin: 0.5rem 0" v-for="code in item.code" :key="code.id">
          <CodeEditor :value="code.code" :lang="code.lang" />
        </div>
      </div>
      <div v-for="item in items2" :key="item.id">
        <h1>{{ item.title }}</h1>
        <div v-html="item.html"></div>
        <!-- <code-new :codeText="item.code" /> -->
        <div style="margin: 0.5rem 0" v-for="code in item.code" :key="code.id">
          <CodeEditor :value="code.code" :lang="code.lang" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { codeReutrnType, ELanguages } from "@/plugins/simple-code-editor.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const items1 = [vue2()];
    const items2 = [vue3()];

    return {
      items1,
      items2,
    };
  },
});

const vue2 = (): codeReutrnType => ({
  title: "Vue2",
  code: [
    {
      lang: ELanguages.javascript,
      code: `beforeCreate() 
created() 

beforeMount() 
mounted() 
unmounted() 
beforeUpdate() 
updated() 
activated() 
deactivated() 
beforeDestroy() 
destroyed() 
errorCaptured() `,
    },
  ],
});
const vue3 = (): codeReutrnType => ({
  title: "Vue3",
  code: [
    {
      lang: ELanguages.javascript,
      code: `beforecreate , created => setup()

  setup() {
  // 라이프 사이클
    onBeforeMount()
    onMounted()
    onBeforeUpdate()
    onUpdated()
    onBeforeUnmount()
    onUnmounted()
    onErrorCaptured()
    onRenderTracked()
    onRenderTriggered()
  }`,
    },
  ],
});
</script>

<style lang="scss">
@use '@/assets/scss/common/_mixins.scss';

.vue-diff {
  display: flex;
  justify-content: left;

  gap: 1rem;
}
</style>
