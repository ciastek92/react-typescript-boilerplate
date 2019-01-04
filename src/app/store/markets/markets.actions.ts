import { createAction } from "redux-actions";
import { MARKETS } from "./markets.constants";
import { Market } from "./markets.types";

const marketsActions = {
  set: createAction<Market[]>(MARKETS.SET)
};

export { marketsActions };
