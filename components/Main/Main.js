import PropTypes from 'prop-types';
import ImageLoader from '../ImageLoader';
import styles from './styles';

const Main = ({ gallery }) => {
  return (
    <div css={styles.mainContainer}>
      {gallery.map(({ public_id, width, height }) => {
        return (
          <ImageLoader
            publicID={public_id}
            cssProp={styles.image}
            key={public_id}
            alt="gallery image"
            width={width}
            height={height}
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
