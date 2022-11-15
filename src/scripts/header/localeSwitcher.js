export default () => {
  const langSwitchTrigger = document.querySelector('[data-testid="riotbar:localeswitcher:button-toggleLocaleMenu"]');
  const localeSwitcherDropdown = document.querySelector('.locale-switcher-dropdown');

  langSwitchTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    localeSwitcherDropdown.classList.toggle('display-block');
  });
};
