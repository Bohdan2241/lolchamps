import render from './render.js';

export default (state) => {
  const roleButtons = document.querySelectorAll('.role-btn');
  roleButtons.forEach((roleButton) => {
    roleButton.addEventListener('click', () => {
      roleButtons.forEach((btn) => btn.classList.remove('role-active'));
      roleButton.classList.add('role-active');
      const activeButton = document.querySelector('.role-active');
      const role = activeButton.textContent.toLowerCase();

      const { filter } = state;
      filter.role = role === 'all' ? null : role;
      render(state);
    });
  });
};
