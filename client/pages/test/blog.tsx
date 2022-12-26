import React from "react";
import { InferGetServerSidePropsType, NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { gql } from "@apollo/client";
import Layout from "../../components/Layout";
import client from "../../utils/apolloClient";
import { Post, Query } from "../../generated/graphql";

const testSlug = "defect-Shoes-mobile-stable-maroon";

export const getServerSideProps = async () => {
  try {
    console.log("here");
    const { data } = await client.query<Query["post"]>({
      query: gql`
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
      `,

      variables: {
        slug: testSlug,
      },
    });

    return {
      props: {
        post: data?.post,
      },
    };
  } catch (err) {
    // TODO: redirect or render error?
    console.log(err);
  }
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
