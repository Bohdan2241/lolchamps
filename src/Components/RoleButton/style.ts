import styled, { css } from 'styled-components';

import {
  COLOR_BACKGROUND_DARK_BLUE,
  COLOR_BACKGROUND_LIGHT_BLUE,
  COLOR_TEXT_WHITE,
} from '../../assets/styles/theme';
import { rem } from '../../utils/style';

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button<{ selected: boolean; disabled: boolean }>`
  padding: 5.5px;
  font-size: ${rem(12)};
  color: ${COLOR_TEXT_WHITE};
  text-transform: uppercase;
  background-color: ${COLOR_BACKGROUND_LIGHT_BLUE};
  border: none;
  border-radius: 4px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  ${({ selected }) =>
    selected &&
    css`
      color: #006780;
      background-color: ${COLOR_BACKGROUND_DARK_BLUE};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${COLOR_TEXT_WHITE};
      background-color: grey;
    `}

    ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background-color: ${COLOR_BACKGROUND_DARK_BLUE};
      }
    `}
`;
