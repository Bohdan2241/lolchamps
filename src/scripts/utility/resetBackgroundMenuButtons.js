export default (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove('selected-option');
  });
};
