export interface Stock {
  id: string;
  symbol: string;
  shares: number;
  avgPrice: number;
}

export interface Portfolio {
  id: string;
  name: string;
  stocks: Stock[];
}
