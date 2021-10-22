<template>
  <h1 class="div-line">Vuex 애플리케이션 구조</h1>
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

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { codeProcess } from "@/components/codeConvert.vue";
import { useStore } from "@/store/index";
import { Base } from "@/store/modules/base";
import { BaseActionsTypes } from "@/store/actions";

export default defineComponent({
  setup() {
    const items = reactive([
      {
        title: "구조",
        code: codeProcess(`
        ├ index.html
├ main.js
│
├ api
│   └ ... # API 요청을 위한 추상화를 포함합니다.
│
├ components
│     ├ App.vue
│     └ ...
│
└ store
    /tt├ index.js          # 모듈을 조합하고 저장소를 내보내는 곳 입니다.
    /tt├ getters.js        # 루트 getter
    /tt├ actions.js        # 루트 액션
    /tt├ mutations.js      # 루트 변이
    /tt└ modules
    /tt/tt    ├ cart.js       # cart 모듈
    /tt/tt    └ products.js   # products 모듈
     `),
      },
    ]);

    const store = useStore();

    store.dispatch(
      BaseActionsTypes.ACTIONS_BASE,
      new Base().actions({ name: "actions", url: "http" })
    );

    return { items };
  },
});
</script>

<style scoped></style>

<style scoped></style>
