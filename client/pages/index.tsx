import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Logo from '../components/Logo';

const Home: NextPage = () => (
  <Layout title="words">
    <div>
      <Logo />
      <h2>a minimalist blog platform</h2>
    </div>
  </Layout>
);

export default Home;
