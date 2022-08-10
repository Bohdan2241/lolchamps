// import route from './router.js';

export const getChampionName = () => {
  const links = document.querySelectorAll('.champions-list-item');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const championName = link.querySelector('.item-text').textContent;
      // link.addEventListener('click', route());
      console.log(championName);
    });
  });
};

const renderChampionPage = () => {
  // eslint-disable-next-line no-unused-vars
  const name = getChampionName();
  // console.log(name);
  // opened.document.write('<html><head><title>MyTitle</title></head><body>test</body></html>');
};

export default renderChampionPage;
