import { createMarkets } from 'app/testUtils/mocks/markets.mock';
import { marketsActions } from './markets.actions';
import {
  initialState as initialReducerState,
  marketsReducer
} from './markets.reducer';
import { Market, MarketsState } from './markets.types';

describe('Markets reducer tests', () => {
  const initialState: MarketsState = initialReducerState;

  it('updates list when markets set list action is fired', () => {
    const markets: Market[] = createMarkets();
    const expectedState: MarketsState = {
      ...initialState,
      list: markets
    };
    const action = marketsActions.set(markets);

    expect(marketsReducer(initialState, action)).toEqual(expectedState);
  });
});
