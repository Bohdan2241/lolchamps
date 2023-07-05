import { StylesConfig } from 'react-select';
import styled, { css } from 'styled-components';

import {
  COLOR_BACKGROUND_DARK_BLUE,
  COLOR_BACKGROUND_LIGHT_BLUE,
  COLOR_TEXT_WHITE,
} from '../../../assets/styles/theme';
import { animation, rem } from '../../../utils/style';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  height: 30px;
  margin: 0 auto;
`;

export const Wrapper = styled.section`
  position: relative;
  z-index: 5;
  margin: 0 2%;

  ${animation.fadeIn({ delay: 500 })}
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

export const RoleButton = styled.button<{ selected: boolean }>`
  padding: 5.5px;
  margin: 0 8px;
  font-size: ${rem(12)};
  color: ${COLOR_TEXT_WHITE};
  text-transform: uppercase;
  background-color: #006780;
  border: none;
  border-radius: 4px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background-color: rgb(0 102 128 / 50%);
  }
  ${({ selected }) =>
    selected &&
    css`
      color: #006780;
      background-color: rgb(0 102 128 / 50%);
    `}
`;

export const difficultySelectStyles: StylesConfig = {
  control: (base) => ({
    ...base,
    cursor: 'pointer',
    height: '100%',
    minHeight: '0px',
    padding: '0px 30px',
    border: '0px',
    boxShadow: 'none',
    WebkitBoxAlign: 'center',
    justifyContent: 'center',
    backgroundColor: `${COLOR_BACKGROUND_LIGHT_BLUE}`,
    minWidth: '206px',
    textTransform: 'uppercase',
    fontSize: `${rem(12)}`,
  }),
  option: (base, props) => ({
    ...base,
    cursor: 'pointer',
    color: `${COLOR_TEXT_WHITE}`,
    fontSize: `${rem(12)}`,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: props.isSelected
        ? `${COLOR_BACKGROUND_DARK_BLUE}`
        : 'rgb(0 102 128 / 50%)',
    },
    backgroundColor: props.isSelected
      ? `${COLOR_BACKGROUND_DARK_BLUE}`
      : props.isFocused
      ? 'rgb(0 102 128 / 50%)'
      : `${COLOR_BACKGROUND_LIGHT_BLUE}`,
    transition:
      'background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
  }),
  placeholder: (base) => ({ ...base, color: `${COLOR_TEXT_WHITE}` }),
  singleValue: (base) => ({ ...base, color: `${COLOR_TEXT_WHITE}` }),
  indicatorSeparator: (base) => ({ ...base, display: 'none' }),
  menu: (base) => ({
    ...base,
    margin: 0,
  }),
  menuList: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: `${COLOR_TEXT_WHITE}`,
    padding: '4px',

    '& svg': {
      width: '16px',
      height: '16px',
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: `${COLOR_TEXT_WHITE}`,
    padding: '0px',
    backgroundColor: 'rgb(213, 213, 213)',
    borderRadius: '50%',
    transition: 'background-color 300ms ease 0s',

    '& svg': {
      width: '11px',
      height: '11px',
    },

    '&:hover': {
      backgroundColor: 'grey',

      '& svg': {
        fill: `${COLOR_TEXT_WHITE}`,
      },
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0px',
    display: 'flex',
    flex: '0 0 auto',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: '0',
  }),
  input: (base) => ({
    ...base,
    color: `${COLOR_TEXT_WHITE}`,
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: `${COLOR_TEXT_WHITE}`,
    backgroundColor: `${COLOR_BACKGROUND_LIGHT_BLUE}`,
  }),
};
