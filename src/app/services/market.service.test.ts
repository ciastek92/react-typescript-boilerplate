import { of, Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Market } from "../store/markets/markets.types";
import { createMarkets } from "../testUtils/mocks/markets.mock";
import { MarketService } from "./market.service";

describe("Markets service tests", () => {
  const mockApiClient: any = {};
  const sut = new MarketService(mockApiClient);

  it("executes fetching markets", (done: Function) => {
    const marketsApiResponseMock = createMarkets();
    const poolId = 1;
    mockApiClient.getMarkets = jest.fn(
      (): Observable<any> => of(marketsApiResponseMock)
    );

    sut
      .getMarkets(poolId)
      .pipe(take(1))
      .subscribe((data: Market[]) => {
        expect(data).toEqual(marketsApiResponseMock);
        done();
      });
  });
});
