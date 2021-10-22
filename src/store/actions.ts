import { State as rootState } from "@/store/index";
import { IState as baseState } from "@/store/modules/base";
import { actionsParms as baseActionsParms } from "@/store/modules/base";
import { ActionContext } from "vuex";

// base
export enum BaseActionsTypes {
  ACTIONS_BASE = "ACTIONS_BASE",
}

export type BaseActions = {
  [BaseActionsTypes.ACTIONS_BASE](
    actionContext: ActionContext<baseState, rootState>,
    paylaod: baseActionsParms
  ): void;
};
