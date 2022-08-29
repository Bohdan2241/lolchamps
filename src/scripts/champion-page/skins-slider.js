/* eslint-disable no-unused-vars */
import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  height: 100,
});

swiper.on('click', () => {
  const newActiveIndex = swiper.clickedIndex;
  swiper.slideTo(newActiveIndex, 300, true);
});

const createSwipeItems = (name, image, i) => {
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
  championImage.setAttribute('src', image);
  wrapperImage.append(championImage);

  const label = document.createElement('label');
  label.classList.add('skins-carousel-item-text');
  label.textContent = name;
  button.append(label);
};

const createSlideshowItems = (image, i) => {
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
  championImage.setAttribute('src', image);
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
  const availableSkins = dataChampion.skins.available;

  availableSkins.forEach(({ name, image }, i) => {
    createSwipeItems(name, image, i);
    createSlideshowItems(image, i);

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
