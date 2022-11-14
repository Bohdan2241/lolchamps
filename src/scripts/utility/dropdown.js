/* eslint-disable no-undef */
export default (currentUiState, controller, indicatorClear, menu, toggleDropdownContent) => {
  const uiState = currentUiState;

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
