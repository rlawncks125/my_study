<template>
  <div>
    <template v-for="item in items" :key="item.id">
      <h1>{{ item.title }}</h1>
      <div v-html="item.html"></div>
      <!-- <code-new :codeText="item.code" /> -->
      <div style="margin: 0.5rem 0" v-for="code in item.code" :key="code.id">
        <CodeEditor :value="code.code" :lang="code.lang" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { codeReutrnType, ELanguages } from "@/plugins/simple-code-editor.vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const items = [module(), getters(), mutations(), actions()];

    return { items };
  },
});

const module = (): codeReutrnType => ({
  title: "module ",
  code: [
    {
      lang: ELanguages.typescript,
      code: `/store/modules/body.ts
import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from "vuex";
import { State as rootState } from "../index";
import { BodyMutations, BodyMutationTypes } from "@/store/mutations";
import { BodyGetters, BodyGettersTypes } from "@/store/getters";
import { BodyActions, BodyActionsTypes } from "@/store/actions";

export interface IState {
  name: string;
  age: number;
}

const state: IState = {
  name: "",
  age: 0,
};

const getters: GetterTree<IState, rootState> & BodyGetters = {
  [BodyGettersTypes.GET_BODY_STATE]: (state: IState) => {
    return {
      name: state.name,
      age: +state.age,
    };
  },
};

const mutations: MutationTree<IState> & BodyMutations = {
  [BodyMutationTypes.SET_BODY_NAME]: (
    state: IState,
    { name }: { name:string }
  ) => {
    name && (state.name = name);
  },
};

const actions: ActionTree<IState, rootState> & BodyActions = {
  [BodyActionsTypes.acitons_basic]: (
    { commit }: ActionContext<IState, rootState>,
    { name }: { name : string}
  ) => {
    const setBodyName = { name };
    commit(BodyMutationTypes.SET_BODY_NAME, setBodyName);
  },
};

export const module: Module<IState, rootState> = {
  //   namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
};
  `,
    },
  ],
});

const getters = (): codeReutrnType => ({
  title: "getters",
  code: [
    {
      lang: ELanguages.typescript,
      code: `/store/getters.ts
import { IState as BodyState } from "@/store/modules/Body";
// Body 모듈
export enum BodyGettersTypes {
  GET_BODY_STATE = "GET_BODY_STATE",
}

export type BodyGetters = {
  [BodyGettersTypes.GET_BODY_STATE](
    state: BodyState
  ): { name: string; age: number };
};`,
    },
  ],
});
const mutations = (): codeReutrnType => ({
  title: "mutations",
  code: [
    {
      lang: ELanguages.typescript,
      code: `/store/mutations.ts
import { IState as BodyState } from "@/store/modules/Body";

// Body
export enum BodyMutationTypes {
  SET_BODY_NAME = "SET_BODY_NAME",
}

export type BodyMutations = {
  [BodyMutationTypes.SET_BODY_NAME](
    state: BodyState,
    payload: { name:string }
  ): void;
};
`,
    },
  ],
});

const actions = (): codeReutrnType => ({
  title: "actions",
  code: [
    {
      lang: ELanguages.typescript,
      code: `/store/actions.ts
import { IState as BodyState } from "@/store/modules/Body";

// body
export enum BodyActionsTypes {
  acitons_basic = "acitons_basic",
}

export type BodyActions = {
  [BodyActionsTypes.acitons_basic](
    actionContext: ActionContext<BodyState, rootState>,
    payload: { name : string}
  ): void;
};
`,
    },
  ],
});
</script>

<style scoped></style>
