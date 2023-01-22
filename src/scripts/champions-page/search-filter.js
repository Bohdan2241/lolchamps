import render, { scrollToChampionList } from './render.js';

// const mobileMediaQuery = window.matchMedia('(max-width: 500px)');

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
  const searchClearButton = document.querySelector('.search .dropdown-indicator-clear');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const contentContainer = document.querySelector('.search-dropdown-content');
  const searchIcon = document.querySelector('.search-value');
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-container');
  const searchDropdownControl = document.querySelector('.search-container .dropdown-control');

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

    searchButton.classList.remove('active');

    searchDropdownControl.classList.remove('search-is-focused');

    render(state);
    scrollToChampionList();
  });
};

const renderSearchChampion = (state) => {
  const searchButtons = document.querySelectorAll('.search-dropdown-content-item');
  const searchField = document.querySelector('.search-input');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const searchClearButton = document.querySelector('.search .dropdown-indicator-clear');

  searchButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      const championName = button.textContent;
      searchField.value = '';
      searchPlaceholder.style.display = 'block';
      searchPlaceholder.style.marginRight = '15px';
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
  const dropdownContent = document.querySelector('.search-dropdown-content');
  dropdownContent.innerHTML = '';

  const championNamesList = Object.values(state.champions);
  const sortedList = championNamesList.sort((a, b) => a.name.localeCompare(b.name));
  sortedList.forEach((champion) => {
    const championName = champion.name;
    const championButton = document.createElement('div');
    championButton.classList.add('search-dropdown-content-item');
    championButton.textContent = championName;
    dropdownContent.append(championButton);
  });

  if (search.selectedChampion !== null) {
    const selectedIndex = search.selectedChampion;
    const searchButtons = document.querySelectorAll('.search-dropdown-content-item');
    searchButtons[selectedIndex].classList.add('selected-option');
  }
  const hiddenContent = document.createElement('div');
  hiddenContent.classList.add('search-dropdown-empty-content-item');
  hiddenContent.textContent = 'No champions found.';
  dropdownContent.append(hiddenContent);

  renderSearchChampion(state);
};

const searchListener = (state) => {
  const { search } = state.uiState;
  const searchField = document.querySelector('.search-input');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const searchClearButton = document.querySelector('.search .dropdown-indicator-clear');

  searchField.addEventListener('keyup', (e) => {
    searchPlaceholder.style.display = 'block';
    if (searchField.value) {
      searchPlaceholder.style.display = 'none';
    }

    const inputText = searchField.value.toLowerCase();
    search.currentValue = inputText;

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
  const dropdownContent = document.querySelector('.search-dropdown-content');
  const { top } = dropdownContent.getBoundingClientRect();
  window.addEventListener('scroll', () => {
  });
  if (top > 350) {
    dropdownContent.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }
};

const dropdownControl = (state) => {
  const { search } = state.uiState;
  const searchButton = document.querySelector('.search-container');
  const searchField = document.querySelector('.search-input');

  searchButton.addEventListener('click', (e) => {
    searchField.focus();

    if (search.open === false) {
      const searchClearButton = document.querySelector('.search .dropdown-indicator-clear');
      const isClickInside = searchClearButton.contains(e.target);
      if (isClickInside) {
        return;
      }

      if (!searchButton.classList.contains('active')) {
        searchButton.classList.add('active');
      }

      search.open = true;
      toggleDropdownContent();
      getButtonsList(state);
      scrollToSearchList();
    } else if (search.open === true) {
      search.open = false;

      if (search.selectedChampion === null) {
        searchButton.classList.remove('active');
      }

      toggleDropdownContent(state);
    }
  });

  document.addEventListener('click', (e) => {
    const searchPlaceholder = document.querySelector('.search-placeholder');
    const isClickInside = searchButton.contains(e.target);

    if (search.open === true && !isClickInside) {
      if (search.selectedChampion !== null || search.value !== '') {
        search.currentValue = '';
        searchField.value = search.currentValue;
        searchPlaceholder.style.display = 'block';
      }
      if (search.selectedChampion === null) {
        searchButton.classList.remove('active');
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
