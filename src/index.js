import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, Observer);

window.Webflow ||= [];
window.Webflow.push(() => {
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
                'LEGAL_CONSENT.processing': 'Custom consent text 1',
                'LEGAL_CONSENT.subscription_type_10840013': 'Custom consent text 2',
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
                'LEGAL_CONSENT.processing': 'Jag godkänner We Selects integritetspolicy.',
                'LEGAL_CONSENT.subscription_type_10840013':
                  'Jag godkänner att ta emot inbjudningar till event, e-books och övriga insikter.',
              },
            },
          },
        });
      });
    });
  }

  // ————— LOGO SLIDER MARQUEE ————— //
  document.querySelectorAll('.marquee_component').forEach((item, i) => {
    // clone slideWrapper to fill up space
    item.append(item.querySelector('.marquee-list').cloneNode(true));
    // item.append(item.querySelector('.marquee-list').cloneNode(true));

    let tl = gsap.timeline({ repeat: -1, onReverseComplete: () => tl.progress(1) });
    let mm = gsap.matchMedia();

    // mm.add('(max-width: 768px)', () => {
    //   tl.to(item.querySelectorAll('.marquee-list'), {
    //     xPercent: i % 2 ? 100 : -100,
    //     duration: 100,
    //     ease: 'none',
    //   });
    // });
    // mm.add('(min-width: 769px)', () => {
    tl.to(item.querySelectorAll('.marquee-list'), {
      xPercent: i % 2 ? 100 : -100,
      duration: gsap.utils.random(400, 800, 10, false),
      ease: 'none',
    });
    // });

    // let object = { value: 1 };

    // Observer.create({
    //   target: window,
    //   type: 'wheel,touch',
    //   wheelSpeed: -1,
    //   onChangeY: (self) => {
    //     let v = self.velocityY * -0.01;
    //     v = gsap.utils.clamp(-5, 5, v);
    //     tl.timeScale(v);
    //     let resting = 1;
    //     if (v < 0) resting = -1;
    //     gsap.fromTo(
    //       object,
    //       { value: v },
    //       { value: resting, duration: 1, onUpdate: () => tl.timeScale(object.value) }
    //     );
    //   },
    // });
  });
  // ————— LOGO SLIDER MARQUEE ————— //
});
