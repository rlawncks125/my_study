// base
import { IState as baseState } from "@/store/modules/base";
import { mutationsParms as baseMuationsParms } from "@/store/modules/base";

export enum BaseMuationsTypes {
  MUTATIONS_BASE = "MUTATIONS_BASE",
}

export type BaseMutations = {
  [BaseMuationsTypes.MUTATIONS_BASE](
    state: baseState,
    payload: baseMuationsParms
  ): void;
};
