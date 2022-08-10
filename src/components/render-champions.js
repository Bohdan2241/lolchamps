import data from './getData.js';
// import { getChampionName } from './render-champion-page.js';

const delayMultiplayer = (extraDelay) => {
  const startDelay = 0;
  return startDelay + extraDelay;
};

const delayStep = 50;
let initial = -(delayStep); // global var!!!

const creatingItems = (champions, container) => {
  // eslint-disable-next-line no-unused-vars
  const creatingItem = champions.forEach((champion) => {
    // console.log(champion);
    const { name } = champion;
    const imageLink = champion.previewImage;
    const championLink = `/${name}`;
    // const championLink = '/champion';
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
      role = 'assasin';
      break;
    case 'fighters':
      role = 'fighter';
      break;
    case 'mages':
      role = 'mage';
      break;
    case 'marksmen':
      role = 'marksman';
      break;
    case 'supports':
      role = 'support';
      break;
    case 'tanks':
      role = 'tank';
      break;
    default:
      throw new Error('Unexpected type');
  }

  return role === champion.role ? champion : false;
});

export const render = (dataChampions, type = 'all') => {
  const { champions } = dataChampions;
  const container = document.querySelector('.champions-list');

  if (container) {
    container.innerHTML = '';

    let sortedArr = defaultSort(champions);
    if (type !== 'all') {
      sortedArr = roleSort(champions, type);
    }

    // No champions match the filter criteria.
    const message = document.querySelector('.champions-list-message');
    message.style.display = 'none';
    if (!sortedArr.length) {
      message.style.display = 'block';
    }

    creatingItems(sortedArr, container);

    // delay global var
    initial = 0;
  }
};

export default () => {
  render(data);
};
