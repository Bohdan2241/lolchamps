// eslint-disable-next-line no-unused-vars
import Swiper, { Autoplay } from 'swiper';
// eslint-disable-next-line import/no-cycle
import { normalizeName } from './render-champion-page.js';

Swiper.use([Autoplay]);

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  direction: 'vertical',
  height: 100,
});

// swiper.autoplay.start();

swiper.on('click', () => {
  const newActiveIndex = swiper.clickedIndex;
  swiper.slideTo(newActiveIndex, 300, true);
});

const createSwipeItems = (name, num, championName, i) => {
  const container = document.querySelector('.skins-swiper-wrapper');

  const item = document.createElement('li');
  item.classList.add('skins-carousel-item', 'swiper-slide');
  if (i === 0) {
    item.classList.add('is-active');
  }
  container.append(item);

  const button = document.createElement('button');
  button.classList.add('skins-carousel-button');
  button.setAttribute('data-test:id', `skins:button-${i}`);
  item.append(button);

  const containerCanvas = document.createElement('div');
  containerCanvas.classList.add('skins-carousel-container-canvas');
  button.append(containerCanvas);

  const canvas = document.createElement('canvas');
  canvas.classList.add('skins-carousel-canvas');
  containerCanvas.append(canvas);

  const wrapperContent = document.createElement('div');
  wrapperContent.classList.add('skins-carousel-item-thumb-wrapper');
  button.append(wrapperContent);

  const wrapperImage = document.createElement('div');
  wrapperImage.classList.add('skins-carousel-item-thumb');
  wrapperContent.append(wrapperImage);

  const championImage = document.createElement('img');
  const src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${num}.jpg`;
  championImage.setAttribute('src', src);
  wrapperImage.append(championImage);

  const label = document.createElement('label');
  label.classList.add('skins-carousel-item-text');
  if (i === 0) {
    label.textContent = championName;
  } else {
    label.textContent = name;
  }
  button.append(label);
};

const createSlideshowItems = (num, championName, i) => {
  const container = document.querySelector('.skins-slideshow');

  const wrapperContent = document.createElement('div');
  wrapperContent.classList.add('skins-slideshow-item');
  if (i === 0) {
    wrapperContent.classList.add('is-active');
  }
  wrapperContent.setAttribute('data-test:id', `skins:image-${i}`);
  container.append(wrapperContent);

  const wrapperImage = document.createElement('div');
  wrapperImage.classList.add('skins-slideshow-item-container');
  wrapperContent.append(wrapperImage);

  const championImage = document.createElement('img');
  championImage.classList.add('skins-slideshow-item-image');
  const src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${num}.jpg`;
  championImage.setAttribute('src', src);
  wrapperImage.append(championImage);
};

const syncSliders = () => {
  const swipeItems = document.querySelectorAll('.skins-carousel-item');
  swipeItems.forEach((swipeItem) => {
    swipeItem.addEventListener('click', () => {
      swipeItems.forEach((item) => item.classList.remove('is-active'));
      swipeItem.classList.add('is-active');

      const backgroundImages = document.querySelectorAll('.skins-slideshow-item');
      const newActiveIndex = swiper.clickedIndex;
      backgroundImages.forEach((item) => item.classList.remove('is-active'));
      backgroundImages[newActiveIndex].classList.add('is-active');
    });
  });
};

const skinsSlider = (dataChampion) => {
  const { skins } = dataChampion;
  const championName = normalizeName(dataChampion.name);

  skins.forEach(({ name, num }, i) => {
    createSwipeItems(name, num, championName, i);
    createSlideshowItems(num, championName, i);

    syncSliders();
  });
};

export const resetSkinsSlider = () => {
  const containerSlideshow = document.querySelector('.skins-slideshow');
  const containerSwiper = document.querySelector('.skins-swiper-wrapper');
  containerSlideshow.innerHTML = '';
  containerSwiper.innerHTML = '';
  // swiper.destroy(true, true);
};

export default skinsSlider;
