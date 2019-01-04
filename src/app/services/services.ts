import { SimTankersApiClient } from '../clients/maerskApi.client';
import { RestClient } from '../clients/rest.client';
import { MarketService } from './market.service';

export class ServicesFacade {
  private restClient: RestClient;
  private readonly apiClient: SimTankersApiClient;
  private _markets!: MarketService;

  constructor(restClient: RestClient) {
    this.restClient = restClient;
    this.apiClient = new SimTankersApiClient(restClient);
  }

  get markets(): MarketService {
    this._markets = this._markets || new MarketService(this.apiClient);
    return this._markets;
  }
}
