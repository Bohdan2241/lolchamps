// import { cloneDeep } from 'lodash';
import data from './getData.js';

const getChampionInfo = (championName, dataChampions) => {
  const { champions } = dataChampions;
  const filterChampion = champions.filter((champion) => champion.name === championName);
  return filterChampion[0];
};

export const renderChampionPage = (dataChampions) => {
  const links = document.querySelectorAll('.champions-list-item');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const championName = link.querySelector('.item-text').textContent;
      const championObj = getChampionInfo(championName, dataChampions);
      console.log(championObj);
    });
  });
};

export default () => {
  renderChampionPage(data);
};
