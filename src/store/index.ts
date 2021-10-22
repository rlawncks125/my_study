import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { module as Base, IState as BaseState } from "@/store/modules/base";

export interface State {
  Base?: BaseState;
}

export const store = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Base,
  },
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return baseUseStore(key);
}
