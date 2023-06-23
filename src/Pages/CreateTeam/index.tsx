import { DndContext } from '@dnd-kit/core';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { ChampionShortData } from '../../types';
import Map from './Components/Map';
import SidebarItem from './Components/SidebarItem';
import { Sidebar, Wrapper } from './style';

type Props = {
  champions: ChampionShortData[];
};

const CreateTeam: React.FC<Props> = ({ champions }) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('create-team.title')}</title>
      </Helmet>
      <Wrapper>
        <DndContext>
          <Sidebar>
            {champions.map(({ id }) => (
              <SidebarItem id={id} key={id} />
            ))}
          </Sidebar>
          <Map />
        </DndContext>
      </Wrapper>
    </>
  );
};

export default CreateTeam;
