<template>
  <h1 class="div-line">내가쓰는 선언 방식과 호출방식</h1>
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
        title: "호출",
        code: codeProcess(`
        //import
          import { useStore } from "@/store/index";
          import { computed } from "vue";
import { gettersModule} from "@/store/getters";
import { mutationsModule} from "@/store/mutations";
import { actionsModule} from "@/store/actions";

setup(){
	/ttconst store = useStore();

    /tt// state 접근
    /ttstore.state

    /tt// getter 사용떄 computed를 사용하여 state변화 감지
    /ttconst getter = computed(() => gettersModule("addName",parms))
	/tt
    /tt// o
    /ttmutationsModule("changeName",parms);
    /tt// o
    /ttactionsModule("actionsCahnge", parms);

	/ttconst FnCall = () => {
    /tt/tt// 함수에서 호출
    /tt/tt// x store undefinde
    /tt/ttmutationsModuleA("changeName",parms);
    /tt/ttactionsModule("actionsCahnge",parms);
/tt/tt
    /tt/tt// o 파라미터로 store넘겨줌
    /tt/ttmutationsModuleA("changeName",parms, store);
    /tt/ttactionsModule("actionsCahnge",parms, store);
    /tt};
/tt
	return { FnCall }
}
          `),
      },
      {
        title: "Getters",
        content: `store.getters["CallName"](parms) `,
        code: codeProcess(
          `
          ---- // 모듈 정의
        // store/modules/module.ts
        // Getters
export interface IgettersPrams {
  /ttname?: string;
  /ttprice?: string;
  /ttjob?: string;
}

export type gettersCallName = "addName" | "gettersCall";

const getters: GetterTree<IState, rootState> = {
  /tt---- addName: (state) => (parms: IgettersPrams) => {
` +
            "/tt/ttreturn `${state.rootName} : ${parms.name}`" +
            `
  /tt----},
};

      ---- // getters.ts 에 선언
import { useStore } from "./index";
import {
  /ttgettersCallType as moduleCall,
  /ttgettersPrams as moduleParms,
} from "@/store/modules/moduleA";


        // 호출 함수만들기
export const gettersModuleName = (
  /ttcallName: moduleACall,
  /ttparms?: moduleAParms
): any => {
  const store = useStore();` +
            `

  ` +
            "if (parms) return store.getters[`moduleName/${callName}`](parms);" +
            `
            ` +
            "else return store.getters[`moduleName/${callName}`];" +
            `

};

      `
        ),
      },
      {
        title: "mutations ",
        content: `store.commit("CallName", parms ) `,
        code: codeProcess(
          `
          ---- // 모듈 정의
          // store/modules/module.ts
        // Mutations
export interface ImutationsParms {
  /ttjob?: string;
}

export type mutationsCallName = "cahngeJob" | "mutationsCall";

const mutations: MutationTree<IState> = {
  /tt----cahngeJob: (state, payload: ImutationsParms) => {
    /tt/ttpayload.job && (state.job = payload.job);
    ` +
            "/tt/ttstate.rootName = `${state.rootName}_${payload.job}`" +
            `},
    /tt----}
    };

    ---- // mutations.ts 선언
import { Store } from "vuex";
import { State, useStore } from "./index";
import {
  /ttmutationsCallType as moduleCallName,
  /ttMutationsPrams as moduleParms,
} from "@/store/modules/module";


    // 호출 함수 만들기
    export const mutationsModule = (
  /ttcallName: moduleCallName,
  /ttparms?: moduleParms,
  /ttFuncCallStore?: Store<State>
): any => {

  const store = FuncCallStore || useStore();

  ` +
            "return store.commit(`module/${callName}`, parms);" +
            `

};


    `
        ),
      },
      {
        title: "actions",
        content: `sotre.dispatch("CallName", parms ) `,
        code: codeProcess(
          `
          ---- // 모듈 정의
          // store/modules/module.ts
        // Mutations 선언된 타입
export interface ImutationsParms {
  /ttjob?: string;
}

export type mutationsCallName = "cahngeJob" | "mutationsCall";

        // actions
export type actionsCallName = "actionsCahnge" | "actionCall";

export interface IactionsParms {
  /ttparms: string;
}

const actions: ActionTree<IState, rootState> = {
  /tt----actionsCahnge: async ({ commit }, payload: IactionsParms) => {

    /tt// 호출할 Mutation이름과 넘길 Parms 선언
    /ttconst commitCall : mutationsCallName = "cahngeJob";
    /tt----const parms : ImutationsParms = { job: "게스트" };

    /ttsetTimeout(() => {
        ` +
            "/ttconsole.log(`actions payload : ${payload}`);" +
            `
            /tt//c ommit호출
            /ttcommit(commitCall, parms)
    /tt/tt}, 1000);
  /tt----},
};

---- // actions.ts선언
  import { Store } from "vuex";
import { State, useStore } from "./index";
import {
  /ttcationsCallType as moduleCallName,
  /ttcationsPrams as moduleParms,
} from "./modules/moduleA";

// 호출 함수 만들기
  export const actionsModule = (
  /ttcallName: moduleCallName,
  /ttparms?: moduleParms,
  /ttFuncCallStore?: Store<State>
): any => {
  const store = FuncCallStore || useStore();
  
  ` +
            "if (parms) return store.dispatch(`moduleName/${callName}`, parms);" +
            `
            ` +
            "else return store.dispatch(`moduleName/${callName}`);" +
            `

};

       `
        ),
      },
    ]);
    return { items };
  },
});
</script>

<style scoped></style>
