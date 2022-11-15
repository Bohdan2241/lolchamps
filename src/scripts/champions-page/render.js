import imagesDataOld from '../utility/getImagesData.js';
import normalizeName from '../utility/normalizeName.js';
import renderChampionPage from '../champion-page/render-champion-page.js';

const getPreviewImage = (id, champions) => {
  const image = champions.flatMap((champion) => {
    const championId = normalizeName(champion.name);
    if (championId.toLowerCase() === id.toLowerCase()) {
      return champion.previewImage;
    }
    return [];
  });
  return image;
};

const filterFunctions = {
  role: (champion, role) => {
    let targetRole = '';
    switch (role) {
      case 'assasins':
        targetRole = 'Assassin';
        break;
      case 'fighters':
        targetRole = 'Fighter';
        break;
      case 'mages':
        targetRole = 'Mage';
        break;
      case 'marksmen':
        targetRole = 'Marksman';
        break;
      case 'supports':
        targetRole = 'Support';
        break;
      case 'tanks':
        targetRole = 'Tank';
        break;
      default:
        throw new Error(`Unexpected type ${role}`);
    }
    return champion.tags.includes(targetRole) ? champion : false;
  },
  difficulty: (champion, difficulty) => {
    let targetDifficulty = [];
    switch (difficulty) {
      case 'low':
        targetDifficulty = [0, 1, 2, 3];
        break;
      case 'moderate':
        targetDifficulty = [4, 5, 6, 7];
        break;
      case 'high':
        targetDifficulty = [8, 9, 10];
        break;
      default:
        throw new Error(`Unexpected difficulty ${difficulty}`);
    }
    return targetDifficulty.includes(champion.info.difficulty) ? champion : false;
  },
  search: (champion, name) => (champion.name === name ? champion : false),
};

const filterItems = (champions, query) => {
  const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
  return champions.filter((champion) => activeFilters.every(([filterName, filterValue]) => {
    const match = filterFunctions[filterName];
    return match(champion, filterValue);
  }));
};

export const scrollToChampionList = () => {
  const nav = document.querySelector('.main-nav');
  const { top } = nav.getBoundingClientRect();
  if (top > 240) {
    window.scrollTo({
      top: nav.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export default async (state) => {
  const container = document.querySelector('.champions-list');
  container.innerHTML = '';

  const filteredChampions = filterItems(state.champions, state.filter);
  const sortedChampions = filteredChampions.sort((a, b) => a.name.localeCompare(b.name));

  // No champions match the filter criteria.
  const message = document.querySelector('.champions-list-message');
  message.style.display = 'none';
  if (sortedChampions.length === 0) {
    message.style.display = 'block';
    return;
  }
  const { champions } = await imagesDataOld();

  sortedChampions.forEach((champion, i) => {
    const { id, name } = champion;
    const imageLink = getPreviewImage(id, champions);
    const championLink = `/${name}`;
    const delay = i * 50;

    const itemLink = document.createElement('a');
    itemLink.classList.add('champions-list-item', 'champions-list-item-hidden');
    itemLink.setAttribute('href', championLink);
    itemLink.setAttribute('delay', delay);
    container.append(itemLink);
    setTimeout(() => {
      itemLink.classList.add('champions-list-item-visibile');
      itemLink.classList.remove('champions-list-item-hidden');
    }, delay);

    const itemImageContainer = document.createElement('span');
    itemImageContainer.classList.add('item-image-container');
    itemLink.append(itemImageContainer);

    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.setAttribute('src', imageLink);
    itemImageContainer.append(itemImage);

    const itemName = document.createElement('span');
    itemName.classList.add('item-name');
    itemLink.append(itemName);

    const itemText = document.createElement('span');
    itemText.classList.add('item-text');
    itemText.textContent = name;
    itemName.append(itemText);
  });

  renderChampionPage(state);
};
