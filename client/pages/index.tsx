import type { NextPage } from 'next';
import Layout from '../components/Layout';
import LoginButton from '../components/LoginButton';
import Logo from '../components/Logo';

const Home: NextPage = () => (
  <Layout title="words">
    <LoginButton />
    <div>
      <Logo />
      <h2>a minimalist blog platform</h2>
    </div>
  </Layout>
);

export default Home;
