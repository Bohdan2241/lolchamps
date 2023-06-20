import { createGlobalStyle, css } from 'styled-components';

import { COLOR_BACKGROUND_DARK_LIGHT, COLOR_TEXT_WHITE } from './theme';

const baseStyle = css`
  body {
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
    /* 
    &:hover {
      text-decoration: underline;
    } */
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

  // hide X that shows up in IE inside <input> fields
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
    overflow-y: scroll;
    margin-top: 80px;
    background-color: ${COLOR_BACKGROUND_DARK_LIGHT};
    color: ${COLOR_TEXT_WHITE};
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

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
