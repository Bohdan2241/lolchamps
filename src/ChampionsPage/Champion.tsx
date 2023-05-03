import { Link } from 'react-router-dom';

import routes from '../routes';
import { ChampionDataProps } from '../types';

const imageSettings = '?quality=90&width=250';

function Champion({ champion: { node } }: ChampionDataProps) {
  return (
    <Link
      to={routes.championPagePath(node.url)}
      className="pr-[3.2%] pt-[3.2%] text-[3.5vw] max-w-1/2 flex-[1_1_50%] group min-[521px]:max-w-[33.3%] min-[521px]:basis-1/3 min-[521px]:text-[16px] sm:pr-5 sm:pt-5 min-[751px]:text-[18px] min-[751px]:basis-1/4 min-[751px]:max-w-[25%] min-[1001px]:basis-1/5 min-[1001px]:max-w-[20%]"
    >
      <span
        className="relative block overflow-hidden before:content-[''] before:relative before:block
      before:pt-[112.903%] after:content-[''] after:absolute after:bg-white after:top-0 after:right-0 after:w-[11%] after:pt-[11%] after:transition-transform after:duration-500 after:ease-in-out after:transform after:translate-x-1/2 after:-translate-y-1/2 after:rotate-45 group-hover:after:transform group-hover:after:translate-x-full group-hover:after:-translate-y-full group-hover:after:rotate-45"
      >
        <img
          src={
            node.champion.profile_image?.url
              ? `${node.champion.profile_image.url}${imageSettings}`
              : node.champion_splash
          }
          alt="Champion"
          className="absolute top-0 left-0 object-cover w-full h-full transform scale-105 group-hover:scale-[1.01] transition-transform delay-0 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />
      </span>
      <span className="group-hover:bg-[#006680] overflow-hidden py-[6%] px-[8%] block bg-slate-900 transition-colors delay-0 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
        <span className="tracking-[.08em] text-sm min-[600px]:text-[20px] leading-[1.15] italic font-extrabold text-white uppercase whitespace-nowrap font-custom transition-transform delay-0 duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-[10px] inline-block">
          {node.champion_name}
        </span>
      </span>
    </Link>
  );
}

export default Champion;
