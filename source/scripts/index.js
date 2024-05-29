/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.page-header__navigation');
const navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('.main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
