// mobile menu implementation
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menuLinks = document.querySelectorAll('.menu-link');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('mobile-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', toggleMenu);
  });
  menuOverlay.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) {
      return;
    }
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('mobile-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();
