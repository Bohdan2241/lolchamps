import { render } from './render-champions.js';
import { getChampionName } from './render-champion-page.js';
import data from './getData.js';

const tabsContol = () => {
  const buttons = document.querySelectorAll('.role-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('role-active'));
      button.classList.add('role-active');
      const activeButton = document.querySelector('.role-active');
      const target = activeButton.innerHTML.toLowerCase();
      render(data, target);
      // update links list for creating champion's page
      getChampionName();
    });
  });
};

export default () => {
  tabsContol();
};
