import { gql } from "@apollo/client";

export const Pools = gql`
  query Pools {
    pools {
      token1 {
        name
        symbol
        decimals
      }
      token0 {
        name
        symbol
        decimals
      }
      feeTier
      liquidity
      sqrtPrice
      token1Price
      token0Price
      tick
      id
    }
  }
`;

export const Pool = gql`
  query Pool($poolAddress: String) {
    pool(id: $poolAddress) {
      token1 {
        name
        symbol
        decimals
      }
      token0 {
        name
        symbol
        decimals
      }
      feeTier
      liquidity
      sqrtPrice
      token1Price
      token0Price
      tick
      id
    }
  }
`;
