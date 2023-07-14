import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import RoleButton from '../../../Components/RoleButton';
import ChampionDifficultyRanking from '../../../enums/championDifficultyRanking';
import ChampionRole from '../../../enums/championRole';
import { ChampionShortData } from '../../../types';
import levelToRanking from '../../../utils/levelToRanking';
import { Buttons, difficultySelectStyles, Nav, Wrapper } from './style';

interface ChampionRoleOption {
  value: ChampionRole;
  label: string;
}

const CHAMPION_ROLE_OPTIONS: ChampionRoleOption[] = [
  {
    value: ChampionRole.ASSASSIN,
    label: 'champion-role.assassin.plural',
  },
  {
    value: ChampionRole.FIGHTER,
    label: 'champion-role.fighter.plural',
  },
  { value: ChampionRole.MAGE, label: 'champion-role.mage.plural' },
  {
    value: ChampionRole.MARKSMAN,
    label: 'champion-role.marksman.plural',
  },
  {
    value: ChampionRole.SUPPORT,
    label: 'champion-role.support.plural',
  },
  { value: ChampionRole.TANK, label: 'champion-role.tank.plural' },
];

interface ChampionDifficultyOption {
  value: ChampionDifficultyRanking;
  label: string;
}

const CHAMPION_DIFFICULTY_OPTIONS: ChampionDifficultyOption[] = [
  {
    value: ChampionDifficultyRanking.LOW,
    label: 'champion-difficulty.ranking.low',
  },
  {
    value: ChampionDifficultyRanking.MEDIUM,
    label: 'champion-difficulty.ranking.medium',
  },
  {
    value: ChampionDifficultyRanking.HIGH,
    label: 'champion-difficulty.ranking.high',
  },
];

interface ChampionOption {
  value: ChampionShortData;
  label: string;
}

interface Props {
  champions: ChampionShortData[];
  onSelectActiveChampions: (champions: ChampionShortData[]) => void;
}

const Section: React.FC<Props> = ({ champions, onSelectActiveChampions }) => {
  const [searchValue, setSearchValue] = useState<ChampionOption | null>(null);
  const [roleValue, setRoleValue] = useState<ChampionRoleOption | null>(null);
  const [difficultyValue, setDifficultyValue] =
    useState<ChampionDifficultyOption | null>(null);

  const championOptions: ChampionOption[] = champions.map((champion) => {
    return { value: champion, label: champion.name };
  });

  useEffect(() => {
    let champs: ChampionShortData[] = champions;

    if (searchValue) {
      champs = [searchValue.value];
    }

    if (roleValue) {
      champs = champs.filter(
        (champ) => champ.tags.indexOf(roleValue.value) > -1
      );
    }

    if (difficultyValue) {
      champs = champs.filter(
        (champ) =>
          levelToRanking(champ.info.difficulty) === difficultyValue.value
      );
    }

    onSelectActiveChampions(champs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, roleValue, difficultyValue]);

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Nav>
        <Select
          options={championOptions}
          isClearable
          isSearchable
          defaultValue={null}
          styles={difficultySelectStyles} // TODO: add styles
          value={searchValue}
          placeholder={t('search.action')}
          noOptionsMessage={() => t('search.message.no-champions-found')}
          onChange={(v: unknown) => {
            const value: ChampionOption | null =
              v instanceof Array ? v[0] : v || null;
            setSearchValue(value);
          }}
        />

        <Buttons>
          {/* large screen */}
          {[
            { value: null, label: t('champion-role.all.short') },
            ...CHAMPION_ROLE_OPTIONS,
          ].map((option) => (
            <RoleButton
              key={option.value || ''}
              selected={
                roleValue
                  ? option.value === roleValue.value
                  : option.value === null
              }
              onClick={() => setRoleValue(option.value ? option : null)}
              text={t(option.label)}
            />
          ))}
          {/* small screen */}
          {/* TODO: add mobile version here */}
        </Buttons>

        <Select
          options={CHAMPION_DIFFICULTY_OPTIONS.map((o) => ({
            ...o,
            label: t(o.label),
          }))}
          value={difficultyValue}
          isClearable
          isSearchable={false}
          styles={difficultySelectStyles}
          placeholder={t('champion-difficulty.all-difficulties')}
          onChange={(v: unknown) => {
            const value: ChampionDifficultyOption | null =
              v instanceof Array ? v[0] : v || null;
            setDifficultyValue(value);
          }}
        />
      </Nav>
    </Wrapper>
  );
};

export default Section;
