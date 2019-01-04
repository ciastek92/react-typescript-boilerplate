import { createAction } from "redux-actions";
import { ENTERED } from "./router.constants";

const enteredPageActions = {
  mainPage: createAction<number>(ENTERED.MAIN_PAGE)
};

export { enteredPageActions };
