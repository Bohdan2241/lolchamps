import { styled } from 'styled-components';

import {
  COLOR_BACKGROUND_WHITE,
  COLOR_PRIMARY_GOLD,
} from '../../../../assets/styles/theme';

export const Title = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SelectedChampion = styled.div<{ $isOver: boolean }>`
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(0, 102, 128, 0.2);
  border: ${({ $isOver }) =>
    $isOver
      ? `1px dashed ${COLOR_BACKGROUND_WHITE}`
      : `1px solid ${COLOR_PRIMARY_GOLD}`};

  &.Top {
    top: 30px;
    left: 225px;
  }

  &.Jungle {
    top: 150px;
    left: 290px;
  }

  &.Mid {
    top: 195px;
    left: 415px;
  }

  &.ADC {
    bottom: 180px;
    right: 275px;
  }

  &.Support {
    bottom: 150px;
    right: 170px;
  }

  & img {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
