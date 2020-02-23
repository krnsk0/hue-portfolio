import styles from './styles';

const Navbar = () => {
  return (
    <div css={styles.navbarContainer}>
      <img src="/profile.png" alt="" css={styles.logoPicture}></img>

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
