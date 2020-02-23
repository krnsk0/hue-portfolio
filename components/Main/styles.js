import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  mainContainer: css`
    ${mediaQuery('sm')} {
      column-count: 2;
      column-width: 50%;
    }
    ${mediaQuery('xl')} {
      column-count: 3;
      column-width: 33%;
    }
  `,
  image: css`
    margin: 0 0 0 0;
    width: 100%;
  `,
};
