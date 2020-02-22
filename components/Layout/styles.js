import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  pageContainer: css`
    display: flex;
    flex-direction: column;

    ${mediaQuery('md')} {
      flex-direction: row;
    }
  `,
  navbarContainer: css`
    display: flex;

    ${mediaQuery('md')} {
      min-width: 340px;
      flex-direction: column;
    }
  `,
};
