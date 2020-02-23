import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  mainContainer: css`
    column-gap: 1em;
    ${mediaQuery('sm')} {
      column-count: 2;
      column-width: 50%;
    }
    ${mediaQuery('md')} {
      margin-left: 24em;
    }
    ${mediaQuery('xl')} {
      column-count: 3;
      column-width: 33%;
    }
  `,
  image: css`
    margin: 0 0 0.5em 0;
    width: 100%;
  `,
};
