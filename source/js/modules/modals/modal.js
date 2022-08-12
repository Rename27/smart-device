const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn');
const openBtn = document.querySelector('.back-call__button');
const popupOverlay = document.querySelector('.popup__overlay');


const closePopup = () => {
  popup.classList.remove('popup--is-active');
};


const openPopup = () => {
  popup.classList.add('popup--is-active');
};


const onEsc = (evt) => {
  if (evt.key === 'Escape') {
    closePopup();
  }
};


const onOverlayClick = (evt) => {
  if (evt.target === popupOverlay) {
    closePopup();
  }
};

closeBtn.addEventListener('click', closePopup);
openBtn.addEventListener('click', openPopup);
document.addEventListener('keydown', onEsc);
popupOverlay.addEventListener('click', onOverlayClick);
