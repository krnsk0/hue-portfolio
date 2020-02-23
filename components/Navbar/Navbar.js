import { Image } from 'cloudinary-react';
import styles from './styles';

const Navbar = () => {
  return (
    <div css={styles.navbarContainer}>
      <Image
        publicId="profile_jhi460"
        css={styles.logoPicture}
        alt="HUE profile logo"
        fetchFormat="auto"
        quality="auto"
        dpr="auto"
        width="auto"
        responsiveUseBreakpoints="true"
        responsive
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
