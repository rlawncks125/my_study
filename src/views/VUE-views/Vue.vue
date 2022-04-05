<template>
  <div>vue3</div>
  <h1 class="div-line">라이프 사이클</h1>
  <diff-code :left="40" :right="60">
    <template #left>
      <code-convert>
        <template #title> Vue2</template>
        <template #code> {{ vue2_lifeCycle }}</template>
      </code-convert>
    </template>
    <template #right>
      <code-convert>
        <template #title> Vue3</template>
        <template #code>{{ vue3_lifeCycle }} </template>
      </code-convert>
    </template>
  </diff-code>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { codeProcess } from "../../components/codeConvert.vue";

export default defineComponent({
  setup() {
    const data = reactive({
      vue2_lifeCycle: codeProcess(`
      //코드
      /tt---- beforeCreate() {},
      /tt---- created() {},
      /tt---- beforeMount() {},
      /tt---- mounted() {},
      /tt---- unmounted() {},
      /tt---- beforeUpdate() {},
      /tt---- updated() {},
      /tt---- activated() {},
      /tt---- deactivated() {},
      /tt---- beforeDestroy() {},
      /tt---- destroyed() {},
      /tt---- errorCaptured() {},
      `),
      vue3_lifeCycle: codeProcess(`
      //코드
      /tt---- beforecreate , created => setup()

      setup() {
         // 라이프 사이클
         /tt---- onBeforeMount(() => {}); 
         /tt---- onMounted(() => {}); 
         /tt---- onBeforeUpdate(() => {}); 
         /tt---- onUpdated(() => {}); 
         /tt---- onBeforeUnmount(() => {}); 
         /tt---- onUnmounted(() => {}); 
         /tt---- onErrorCaptured(() => {}); 
         /tt---- onRenderTracked(() => {}); 
         /tt---- onRenderTriggered(() => {}); 
      }
      `),
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss">
@use '@/assets/scss/common/_mixins.scss';
</style>
