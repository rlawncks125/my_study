import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from "vuex";
import { State as rootState } from "../index";
import { BaseMutations, BaseMuationsTypes } from "@/store/mutations";
import { BaseGetters, BaseGettersTypes } from "@/store/getters";
import { BaseActions, BaseActionsTypes } from "@/store/actions";

export interface IState {
  name: string;
  baseT: number;
}

const state: IState = {
  name: "",
  baseT: 0,
};

const getters: GetterTree<IState, rootState> & BaseGetters = {
  [BaseGettersTypes.GETTERS_BASE]:
    (state: IState) => (payload: gettersParms) => {
      console.log(state, payload);
    },
};

const mutations: MutationTree<IState> & BaseMutations = {
  [BaseMuationsTypes.MUTATIONS_BASE]: (
    state: IState,
    payload: mutationsParms
  ) => {
    console.log(state, payload);
  },
};

const actions: ActionTree<IState, rootState> & BaseActions = {
  [BaseActionsTypes.ACTIONS_BASE]: async (
    actionsContext: ActionContext<IState, rootState>,
    payload: actionsParms
  ) => {
    setTimeout(() => {
      console.log(payload);
    }, 1000);
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

// 클래스로 파라미터 받는거 만들어봤는데 흠...
// 편한거 같기도하고 아닌거같기도하고
export interface mutationsParms {
  name?: string;
  age?: number;
  title?: string;
}
export interface gettersParms {
  name?: string;
  title?: string;
}
export interface actionsParms {
  name?: string;
  url?: string;
}

export class Base {
  static _mutations: mutationsParms;
  static _getters: gettersParms;
  static _actions: actionsParms;

  mutations(parms: mutationsParms): mutationsParms {
    Base._mutations = parms;

    return Base._mutations;
  }
  getters(parms: gettersParms): gettersParms {
    Base._getters = parms;

    return Base._getters;
  }
  actions(parms: actionsParms): actionsParms {
    Base._actions = parms;
    return Base._actions;
  }
}
