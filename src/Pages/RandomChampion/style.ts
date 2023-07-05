import styled from 'styled-components';

import { CARD_MIN_HEIGHT } from '../../assets/styles/theme';

export const Section = styled.section`
  position: relative;
  padding: 70px 0 140px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  min-height: ${CARD_MIN_HEIGHT}px;
  padding-top: 50px;
`;
