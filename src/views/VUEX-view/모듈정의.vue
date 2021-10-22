<template>
  <h1 class="div-line">모듈 정의 및 사용</h1>
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

export default defineComponent({
  setup() {
    const items = reactive([
      {
        title: "TypeScript를 이용한 index 정의",
        code: codeProcess(`// store/index.ts

        import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// 모듈 import
import { module as ModuleA , IModule as IModuleA  } from "modules/moduleA"
import { module as ModuleB , IModule as IModuleB  } from "modules/moduleB"


// 인터페이스 정의
export interface State {
	/ttcount : number;
	/tttitle : string;
	/tt// 모듈 정의 
	/ttmoduleA ?: ImoduleA(module Interface)
	/ttmoduleB ?: ImoduleB(module Interface)
}

// Symbol를 이용한 키생성
export const key: InjectionKey<Store<State>> = Symbol();


//store 정의
export const store = createStore<State>({
  /ttstate: {
  /tt/ttcount: 1,
  /tt/tttitle: "타이틀틀"
  /tt},
  /tt// Computed 와 같은 역할
/tt// 사용할떄 한번만 사용, 데이터 바뀌면 감지해서 바뀜
/ttgetters: {},
/tt// 함수
/ttmutations: {},
/tt// 비동기 처리 할떄 씀
/ttactions: {};
	// 모듈 사용 ,
	/ttmodules : {
	/tt/ttmoduleA,
	/tt/ttmoduleB 
	/tt}
});

// Composition Api에서 접근할떄 이함수를 사용
export function useStore(): Store<State> {
  return baseUseStore(key);
}`),
      },
      {
        title: "선언",
        code: codeProcess(`
          //main.ts 선언
import { store, key } from "./store/index";

vue.use(store , key);
          `),
      },
      {
        title: "TypeScript를 이용한 모듈 만들기 1",
        code: codeProcess(`
          // store/modules/module
import { Module } from "vuex";
import { State as rootState } from "../index";

interface IState{
	/ttname : string,
	/ttdescript : string;
}

export const module :Module<IState, rootState> = {
	// 호출할떄 [moduleName/호출] 로 호출
	// moduleName 은 modules에 정의된 모듈이름 따라감
  // namespaced: true, 
  // Data 와 같은 역할
	state: { 
		/ttname : "모듈"
		/ttdescript : "모듈정의 하는 방법 입니다."
	},
	// Computed 와 같은 역할 
	// 사용할떄 한번만 사용, 데이터 바뀌면 감지해서 바뀜
  getters: {},
	// 함수
  mutations: {},
	// 비동기 처리 할떄 씀
  actions: {};
};
          `),
      },
      {
        title: "TypeScirpt를 이용한 모듈 만들기 2",
        code: codeProcess(`
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
};
        `),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
