import styled, { css } from 'styled-components';

import { BASE_WIDTH } from '../../../assets/styles/theme';

const CHAMPION_PADDING = '3.2%';
const CHAMPION_PADDING_MAX = '20px';

export const Wrapper = styled.section`
  max-width: ${BASE_WIDTH + 'px'};
  margin: 0 auto;
`;

export const Message = styled.div`
  padding: 0 20px;
  margin: 50px 0;
  text-align: center;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const cssChampionSize = (itemsPerRow: number) => {
  const percentage = 100 / itemsPerRow + '%';

  return css`
    flex: 1 1 ${percentage};
    max-width: ${percentage};
  `;
};

export const Item = styled.a`
  box-sizing: border-box;
  display: block;
  ${cssChampionSize(5)}
  min-width: 0;
`;

const cssChampionListPadding = (size: string) => {
  return css`
    ${List} {
      padding: 0 0 0 ${size};
      margin: calc(4.5% - ${size}) calc(4% - ${size}) 0;
    }

    ${Item} {
      padding: ${size} ${size} 0 0;
    }
  `;
};

export const ResponsiveWrapper = styled(Wrapper)`
  ${cssChampionListPadding(CHAMPION_PADDING)}

  @media(min-width: 640px) {
    ${cssChampionListPadding(CHAMPION_PADDING_MAX)}
  }

  @media (max-width: 1000px) {
    ${Item} {
      ${cssChampionSize(4)}
      font-size: 18px;
    }
  }

  @media (max-width: 750px) {
    ${Item} {
      ${cssChampionSize(3)}
      font-size: 16px;
    }
  }

  @media (max-width: 520px) {
    ${Item} {
      ${cssChampionSize(2)}
      font-size: 3.5vw;
    }
  }
`;
