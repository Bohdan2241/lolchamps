import { render } from './render-champions.js';
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
    });
  });
};

export default () => {
  tabsContol();
};
