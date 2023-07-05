import styled from 'styled-components';

import { animation } from '../../utils/style';

export const Wrapper = styled.section`
  padding: 70px 0 140px;
`;

export const Introduction = styled.p`
  box-sizing: content-box;
  max-width: 460px;
  padding: 0 10%;
  margin: 12px auto 0;
  font-size: 0.875rem; /* ! add rem fn */
  line-height: 1.6;
  text-align: center;
  letter-spacing: 0.08em;
  ${animation.fadeIn({ delay: 400 })}
`;

export const Body = styled.div`
  margin-top: 75px;
`;
