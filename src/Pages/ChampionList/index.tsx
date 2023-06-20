import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import GiantTitle from '../../Components/GiantTitle';
import { useGetAllChampionsQuery } from '../../services/champion';
import { ChampionShortData } from '../../types';
import List from './List';
import Nav from './Nav';
import { Body, Introduction, Wrapper } from './style';

const ChampionList = () => {
  const { data, error, isLoading } = useGetAllChampionsQuery();
  const unsortedChampions = Object.values(data?.data || {});
  const champions = unsortedChampions.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [isTransition, setIsTransition] = useState<boolean>(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [activeChampions, setActiveChampions] =
    useState<ChampionShortData[]>(champions);
  const [activeListChampions, setActiveListChampions] =
    useState<ChampionShortData[]>(activeChampions);

  useEffect(() => {
    if (isFirstTime) setIsFirstTime(false);

    if (!isTransition) {
      setIsTransition(true);
      setTimeout(() => {
        setIsTransition(false);
      }, 300);
    }

    setActiveListChampions(activeChampions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChampions]);

  const { t } = useTranslation();

  return (
    <Wrapper>
      {error ? (
        <>{t('error')}</>
      ) : isLoading ? (
        <>{t('loading')}</>
      ) : data ? (
        <>
          <GiantTitle text={t('section.champion-list.title')} toggleContrast />
          <Introduction>{t('section.champion-list.description')}</Introduction>
          <Body>
            <Nav
              champions={champions}
              onSelectActiveChampions={setActiveChampions}
            />
            <List
              isFirstTime={isFirstTime}
              isVisible={!isTransition}
              champions={activeListChampions}
            />
          </Body>
        </>
      ) : null}
    </Wrapper>
  );
};

export default ChampionList;
