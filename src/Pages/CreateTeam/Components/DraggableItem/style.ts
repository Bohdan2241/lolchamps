import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Item = styled.span`
  position: relative;
  z-index: 1;
  cursor: grab;

  & img {
    width: 80px;
    height: 80px;
  }
`;
