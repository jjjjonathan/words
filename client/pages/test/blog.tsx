import React from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Box, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import client from "../../utils/apolloClient";
import { graphql } from "../../generated/gql";
import { GetPostQuery } from "../../generated/graphql";

const testSlug = "defect-Shoes-mobile-stable-maroon";

export const getServerSideProps: GetServerSideProps<{
  post: GetPostQuery["post"];
}> = async () => {
  const getPostQueryDocument = graphql(`
    query GetPost($slug: String!) {
      post(slug: $slug) {
        id
        title
        body
        author {
          firstName
          lastName
          username
        }
        slug
        createdAt
        updatedAt
      }
    }
  `);

  const { data } = await client.query({
    query: getPostQueryDocument,
    variables: { slug: testSlug },
  });

  return {
    props: {
      post: data?.post,
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Blog: NextPage<Props> = ({ post }) => {
  if (!post) return null;

  return (
    <Layout title="home">
      <Box>
        <Typography variant="h1" component="h2">
          {post.title}
        </Typography>
        <Typography variant="h3" fontStyle="italic">
          by {post.author.username}
        </Typography>
        <Typography>{post.body}</Typography>
      </Box>
    </Layout>
  );
};

export default Blog;
