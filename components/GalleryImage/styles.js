import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  galleryImageContainer: css`
    position: relative;
    width: 100%;
    height: calc(95vh - 92px - 1em);

    ${mediaQuery('sm')} {
      height: calc(95vh - 132px - 1em);
    }
    ${mediaQuery('md')} {
      margin-left: 24em;
      height: 90vh;
    }
  `,
  image: css`
    margin: 0 0 0 0;
    width: 100%;
  `,
};
