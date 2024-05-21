import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger, Observer);

  if (document.querySelectorAll('[data-element=hubspot-form]').length) {
    // Create a new script element
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';

    // Append the script to the body (or head, depending on your needs)
    document.body.appendChild(script);

    const language = document.documentElement.lang;

    (window.hsFormsOnReady = window.hsFormsOnReady || []).push(() => {
      document.querySelectorAll('[data-element=hubspot-form]').forEach((form, i) => {
        form.setAttribute('hubspot-form-index', i);

        hbspt.forms.create({
          region: form.getAttribute('region'),
          portalId: form.getAttribute('portal-id'),
          submitText: form.getAttribute('button-text'),
          formId:
            language === 'sv' && form.getAttribute('form-id-swedish')
              ? form.getAttribute('form-id-swedish')
              : form.getAttribute('form-id'),
          css: form.getAttribute('css') || '',
          cssClass: form.getAttribute('css-class') || '',
          locale: language,
          submitButtonClass: form.getAttribute('submit-button-class'),
          target: `[data-element="hubspot-form"][hubspot-form-index="${i}"]`,
          onFormSubmitted: () => {
            form.style.display = 'none';
            form.nextSibling.style.display = 'flex';
          },
          onFormReady: () => {
            ScrollTrigger.refresh();
          },
          translations: {
            en: {
              fieldLabels: {
                email: 'Email',
                firstname: 'First Name',
                lastname: 'Last Name',
                company: 'Company',
                jobtitle: 'Job Title',
                phone: 'Phone',
                department: 'Department',
                // 'LEGAL_CONSENT.processing': 'Custom consent text 1',
                // 'LEGAL_CONSENT.subscription_type_10840013': 'Custom consent text 2',
                // 'LEGAL_CONSENT.subscription_type_6662082': 'Custom consent text 3',
              },
            },
            sv: {
              fieldLabels: {
                email: 'E-post',
                firstname: 'Förnamn',
                lastname: 'Efternamn',
                company: 'Företag',
                jobtitle: 'Jobbtitel',
                phone: 'Mobilnummer',
                department: 'Avdelning',
                // 'LEGAL_CONSENT.processing': 'Jag godkänner We Selects integritetspolicy.',
                // 'LEGAL_CONSENT.subscription_type_10840013':
                //   'Jag godkänner att ta emot inbjudningar till event, e-books och övriga insikter.',
              },
            },
          },
        });
      });
    });
  }

  // ————— LOGO SLIDER MARQUEE ————— //
  document.querySelectorAll('.marquee_component').forEach((item, i) => {
    const list = item.querySelector('.marquee-list');

    if (list) {
      item.append(list.cloneNode(true));
      const marqueeWidth = item.offsetWidth;
      const listWidth = list.scrollWidth;

      const duration = (listWidth / marqueeWidth) * 100; // Adjust the multiplier as needed

      let tl = gsap.timeline({ repeat: -1, onReverseComplete: () => tl.progress(1) });

      tl.to(item.querySelectorAll('.marquee-list'), {
        xPercent: i % 2 ? 100 : -100,
        duration: duration,
        ease: 'none',
      });
    }
  });
  // ————— LOGO SLIDER MARQUEE ————— //

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
