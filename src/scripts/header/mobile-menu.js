// const toggleMenuSubItems = () => {
//   const links = document.querySelectorAll('.riotbar-mobile-menu-link');
//   links.forEach((link) => {
//     const { children } = link;
//     Array.from(children).forEach((child) => {
//       if (child.classList.contains('mobile-menu-icon-arrow')) {
//         link.addEventListener('click', (e) => {
//           e.preventDefault();
//           let nextSibling = link.nextElementSibling;
//           while (nextSibling) {
//             if (nextSibling.classList.contains('riotbar-mobile-menu-sublink')) {
//               console.log(nextSibling);
//               nextSibling = nextSibling.nextElementSibling;
//             }
//           }
//         });
//       }
//     });
//   });
// };

export default () => {
  const container = document.querySelector('.riotbar-mobile-nav-reset');
  const menu = document.querySelector('.riotbar-mobile-menu');
  const openMenu = document.querySelector('.riotbar-menu-icon');
  const closeMenu = document.querySelector('.mobile-menu-close');

  openMenu.addEventListener('click', () => {
    menu.classList.add('visible');

    const overlay = document.createElement('div');
    overlay.classList.add('riotbar-mobile-menu-overlay');
    container.append(overlay);
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('visible');

    const overlay = document.querySelector('.riotbar-mobile-menu-overlay');
    overlay.remove();
  });

  // toggleMenuSubItems();
};
