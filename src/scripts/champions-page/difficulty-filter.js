import render, { scrollToChampionList } from './render.js';
import { fillDifficultyIcon } from '../utility/fillDifficultyIcon.js';

const toggleDropdownContent = () => {
  const dropDownContent = document.querySelector('.difficulty-dropdown-content');
  const menu = document.querySelector('.difficulty');
  const arrow = document.querySelector('.difficulty-indicator-arrow');
  dropDownContent.classList.toggle('display-block');
  menu.classList.toggle('menu-is-open');
  arrow.classList.toggle('difficulty-indicator-arrow-open');
};

const dropdownControl = (state) => {
  const { difficulty } = state.uiState;
  const controller = document.querySelector('.difficulty-container');
  const difficultyIndicatorClear = document.querySelector('.difficulty-indicator-clear');
  const menu = document.querySelector('.difficulty');

  controller.addEventListener('click', (e) => {
    if (difficulty.open === false) {
      const isClickInside = difficultyIndicatorClear.contains(e.target);
      if (isClickInside) {
        return;
      }

      difficulty.open = true;
      toggleDropdownContent();
    } else if (difficulty.open === true) {
      difficulty.open = false;
      toggleDropdownContent();
    }
  });

  document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target);
    if (difficulty.open === true && !isClickInside) {
      difficulty.open = false;
      toggleDropdownContent();
    }
  });
};

const resetBgcDifficultyMenuButtons = () => {
  const menuButtons = document.querySelectorAll('.difficulty-dropdown-content > .difficulty-single-value-container');
  menuButtons.forEach((item) => {
    const button = item;
    button.classList.remove('selected-option');
  });
};

const difficultyClear = (state) => {
  const difficultyPlaceholder = document.querySelector('.difficulty-placeholder');
  const difficultySingleValue = document.querySelector('.difficulty-single-value');
  const difficultyIndicatorClear = document.querySelector('.difficulty-indicator-clear');

  difficultyIndicatorClear.addEventListener('click', () => {
    const { difficulty } = state.uiState;
    if (difficulty.open === true) {
      difficulty.open = false;
      toggleDropdownContent();
    }
    difficulty.selectedDifficulty = null;
    const { filter } = state;
    filter.difficulty = null;

    difficultyPlaceholder.style.display = 'block';
    difficultySingleValue.style.display = 'none';
    difficultyIndicatorClear.style.display = 'none';
    resetBgcDifficultyMenuButtons();

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

  const container = document.querySelector('[data-testid="difficulty-nav:container"]');
  fillDifficultyIcon(numDificulty, container);
};

const difficultyListener = (state) => {
  const menuButtons = document.querySelectorAll('.difficulty-dropdown-content > .difficulty-single-value-container');

  menuButtons.forEach((menuButton, i) => {
    menuButton.addEventListener('click', () => {
      const grandParentCollection = menuButton.children;
      const grandParent = grandParentCollection[0];
      const parent = grandParent.querySelector('.difficulty-value-container');
      const difficultyLength = (parent.querySelectorAll('.difficulty-value-item-empty')).length;
      const difficultyMap = {
        2: 'low',
        1: 'moderate',
        0: 'high',
      };
      const numDificulty = difficultyMap[difficultyLength];
      resetBgcDifficultyMenuButtons();
      menuButton.classList.add('selected-option');
      filtredDifficultyContent(numDificulty);

      const { difficulty } = state.uiState;
      difficulty.selectedDifficulty = i;
      const { filter } = state;
      filter.difficulty = numDificulty;
      render(state);
      scrollToChampionList();
    });
  });
};

export default (state) => {
  dropdownControl(state);
  difficultyListener(state);
  difficultyClear(state);
};
