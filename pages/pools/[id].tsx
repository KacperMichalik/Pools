import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import client from "../../apollo/client";
import { ApolloRes, ISinglePool } from "../../apollo/interfaces";
import { Pool } from "../../apollo/quieries";
import { Text } from "../../components/Typography/Typography.component";
import Calculator from "../../components/Calculator";

const SinglePoolPage: NextPage<ISinglePool & ApolloRes> = ({
  pool,
  loading,
  error,
}) => {
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  if (!pool) {
    return <p>not working</p>;
  }

  // const router = useRouter();
  // const { id } = router.query;

  console.log(pool);

  return (
    <>
      <Calculator pool={pool} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) {
    return {
      props: {
        pool: undefined,
      },
    };
  }

  console.log(params.id);
  const { data, error, loading } = await client.query<ISinglePool>({
    query: Pool,
    variables: { poolAddress: params.id },
  });

  return {
    props: {
      pool: data.pool,
      error: !!error,
      loading,
    },
  };
};
export default SinglePoolPage;
