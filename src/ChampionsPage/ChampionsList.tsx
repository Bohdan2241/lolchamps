import { ChampionsListProps } from '../types';
import Champion from './Champion';

function ChampionsList({ championsList }: ChampionsListProps) {
  return (
    <div className="mt-[calc(1.3%)] mx-[calc(0.8%)] pl-[3.2%] flex flex-wrap sm:mt-[calc(4.5%-20px)] sm:mx-[calc(4%-20px)] sm:pl-5">
      {championsList.map((node) => {
        return <Champion key={node.node.uid} champion={node} />;
      })}
    </div>
  );
}

export default ChampionsList;
