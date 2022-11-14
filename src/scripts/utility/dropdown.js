/* eslint-disable no-undef */
export default (currentUiState, btnEl, menuEl, toggleDropdownContent) => {
  const uiState = currentUiState;
  const controller = document.querySelector(`.${btnEl}`);
  const indicatorClear = document.querySelector(`.${btnEl} .dropdown-indicator-clear`);
  const menu = document.querySelector(`.${menuEl}`);

  controller.addEventListener('click', (e) => {
    if (uiState.open === false) {
      const isClickInside = indicatorClear.contains(e.target);
      if (isClickInside) {
        return;
      }

      uiState.open = true;
      toggleDropdownContent();
    } else if (uiState.open === true) {
      uiState.open = false;
      toggleDropdownContent();
    }
  });

  document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target);
    if (uiState.open === true && !isClickInside) {
      uiState.open = false;
      toggleDropdownContent();
    }
  });
};
