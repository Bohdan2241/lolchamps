import { ChampionShortData } from '../../../types';
import getChampionLargeImageLink from '../../../utils/getChampionLargeImageLink';
import {
  ChampionImage,
  ChampionItem,
  ChampionName,
  WrapChampionImage,
  WrapChampionName,
} from './style';

type ChampionProps = {
  champion: ChampionShortData;
};

const Champion = ({ champion }: ChampionProps) => (
  <ChampionItem href={`champions/${champion.name}`}>
    <WrapChampionImage>
      <ChampionImage
        src={getChampionLargeImageLink(champion.id)}
        alt="Champion's icon"
      />
    </WrapChampionImage>
    <WrapChampionName>
      <ChampionName>{champion.name}</ChampionName>
    </WrapChampionName>
  </ChampionItem>
);

export default Champion;
