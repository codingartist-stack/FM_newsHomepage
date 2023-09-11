const navToggle = document.querySelector('.mobileToggle');
const primaryNav = document.querySelector('.primaryNav');
const navBackground = document.querySelector('.navBackgroup');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    navBackground.setAttribute('data-visible', true);

    navToggle.textContent = 'cross';
  } else {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navBackground.setAttribute('data-visible', false);

    navToggle.textContent = 'menu';
  }
});
