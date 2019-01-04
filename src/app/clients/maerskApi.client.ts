import {createMarkets} from "app/testUtils/mocks/markets.mock";
import {of, Observable} from 'rxjs';
import {RestClient} from './rest.client';

export class SimTankersApiClient {
  private readonly baseUrl: string;
  private restClient: RestClient;

  constructor(restClient: RestClient) {
    this.baseUrl = 'api';
    this.restClient = restClient;
  }

  public getMarkets(poolId: number): Observable<any> {
    return of(createMarkets());
    // return this.restClient.get(
    //   this.baseUrl + ROUTER.generate(apiGetMarkets, { poolId })
    // );
  }
}
