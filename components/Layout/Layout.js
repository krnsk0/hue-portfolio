import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { globalStyles, theme } from '../../emotion/';
import styles from './styles';

const Layout = ({ navbar, main }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <div css={styles.pageContainer}>
          {navbar}
          {main}
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  navbar: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
};

export default Layout;
