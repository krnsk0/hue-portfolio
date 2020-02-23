import ImageLoader from '../ImageLoader';
import styles from './styles';

const Navbar = () => {
  return (
    <div css={styles.navbarContainer}>
      <ImageLoader
        publicID="profile_jhi460"
        cssProp={styles.logoPicture}
        alt="HUE profile logo"
      />
      <nav>
        <ul css={styles.navLinksContainer}>
          <li css={styles.navLink}>Illustration</li>
          <li css={styles.navLink}>Comics</li>
          <li css={styles.navLink}>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
