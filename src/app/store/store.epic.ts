import { AnyAction } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { RestClient } from '../clients/rest.client';
import { ServicesFacade } from '../services/services';
import { createMarketsEpics } from './markets/markets.epic';
import { routerEpic } from './router/router.epic';

function createStoreEpic(dispatch: (action: AnyAction) => void): Epic {
  const restClient = new RestClient(dispatch, ajax);
  const servicesFacade = new ServicesFacade(restClient);

  return combineEpics(
    createMarketsEpics(servicesFacade.markets),
    routerEpic
  );
}

export { createStoreEpic };
