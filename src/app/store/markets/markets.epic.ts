import { AnyAction } from "redux";
import { combineEpics, ofType, Epic } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { IMarketService } from "../../services/market.service";
import { ENTERED } from "../router/router.constants";
import { marketsActions } from "./markets.actions";
import { Market } from "./markets.types";

function createMarketsEpics(marketsService: IMarketService): Epic {
  const enteredMainPageEpic: Epic<AnyAction> = action$ => {
    return action$.pipe(
      ofType(ENTERED.MAIN_PAGE),
      mergeMap((action: AnyAction) =>
        marketsService.getMarkets(action.payload.pool)
      ),
      mergeMap((markets: Market[]) => [marketsActions.set(markets)])
    );
  };

  return combineEpics(enteredMainPageEpic);
}

export { createMarketsEpics };
