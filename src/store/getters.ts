import { IState as baseState } from "@/store/modules/base";
import { gettersParms as baseGettersParms } from "@/store/modules/base";

// base
export enum BaseGettersTypes {
  GETTERS_BASE = "GETTERS_BASE",
}

export type BaseGetters = {
  [BaseGettersTypes.GETTERS_BASE](
    state: baseState
  ): (parms: baseGettersParms) => void;
};
