// import _ from 'lodash';
import { getChampionsData } from '../getData.js';
import imagesDataOld from '../getImagesData.js';
// eslint-disable-next-line import/no-cycle
import renderChampionPage from '../champion-page/render-champion-page.js';

const dataDragon = await getChampionsData();

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

const delayMultiplayer = (extraDelay) => {
  const startDelay = 0;
  return startDelay + extraDelay;
};

const delayStep = 50;
let initial = -(delayStep); // global var!!!

const creatingItems = (champions, container) => {
  champions.forEach((champion) => {
    const { name } = champion;
    const imageLink = `${getPreviewImage(name)}`;
    const championLink = `/${name}`;
    const delay = delayMultiplayer(initial += delayStep);

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
};

const defaultSort = (champions) => champions.sort((a, b) => a.name.localeCompare(b.name));

const roleSort = (champions, type) => champions.filter((champion) => {
  let role = '';
  switch (type) {
    case 'assasins':
      role = 'Assassin';
      break;
    case 'fighters':
      role = 'Fighter';
      break;
    case 'mages':
      role = 'Mage';
      break;
    case 'marksmen':
      role = 'Marksman';
      break;
    case 'supports':
      role = 'Support';
      break;
    case 'tanks':
      role = 'Tank';
      break;
    default:
      throw new Error(`Unexpected type ${type}`);
  }

  return champion.tags.includes(role) ? champion : false;
});

const difficultySort = (champions, numDifficulty) => champions.filter((champion) => {
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
});

// eslint-disable-next-line no-unused-vars
export const render = (dataChampions, type = 'all', difficulty = 'all', search = false) => {
  const { data } = dataChampions;
  // console.log(data, Object.values(data));
  const champions = search ? data : Object.values(data);

  const container = document.querySelector('.champions-list');

  if (container) {
    container.innerHTML = '';

    let sortedArr = [];
    if (!champions.name) {
      sortedArr = defaultSort(champions);
    } else {
      sortedArr.push(champions);
    }
    if (type !== 'all') {
      sortedArr = roleSort(champions, type);
    }
    if (difficulty !== 'all') {
      sortedArr = difficultySort(champions, difficulty);
    } // fix work of 3 filters

    // No champions match the filter criteria.
    const message = document.querySelector('.champions-list-message');
    message.style.display = 'none';
    if (!sortedArr.length) {
      message.style.display = 'block';
    }
    creatingItems(sortedArr, container);
    renderChampionPage();
    // delay global var
    initial = 0;
  }
};

export default () => {
  render(dataDragon);
};
