import { useState } from 'react';
import Select from 'react-select';

import { useGetAllChampionsQuery } from '../../services/champion';
import { ChampionRole } from '../../types';
import levelToRanking from '../../utils/levelToRanking';
import Champion from './Components/Champion';
import { ChampionsList, WrapChampionList } from './style';

const difficultyOptions = [
  { value: 'low', label: 'low' },
  { value: 'moderate', label: 'moderate' },
  { value: 'high', label: 'high' },
];

const RoleButton = ({ role, handleRoleChange }) => (
  <button onClick={handleRoleChange(role)}>{role}</button>
);

const AllChampions = () => {
  const { data, error, isLoading } = useGetAllChampionsQuery();
  const [selectedRole, setSelectedRole] = useState(ChampionRole.All);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const champions = Object.values(data?.data || {});
  const sortedChampions = champions.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleRoleChange = (role: ChampionRole) => () => {
    setSelectedRole(role);
  };

  const filteredChampions = sortedChampions.filter((champion) => {
    const roleMatch =
      selectedRole === ChampionRole.All || champion.tags.includes(selectedRole);
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
              {Object.values(ChampionRole).map((role) => (
                <RoleButton
                  key={role}
                  role={role}
                  handleRoleChange={handleRoleChange}
                />
              ))}
            </div>

            <Select
              options={difficultyOptions}
              isClearable={true}
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
