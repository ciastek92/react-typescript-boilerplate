import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SimTankersApiClient } from '../clients/maerskApi.client';
import { Market } from '../store/markets/markets.types';

export interface IMarketService {
  getMarkets: (poolId: number) => Observable<Market[]>;
}

export class MarketService implements IMarketService {
  private apiClient: SimTankersApiClient;

  constructor(apiClient: SimTankersApiClient) {
    this.apiClient = apiClient;
  }

  public getMarkets(poolId: number): Observable<Market[]> {
    return this.apiClient.getMarkets(poolId);
  }
}
