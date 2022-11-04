import { htmlEscape } from 'escape-goat';
import render, { scrollToChampionList } from './render.js';

const toggleDropdownContent = (state) => {
  const contentContainer = document.querySelector('.search-dropdown-content');
  contentContainer.classList.toggle('display-block');

  const searchIcon = document.querySelector('.search-value');
  searchIcon.classList.toggle('search-icon-focused');

  const searchInput = document.querySelector('.search-input');
  searchInput.classList.toggle('search-input-focused');

  const searchButton = document.querySelector('.search');
  searchButton.classList.toggle('search-is-focused');

  const searchPlaceholder = document.querySelector('.search-placeholder');
  if (searchPlaceholder.textContent === '' || searchPlaceholder.textContent.toLowerCase() === 'search') {
    searchPlaceholder.classList.toggle('search-placeholder-focused');
  }

  if (state) {
    const { search } = state.uiState;
    search.currentValue = '';
    searchInput.value = search.currentValue;
    searchPlaceholder.style.display = 'block';
  }
};

const searchClear = (state) => {
  const searchClearButton = document.querySelector('.search-indicator-clear');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const contentContainer = document.querySelector('.search-dropdown-content');
  const searchIcon = document.querySelector('.search-value');
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search');

  searchClearButton.addEventListener('click', () => {
    const { search } = state.uiState;
    if (search.open === true) {
      search.open = false;
      toggleDropdownContent();
    }
    search.selectedChampion = null;
    search.currentValue = '';
    const { filter } = state;
    filter.search = null;

    searchClearButton.style.display = 'none';

    searchPlaceholder.style.display = 'block';
    searchPlaceholder.textContent = 'search';
    searchPlaceholder.style.marginRight = '0px';
    searchPlaceholder.classList.remove('search-placeholder-focused');

    contentContainer.innerHTML = '';
    contentContainer.classList.remove('display-block');

    searchIcon.classList.remove('search-icon-focused');

    searchInput.value = search.currentValue;
    searchInput.classList.remove('search-input-focused');

    searchButton.classList.remove('search-is-focused');

    render(state);
    scrollToChampionList();
  });
};

const renderSearchChampion = (state) => {
  const searchButtons = document.querySelectorAll('.search-dropdown-content-item');
  const searchField = document.querySelector('.search-input');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const searchClearButton = document.querySelector('.search-indicator-clear');

  searchButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      const championName = button.textContent;
      searchField.value = '';
      searchPlaceholder.style.display = 'block';
      searchPlaceholder.style.marginRight = '10px';
      searchPlaceholder.textContent = championName;
      searchPlaceholder.classList.remove('search-placeholder-focused');
      searchClearButton.style.display = 'flex';

      const { search } = state.uiState;
      search.selectedChampion = i;
      const { filter } = state;
      filter.search = championName;
      render(state);
      scrollToChampionList();
    });
  });
};

const getButtonsList = (state) => {
  const { search } = state.uiState;
  const dropdawnContent = document.querySelector('.search-dropdown-content');
  dropdawnContent.innerHTML = '';

  const championNamesList = Object.values(state.champions);
  championNamesList.forEach((champion) => {
    const championName = champion.name;
    const championButton = document.createElement('div');
    championButton.classList.add('search-dropdown-content-item');
    championButton.textContent = championName;
    dropdawnContent.append(championButton);
  });

  if (search.selectedChampion !== null) {
    const selectedIndex = search.selectedChampion;
    const searchButtons = document.querySelectorAll('.search-dropdown-content-item');
    searchButtons[selectedIndex].style.backgroundColor = 'rgba(65, 236, 228, 0.34)';
  }
  const hiddenContent = document.createElement('div');
  hiddenContent.classList.add('search-dropdown-empty-content-item');
  hiddenContent.textContent = 'No champions found.';
  dropdawnContent.append(hiddenContent);

  renderSearchChampion(state);
};

const searchListener = (state) => {
  const { search } = state.uiState;
  const searchField = document.querySelector('.search-input');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const searchClearButton = document.querySelector('.search-indicator-clear');

  searchField.addEventListener('keyup', (e) => {
    searchPlaceholder.style.display = 'block';
    if (searchField.value) {
      searchPlaceholder.style.display = 'none';
    }

    const inputText = searchField.value.toLowerCase();
    search.currentValue = htmlEscape(inputText);

    if (e.key === 'Backspace' && search.selectedChampion !== null && search.currentValue === '') {
      if (searchPlaceholder.style.display === 'block') {
        search.selectedChampion = null;
        const { filter } = state;
        filter.search = null;

        searchClearButton.style.display = 'none';
        searchPlaceholder.textContent = 'search';
        searchPlaceholder.classList.add('search-placeholder-focused');
        searchPlaceholder.style.marginRight = '0px';

        render(state);
        getButtonsList(state);
        scrollToChampionList();
        return;
      }
    }

    const championButtons = document.querySelectorAll('.search-dropdown-content-item');
    const currentList = Array.from(championButtons).flatMap((championButton) => {
      const button = championButton;
      const buttonText = championButton.textContent.toLowerCase();
      if (buttonText.includes(search.currentValue)) {
        button.style.display = 'block';
        return championButton;
      }
      button.style.display = 'none';
      return [];
    });

    const hiddenContent = document.querySelector('.search-dropdown-empty-content-item');
    if (currentList.length === 0) {
      hiddenContent.classList.add('display-block');
    } else {
      hiddenContent.classList.remove('display-block');
    }
  });
};

const scrollToSearchList = () => {
  const dropdawnContent = document.querySelector('.search-dropdown-content');
  const { top } = dropdawnContent.getBoundingClientRect();
  window.addEventListener('scroll', () => {
  });
  if (top > 350) {
    dropdawnContent.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
};

const dropdownControl = (state) => {
  const { search } = state.uiState;
  const searchButton = document.querySelector('.search');
  const searchField = document.querySelector('.search-input');

  searchButton.addEventListener('click', (e) => {
    searchField.focus();

    if (search.open === false) {
      const searchClearButton = document.querySelector('.search-indicator-clear');
      const isClickInside = searchClearButton.contains(e.target);
      if (isClickInside) {
        return;
      }

      search.open = true;
      toggleDropdownContent();
      getButtonsList(state);
      scrollToSearchList();
    } else if (search.open === true) {
      search.open = false;
      toggleDropdownContent(state);
    }
  });

  document.addEventListener('click', (e) => {
    const searchPlaceholder = document.querySelector('.search-placeholder');
    const isClickInside = searchButton.contains(e.target);

    if (search.open === true && !isClickInside) {
      if (search.selectedChampion !== null) {
        search.currentValue = '';
        searchField.value = search.currentValue;
        searchPlaceholder.style.display = 'block';
      } else if (search.value !== '') {
        search.currentValue = '';
        searchField.value = search.currentValue;
        searchPlaceholder.style.display = 'block';
      }

      search.open = false;
      toggleDropdownContent();
    }
  });
};

export default (state) => {
  dropdownControl(state);
  searchListener(state);
  searchClear(state);
};
