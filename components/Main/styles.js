import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  mainContainer: css`
    width: 100%;
    column-gap: 1em;
    ${mediaQuery('sm')} {
      column-count: 2;
      column-width: 50%;
    }
    ${mediaQuery('md')} {
      margin-left: 20em;
    }
    ${mediaQuery('xl')} {
      column-count: 3;
      column-width: 33%;
    }
  `,
  image: css`
    width: 100%;
    cursor: pointer;
  `,
  spacer: css`
    width: 100%;
    height: 1em;
    break-inside: avoid-column;
  `,
  spacerContainer: css`
    break-inside: avoid-column;
  `,
};
