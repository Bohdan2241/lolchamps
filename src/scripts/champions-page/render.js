import imagesDataOld from '../getImagesData.js';
import renderChampionPage from '../champion-page/render-champion-page.js';

const getPreviewImage = (name) => {
  const { champions } = imagesDataOld;
  const image = champions.flatMap((champion) => {
    if (champion.name.toLowerCase() === name.toLowerCase()) {
      return champion.previewImage;
    }
    return [];
  });
  return image;
};

const filtersFunctions = {
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
  difficulty: (champion, numDifficulty) => {
    let difficulty = [];
    switch (numDifficulty) {
      case 2:
        difficulty = [0, 1, 2, 3];
        break;
      case 1:
        difficulty = [4, 5, 6, 7];
        break;
      case 0:
        difficulty = [8, 9, 10];
        break;
      default:
        throw new Error(`Unexpected difficulty ${numDifficulty}`);
    }

    return difficulty.includes(champion.info.difficulty) ? champion : false;
  },
  search: (champion, name) => (champion.name === name ? champion : false),
};

const filterItems = (champions, query) => {
  // Остаются только изменённые пользователем фильтры
  const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
  // Фильтрация товаров: каждый товар должен удовлетворять каждому фильтру из списка
  return champions.filter((champion) => activeFilters.every(([filterName, filterValue]) => {
    if (filterName === 'search' && filterValue === '') {
      return champions;
    }
    const match = filtersFunctions[filterName];
    return match(champion, filterValue);
  }));
};

export default (state) => {
  const container = document.querySelector('.champions-list');
  container.innerHTML = '';
  console.log(state.filter);
  const filteredChampions = filterItems(state.champions, state.filter);

  // No champions match the filter criteria.
  const message = document.querySelector('.champions-list-message');
  message.style.display = 'none';
  if (filteredChampions.length === 0) {
    message.style.display = 'block';
    return;
  }

  filteredChampions.forEach((champion, i) => {
    const { name } = champion;
    const imageLink = `${getPreviewImage(name)}`;
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

  renderChampionPage();
};
