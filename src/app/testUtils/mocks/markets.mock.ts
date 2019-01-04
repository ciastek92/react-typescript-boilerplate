import { Market } from 'app/store/markets/markets.types';

export function createMarkets(): Market[] {
  return [
    {
      id: 1,
      name: 'Dirty East'
    },
    {
      id: 2,
      name: 'Clean East'
    },
    {
      id: 3,
      name: 'AGW'
    }
  ];
}
