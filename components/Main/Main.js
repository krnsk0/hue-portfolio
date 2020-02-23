import PropTypes from 'prop-types';
import ImageLoader from '../ImageLoader';
import styles from './styles';

const Main = ({ gallery }) => {
  return (
    <div css={styles.mainContainer}>
      {gallery.map(({ public_id }) => {
        return (
          <ImageLoader
            publicID={public_id}
            cssProp={styles.image}
            key={public_id}
            alt="gallery image"
          />
        );
      })}
    </div>
  );
};

Main.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default Main;
