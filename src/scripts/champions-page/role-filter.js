import render, { scrollToChampionList } from './render.js';

const desktopRoleFilter = (state) => {
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

const toggleDropdownContent = () => {
  const dropDownContent = document.querySelector('.role-container .dropdown-control-menu');
  const arrow = document.querySelector('.role-dropdown .dropdown-indicator-arrow');
  dropDownContent.classList.toggle('display-block');
  arrow.classList.toggle('indicator-arrow-open');
};

const dropdownControl = (state) => {
  const { role } = state.uiState;
  const controller = document.querySelector('.role-dropdown');
  const indicatorClear = document.querySelector('.role-dropdown .dropdown-indicator-clear');
  const menu = document.querySelector('.role');

  controller.addEventListener('click', (e) => {
    if (role.open === false) {
      const isClickInside = indicatorClear.contains(e.target);
      if (isClickInside) {
        return;
      }

      role.open = true;
      toggleDropdownContent();
    } else if (role.open === true) {
      role.open = false;
      toggleDropdownContent();
    }
  });

  document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target);
    if (role.open === true && !isClickInside) {
      role.open = false;
      toggleDropdownContent();
    }
  });
};

const resetBgcDifficultyMenuButtons = () => {
  const roleButtons = document.querySelectorAll('.role-dropdown .dropdown-menu-item');
  roleButtons.forEach((item) => {
    const button = item;
    button.classList.remove('selected-option');
  });
};

const roleClear = (state) => {
  const rolePlaceholder = document.querySelector('.role-dropdown .dropdown-placeholder');
  const indicatorClear = document.querySelector('.role-dropdown .dropdown-indicator-clear');

  indicatorClear.addEventListener('click', () => {
    const { role } = state.uiState;
    if (role.open === true) {
      role.open = false;
      toggleDropdownContent();
    }
    role.selectedRole = null;
    const { filter } = state;
    filter.role = null;

    rolePlaceholder.textContent = 'All roles';
    rolePlaceholder.style.marginRight = '0';
    indicatorClear.style.display = 'none';
    resetBgcDifficultyMenuButtons();

    render(state);
    scrollToChampionList();
  });
};

const setRoleValue = (currentRole) => {
  const rolePlaceholder = document.querySelector('.role-dropdown .dropdown-placeholder');
  rolePlaceholder.textContent = currentRole;
  rolePlaceholder.style.marginRight = '15px';
  const indicatorClear = document.querySelector('.role-dropdown .dropdown-indicator-clear');
  indicatorClear.style.display = 'flex';
};

const roleListener = (state) => {
  const roleButtons = document.querySelectorAll('.role-dropdown .dropdown-menu-item');

  roleButtons.forEach((roleButton) => {
    roleButton.addEventListener('click', (e) => {
      const currentRole = e.target.textContent.toLowerCase();
      resetBgcDifficultyMenuButtons();
      roleButton.classList.add('selected-option');
      setRoleValue(currentRole);

      const { uiState } = state;
      uiState.role.selectedRole = currentRole;
      const { filter } = state;
      filter.role = currentRole;
      render(state);
      scrollToChampionList();
    });
  });
};

const mobileRoleFilter = (state) => {
  dropdownControl(state);
  roleListener(state);
  roleClear(state);
};

export default (state) => {
  desktopRoleFilter(state);
  mobileRoleFilter(state);
};
