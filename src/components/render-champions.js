import data from '../data/champions.json' assert { type: "json" };

// const delayMultiplayer = (extraDelay) => {
//   const startDelay = 0;
//   return startDelay + extraDelay;
// };
// let initial = 0; // global var!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! remove this

const creatingItems = (champions, container) => {
  // eslint-disable-next-line no-unused-vars
  const creatingItem = champions.forEach((champion) => {
    const { name } = champion;
    const imageLink = champion.image;

    const a = document.createElement('a');
    a.classList.add('champions-list-item', 'champions-list-item-hidden');
    // const delayStep = 10;
    // const newDelay = delayMultiplayer(initial += delayStep);
    // a.setAttribute('delay', newDelay);
    container.append(a);
    setTimeout(() => {
      a.classList.add('champions-list-item-visibile');
      a.classList.remove('champions-list-item-hidden');
    }, 150);

    const span1 = document.createElement('span');
    span1.classList.add('item-image-container');
    a.append(span1);

    const image = document.createElement('img');
    image.classList.add('item-image');
    image.setAttribute('src', imageLink);
    span1.append(image);

    const span2 = document.createElement('span');
    span2.classList.add('item-name');
    a.append(span2);

    const span3 = document.createElement('span');
    span3.classList.add('item-text');
    span3.textContent = name;
    span2.append(span3);
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
  const container = document.querySelector('.champions-list');
  container.innerHTML = '';
  const { champions } = dataChampions;
  let sortedArr = defaultSort(champions);
  if (type !== 'all') {
    sortedArr = roleSort(champions, type);
  }

  const message = document.querySelector('.champions-list-message');
  message.style.display = 'none';
  if (!sortedArr.length) {
    message.style.display = 'block';
  }
  creatingItems(sortedArr, container);
};

export default () => {
  render(data);
};
