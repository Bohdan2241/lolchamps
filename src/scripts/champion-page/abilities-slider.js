const moveCircle = (i) => {
  const circle = document.querySelector('.abilities-outer-circle');
  if (i === 0) {
    circle.style.left = '10%';
  } else if (i === 1) {
    circle.style.left = '30%';
  } else if (i === 2) {
    circle.style.left = '50%';
  } else if (i === 3) {
    circle.style.left = '70%';
  } else if (i === 4) {
    circle.style.left = '90%';
  }
};

export const abilitiesSlider = () => {
  const sliderButtons = document.querySelectorAll('[data-testid="abilities:selector"]');
  const sliderInformation = document.querySelectorAll('[data-testid="abilities:ability"]');
  const sliderVideos = document.querySelectorAll('.abilities-video-wrapper');
  const sliderVideosCurrentTime = document.querySelectorAll('[data-testid="abilities:video-container"]');
  sliderButtons.forEach((sliderButton, i) => {
    sliderButton.addEventListener('click', () => {
      sliderButtons.forEach((item) => item.classList.remove('is-active'));
      sliderButton.classList.add('is-active');

      moveCircle(i);

      sliderInformation.forEach((item) => item.classList.remove('is-active'));
      sliderInformation[i].classList.add('is-active');

      sliderVideos.forEach((item) => item.classList.remove('is-active'));
      sliderVideos[i].classList.add('is-active');

      sliderVideosCurrentTime[i].children[0].currentTime = 0;
    });
  });
};

export const resetAbilitiesSlider = () => {
  const sliderButtons = document.querySelectorAll('[data-testid="abilities:selector"]');
  const sliderInformation = document.querySelectorAll('[data-testid="abilities:ability"]');
  const sliderVideos = document.querySelectorAll('.abilities-video-wrapper');
  sliderButtons.forEach(() => {
    sliderButtons.forEach((item) => item.classList.remove('is-active'));
    sliderButtons[0].classList.add('is-active');

    moveCircle(0);

    sliderInformation.forEach((item) => item.classList.remove('is-active'));
    sliderInformation[0].classList.add('is-active');

    sliderVideos.forEach((item) => item.classList.remove('is-active'));
    sliderVideos[0].classList.add('is-active');
  });
};
