import type { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../components/Layout';
import LoginButton from '../components/LoginButton';
import Logo from '../components/Logo';

const Header = styled.div`
  display: flex;
  justify-content: right;
`;

const Home: NextPage = () => (
  <Layout title="words">
    <Header>
      <LoginButton />
    </Header>
    <div>
      <Logo />
      <h2>a minimalist blog platform</h2>
    </div>
  </Layout>
);

export default Home;
