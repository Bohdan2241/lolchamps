import { StylesConfig } from 'react-select';
import styled, { css } from 'styled-components';

export const RoleButton = styled.button<{ selected: boolean }>`
  padding: 5.5px;
  margin: 0 8px;
  border: none;
  background-color: #006780;
  color: white;
  border-radius: 4px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    background-color: rgb(0 102 128 / 50%);
  }
  ${({ selected }) =>
    selected &&
    css`
      background-color: rgb(0 102 128 / 50%);
      color: #006780;
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
    backgroundColor: 'rgb(0, 102, 128)',
    width: '206px',
    textTransform: 'uppercase',
    fontSize: '12px',
  }),
  option: (base, props) => ({
    ...base,
    cursor: 'pointer',
    color: 'rgb(255, 255, 255)',
    fontSize: '12px',
    '&:hover': {
      backgroundColor: props.isSelected
        ? 'rgb(6, 28, 37)'
        : 'rgb(0 102 128 / 50%)',
    },
    backgroundColor: props.isSelected
      ? 'rgb(6, 28, 37)'
      : props.isFocused
      ? 'rgb(0 102 128 / 50%)'
      : 'rgb(0, 102, 128)',
    transition:
      'background-color 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
  }),
  placeholder: (base) => ({ ...base, color: 'white' }),
  singleValue: (base) => ({ ...base, color: 'white' }),
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
    color: '#fff',
    padding: '4px',

    '& svg': {
      width: '16px',
      height: '16px',
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: '#fff',
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
        fill: '#fff',
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
};
