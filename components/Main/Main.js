import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import styles from './styles';

const Main = ({ gallery }) => {
  return (
    <div css={styles.mainContainer}>
      {gallery.map(({ public_id }) => {
        return (
          <Image
            key={public_id}
            publicId={public_id}
            alt="HUE profile logo"
            fetchFormat="auto"
            quality="auto"
            dpr="auto"
            width="auto"
            responsiveUseBreakpoints="true"
            responsive
            css={styles.image}
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
