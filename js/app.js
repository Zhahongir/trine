// Hamburger
var openMenuButton = document.getElementById('menuOpen');
var closeMenuButton = document.getElementById('closeMenuBtn');
var menu = document.getElementById('menuNav');
var overlay = document.getElementById('cartBg');

openMenuButton.addEventListener('click', function() {
  menu.classList.add('menu_active');
  overlay.style.display = 'block';
});

closeMenuButton.addEventListener('click', function() {
  menu.classList.remove('menu_active');
  overlay.style.display = 'none';
});


// Dropdown Header
window.addEventListener('DOMContentLoaded', () => {
    const headerDropdown = document.querySelector('.header__dropdown'),
    headerDropdownBtn = document.querySelector('.header__nav__catalog');
    headerDropdownIcon = document.querySelector('.header__wrap__nav__list__item__link__icon');
  
    headerDropdownBtn.addEventListener('click', () => {
        headerDropdownIcon.classList.toggle('header__nav__catalog-icon');
        headerDropdown.classList.toggle('header__dropdown_active');
    });
});


// Dropdown Catalog
window.addEventListener('DOMContentLoaded', () => {
    const catalogDropdown = document.querySelector('.promo__nav__content'),
    catalogDropdownBtn = document.querySelector('.promo__catalog-btn');
    catalogDropdownIcon = document.querySelector('.promo__nav__list__item__link__icon');
  
    catalogDropdownBtn.addEventListener('click', () => {
        catalogDropdownIcon.classList.toggle('promo__nav__list__item__link__icon_active');
        catalogDropdown.classList.toggle('promo__nav__content_active');
    });
});

// Accardion
document.addEventListener('DOMContentLoaded', () => {
  const accordionsMenu = document.querySelectorAll('.menu__inner__accardion__item');

  accordionsMenu.forEach(el => {
      el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const control = self.querySelector('.menu__inner__accardion__item__control');
          const content = self.querySelector('.menu__inner__accardion__item__content');

          self.classList.toggle('openMenu');

          // если открыт аккордеон
          if (self.classList.contains('openMenu')) {
              control.setAttribute('aria-expanded', true);
              content.setAttribute('aria-hidden', false);
              content.style.maxHeight = content.scrollHeight + 'px';
          } else {
              control.setAttribute('aria-expanded', false);
              content.setAttribute('aria-hidden', true);
              content.style.maxHeight = null;
          }
      });
  });
});


// Sort Items
function sortFunction() {
    document.getElementById("sortDropDown").classList.toggle("show__sortDropDown");
}

window.onclick = function(event) {
  if (!event.target.matches('.catalog__wrap__content__header__sort')) {

    var sortDropDowns = document.getElementsByClassName("catalog__wrap__content__header__sort-list");
    var i;
    for (i = 0; i < sortDropDowns.length; i++) {
      var openDropdown = sortDropDowns[i];
      if (openDropdown.classList.contains('show__sortDropDown')) {
        openDropdown.classList.remove('show__sortDropDown');
      }
    }
  }
};


// Glightbox
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});


// Cart
var openCartButton = document.getElementById('cartBtn');
var closeCartButton = document.getElementById('closeCartBtn');
var cart = document.getElementById('cart');
var overlay = document.getElementById('cartBg');

openCartButton.addEventListener('click', function() {
  cart.classList.add('open');
  overlay.style.display = 'block';
});

closeCartButton.addEventListener('click', function() {
  cart.classList.remove('open');
  overlay.style.display = 'none';
});


