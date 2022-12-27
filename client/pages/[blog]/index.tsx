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
import { GetBlogQuery } from "../../generated/graphql";

interface ServerSideProps {
  blog: GetBlogQuery["blog"];
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async ({
  query,
}) => {
  const blogSlug = query.blog as string;

  const getBlogQueryDocument = graphql(`
    query GetBlog($slug: String!) {
      blog(slug: $slug) {
        slug
        title
        subtitle
        owner {
          username
        }
        posts {
          title
          slug
        }
      }
    }
  `);

  const { data } = await client.query({
    query: getBlogQueryDocument,
    variables: { slug: blogSlug },
  });

  return { props: { blog: data?.blog } };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const BlogHomePage: NextPage<Props> = ({ blog }) => {
  // TODO: 404 message or redirect?
  if (!blog) return null;

  return (
    <Layout title={blog.title}>
      <Box>
        <Typography variant="h1" component="h2">
          {blog.title}
        </Typography>
        <Typography variant="h3" fontStyle="italic">
          {blog.subtitle}
        </Typography>
        {/* <Typography>{post.body}</Typography> */}
      </Box>
    </Layout>
  );
};

export default BlogHomePage;
