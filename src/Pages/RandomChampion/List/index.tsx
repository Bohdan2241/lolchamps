import React from 'react';

import CardTemplate from '../../../Components/Card';
import { ChampionShortData } from '../../../types';
import DefaultCardImage from './assets/defaultCardImage.png';

type Props = {
  randomChampions: ChampionShortData[];
};

const List: React.FC<Props> = ({ randomChampions }) => {
  if (randomChampions.length === 0) {
    return <CardTemplate defaultImage={DefaultCardImage} isDefault />;
  }

  return (
    <>
      {randomChampions.map(({ id, name }) => (
        <CardTemplate name={name} id={id} key={id} />
      ))}
    </>
  );
};

export default List;
