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
          router
            .push(router.pathname, `/gallery/${slug}`, { shallow: true })
            .then(() => window.scrollTo(0, 0));
        };

        return (
          <div key={slug} css={styles.spacerContainer}>
            <ImageLoader
              publicID={public_id}
              cssProp={styles.image}
              alt="gallery image"
              width={width}
              height={height}
              onInteract={onInteract}
            />
            <div css={styles.spacer}></div>
          </div>
        );
      })}
    </div>
  );
};

Main.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default Main;
