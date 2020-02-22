import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  navbarContainer: css`
    display: flex;

    ${mediaQuery('md')} {
      min-width: 340px;
      flex-direction: column;
    }
  `,
  logo: css`
    margin: 1em;
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
    margin: 1em;
    width: 100%;
  `,
};
