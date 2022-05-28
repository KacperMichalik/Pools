import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import client from "../../apollo/client";
import { ApolloRes, ISinglePool } from "../../apollo/interfaces";
import { Pool } from "../../apollo/quieries";
import {
  HeadingH3,
  Text,
} from "../../components/Typography/Typography.component";
import Calculator from "../../components/Calculator";
import styled from "styled-components";
import Link from "next/link";

const StyledSectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 10vh 0 10vh;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

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

  return (
    <>
      <StyledSectionWrapper>
        <Link href={"/"}>
          <div>
            <HeadingH3>Back to main page</HeadingH3>
          </div>
        </Link>
      </StyledSectionWrapper>
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
