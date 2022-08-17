window.addEventListener('DOMContentLoaded', () => {

  const navBtnShowMore = document.querySelector('.nav__btn-show-more');
  const navContainer = document.querySelector('.nav__wrapper');
  if (navBtnShowMore.classList.contains('nav__btn-show-more--js-none')) {
    navBtnShowMore.classList.remove('nav__btn-show-more--js-none');
    navContainer.classList.remove('nav__wrapper--js-none');
  }


  const footerContactsBtnShowMore = document.querySelector('.footer-contacts__btn-show-more');
  const footerContactsContainer = document.querySelector('.footer-contacts__list');
  if (footerContactsBtnShowMore.classList.contains('footer-contacts__btn-show-more--js-none')) {
    footerContactsBtnShowMore.classList.remove('footer-contacts__btn-show-more--js-none');
    footerContactsContainer.classList.remove('footer-contacts__list--js-none');
  }


  const aboutDescriptionsContainer = document.querySelector('.about__descriptions');
  const aboutBtnShowMore = document.querySelector('.about__wrapper button');
  if (aboutDescriptionsContainer) {
    if (aboutDescriptionsContainer.classList.contains('about__descriptions--show-more')) {
      aboutDescriptionsContainer.classList.remove('about__descriptions--show-more');
      aboutBtnShowMore.style.display = 'block';
    }
  }

  const navContainerClose = () => {
    navBtnShowMore.classList.remove('nav__btn-show-more--is-open');
    navBtnShowMore.classList.add('nav__btn-show-more--is-close');
    navContainer.classList.add('nav__wrapper--is-close');
    navContainer.classList.remove('nav__wrapper--is-open');

  };
  const navContainerOpen = () => {
    navBtnShowMore.classList.remove('nav__btn-show-more--is-close');
    navBtnShowMore.classList.add('nav__btn-show-more--is-open');
    navContainer.classList.remove('nav__wrapper--is-close');
    navContainer.classList.add('nav__wrapper--is-open');
  };
  const navShowMore = () => {
    if (navBtnShowMore.classList.contains('nav__btn-show-more--is-close')) {
      navContainerOpen();
      footerContainerClose();

    } else {
      navContainerClose();
    }
  };


  const footerContainerClose = () => {
    footerContactsBtnShowMore.classList.remove('footer-contacts__btn-show-more--is-open');
    footerContactsBtnShowMore.classList.add('footer-contacts__btn-show-more--is-close');
    footerContactsContainer.classList.add('footer-contacts__list--is-close');
    footerContactsContainer.classList.remove('footer-contacts__list--is-open');
  };
  const footerContainerOpen = () => {
    footerContactsBtnShowMore.classList.remove('footer-contacts__btn-show-more--is-close');
    footerContactsBtnShowMore.classList.add('footer-contacts__btn-show-more--is-open');
    footerContactsContainer.classList.remove('footer-contacts__list--is-close');
    footerContactsContainer.classList.add('footer-contacts__list--is-open');
  };
  const footerContactsShowMore = () => {
    if (footerContactsBtnShowMore.classList.contains('footer-contacts__btn-show-more--is-close')) {
      footerContainerOpen();
      navContainerClose();

    } else {
      footerContainerClose();
    }
  };


  const aboutDescriptionShowMore = () => {
    if (aboutDescriptionsContainer.classList.contains('about__descriptions--show-more')) {
      aboutDescriptionsContainer.classList.remove('about__descriptions--show-more');
      aboutBtnShowMore.textContent = 'Подробнее';
    } else {
      aboutDescriptionsContainer.classList.add('about__descriptions--show-more');
      aboutBtnShowMore.textContent = 'Скрыть';
    }
  };

  navBtnShowMore.addEventListener('click', navShowMore);
  footerContactsBtnShowMore.addEventListener('click', footerContactsShowMore);
  aboutBtnShowMore.addEventListener('click', aboutDescriptionShowMore);
});
