import { Link } from 'react-router-dom';

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

// TODO: path (routes)
const Champion = ({ champion }: ChampionProps) => (
  <ChampionItem as={Link} to={`champions/${champion.id}`}>
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
