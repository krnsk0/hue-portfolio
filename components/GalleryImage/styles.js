import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  mainContainer: css`
    border: 1px solid red;
    width: 100%;
    ${mediaQuery('sm')} {
    }
    ${mediaQuery('md')} {
      margin-left: 24em;
    }
    ${mediaQuery('xl')} {
    }
  `,
  image: css`
    margin: 0 0 0.5em 0;
    width: 100%;
  `,
};
