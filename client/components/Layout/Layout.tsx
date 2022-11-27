import React from "react";
import Head from "next/head";
import { Container, Box } from "@mui/material";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title }: Props) => {
  const pageTitle = title ? `words | ${title}` : "words";

  return (
    <Container maxWidth="md" sx={{ pt: 12 }}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <NavBar />
      <Box mt={8}>{children}</Box>
    </Container>
  );
};

export default Layout;
