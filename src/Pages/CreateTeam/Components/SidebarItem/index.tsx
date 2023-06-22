import { useDraggable } from '@dnd-kit/core';
import React from 'react';

import ImageSize from '../../../../enums/imageSize';
import getChampionImageLink from '../../../../utils/getChampionImageLink';
import { Item } from './style';

type Props = {
  id: string;
};

const SidebarItem: React.FC<Props> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  return (
    <Item
      ref={setNodeRef}
      style={{
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
      }}
      {...listeners}
      {...attributes}
    >
      <img src={getChampionImageLink(id, ImageSize.SMALL)} />
    </Item>
  );
};

export default SidebarItem;
