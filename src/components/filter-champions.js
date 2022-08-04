import { render } from './render-champions.js';
import data from '../data/champions.json' assert { type: "json" };

const tabsContol = () => {
  const buttons = document.querySelectorAll('.role-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('role-active'));
      button.classList.add('role-active');
      const button1 = document.querySelector('.role-active');
      const target = button1.innerHTML.toLowerCase();
      render(data, target);
    });
  });
};

export default () => {
  tabsContol();
};
