import PropTypes from 'prop-types';
import Head from 'next/head';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { globalStyles, theme } from '../../emotion/';
import styles from './styles';

const Layout = ({ navbar, main }) => {
  return (
    <>
      <Head>
        <title>HUE Art Dump</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
