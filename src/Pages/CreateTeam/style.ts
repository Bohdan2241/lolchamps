import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
`;

export const Sidebar = styled.aside`
  flex: 1 1 30%;
  display: flex;
  flex-wrap: wrap;
  max-height: calc(100vh - 80px);
  /* overflow-y: scroll; */
`;
