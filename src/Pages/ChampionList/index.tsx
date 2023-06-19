import { useEffect, useState } from 'react';

import { useGetAllChampionsQuery } from '../../services/champion';
import { ChampionShortData } from '../../types';
import List from './List';
import Nav from './Nav';
import { WrapChampionList } from './style';

const ChampionList = () => {
  const { data, error, isLoading } = useGetAllChampionsQuery();
  const unsortedChampions = Object.values(data?.data || {});
  const champions = unsortedChampions.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [activeChampions, setActiveChampions] =
    useState<ChampionShortData[]>(champions);
  const [activeListChampions, setActiveListChampions] =
    useState<ChampionShortData[]>(activeChampions);

  useEffect(() => {
    setActiveListChampions(activeChampions);
  }, [activeChampions]);

  return (
    <WrapChampionList>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Nav
            champions={champions}
            onSelectActiveChampions={setActiveChampions}
          />
          <List champions={activeListChampions} />
        </>
      ) : null}
    </WrapChampionList>
  );
};

export default ChampionList;
