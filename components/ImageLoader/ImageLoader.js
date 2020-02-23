import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';

const ImageLoader = ({ publicID, cssProp, alt }) => {
  return (
    <Image
      key={publicID}
      publicId={publicID}
      alt={alt}
      fetchFormat="auto"
      quality="auto"
      dpr="auto"
      width="auto"
      crop="scale"
      responsiveUseBreakpoints="true"
      responsive
      css={cssProp}
    />
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
