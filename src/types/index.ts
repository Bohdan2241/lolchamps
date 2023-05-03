// export type Champion = {
//   uid: string;
//   champion_name: string;
//   champion_splash: string;
//   recommended_roles: string[];
//   difficulty: number;
//   champion: {
//     profile_image: {
//       url: string;
//     };
//   };
// };

export interface ChampionData {
  node: {
    publish_details: {
      locale: string;
    };
    uid: string;
    url: string;
    champion_name: string;
    champion_splash: string;
    recommended_roles: string[];
    difficulty: number;
    champion: {
      profile_image: {
        url: string;
      };
    };
  };
}

export type ChampionsList = ChampionData[];

export type ChampionsListProps = {
  championsList: ChampionsList;
};

export type ChampionDataProps = {
  champion: ChampionData;
};
