import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import ImageLoader from '../ImageLoader';
import styles from './styles';

const GalleryImage = ({ slug, gallery }) => {
  console.log('slug: ', slug);
  const router = useRouter();

  const { public_id, width, height } = gallery.find(info =>
    info.public_id.includes(slug)
  );

  const onInteract = () => {
    router.push(`/gallery`, `/gallery`, { shallow: true });
  };

  return (
    <div css={styles.galleryImageContainer}>
      <ImageLoader
        publicID={public_id}
        cssProp={styles.image}
        alt="gallery image"
        width={width}
        height={height}
        key={slug}
        onInteract={onInteract}
      />
    </div>
  );
};

GalleryImage.propTypes = {
  slug: PropTypes.string.isRequired,
  gallery: PropTypes.array.isRequired,
};

export default GalleryImage;
