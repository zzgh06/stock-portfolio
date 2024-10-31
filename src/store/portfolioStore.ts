import { create } from "zustand";

interface PortfolioState {
  selectedStock: string | null;
  timeframe: '1D' | '1W' | '1M' | '1Y';
  setSelectedStock: (symbol: string | null) => void;
  setTimeframe: (timeframe: '1D' | '1W' | '1M' | '1Y') => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  selectedStock: null,
  timeframe: '1D',
  setSelectedStock: (symbol) => set({ selectedStock: symbol }),
  setTimeframe: (timeframe) => set({ timeframe })
}))