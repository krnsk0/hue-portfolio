import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import fetch from 'isomorphic-unfetch';

const Index = ({ gallery }) => {
  console.log(gallery);
  return <Layout navbar={<Navbar />} main={<Main gallery={gallery} />} />;
};

Index.getInitialProps = async () => {
  const res = await fetch(
    'https://res.cloudinary.com/hueartdump/image/list/gallery.json'
  );
  const data = await res.json();
  return {
    gallery: data.resources,
  };
};

Index.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default Index;
