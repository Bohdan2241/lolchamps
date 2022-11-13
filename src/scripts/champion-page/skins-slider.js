import Swiper, { Autoplay } from 'swiper';
import skinsCanvas from './skins-canvas.js';

const swiper = new Swiper('.swiper', {
  modules: [Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  direction: 'vertical',
  height: 100,
  slideActiveClass: 'swiper-slide-active is-active',
  slideToClickedSlide: true,
});

swiper.autoplay.stop();

swiper.on('slideChange', () => {
  const backgroundImages = document.querySelectorAll('.skins-slideshow-item');
  const newActiveIndex = swiper.activeIndex;
  backgroundImages.forEach((item) => item.classList.remove('is-active'));
  backgroundImages[newActiveIndex].classList.add('is-active');
});

const createSwipeItems = (name, num, championName, firstSkinName, i) => {
  const container = document.querySelector('.skins-swiper-wrapper');

  const item = document.createElement('li');
  item.classList.add('skins-carousel-item', 'swiper-slide');
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
    label.textContent = firstSkinName;
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

const skinsSlider = (dataChampion) => {
  const { skins } = dataChampion;
  const firstSkinName = dataChampion.name;
  const { id } = dataChampion;

  skins.forEach(({ name, num }, i) => {
    createSwipeItems(name, num, id, firstSkinName, i);
    createSlideshowItems(num, id, i);
  });

  skinsCanvas();

  window.addEventListener('scroll', () => {
    const skinsSection = document.querySelector('.skins');
    const skinsSectionTop = skinsSection.getBoundingClientRect().top;
    if (skinsSectionTop <= (window.innerHeight || document.documentElement.clientHeight)) {
      setTimeout(() => {
        swiper.autoplay.start();
      }, 2000);
    }
  });
};

export const resetSkinsSlider = () => {
  const containerSlideshow = document.querySelector('.skins-slideshow');
  const containerSwiper = document.querySelector('.skins-swiper-wrapper');
  containerSlideshow.innerHTML = '';
  containerSwiper.innerHTML = '';
};

export default skinsSlider;
