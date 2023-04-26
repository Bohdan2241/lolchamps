export type Champion = {
  uid: string;
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

export type ChampionNode = {
  node: {
    publish_details: {
      locale: string;
    };
    uid: string;
    champion_name: string;
    champion_splash: string;
    recommended_roles: string[];
    difficulty: number;
    champion: {
      profile_image: {
        url: string;
      };
    }; // Include properties from Champion type
    url: string;
  };
};

export type ChampionsData = ChampionNode[];

export type ChampionListProps = {
  championsList: ChampionsData;
};

export type ChampionProps = {
  champion: ChampionNode;
};
