import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  pageContainer: css`
    margin: 1em;
    display: flex;
    flex-direction: column;

    ${mediaQuery('md')} {
      margin: 2em;
      flex-direction: row;
    }
  `,
};
