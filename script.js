const active = document.querySelector('.box');
const closeModal = document.querySelector('#close-modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelector('#open-modal');

openModal.addEventListener('click', () => {
  active.classList.add('active');
  overlay.classList.add('overlay-active');
  openModal.classList.add('button-behind');
});

const closeModalFunc = () => {
  active.classList.remove('active');
  overlay.classList.remove('overlay-active');
  openModal.classList.remove('button-behind');
};

closeModal.addEventListener('click', closeModalFunc);
overlay.addEventListener('click', closeModalFunc);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModalFunc();
  }
});
