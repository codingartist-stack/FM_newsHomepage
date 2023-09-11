const navToggle = document.querySelector('.mobileToggle');
const primaryNav = document.querySelector('.primaryNav');
const navBackground = document.querySelector('.navBackgroup');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navBackground.setAttribute('data-visible', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
    navBackground.setAttribute('data-visible', false);
  }
});
