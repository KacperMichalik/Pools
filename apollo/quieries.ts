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
    pool(id: "0x0001fcbba8eb491c3ccfeddc5a5caba1a98c4c28") {
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
