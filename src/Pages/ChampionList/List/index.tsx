import { ChampionShortData } from '../../../types';
import ChampionComponent from '../Components/Champion';
import { ChampionsList } from './style';

export interface Props {
  champions: ChampionShortData[];
}

const Section = ({ champions }: Props) => {
  return (
    <>
      {champions.length <= 0 ? (
        <div>No champions match the filter criteria.</div>
      ) : (
        <ChampionsList>
          {champions.map(({ id, name }) => {
            return <ChampionComponent key={id} name={name} id={id} />;
          })}
        </ChampionsList>
      )}
    </>
  );
};

export default Section;
