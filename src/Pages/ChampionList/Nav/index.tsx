import { useEffect, useState } from 'react';
import Select from 'react-select';

import ChampionDifficultyRanking from '../../../enums/championDifficultyRanking';
import ChampionRole from '../../../enums/championRole';
import { ChampionShortData } from '../../../types';
import levelToRanking from '../../../utils/levelToRanking';
import { difficultySelectStyles, RoleButton } from './style';

interface ChampionRoleOption {
  value: ChampionRole;
  label: string;
}

const CHAMPION_ROLE_OPTIONS: ChampionRoleOption[] = [
  {
    value: ChampionRole.ASSASSIN,
    label: 'Assassins',
  },
  {
    value: ChampionRole.FIGHTER,
    label: 'Fighters',
  },
  { value: ChampionRole.MAGE, label: 'Mages' },
  {
    value: ChampionRole.MARKSMAN,
    label: 'Marksmen',
  },
  {
    value: ChampionRole.SUPPORT,
    label: 'Supports',
  },
  { value: ChampionRole.TANK, label: 'Tanks' },
];

interface ChampionDifficultyOption {
  value: ChampionDifficultyRanking;
  label: string;
}

const CHAMPION_DIFFICULTY_OPTIONS: ChampionDifficultyOption[] = [
  {
    value: ChampionDifficultyRanking.LOW,
    label: 'LOW',
  },
  {
    value: ChampionDifficultyRanking.MEDIUM,
    label: 'MODERATE',
  },
  {
    value: ChampionDifficultyRanking.HIGH,
    label: 'HIGH',
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

const Section = ({ champions, onSelectActiveChampions }: Props) => {
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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '30px',
        marginTop: '70px',
      }} // TODO: move to styled component
    >
      <Select
        options={championOptions}
        isClearable={true}
        isSearchable={true}
        defaultValue={null}
        styles={difficultySelectStyles} // TODO: add styles
        value={searchValue}
        placeholder={'Search'}
        noOptionsMessage={() => 'No champions found.'}
        onChange={(v: unknown) => {
          const value: ChampionOption | null =
            v instanceof Array ? v[0] : v || null; // FIXME: refactor it
          setSearchValue(value);
        }}
      />

      <div>
        {/* large screen */}
        {[{ value: null, label: 'All' }, ...CHAMPION_ROLE_OPTIONS].map(
          (option) => (
            <RoleButton
              key={option.value || ''}
              selected={
                roleValue
                  ? option.value === roleValue.value
                  : option.value === null
              }
              onClick={() => setRoleValue(option.value ? option : null)}
            >
              {option.label}
            </RoleButton>
          )
        )}
        {/* small screen */}
        {/* TODO: add mobile version here */}
      </div>

      <Select
        options={CHAMPION_DIFFICULTY_OPTIONS.map((o) => ({
          ...o,
        }))}
        value={difficultyValue}
        isClearable={true}
        isSearchable={false}
        styles={difficultySelectStyles}
        placeholder={'All Difficulties'}
        onChange={(v: unknown) => {
          const value: ChampionDifficultyOption | null =
            v instanceof Array ? v[0] : v || null; // FIXME: refactor it
          setDifficultyValue(value);
        }}
      />
    </div>
  );
};

export default Section;
