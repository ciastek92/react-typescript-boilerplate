import { handleActions } from 'redux-actions';
import { MARKETS } from './markets.constants';
import { Market, MarketsState } from './markets.types';

export const initialState: MarketsState = {
  list: []
};

const marketsReducer = handleActions<MarketsState, Market[]>(
  {
    [MARKETS.SET]: (state, action) => ({
      list: action.payload as Market[]
    })
  },
  initialState
);

export { marketsReducer };
