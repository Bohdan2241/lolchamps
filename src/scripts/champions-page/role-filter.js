import render, { scrollToChampionList } from './render.js';
import resetBackgroundMenuButtons from '../utility/resetBackgroundMenuButtons.js';
import dropdown from '../utility/dropdown.js';

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

  dropdown(role, controller, indicatorClear, menu, toggleDropdownContent);
};

const roleClear = (state) => {
  const rolePlaceholder = document.querySelector('.role-dropdown .dropdown-placeholder');
  const indicatorClear = document.querySelector('.role-dropdown .dropdown-indicator-clear');
  const roleButtons = document.querySelectorAll('.role-dropdown .dropdown-menu-item');

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
    resetBackgroundMenuButtons(roleButtons);

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
      resetBackgroundMenuButtons(roleButtons);
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
