export interface Market {
  id: number;
  name: string;
}

export type MarketDTO = string;

export interface MarketsState {
  list: Market[];
}
