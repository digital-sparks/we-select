gsap.registerPlugin(ScrollTrigger, Observer);

window.Webflow ||= [];
window.Webflow.push(() => {
  // ————— GSAP HOME HERO ————— //

  if (document.querySelector('.hero_image-phone')) {
    gsap.from('.hero_image-phone .phone_component', {
      delay: 0.6,
      yPercent: 15,
      duration: 1.1,
      ease: 'power2.inOut',
    });
  }

  if (document.querySelector('.icon_profile')) {
    gsap.from('.icon_profile', {
      opacity: 0,
      scale: 0.5,
      delay: 1.1,
      duration: 0.7,
      ease: 'power3.out',
      stagger: {
        each: 0.1,
        from: 'random',
      },
    });
  }

  if (document.querySelector('.icon_profile-variant')) {
    gsap.from('.icon_profile-variant', {
      opacity: 0,
      scale: 0.5,
      delay: 1.1,
      duration: 0.7,
      ease: 'power3.out',
      stagger: {
        each: 0.1,
        from: 'random',
      },
    });
  }

  if (document.querySelector('.icon_social')) {
    gsap.from('.icon_social', {
      opacity: 0,
      scale: 0.5,
      delay: 0.9,
      duration: 0.5,
      ease: 'power2.out',
      stagger: {
        each: 0.05,
        from: 'random',
      },
    });
  }

  if (document.querySelector('.talent_image-front')) {
    gsap.from('.talent_image-back,.talent_image-front', {
      opacity: 0,
      yPercent: 10,
      delay: 0.5,
      scale: 0.98,
      duration: 1.2,
      ease: 'power2.out',
      stagger: {
        each: 0.1,
        from: 'end',
      },
    });
  }
  // ————— GSAP HOME HERO ————— //

  // ————— GSAP EBOOK ————— //
  gsap.utils.toArray('.free-ebook-wrapper').forEach((element) => {
    gsap.from(element, {
      yPercent: 5,
      scale: 0.95,
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
      },
    });
  });
  // ————— GSAP EBOOK ————— //

  // ————— GSAP IMAGES ————— //
  gsap.utils.toArray('.section_single-img-wrapper').forEach((assetWrapper) => {
    const mainImage = assetWrapper.querySelector('[data-gsap-el=main]'),
      supportingImages = assetWrapper.querySelectorAll('[data-gsap-el=supporting]');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: assetWrapper,
          start: 'center bottom',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
        },
      })
      .from(mainImage, {
        scale: 0.975,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        supportingImages,
        {
          opacity: 0,
          y: '0.5rem',
          scale: 0.98,
          duration: 1,
          ease: 'power2.out',
          stagger: {
            each: 0.2,
          },
        },
        '<+0.3'
      );
  });
  // ————— GSAP IMAGES ————— //
});
