export interface Trade {
  name: string;
  description: string;
}

export interface TradeCategory {
  category: string;
  trades: Trade[];
}
