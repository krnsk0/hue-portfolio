import styles from './styles';

const Navbar = () => {
  return (
    <>
      <img src="/logo.png" alt="logo with text HUE art" css={styles.logo}></img>
      <nav css={styles.navLinksContainer}>
        <ul>
          <li>Illustration</li>
          <li>Comics</li>
          <li>About</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
