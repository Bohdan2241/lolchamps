import { getChampionsData } from '../utility/getData.js';
import localeSwitcher from '../header/localeSwitcher.js';
import render from './render.js';
import roleFilter from './role-filter.js';
import difficultyFilter from './difficulty-filter.js';
import searchFilter from './search-filter.js';
// import mainNavCanvas from './main-nav-canvas.js';

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
    uiState: {
      search: {
        currentValue: '',
        selectedChampion: null,
        open: false,
      },
      role: {
        selectedRole: null,
        open: false,
      },
      difficulty: {
        selectedDifficulty: null,
        open: false,
      },
    },
  };

  searchFilter(state);
  roleFilter(state);
  difficultyFilter(state);

  // mainNavCanvas();
  localeSwitcher();
  render(state);
};
