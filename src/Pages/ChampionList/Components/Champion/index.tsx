import { Link } from 'react-router-dom';

import getChampionLargeImageLink from '../../../../utils/getChampionLargeImageLink';
import {
  ChampionImage,
  ChampionItem,
  ChampionName,
  WrapChampionImage,
  WrapChampionName,
} from './style';

interface Props {
  id: string;
  name: string;
}

const Champion = ({ id, name }: Props) => (
  <ChampionItem as={Link} to={`champions/${id}`}>
    <WrapChampionImage>
      <ChampionImage
        src={getChampionLargeImageLink(id)}
        alt="Champion's icon"
      />
    </WrapChampionImage>
    <WrapChampionName>
      <ChampionName>{name}</ChampionName>
    </WrapChampionName>
  </ChampionItem>
);

export default Champion;
