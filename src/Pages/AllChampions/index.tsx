import { useGetAllChampionsQuery } from '../../services/champion';
import Champion from './Components/Champion';
import { ChampionsList, WrapChampionList } from './style';

const AllChampions = () => {
  const { data, error, isLoading } = useGetAllChampionsQuery();
  let sortedChampions;

  if (data) {
    const champions = Object.values(data.data);
    sortedChampions = champions.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <WrapChampionList>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>Champions {data.version}</h1>
          <ChampionsList>
            {sortedChampions?.map((champion) => (
              <Champion key={champion.id} champion={champion} />
            ))}
          </ChampionsList>
        </>
      ) : null}
    </WrapChampionList>
  );
};

export default AllChampions;
