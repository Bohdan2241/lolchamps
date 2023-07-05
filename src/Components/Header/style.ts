import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  COLOR_BACKGROUND_BLACK,
  COLOR_TEXT_WHITE,
} from '../../assets/styles/theme';

export const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: flex;
  gap: 2em;
  align-items: center;
  height: 80px;
  padding: 15px 20px;
  color: ${COLOR_TEXT_WHITE};
  background-color: ${COLOR_BACKGROUND_BLACK};
  border-bottom: 1px solid rgb(0 102 128);
`;

export const HeaderLink = styled(Link)`
  position: relative;
  padding: 7.5px 16px;
  color: inherit;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(128 128 128 30%);
    border-radius: 6.4px;

    &::after {
      position: absolute;
      right: 0;
      bottom: -15px;
      left: 0;
      height: 4px;
      content: '';
      background-color: rgb(0 160 186);
      border-radius: 2px;
    }
  }
`;
