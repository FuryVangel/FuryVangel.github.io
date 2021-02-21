'use strict';

let serviceSlider;
const setServiceSlider = function () {
  serviceSlider = new Swiper('.js-services-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    direction: 'horizontal',
    loop: false,
    autoplay: false,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
    },
    navigation: {
      nextEl: '.js-control-next',
      prevEl: '.js-control-prev',
    },
  })
}

let collectionSlider;
const setCollectionSlider = function () {
  collectionSlider = new Swiper('.js-collections-slider', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
    }
  })
}

let feedbackSlider;
const setFeedbackSlider = function () {
  feedbackSlider = new Swiper('.js-feedback-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoHeight: true,
    direction: 'horizontal',
    loop: false,
    autoplay: false,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
    },
    navigation: {
      nextEl: '.js-control-next',
      prevEl: '.js-control-prev',
    },
    observer: true,
    observeParents: true
  })
}

const toggleMobileMenu = () => {
  let menu = document.querySelector('.js-menu');
  let menuToggler = document.querySelector(`.js-menu-toggler`);

  menuToggler.addEventListener('click', function () {
    this.classList.toggle('on');
    menu.classList.toggle('active');
  })
};

const jsTriggers = document.querySelectorAll('.js-card-trigger');
jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    let id = this.getAttribute('data-tab');
    let info = document.querySelector('.js-card-info[data-tab="' + id + '"]');
    let activeTrigger = document.querySelector('.js-card-trigger.active');
    let activeInfoContent = document.querySelector('.js-card-info.active');

    activeTrigger.classList.remove('active');
    trigger.classList.add('active');

    activeInfoContent.classList.remove('active');
    info.classList.add('active');
  });
});


window.addEventListener('DOMContentLoaded', function () {
  toggleMobileMenu();
  setServiceSlider();
  setCollectionSlider();
  setFeedbackSlider();
});

setFeedbackSlider();
setServiceSlider();
setCollectionSlider();



