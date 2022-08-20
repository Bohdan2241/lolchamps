// eslint-disable-next-line import/no-cycle
import { render } from './render-champions.js';
import data from '../getData.js';

// fix this (close button => toggle)
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

  if (controller) {
    controller.addEventListener('click', () => {
      toggleDropDownMenu();
    });
  }
};

export const resetBgcDifficaltyMenuButtons = () => {
  const menuButtons = document.querySelectorAll('.difficalty-dropdown-content > .difficalty-single-value-container');
  menuButtons.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.style.backgroundColor = 'transparent';
  });
};

const fillDifficaltyIcon = (numDificalty) => {
  const difficaltyMap = {
    2: 1,
    1: 2,
    0: 3,
  };

  const parent = document.querySelector('[data-testid="difficalty-nav:container"]');
  const indicators = parent.children;

  for (let i = 0; i < indicators.length; i += 1) {
    indicators[i].className = '';
    if (i >= difficaltyMap[numDificalty]) {
      indicators[i].classList.add('difficalty-value-item-empty');
    } else {
      indicators[i].classList.add('difficalty-value-item');
    }
  }
};

const filtredDifficaltyContent = (numDificalty) => {
  const difficaltyPlaceholder = document.querySelector('.difficalty-placeholder');
  difficaltyPlaceholder.style.display = 'none';
  const difficaltySingleValue = document.querySelector('.difficalty-single-value');
  difficaltySingleValue.style.display = 'block';
  const difficaltyIndicatorClear = document.querySelector('.difficalty-indicator-clear');
  difficaltyIndicatorClear.style.display = 'flex';

  fillDifficaltyIcon(numDificalty);

  difficaltyIndicatorClear.addEventListener('click', () => {
    difficaltyPlaceholder.style.display = 'block';
    difficaltySingleValue.style.display = 'none';
    difficaltyIndicatorClear.style.display = 'none';

    resetBgcDifficaltyMenuButtons();

    render(data);
  });
};

const filterDifficalty = () => {
  dropDown();

  const menuButtons = document.querySelectorAll('.difficalty-dropdown-content > .difficalty-single-value-container');
  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      const granParentCollection = menuButton.children;
      const granParent = granParentCollection.item(0);
      const parent = granParent.querySelector('.difficalty-value-container');
      const numDificalty = (parent.querySelectorAll('.difficalty-value-item-empty')).length;
      resetBgcDifficaltyMenuButtons();
      // eslint-disable-next-line no-param-reassign
      menuButton.style.backgroundColor = '#41ece457';
      filtredDifficaltyContent(numDificalty);
      render(data, 'all', numDificalty);
    });
  });
};

export default filterDifficalty;
