import PropTypes from 'prop-types';
// import ImageLoader from '../ImageLoader';
import styles from './styles';

const GalleryImage = ({ slug }) => {
  return <div css={styles.mainContainer}>{slug}</div>;
};

GalleryImage.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default GalleryImage;
