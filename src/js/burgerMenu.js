const openBtnEl = document.querySelector('[data-menu-open]');
const closeBtnEl = document.querySelector('[data-menu-close]');
const modalViewEl = document.querySelector('.mobile-menu');
const navListEl = document.querySelector('.mm-list-navigation');

openBtnEl.addEventListener('click', () => {
  modalViewEl.classList.add('is-open');
  closeBtnEl.addEventListener('click', handleClose);
  document.body.classList.add('no-scroll');
});

const handleClose = () => {
  modalViewEl.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  closeBtnEl.removeEventListener('click', handleClose);
};

navListEl.addEventListener('click', e => {
  if (e.target.tagName === 'A') handleClose();
});
