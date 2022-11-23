const footerVideos = [
  {
    video: {
      file: {
        url: 'https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbb792e3456cb02b7/5f4959269586f1653fc65a1b/ss2020_urgot_vi_cait_1920x1080.mp4',
        type: 'video/mp4',
      },
      title: 'Urgon -Vi - Cait',
    },
  },
  {
    video: {
      file: {
        url: 'https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfa2accf67922dd3a/5f495972a11538653ea58f65/ss2020_lux_sylas_1920x1080.mp4',
        type: 'video/mp4',
      },
      title: 'Sylas - Lux',
    },
  },
  {
    video: {
      file: {
        url: 'https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt755ed452ae53c9a2/5f49597270ca0f65ba10a439/ss2020_sylas_garen_lux_1920x1080.mp4',
        type: 'video/mp4',
      },
      title: 'Sylas - Garen - Lux',
    },
  },
  {
    video: {
      file: {
        url: 'https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfa2accf67922dd3a/5f495972a11538653ea58f65/ss2020_lux_sylas_1920x1080.mp4',
        type: 'video/mp4',
      },
      title: 'Lux - Sylas',
    },
  },
  {
    video: {
      file: {
        url: 'https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt441f3bc092c69d44/5f49597070ca0f65ba10a435/ss2020_kaisa_ez_1920x1080.mp4',
        type: 'video/mp4',
      },
      title: 'Kaisa - Ezreal',
    },
  },
  {
    video: {
      file: {
        url: 'https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blte5d5ac96b514d502/5f495971a21dbd47faf26c0b/ss2020_kaisa_1920x1080.mp4',
        type: 'video/mp4',
      },
      title: 'Kaisa',
    },
  },
  {
    video: {
      file: {
        url: 'https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7de86c03defc8902/5f4959882ecc864927d8d392/ss2020_galio_lux_1920x1080.mp4',
        type: 'video/mp4',
      },
      title: 'Galio - Lux',
    },
  },
];

const getRandomVideo = () => {
  const min = 0;
  const max = footerVideos.length - 1;
  const index = Math.floor(Math.random() * (max - min + 1) + min);

  return footerVideos[index];
};

export default () => {
  const videoContainer = document.querySelector('.footer-video .video-wrapper');
  videoContainer.innerHTML = '';
  const videoObj = getRandomVideo();
  const video = document.createElement('video');
  video.classList.add('video-content');
  video.setAttribute('preload', 'metadata');
  video.setAttribute('loop', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('src', videoObj.video.file.url);
  videoContainer.append(video);
};

// <!-- <video class="video-content" preload="metadata" loop autoplay playsinline
// src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7de86c03defc8902/5f4959882ecc864927d8d392/ss2020_galio_lux_1920x1080.mp4"></video>
// </div>

// const wrapper = document.querySelector('.video-wrapper');
// window.addEventListener('scroll', () => {
//   const coords = wrapper.getBoundingClientRect();
//   // const offset = window.pageYOffset;
//   wrapper.style.opacity = 0;
//   if (coords.y - coords.height < 0 && coords.y > coords.height / 2) {
//     wrapper.style.opacity = coords.y * 0.1;
//     console.log(coords, wrapper.style.opacity);
//   }
// });
