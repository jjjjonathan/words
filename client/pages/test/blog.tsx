import React from "react";
import { InferGetServerSidePropsType, NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import client from "../../utils/apolloClient";
import { graphql } from "../../generated/gql";

const testSlug = "defect-Shoes-mobile-stable-maroon";

export const getServerSideProps = async () => {
  // try {
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
  // } catch (err) {
  // TODO: redirect or render error?
  //   console.log(err);
  // }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Blog: NextPage = ({ post }: Props) => {
  console.log(post);
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
