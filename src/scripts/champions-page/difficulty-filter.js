import render, { scrollToChampionList } from './render.js';
import fillDifficultyIcon from '../utility/fillDifficultyIcon.js';
import resetBackgroundMenuButtons from '../utility/resetBackgroundMenuButtons.js';
import dropdown from '../utility/dropdown.js';

const toggleDropdownContent = () => {
  const dropDownContent = document.querySelector('.difficulty-dropdown-content');
  const menu = document.querySelector('.difficulty');
  const arrow = document.querySelector('.difficulty .dropdown-indicator-arrow');
  dropDownContent.classList.toggle('display-block');
  menu.classList.toggle('menu-is-open');
  arrow.classList.toggle('indicator-arrow-open');
};

const dropdownControl = (state) => {
  const { difficulty } = state.uiState;
  dropdown(difficulty, 'difficulty-container', 'difficulty', toggleDropdownContent);
};

const difficultyClear = (state) => {
  const difficultyPlaceholder = document.querySelector('.difficulty-placeholder');
  const difficultySingleValue = document.querySelector('.difficulty-single-value');
  const difficultyIndicatorClear = document.querySelector('.difficulty .dropdown-indicator-clear');
  const menuButtons = document.querySelectorAll('.difficulty-dropdown-content > .difficulty-single-value-container');

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

    resetBackgroundMenuButtons(menuButtons);

    render(state);
    scrollToChampionList();
  });
};

const filteredDifficultyContent = (numDifficulty) => {
  const difficultyPlaceholder = document.querySelector('.difficulty-placeholder');
  difficultyPlaceholder.style.display = 'none';
  const difficultySingleValue = document.querySelector('.difficulty-single-value');
  difficultySingleValue.style.display = 'block';
  const difficultyIndicatorClear = document.querySelector('.difficulty .dropdown-indicator-clear');
  difficultyIndicatorClear.style.display = 'flex';

  const container = document.querySelector('[data-testid="difficulty-nav:container"]');
  fillDifficultyIcon(numDifficulty, container);
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
      const numDifficulty = difficultyMap[difficultyLength];
      resetBackgroundMenuButtons(menuButtons);
      menuButton.classList.add('selected-option');
      filteredDifficultyContent(numDifficulty);

      const { difficulty } = state.uiState;
      difficulty.selectedDifficulty = i;
      const { filter } = state;
      filter.difficulty = numDifficulty;
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
