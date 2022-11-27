import React from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";

const Home: NextPage = () => (
  <Layout title="home">
    <Box>
      <Typography variant="h1" component="h2">
        how we left ourselves behind
      </Typography>
      <Typography variant="h3" fontStyle="italic">
        by jeremiah_jameson
      </Typography>
      <Typography>Dolor sit amet</Typography>
    </Box>
  </Layout>
);

export default Home;
