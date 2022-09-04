import { render } from './render-champions.js';
import { getChampionsData } from '../getData.js';
import normalizeName from '../champion-page/normalizeName.js';

const dataDragon = await getChampionsData();

const searchClear = (dataChampions) => {
  const searchClearButton = document.querySelector('.search-indicator-clear');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  searchClearButton.addEventListener('click', () => {
    searchClearButton.style.display = 'none';
    searchPlaceholder.textContent = 'search';
    searchPlaceholder.style.marginRight = '0px';

    render(dataChampions);
  });
};

const renderSearchChampion = (dataChampions) => {
  const { data } = dataChampions;
  const searchButtons = document.querySelectorAll('.search-dropdown-content-item');
  const search = document.querySelector('.search-input');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const searchClearButton = document.querySelector('.search-indicator-clear');
  searchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // const championButtons = document.querySelectorAll('.search-dropdown-content-item');
      searchButtons.forEach((championButton) => {
        const buttonUpdate = championButton;
        buttonUpdate.style.display = 'block';
      });

      const chosenChampionName = button.textContent;
      search.value = '';
      searchPlaceholder.style.display = 'block';
      searchPlaceholder.style.marginRight = '10px';
      searchPlaceholder.textContent = chosenChampionName;
      searchPlaceholder.classList.remove('search-placeholder-focused');
      searchClearButton.style.display = 'flex';

      const name = normalizeName(chosenChampionName);
      const objForRender = {
        data: data[name],
      };
      render(objForRender, 'all', 'all', true);
    });
  });
};

const toggleDropdownContent = () => {
  const searchButton = document.querySelector('.search-container');
  const contentContainer = document.querySelector('.search-dropdown-content');
  contentContainer.classList.toggle('display-block');

  const searchIcon = document.querySelector('.search-value');
  searchIcon.classList.toggle('search-icon-focused');

  const searchInput = document.querySelector('.search-input');
  searchInput.classList.toggle('search-input-focused');

  const search = document.querySelector('.search');
  search.classList.toggle('search-is-focused');

  const searchPlaceholder = document.querySelector('.search-placeholder');
  if (searchPlaceholder.textContent === '' || searchPlaceholder.textContent.toLocaleLowerCase() === 'search') {
    searchPlaceholder.classList.toggle('search-placeholder-focused');
  }

  document.addEventListener('click', (e) => {
    const isClickInside = searchButton.contains(e.target);
    if (!isClickInside) {
      contentContainer.classList.remove('display-block');
      searchIcon.classList.remove('search-icon-focused');
      searchInput.classList.remove('search-input-focused');
      search.classList.remove('search-is-focused');
      searchPlaceholder.classList.remove('search-placeholder-focused');
    }
  });
};

const searchChampion = (dataChampions) => {
  const { data } = dataChampions;
  const searchButton = document.querySelector('.search-container');
  const contentContainer = document.querySelector('.search-dropdown-content');
  const search = document.querySelector('.search-input');

  searchButton.addEventListener('click', () => {
    toggleDropdownContent();
    search.focus();

    if (!contentContainer.children.length) {
      const championNamesList = Object.values(data);
      championNamesList.forEach((champion) => {
        const championName = champion.name;
        const championButton = document.createElement('div');
        championButton.classList.add('search-dropdown-content-item');
        championButton.textContent = championName;
        contentContainer.append(championButton);
      });
      const hiddenContent = document.createElement('div');
      hiddenContent.classList.add('search-dropdown-empty-content-item');
      hiddenContent.textContent = 'No champions found.';
      contentContainer.append(hiddenContent);
      renderSearchChampion(dataChampions, 'all', 'all', true);
    }
  });

  search.addEventListener('keyup', (e) => {
    const searchInput = document.querySelector('.search-input');
    const searchPlaceholder = document.querySelector('.search-placeholder');
    searchPlaceholder.style.display = 'block';
    if (searchInput.value) {
      searchPlaceholder.style.display = 'none';
    }

    const text = e.target.value.toLowerCase();
    const championButtons = document.querySelectorAll('.search-dropdown-content-item');
    const arr = [...championButtons].flatMap((championButton) => {
      const button = championButton;

      const buttonText = championButton.textContent.toLocaleLowerCase();
      if (buttonText.includes(text)) {
        button.style.display = 'block';
        return championButton;
      }
      button.style.display = 'none';

      return [];
    });

    if (arr.length === 0) {
      const hiddenContent = document.querySelector('.search-dropdown-empty-content-item');
      hiddenContent.style.display = 'block';
    } else {
      const hiddenContent = document.querySelector('.search-dropdown-empty-content-item');
      hiddenContent.style.display = 'none';
    }
  });

  searchClear(dataChampions);
};

export const resetSearchInput = () => {
  const searchClearButton = document.querySelector('.search-indicator-clear');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  searchClearButton.style.display = 'none';
  searchPlaceholder.textContent = 'search';
  searchPlaceholder.style.marginRight = '0px';
};

export default () => {
  searchChampion(dataDragon);
};
