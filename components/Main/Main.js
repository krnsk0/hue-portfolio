import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import ImageLoader from '../ImageLoader';
import styles from './styles';

const Main = ({ gallery }) => {
  const router = useRouter();

  return (
    <div css={styles.mainContainer}>
      {gallery.map(({ public_id, width, height }) => {
        const slug = public_id.split('/')[1];

        const onInteract = () => {
          router.push(router.pathname, `/gallery/${slug}`, { shallow: true });
        };

        return (
          <>
            <ImageLoader
              publicID={public_id}
              cssProp={styles.image}
              alt="gallery image"
              width={width}
              height={height}
              key={slug}
              onInteract={onInteract}
            />
            <div css={styles.spacer}></div>
          </>
        );
      })}
    </div>
  );
};

Main.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default Main;
