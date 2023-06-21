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
  align-items: center;
  gap: 2em;
  height: 80px;
  padding: 15px 20px;
  border-bottom: 1px solid rgb(0, 102, 128);
  background-color: ${COLOR_BACKGROUND_BLACK};
  color: ${COLOR_TEXT_WHITE};
`;

export const HeaderLink = styled(Link)`
  text-transform: uppercase;
  color: inherit;
`;
