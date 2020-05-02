import { Image } from 'cloudinary-react';
import styles from './styles';
import { FaInstagram, FaMoon, FaAt, FaHamsa } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div css={styles.navbarContainer}>
        <Image
          publicId={'profile_jhi460'}
          alt="HUE profile logo"
          fetchFormat="auto"
          quality="auto"
          dpr="auto"
          width="auto"
          crop="scale"
          css={styles.logoPicture}
        />

        <nav>
          <div css={styles.name}>
            <strong>Hannah UE</strong>
          </div>
          <ul css={styles.navLinksContainer}>
            <li css={styles.navLink}>
              <FaHamsa />
              <span css={styles.navLinkText}>About</span>
            </li>
            <li css={styles.navLink}>
              <FaMoon />
              <span css={styles.navLinkText}>Webcomic</span>
            </li>
            <li css={styles.navLink}>
              <FaInstagram />
              <span css={styles.navLinkText}>Instagram</span>
            </li>
            <li css={styles.navLink}>
              <FaAt />
              <span css={styles.navLinkText}>Contact</span>
            </li>
          </ul>
        </nav>
      </div>
      <div css={styles.navbarSpacer} />
    </>
  );
};

export default Navbar;
