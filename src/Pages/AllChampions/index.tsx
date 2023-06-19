import { useState } from 'react';
import Select from 'react-select';

import { useGetAllChampionsQuery } from '../../services/champion';
import { ChampionRoleButtons } from '../../types';
import levelToRanking from '../../utils/levelToRanking';
import Champion from './Components/Champion';
import {
  difficultySelectOptions,
  difficultySelectStyles,
} from './difficultySelectData';
import { ChampionsList, WrapChampionList } from './style';

type RoleButtonProps = {
  role: ChampionRoleButtons;
  handleRoleChange: (role: ChampionRoleButtons) => void;
};

const RoleButton = ({ role, handleRoleChange }: RoleButtonProps) => (
  <button onClick={handleRoleChange(role)}>{role}</button>
);

const AllChampions = () => {
  const { data, error, isLoading } = useGetAllChampionsQuery();
  const [selectedRole, setSelectedRole] = useState(ChampionRoleButtons.All);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const champions = Object.values(data?.data || {});
  const sortedChampions = champions.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleRoleChange = (role: ChampionRoleButtons) => () => {
    setSelectedRole(role);
  };

  const filteredChampions = sortedChampions.filter((champion) => {
    const roleMatch =
      selectedRole === ChampionRoleButtons.All ||
      champion.tags.includes(selectedRole);
    const difficultyMatch =
      selectedDifficulty === null ||
      selectedDifficulty.value === levelToRanking(champion.info.difficulty);

    return roleMatch && difficultyMatch;
  });

  return (
    <WrapChampionList>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div style={{ display: 'flex' }}>
            <div className="role-buttons">
              {Object.values(ChampionRoleButtons).map((role) => (
                <RoleButton
                  key={role}
                  role={role}
                  handleRoleChange={handleRoleChange}
                />
              ))}
            </div>

            <Select
              options={difficultySelectOptions}
              isClearable={true}
              isSearchable={false}
              styles={difficultySelectStyles}
              placeholder={'All Difficulties'}
              value={selectedDifficulty}
              onChange={(selectedOption) =>
                setSelectedDifficulty(selectedOption || null)
              }
            />
          </div>
          <ChampionsList>
            {filteredChampions?.map((champion) => (
              <Champion key={champion.id} champion={champion} />
            ))}
          </ChampionsList>
        </>
      ) : null}
    </WrapChampionList>
  );
};

export default AllChampions;
