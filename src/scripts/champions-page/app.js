import { getChampionsData } from '../getData.js';
import render from './render.js';
import roleFilter from './role-filter.js';
import difficultyFilter from './difficulty-filter.js';
import searchFilter from './search-filter.js';
import mainNavCanvas from './main-nav-canvas.js';

export default async () => {
  const dataDragon = await getChampionsData();
  const dataChampions = Object.values(dataDragon.data);
  const state = {
    champions: dataChampions,
    filter: {
      role: null,
      difficulty: null,
      search: null,
    },
  };

  searchFilter(state);
  roleFilter(state);
  difficultyFilter(state);

  mainNavCanvas();
  render(state);
};
