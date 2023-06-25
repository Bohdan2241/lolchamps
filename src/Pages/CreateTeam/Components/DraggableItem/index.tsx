import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

import ImageSize from '../../../../enums/imageSize';
import getChampionImageLink from '../../../../utils/getChampionImageLink';
import { Item } from './style';

type Props = {
  id: string;
};

const SidebarItem: React.FC<Props> = ({ id }) => {
  const championImageLink = getChampionImageLink(id, ImageSize.SMALL);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { championImageLink },
  });

  return (
    <Item
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
      }}
      {...listeners}
      {...attributes}
    >
      <img src={getChampionImageLink(id, ImageSize.SMALL)} />
    </Item>
  );
};

export default SidebarItem;
