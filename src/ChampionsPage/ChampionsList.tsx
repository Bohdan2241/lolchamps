import { Link } from 'react-router-dom';

import routes from '../routes';
import type { ChampionListProps, ChampionProps } from '../types';

function Champion({ champion: { node } }: ChampionProps) {
  return (
    <Link
      to={routes.championPagePath(node.url)}
      className="pr-[3.2%] pt-[3.2%] max-w-1/2 flex-[1_1_50%] group"
    >
      <span
        className="relative block overflow-hidden before:content-[''] before:relative before:block
      before:pt-[112.903%]"
      >
        <img
          src={
            node.champion.profile_image?.url
              ? `${node.champion.profile_image.url}?quality=90&width=250`
              : node.champion_splash
          }
          alt="Champion"
          className="absolute top-0 left-0 object-cover w-full h-full transform scale-105 group-hover:scale-100 transition-transform delay-0 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />
      </span>
      <span className="group-hover:bg-[#006680] text-3.5vw py-[6%] px-[8%] block bg-slate-900 transition-colors delay-0 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
        <span className="tracking-[.08em] text-sm leading-[1.15] italic font-extrabold text-white uppercase whitespace-nowrap font-custom transition-transform delay-0 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-[10px] inline-block">
          {node.champion_name}
        </span>
      </span>
    </Link>
  );
}

function ChampionsList({ championsList }: ChampionListProps) {
  console.log('list render');
  return (
    <div className="mt-[calc(1.3%)] mx-[calc(0.8%)] pl-[3.2%] flex flex-wrap">
      {championsList.map((node) => {
        return <Champion key={node.node.uid} champion={node} />;
      })}
    </div>
  );
}

export default ChampionsList;
