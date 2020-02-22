import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  test: css`
    ${mediaQuery('md')} {
    }
  `,
};
