import {
  combineEpics,
  ofType,
  ActionsObservable,
  Epic
} from "redux-observable";
import { filter, map } from "rxjs/operators";
import { mainRoute, ROUTER } from "../../routes";
import { enteredPageActions } from "./router.actions";
import { LocationChangedAction, RouterLookup } from "./router.types";

const LR2PoolId = 4;

const routerEnteredMainPageEpic: Epic = (action$: ActionsObservable<any>) => {
  return action$.pipe(
    ofType("@@router/LOCATION_CHANGE"),
    map(
      (location: LocationChangedAction): RouterLookup =>
        ROUTER.lookup(location.payload.pathname)
    ),
    filter(
      (lookup: RouterLookup): boolean => [mainRoute].includes(lookup.name)
    ),
    map(() => enteredPageActions.mainPage(LR2PoolId))
  );
};

const routerEpic = combineEpics(routerEnteredMainPageEpic);

export { routerEpic };
