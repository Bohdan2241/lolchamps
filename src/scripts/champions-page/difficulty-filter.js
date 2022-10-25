import render, { scrollToChampionList } from './render.js';

const toggleDropDownMenu = () => {
  const dropDownContent = document.querySelector('.difficulty-dropdown-content');
  const menu = document.querySelector('.difficulty');
  const arrow = document.querySelector('.difficulty-indicator-arrow');
  dropDownContent.classList.toggle('display-block');
  menu.classList.toggle('menu-is-open');
  arrow.classList.toggle('difficulty-indicator-arrow-open');
};

const dropDown = () => {
  const controller = document.querySelector('.difficulty-container');
  const difficultyIndicatorClear = document.querySelector('.difficulty-indicator-clear');
  const menu = document.querySelector('.difficulty');
  controller.addEventListener('click', (e) => {
    const isClickInside = difficultyIndicatorClear.contains(e.target);
    if (menu.classList.contains('menu-is-open') && isClickInside) {
      toggleDropDownMenu();
    }
    if (isClickInside) return;
    toggleDropDownMenu();
  });
};

const closeDropDownMenu = () => {
  const dropDownContent = document.querySelector('.difficulty-dropdown-content');
  const menu = document.querySelector('.difficulty');
  const arrow = document.querySelector('.difficulty-indicator-arrow');
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('menu-is-open')) {
      const isClickInside = menu.contains(e.target);
      if (!isClickInside) {
        dropDownContent.classList.remove('display-block');
        menu.classList.remove('menu-is-open');
        arrow.classList.remove('difficulty-indicator-arrow-open');
      }
    }
  });
};

export const resetBgcDifficultyMenuButtons = () => {
  const menuButtons = document.querySelectorAll('.difficulty-dropdown-content > .difficulty-single-value-container');
  menuButtons.forEach((item) => {
    // eslint-disable-next-line no-param-reassign
    item.style.backgroundColor = 'transparent';
  });
};

const fillDifficultyIcon = (numDificulty) => {
  const difficultyMap = {
    low: 1,
    moderate: 2,
    high: 3,
  };

  const parent = document.querySelector('[data-testid="difficulty-nav:container"]');
  const indicators = parent.children;

  Array.from(indicators).forEach((indicator, i) => {
    // eslint-disable-next-line no-param-reassign
    indicator.className = '';
    if (i >= difficultyMap[numDificulty]) {
      indicator.classList.add('difficulty-value-item-empty');
    } else {
      indicator.classList.add('difficulty-value-item');
    }
  });
};

const resetDifficultyContent = (state) => {
  const difficultyPlaceholder = document.querySelector('.difficulty-placeholder');
  const difficultySingleValue = document.querySelector('.difficulty-single-value');
  const difficultyIndicatorClear = document.querySelector('.difficulty-indicator-clear');
  difficultyIndicatorClear.addEventListener('click', () => {
    difficultyPlaceholder.style.display = 'block';
    difficultySingleValue.style.display = 'none';
    difficultyIndicatorClear.style.display = 'none';
    // console.log('click');
    resetBgcDifficultyMenuButtons();

    const { filter } = state;
    filter.difficulty = null;
    render(state);
    scrollToChampionList();
  });
};

const filtredDifficultyContent = (numDificulty) => {
  const difficultyPlaceholder = document.querySelector('.difficulty-placeholder');
  difficultyPlaceholder.style.display = 'none';
  const difficultySingleValue = document.querySelector('.difficulty-single-value');
  difficultySingleValue.style.display = 'block';
  const difficultyIndicatorClear = document.querySelector('.difficulty-indicator-clear');
  difficultyIndicatorClear.style.display = 'flex';

  fillDifficultyIcon(numDificulty);
};

export default (state) => {
  dropDown();
  closeDropDownMenu();
  resetDifficultyContent(state);
  const menuButtons = document.querySelectorAll('.difficulty-dropdown-content > .difficulty-single-value-container');
  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      const granParentCollection = menuButton.children;
      const granParent = granParentCollection.item(0);
      const parent = granParent.querySelector('.difficulty-value-container');
      const difficultyLength = (parent.querySelectorAll('.difficulty-value-item-empty')).length;
      const difficultyMap = {
        2: 'low',
        1: 'moderate',
        0: 'high',
      };
      const numDificulty = difficultyMap[difficultyLength];
      resetBgcDifficultyMenuButtons();
      // eslint-disable-next-line no-param-reassign
      menuButton.style.backgroundColor = '#41ece457';
      filtredDifficultyContent(numDificulty);

      const { filter } = state;
      filter.difficulty = numDificulty;
      render(state);
      scrollToChampionList();
    });
  });
};
