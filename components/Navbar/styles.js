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

  logoPicture: css`
    max-width: 25%;

    ${mediaQuery('sm')} {
      max-width: 160px;
    }

    ${mediaQuery('md')} {
      max-width: 60%;
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
