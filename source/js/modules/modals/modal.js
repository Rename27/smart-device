window.addEventListener('load', () => {

  const pageBody = document.querySelector('body');
  const openBtn = pageBody.querySelector('.back-call__button');
  const popup = pageBody.querySelector('.popup');
  const popupOverlay = popup.querySelector('.popup__overlay');
  const closeBtn = popup.querySelector('.popup__close-btn');
  const focusedInput = popup.querySelector('.popup__form input[name="name"]');


  const closePopup = () => {
    popup.classList.remove('popup--is-active');
    pageBody.style.overflow = ('auto');

  };


  const openPopup = () => {
    popup.classList.add('popup--is-active');
    focusedInput.focus();
    pageBody.style.overflow = ('hidden');
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
  popupOverlay.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEsc);
});
