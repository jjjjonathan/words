import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";
import Logo from "../components/Layout/Logo";

const Home: NextPage = () => (
  <Layout title="home">
    <Box>
      <Logo />
      <Typography>a minimalist blog platform</Typography>
    </Box>
  </Layout>
);

export default Home;
