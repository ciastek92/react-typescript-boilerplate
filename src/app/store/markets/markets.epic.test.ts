import { IMarketService } from 'app/services/market.service';
import { createMarkets } from 'app/testUtils/mocks/markets.mock';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { of, Observable } from 'rxjs';
import { enteredPageActions } from '../router/router.actions';
import { marketsActions } from './markets.actions';
import { createMarketsEpics } from './markets.epic';
import { Market } from './markets.types';

const mockMarkets = createMarkets();
// noinspection JSUnusedLocalSymbols
const marketService: IMarketService = {
  getMarkets: (poolId: number): Observable<Market[]> => {
    return of(mockMarkets);
  }
};

describe('Markets epic tests', () => {
  let store: MockStoreEnhanced, epicMiddleware, mockStore;
  const initialState = {
    markets: {
      list: []
    }
  };

  beforeEach(() => {
    epicMiddleware = createEpicMiddleware();
    mockStore = configureMockStore([epicMiddleware]);
    store = mockStore(initialState);
    epicMiddleware.run(createMarketsEpics(marketService));
  });

  it('On main page entering sets markets', () => {
    const poolId = 1;
    store.dispatch(enteredPageActions.mainPage(poolId));
    expect(store.getActions()).toEqual([
      enteredPageActions.mainPage(poolId),
      marketsActions.set(mockMarkets)
    ]);
  });
});
