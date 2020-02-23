import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  navbarContainer: css`
    display: flex;
    margin: 0 0 1em 0;

    ${mediaQuery('md')} {
      min-width: 340px;
      flex-direction: column;
    }
  `,
  logo: css`
    width: calc(50% - 2em);
    min-width: 148px;

    ${mediaQuery('sm')} {
      max-width: 224px;
    }

    ${mediaQuery('md')} {
      width: calc(100% - 2em);
    }
  `,
  navLinksContainer: css`
    margin: 0 0 0 1em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${mediaQuery('md')} {
      margin: 1em 0 0 0;
    }
  `,
  navLink: css`
    ${mediaQuery('md')} {
    }
  `,
};
