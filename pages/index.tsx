import { GetServerSideProps, NextPage } from "next";
import client from "../apollo/client";
import { ApolloRes, IPools } from "../apollo/interfaces";
import { Pools } from "../apollo/quieries";
import Header from "../components/Header";
import PoolRow from "../components/PoolRow";
import { StyledPoolRows } from "../components/PoolRow/PoolRow.style";

const PoolsListPage: NextPage<IPools & ApolloRes> = ({
  pools,
  loading,
  error,
}) => {
  console.log(pools);
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  const poolsArray = pools.filter((item) => item.token1.name !== "NFT");
  return (
    <>
      <Header />

      {poolsArray.map((item) => {
        const id = item.id;
        const token0Symbol = item.token0.symbol;
        const token1Symbol = item.token1.symbol;
        const priceRatio = item.token0Price;

        return (
          <StyledPoolRows key={id}>
            <PoolRow
              id={id}
              token0Symbol={token0Symbol}
              token1Symbol={token1Symbol}
              priceRatio={priceRatio}
            />
          </StyledPoolRows>
        );
      })}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, error, loading } = await client.query<IPools>({
    query: Pools,
  });

  return {
    props: {
      pools: data.pools,
      error: !!error,
      loading,
    },
  };
};

export default PoolsListPage;
