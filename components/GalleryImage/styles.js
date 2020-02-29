import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  mainContainer: css`
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
    margin: 0 0 0 0;
    width: 100%;
  `,
};
