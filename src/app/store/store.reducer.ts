import {StoreState} from "app/store/store.types";
import {routerReducer} from 'react-router-redux';
import {combineReducers, Action} from 'redux';
import {marketsReducer} from './markets/markets.reducer';

const storeReducer = combineReducers<StoreState>({
  markets: marketsReducer,
  routing: routerReducer
});

const rootReducer = (
  state: StoreState,
  action: Action = {type: ''}
): StoreState => {
  return storeReducer(state, action);
};

export {rootReducer};
