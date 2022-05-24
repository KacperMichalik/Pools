import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import client from "../../apollo/client";
import { ApolloRes, ISinglePool } from "../../apollo/interfaces";
import { Pool } from "../../apollo/quieries";

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

  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>{JSON.stringify(pool)}</p>
    </div>
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
