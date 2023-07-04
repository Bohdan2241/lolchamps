import styled, { css } from 'styled-components';

import {
  COLOR_BACKGROUND_DARK_BLUE,
  COLOR_BACKGROUND_LIGHT_BLUE,
  COLOR_TEXT_WHITE,
} from '../../assets/styles/theme';
import { rem } from '../../utils/style';

export const Button = styled.button<{ selected: boolean; disabled: boolean }>`
  padding: 5.5px;
  border: none;
  background-color: ${COLOR_BACKGROUND_LIGHT_BLUE};
  font-size: ${rem(12)};
  color: ${COLOR_TEXT_WHITE};
  border-radius: 4px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  text-transform: uppercase;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${COLOR_BACKGROUND_DARK_BLUE};
      color: #006780;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: grey;
      color: ${COLOR_TEXT_WHITE};
    `}

    ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background-color: ${COLOR_BACKGROUND_DARK_BLUE};
      }
    `}
`;
