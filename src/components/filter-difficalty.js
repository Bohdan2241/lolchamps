const dropDown = () => {
  const controller = document.querySelector('.difficalty-container');
  const dropDownContent = document.querySelector('.difficalty-dropdown-content');
  const menu = document.querySelector('.difficalty');
  const arrow = document.querySelector('.difficalty-indicator-arrow');
  if (controller) {
    controller.addEventListener('click', () => {
      dropDownContent.style.display = 'block';
      menu.classList.add('menu-is-open');
      arrow.classList.add('difficalty-indicator-arrow-open');

      document.addEventListener('click', (e) => {
        const isClickInside = menu.contains(e.target);
        if (!isClickInside) {
          dropDownContent.style.display = 'none';
          menu.classList.remove('menu-is-open');
          arrow.classList.remove('difficalty-indicator-arrow-open');
        }
      });
    });
  }
  // dropDownContent.addEventListener('click', () => {
  //   buttons.forEach((item) => item.classList.remove('role-active'));
  //   button.classList.add('role-active');
  //   const button1 = document.querySelector('.role-active');
  //   const target = button1.innerHTML.toLowerCase();
  //   render(data, target);
  // });
};

export default () => {
  dropDown();
};
