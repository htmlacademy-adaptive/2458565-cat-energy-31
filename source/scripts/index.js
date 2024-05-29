/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.page-header__navigation');
const navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('.main-nav__nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav__closed')) {
    navMain.classList.remove('main-nav__closed');
    navMain.classList.add('main-nav__opened');
  } else {
    navMain.classList.add('main-nav__closed');
    navMain.classList.remove('main-nav__opened');
  }
});
