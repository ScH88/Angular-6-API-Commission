export interface CoinListing {
  [key:string]: Coin;
};

export interface Coin {
  Algorithm: string;
  BuiltOn: string;
  CoinName: string;
  FullName: string;
  FullyPremined: string;
  Id: string;
  ImageUrl: string;
  IsTrading: string;
  Name: string;
  PreMinedValue: string;
  ProofType: string;
  SmartContractAddress: string;
  SortOrder: string;
  Sponsored: string;
  Symbol: string;
  TotalCoinSupply: string;
  TotalCoinsFreeFloat: string;
  Url: string;
}
