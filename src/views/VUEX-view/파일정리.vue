<template>
  <h1 class="div-line"></h1>
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
        title: "vuex 세분화",
        code: codeProcess(`
        ---- // store/getters.ts
        import { IState as baseState } from "@/store/modules/base";
import { gettersParms as baseGettersParms } from "@/store/modules/base";

// base
// 함수 이름 모음
export enum BaseGettersTypes {
  /ttGETTERS_BASE = "GETTERS_BASE",
}

// 함수 타입 
export type BaseGetters = {
  /tt----[BaseGettersTypes.GETTERS_BASE](
    /tt/tt---- state: baseState
  /tt---- ): (parms: baseGettersParms) => void;
};

---- // store/module/base.ts
// GetterType & getters 함수 타입 을하여
// 타입 검사
const getters: GetterTree<IState, rootState> & BaseGetters = {
  [BaseGettersTypes.GETTERS_BASE]:
    /tt----(state: IState) => (payload: gettersParms) => {
    /tt/tt  console.log(state, payload);
    /tt----},
};


            ---- // store/mutations.ts
    // base
import { IState as baseState } from "@/store/modules/base";
import { mutationsParms as baseMuationsParms } from "@/store/modules/base";

// 함수 이름 모음
export enum BaseMuationsTypes {
  /ttMUTATIONS_BASE = "MUTATIONS_BASE",
}/tt
/tt
// 함수 타입 
ex/ttexport type BaseMutations = {
  /tt---- [BaseMuationsTypes.MUTATIONS_BASE](
  /tt/tt---- state: baseState,
  /tt/tt----  payload: baseMuationsParms
  /tt---- ): void;
};

---- // store/module/base.ts
// MutationsType & Mutations 함수 타입 을하여
// 타입 검사
const mutations: MutationTree<IState> & BaseMutations = {
  /tt[BaseMuationsTypes.MUTATIONS_BASE]: (
  /tt/tt  state: IState,
  /tt/tt  payload: mutationsParms
  /tt) => {
  /tt/tt  console.log(state, payload);
  /tt},
};


        ---- // store/actions.ts
        import { State as rootState } from "@/store/index";
import { IState as baseState } from "@/store/modules/base";
import { actionsParms as baseActionsParms } from "@/store/modules/base";
import { ActionContext } from "vuex";

// base
// 함수 이름 모음
export enum BaseActionsTypes {
  /ttACTIONS_BASE = "ACTIONS_BASE",
}
// 함수 타입 
export type BaseActions = {
  /tt----[BaseActionsTypes.ACTIONS_BASE](
  /tt/tt----  actionContext: ActionContext<baseState, rootState>,
  /tt/tt----  paylaod: baseActionsParms
  /tt----): void;
};

---- // store/module/base.ts
// ActionsType & Actions 함수 타입 을하여
// 타입 검사
const actions: ActionTree<IState, rootState> & BaseActions = {
  /tt[BaseActionsTypes.ACTIONS_BASE]: async (
  /tt/tt  actionsContext: ActionContext<IState, rootState>,
  /tt/tt  payload: actionsParms
  /tt) => {
  /tt/tt  setTimeout(() => {
  /tt/tt/tt    console.log(payload);
  /tt/tt  }, 1000);
  /tt},
};


        `),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
