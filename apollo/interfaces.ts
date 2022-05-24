import { ApolloError } from "@apollo/client";

interface ApolloRes {
  error: ApolloError | undefined;
  loading: boolean;
}

interface IPools {
  pools: IPool[];
}
interface ISinglePool {
  pool: IPool;
}
interface IPool {
  id: string;
  token0: IToken;
  token1: IToken;
  feeTier: string;
  liquidity: string;
  sqrtPrice: string;
  token1Price: string;
  token0Price: string;
  tick: string;
}
interface IToken {
  name: string;
  symbol: string;
  decimals: string;
}

export type { ApolloRes, IPools, IPool, IToken, ISinglePool };
