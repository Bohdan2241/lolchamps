import { DndContext } from '@dnd-kit/core';
import React from 'react';

import { ChampionShortData } from '../../types';
import Map from './Components/Map';
import SidebarItem from './Components/SidebarItem';
import { Sidebar, Wrapper } from './style';

type Props = {
  champions: ChampionShortData[];
};

const CreateTeam: React.FC<Props> = ({ champions }) => {
  return (
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
  );
};

export default CreateTeam;
