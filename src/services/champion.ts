// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AllChampionsData, ChampionData } from '../types';

// TODO: check new version (13.12.1) & lang
export const championApi = createApi({
  reducerPath: 'championApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/',
  }),
  endpoints: (builder) => ({
    getChampionByName: builder.query<ChampionData, string>({
      query: (name) => `champion/${name}.json`,
    }),
    getAllChampions: builder.query<AllChampionsData, void>({
      query: () => 'champion.json',
    }),
  }),
});

export const { useGetChampionByNameQuery, useGetAllChampionsQuery } =
  championApi;
