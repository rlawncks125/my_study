<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <!-- <code-new :codeText="item.code" /> -->
      <div style="margin: 0.5rem 0" v-for="code in item.code" :key="code.id">
        <CodeEditor :value="code.code" :lang="code.lang" />
      </div>
      <!-- <DescDesign>
        <template #header>{{ item.title }}</template>
        <div v-html="item.html"></div>
        <template #code>
          <div
            style="margin: 0.5rem 0"
            v-for="code in item.code"
            :key="code.id"
          >
            <CodeEditor :value="code.code" :lang="code.lang" />
          </div>
        </template>
      </DescDesign> -->
    </template>
  </div>
</template>

<script lang="ts">
import { codeReutrnType, ELanguages } from "@/plugins/simple-code-editor.vue";
import { defineComponent } from "vue";
import DescDesign from "@/components/descDesign.vue";

export default defineComponent({
  // components: { DescDesign },
  setup() {
    const items = [main(), idnex(), 모듈1(), 모듈2()];
    return { items };
  },
});

const main = (): codeReutrnType => ({
  title: "main.ts 선언",
  code: [
    {
      lang: ELanguages.typescript,
      code: `//main.ts 
import { store, key } from "./store/index";

vue.use(store , key);`,
    },
  ],
});

const idnex = (): codeReutrnType => ({
  title: "idnex 파일 선언",
  code: [
    {
      lang: ELanguages.typescript,
      code: `// store/index.ts

import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// 모듈 import
import { module as ModuleA , IState as IModuleA } from "modules/moduleA"
import { module as ModuleB , IState as IModuleB } from "modules/moduleB"


// 인터페이스 정의
export interface State {
  count : number;
  title : string;
  // 모듈 정의
  moduleA ?: ImoduleA
  moduleB ?: ImoduleB
}

// Symbol를 이용한 키생성
export const key: InjectionKey<Store<State>> = Symbol();


//store 정의
export const store = createStore<State>( {
  state: {
    count: 1,
    title: "타이틀틀"
  },
  // Computed 와 같은 역할
  // 사용할떄 한번만 사용, 데이터 바뀌면 감지해서 바뀜
  getters: {},
  // 함수
  mutations: {},
  // 비동기 처리 할떄 씀
  actions: {};
// 모듈 사용 ,
  modules : {
    moduleA,
    moduleB
  }
});

// Composition Api에서 접근할떄 이함수를 사용
export function useStore(): Store<State> {
  return baseUseStore(key);
}`,
    },
  ],
});

const 모듈1 = (): codeReutrnType => ({
  title: "모듈 선언 1",
  code: [
    {
      lang: ELanguages.typescript,
      code: `// store/modules/moduleA
import { Module } from "vuex";
import { State as rootState } from "../index";

export interface IState{
    name : string,
    descript : string;
}

export const module :Module<IState, rootState> = {
// 호출할떄 [moduleName/호출] 로 호출
// moduleName 은 modules에 정의된 모듈이름 따라감
// namespaced: true,
// Data 와 같은 역할
state: {
    name : "모듈"
    descript : "모듈정의 하는 방법 입니다."
},
// Computed 와 같은 역할
// 사용할떄 한번만 사용, 데이터 바뀌면 감지해서 바뀜
getters: {},
// 함수
mutations: {},
// 비동기 처리 할떄 씀
actions: {};
};`,
    },
  ],
});

const 모듈2 = (): codeReutrnType => ({
  title: "모듈 선언 2",
  code: [
    {
      lang: ELanguages.typescript,
      code: `// store/modules/moduleB
import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { State as rootState } from "../index";

export interface IState {
  rootName: string;
  url: string;
}

const state: IState = {
  name: "",
  age: "",
};

const getters: GetterTree<IState, rootState> = {

};

const mutations: MutationTree<IState> = {

};

const actions: ActionTree<IState, rootState> = {

};

export const module: Module<IState, rootState> = {
// 호출할떄 [moduleName/호출] 로 호출
// moduleName 은 modules에 정의된 모듈이름 따라감
// namespaced: true,
state,
getters,
mutations,
actions,
modules: {},
};`,
    },
  ],
});
</script>

<style scoped></style>
