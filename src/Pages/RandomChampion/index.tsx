import React, { useState } from 'react';

import { ChampionShortData } from '../../types';
import RandomChampionItem from './Components/RandomChampionItem';
import Nav from './Nav';

type Props = {
  champions: ChampionShortData[];
};

const RandomChampion: React.FC<Props> = ({ champions }) => {
  const [randomChampions, setRandomChampions] = useState<ChampionShortData[]>(
    []
  );

  return (
    <section>
      <Nav champions={champions} setRandomChampions={setRandomChampions} />

      {randomChampions.length > 0 && (
        <div style={{ display: 'flex' }}>
          {randomChampions.map((champion) => {
            return <RandomChampionItem {...champion} key={champion.id} />;
          })}
        </div>
      )}
    </section>
  );
};

export default RandomChampion;
