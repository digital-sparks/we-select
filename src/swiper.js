window.Webflow ||= [];
window.Webflow.push(() => {



  document.querySelectorAll('.testimonial_component').forEach((component) => {
    
    const testimonialCarousel = new Swiper(component.querySelector('.testimonial_container'), {
      wrapperClass: 'testimonial_wrapper',
      slideClass: 'testimonial_slide',
      slidesPerView: 1,
      direction: 'horizontal',
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      speed: 600,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        enabled: true,
        forceToAxis: true,
        releaseOnEdges: true,
      },
      breakpoints: {
        1000: {
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: component.querySelectorAll('.swiper-button')[1],
        prevEl: component.querySelectorAll('.swiper-button')[0],
      },
      pagination: {
        el: '.swiper_pagination',
        bulletClass: 'swiper-bullet',
        bulletActiveClass: 'swiper-bullet-active',
        clickable: true,
      },
      on: {
        beforeInit: (swiper) => {
          swiper.wrapperEl.style.gridColumnGap = 'unset';
        },
      },
    });
  });

  document.querySelectorAll('.section_examples').forEach((component) => {
    const examplesCarousel = new Swiper(component.querySelector('.examples_container'), {
      wrapperClass: 'examples_wrapper',
      slideClass: 'example_slide',
      slidesPerView: 'auto',
      direction: 'horizontal',
      spaceBetween: 32,
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      autoplay: { delay: 3500 },
      speed: 600,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        enabled: true,
        forceToAxis: true,
        releaseOnEdges: true,
      },
      on: {
        beforeInit: (swiper) => {
          swiper.wrapperEl.style.gridColumnGap = 'unset';
        },
      },
    });
  });
});
