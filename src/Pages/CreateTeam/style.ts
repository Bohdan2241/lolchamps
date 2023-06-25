import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
`;

export const Sidebar = styled.aside`
  flex: 1 1 30%;
  display: flex;
  flex-wrap: wrap;
  max-height: calc(100vh - 80px);
  max-width: 30%;
`;
