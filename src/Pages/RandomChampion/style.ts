import styled from 'styled-components';

import { CARD_MIN_HEIGHT } from '../../assets/styles/theme';

export const Section = styled.section`
  position: relative;
  padding: 70px 0 140px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  min-height: ${CARD_MIN_HEIGHT}px;
  padding-top: 50px;
`;
