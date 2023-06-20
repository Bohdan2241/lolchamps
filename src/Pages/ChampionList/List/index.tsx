import React from 'react';
import { useTranslation } from 'react-i18next';

import { ChampionShortData } from '../../../types';
import ChampionComponent from '../Components/Champion';
import { Item, List, Message, ResponsiveWrapper } from './style';

export interface Props {
  isVisible: boolean;
  isFirstTime: boolean;
  champions: ChampionShortData[];
}

const Section: React.FC<Props> = ({ champions, isVisible, isFirstTime }) => {
  const { t } = useTranslation();

  return (
    <ResponsiveWrapper>
      {champions.length <= 0 ? (
        <Message>{t('champion-list.filter-result.no-champions-found')}</Message>
      ) : (
        <List>
          {champions.map(({ id, name }) => {
            const additionalProps = {
              isVisible,
              isFirstTime,
            };
            return (
              <Item
                as={ChampionComponent}
                key={id}
                name={name}
                id={id}
                {...additionalProps}
              />
            );
          })}
        </List>
      )}
    </ResponsiveWrapper>
  );
};

export default Section;
