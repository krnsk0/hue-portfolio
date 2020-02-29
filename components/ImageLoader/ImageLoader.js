import { Image } from 'cloudinary-react';

import PropTypes from 'prop-types';
import styles from './styles';

const ImageLoader = ({
  publicID,
  cssProp,
  alt,
  width = 0,
  height = 0,
  onInteract,
}) => {
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
        onClick={onInteract}
        tabIndex={0}
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
  onInteract: PropTypes.func,
};

export default ImageLoader;
