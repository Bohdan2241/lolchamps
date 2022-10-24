import render from './render.js';

// fix this (close button => toggle)
const toggleDropDownMenu = () => {
  const dropDownContent = document.querySelector('.difficulty-dropdown-content');
  const menu = document.querySelector('.difficulty');
  const arrow = document.querySelector('.difficulty-indicator-arrow');
  dropDownContent.classList.toggle('display-block');
  menu.classList.toggle('menu-is-open');
  arrow.classList.toggle('difficulty-indicator-arrow-open');

  document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target);
    if (!isClickInside) {
      dropDownContent.classList.remove('display-block');
      menu.classList.remove('menu-is-open');
      arrow.classList.remove('difficulty-indicator-arrow-open');
    }
  });
};

const dropDown = () => {
  const controller = document.querySelector('.difficulty-container');

  controller.addEventListener('click', () => {
    toggleDropDownMenu();
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

const filtredDifficultyContent = (state, numDificulty) => {
  const difficultyPlaceholder = document.querySelector('.difficulty-placeholder');
  difficultyPlaceholder.style.display = 'none';
  const difficultySingleValue = document.querySelector('.difficulty-single-value');
  difficultySingleValue.style.display = 'block';
  const difficultyIndicatorClear = document.querySelector('.difficulty-indicator-clear');
  difficultyIndicatorClear.style.display = 'flex';

  fillDifficultyIcon(numDificulty);

  difficultyIndicatorClear.addEventListener('click', () => {
    difficultyPlaceholder.style.display = 'block';
    difficultySingleValue.style.display = 'none';
    difficultyIndicatorClear.style.display = 'none';

    resetBgcDifficultyMenuButtons();

    const { filter } = state;
    filter.difficulty = null;
    // console.log(e); fix this extra clicking events
    render(state);
  });
};

const filterDifficulty = (state) => {
  dropDown();

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
      filtredDifficultyContent(state, numDificulty);

      const { filter } = state;
      filter.difficulty = numDificulty;
      render(state);
    });
  });
};

export default filterDifficulty;
