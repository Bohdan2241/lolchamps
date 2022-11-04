import render, { scrollToChampionList } from './render.js';

export default (state) => {
  const roleButtons = document.querySelectorAll('.role-btn');
  roleButtons.forEach((roleButton) => {
    roleButton.addEventListener('click', () => {
      if (roleButton.classList.contains('role-active')) {
        return;
      }
      roleButtons.forEach((btn) => btn.classList.remove('role-active'));
      roleButton.classList.add('role-active');
      const activeButton = document.querySelector('.role-active');
      const role = activeButton.textContent.toLowerCase();
      const currentRole = role === 'all' ? null : role;

      const { uiState } = state;
      uiState.role.selectedRole = currentRole;
      const { filter } = state;
      filter.role = currentRole;
      render(state);
      scrollToChampionList();
    });
  });
};
