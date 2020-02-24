import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';
import styles from './styles';

const ImageLoader = ({ publicID, cssProp, alt, width = 0, height = 0 }) => {
  return (
    <div
      css={theme => styles.placeholderWrapper(theme, (height / width) * 100)}
    >
      <Image
        key={publicID}
        publicId={publicID}
        alt={alt}
        fetchFormat="auto"
        quality="auto"
        dpr="auto"
        width="auto"
        crop="scale"
        css={cssProp}
      />
    </div>
  );
};

ImageLoader.propTypes = {
  publicID: PropTypes.string.isRequired,
  cssProp: PropTypes.any,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageLoader;
