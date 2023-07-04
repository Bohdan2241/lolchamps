import styled from 'styled-components';

import {
  COLOR_BACKGROUND_LIGHT_BLUE,
  COLOR_TEXT_WHITE,
} from '../../../assets/styles/theme';
import { animation, rem } from '../../../utils/style';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 25px;

  margin: 75px 2% 0;
  ${animation.fadeIn({ delay: 500 })}
`;

export const Roles = styled.div`
  display: flex;

  background-color: ${COLOR_BACKGROUND_LIGHT_BLUE};
  border-radius: 4px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: ${rem(12)};
  color: ${COLOR_TEXT_WHITE};
  cursor: pointer;
  text-transform: uppercase;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;
