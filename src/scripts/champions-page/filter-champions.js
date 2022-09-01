import { render } from './render-champions.js';
import { getChampionsData } from '../getData.js';

const dataDragon = await getChampionsData();

const filterChampions = () => {
  const buttons = document.querySelectorAll('.role-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('role-active'));
      button.classList.add('role-active');
      const activeButton = document.querySelector('.role-active');
      const target = activeButton.innerHTML.toLowerCase();
      render(dataDragon, target);
      // update links list for creating champion's page
      // renderChampionPage(data);
    });
  });
};

export default filterChampions;
