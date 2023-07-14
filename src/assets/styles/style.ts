import { createGlobalStyle, css } from 'styled-components';

import { COLOR_BACKGROUND_DARK_LIGHT, COLOR_TEXT_WHITE } from './theme';

const baseStyle = css`
  body {
    margin: 0;
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  :focus {
    outline: 0;
  }

  a[href],
  input[type='submit'],
  input[type='image'],
  label[for],
  select,
  button {
    cursor: pointer;

    &:disabled {
      cursor: auto;
    }
  }

  /* hide X that shows up in IE inside <input> fields */
  ::-ms-clear {
    display: none;
  }
`;

const layoutStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin-top: 80px;
    overflow-y: scroll;
    color: ${COLOR_TEXT_WHITE};
    background-color: ${COLOR_BACKGROUND_DARK_LIGHT};
  }

  img {
    display: block;
  }

  ol,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  ${baseStyle}
  ${layoutStyle}
`;

// button,
// input,
// optgroup,
// select,
// textarea {
//   margin: 0;
//   padding: 0;
//   border: 0;
//   font-size: 100%;
//   font-family: inherit;
//   vertical-align: baseline;
//   line-height: normal;
//   cursor: pointer;
// }
