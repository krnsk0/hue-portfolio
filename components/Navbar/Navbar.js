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

        <nav css={styles.navLinksContainer}>
          <div css={styles.name}>
            <strong>Hannah Utain-Evans</strong>
          </div>
          <ul>
            <li css={styles.navLink}>
              <FaHamsa />
              About
            </li>
            <li css={styles.navLink}>
              <FaMoon />
              Webcomic
            </li>
            <li css={styles.navLink}>
              <FaInstagram />
              Insta
            </li>
            <li css={styles.navLink}>
              <FaAt />
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div css={styles.navbarSpacer} />
    </>
  );
};

export default Navbar;
