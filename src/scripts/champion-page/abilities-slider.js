const moveCircle = (i) => {
  const cirle = document.querySelector('.abilities-outer-circle');
  if (i === 0) {
    cirle.style.left = '10%';
  } else if (i === 1) {
    cirle.style.left = '30%';
  } else if (i === 2) {
    cirle.style.left = '50%';
  } else if (i === 3) {
    cirle.style.left = '70%';
  } else if (i === 4) {
    cirle.style.left = '90%';
  }
};

export const abilitiesSlider = () => {
  const sliderButtons = document.querySelectorAll('[data-testid="abilities:selector"]');
  const sliderInformations = document.querySelectorAll('[data-testid="abilities:ability"]');
  const sliderVideos = document.querySelectorAll('.abilities-video-wrapper');
  const sliderVideosCurrentTime = document.querySelectorAll('[data-testid="abilities:video-container"]');
  sliderButtons.forEach((sliderButton, i) => {
    // eslint-disable-next-line no-unused-expressions
    sliderButton.addEventListener('click', () => {
      sliderButtons.forEach((item) => item.classList.remove('is-active'));
      sliderButton.classList.add('is-active');

      moveCircle(i);

      sliderInformations.forEach((item) => item.classList.remove('is-active'));
      sliderInformations[i].classList.add('is-active');

      sliderVideos.forEach((item) => item.classList.remove('is-active'));
      sliderVideos[i].classList.add('is-active');

      sliderVideosCurrentTime[i].children[0].currentTime = 0;
    });
  });
};

export const resetAbilitiesSlider = () => {
  const sliderButtons = document.querySelectorAll('[data-testid="abilities:selector"]');
  const sliderInformations = document.querySelectorAll('[data-testid="abilities:ability"]');
  const sliderVideos = document.querySelectorAll('.abilities-video-wrapper');
  sliderButtons.forEach(() => {
    // eslint-disable-next-line no-unused-expressions
    sliderButtons.forEach((item) => item.classList.remove('is-active'));
    sliderButtons[0].classList.add('is-active');

    moveCircle(0);

    sliderInformations.forEach((item) => item.classList.remove('is-active'));
    sliderInformations[0].classList.add('is-active');

    sliderVideos.forEach((item) => item.classList.remove('is-active'));
    sliderVideos[0].classList.add('is-active');
  });
};

// export default abilitiesSlider;
