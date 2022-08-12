import { render } from './render-champions.js';
import data from './getData.js';

const toggleDropDownMenu = () => {
  const dropDownContent = document.querySelector('.difficalty-dropdown-content');
  const menu = document.querySelector('.difficalty');
  const arrow = document.querySelector('.difficalty-indicator-arrow');
  dropDownContent.classList.toggle('display-block');
  menu.classList.toggle('menu-is-open');
  arrow.classList.toggle('difficalty-indicator-arrow-open');

  document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target);
    if (!isClickInside) {
      dropDownContent.classList.remove('display-block');
      menu.classList.remove('menu-is-open');
      arrow.classList.remove('difficalty-indicator-arrow-open');
    }
  });
};

const dropDown = () => {
  const controller = document.querySelector('.difficalty-container');
  // const closeIcon = document.querySelector('.difficalty-indicator-clear');
  if (controller) {
    controller.addEventListener('click', () => {
      toggleDropDownMenu();
    });
  }
};

const getDificalty = () => {
  dropDown();
  const menuButtons = document.querySelectorAll('.difficalty-dropdown-content > .difficalty-single-value-container');
  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      const granParentCollection = menuButton.children;
      const granParent = granParentCollection.item(0);
      const parent = granParent.querySelector('.difficalty-value-container');
      const numDificalty = (parent.querySelectorAll('.difficalty-value-item-empty')).length;
      console.log(numDificalty, 'give');
      render(data, 'all', numDificalty);
    });
  });
};

// getDificalty(data);

export default getDificalty;

// export default () => {
//   dropDown();
// };
