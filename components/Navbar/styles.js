import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  navbarContainer: theme => css`
    background-color: ${theme.colors.lightGrey1};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    margin: 0 0 1em 0;
    z-index: 999;
    width: 100%;
    padding: 1em 0 1em 1em;

    ${mediaQuery('md')} {
      display: block;
      top: 2em;
      left: 2em;
      max-width: 20em;
      padding: 0 0 0 0;
    }
  `,
  navbarSpacer: css`
    height: calc(92px - 1em);

    ${mediaQuery('sm')} {
      height: calc(132px - 1em);
    }

    ${mediaQuery('md')} {
      height: 0px;
    }
  `,
  logoPicture: css`
    max-width: 60px;

    ${mediaQuery('sm')} {
      max-width: 100px;
    }

    ${mediaQuery('md')} {
      max-width: 60%;
    }
  `,
  name: css`
    font-family: 'Trade Winds';
  `,
  navLinksContainer: css`
    margin: 0 0 0 1em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${mediaQuery('md')} {
      flex-direction: column;
      margin: 1em 0 0 0;
    }
  `,
  navLink: theme => css`
    font-family: 'Playfair Display';
    ${mediaQuery('md')} {
    }

    &:hover {
      color: ${theme.colors.accent};
      content: 'test';
    }
  `,
  navLinkText: css``,
};
