import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Main from '../components/Main';

const Index = () => {
  return <Layout navbar={<Navbar />} main={<Main />} />;
};

export default Index;
