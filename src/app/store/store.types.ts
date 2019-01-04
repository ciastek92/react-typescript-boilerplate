import {MarketsState} from "app/store/markets/markets.types";
import {RouterState} from 'react-router-redux';

export interface StoreState {
  markets: MarketsState;
  routing: RouterState;
}
