import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import GalleryImage from '../components/GalleryImage';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

const Index = ({ gallery }) => {
  const router = useRouter();

  const lastUrlChunk = router.asPath.split('/')[
    router.asPath.split('/').length - 1
  ];
  const slug =
    lastUrlChunk === 'gallery' || lastUrlChunk === '' ? '' : lastUrlChunk;

  return (
    <Layout
      navbar={<Navbar />}
      main={
        !slug ? (
          <Main gallery={gallery} />
        ) : (
          <GalleryImage slug={slug} gallery={gallery} />
        )
      }
    />
  );
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
