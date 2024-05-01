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
            language === 'sw' && form.getAttribute('form-id-swedish')
              ? form.getAttribute('form-id-swedish')
              : form.getAttribute('form-id'),
          css: form.getAttribute('css') || '',
          cssClass: form.getAttribute('css-class') || '',
          locale: language,
          submitButtonClass: form.getAttribute('submit-button-class'),
          target: `[data-element="hubspot-form"][hubspot-form-index="${i}"]`,
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
            sw: {
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

  // /*------------------------------------------------*/
  // /*----------TEXT SCROLL MARQUEE POINTER-----------*/

  // // attribute value checker
  // function attr(defaultVal, attrVal) {
  //   const defaultValType = typeof defaultVal;
  //   if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
  //   if (attrVal === 'true' && defaultValType === 'boolean') return true;
  //   if (attrVal === 'false' && defaultValType === 'boolean') return false;
  //   if (isNaN(attrVal) && defaultValType === 'string') return attrVal;
  //   if (!isNaN(attrVal) && defaultValType === 'number') return +attrVal;
  //   return defaultVal;
  // }
  // // marquee component
  // $("[tr-marquee-element='component']").each(function (index) {
  //   let componentEl = $(this),
  //     panelEl = componentEl.find("[tr-marquee-element='panel']");
  //   componentEl.append(panelEl.clone(true));
  //   panelEl = componentEl.find("[tr-marquee-element='panel']");
  //   let triggerHoverEl = componentEl.find("[tr-marquee-element='triggerhover']"),
  //     triggerClickEl = componentEl.find("[tr-marquee-element='triggerclick']"),
  //     speedSetting = 50, // attr(100, componentEl.attr('tr-marquee-speed')),
  //     verticalSetting = attr(false, componentEl.attr('tr-marquee-vertical')),
  //     reverseSetting = attr(false, componentEl.attr('tr-marquee-reverse')),
  //     scrollDirectionSetting = attr(false, componentEl.attr('tr-marquee-scrolldirection')),
  //     scrollScrubSetting = attr(false, componentEl.attr('tr-marquee-scrollscrub')),
  //     moveDistanceSetting = -100,
  //     timeScaleSetting = 1,
  //     pausedStateSetting = false;

  //   // mm.add('(max-width: 767px)', () => {
  //   //   speedSetting = speedSetting / 2;
  //   // });

  //   if (reverseSetting) moveDistanceSetting = 100;
  //   let marqueeTimeline = gsap.timeline({
  //     repeat: -1,
  //     onReverseComplete: () => marqueeTimeline.progress(1),
  //   });
  //   if (verticalSetting) {
  //     speedSetting = panelEl.first().height() / speedSetting;
  //     marqueeTimeline.fromTo(
  //       panelEl,
  //       { yPercent: 0 },
  //       { yPercent: moveDistanceSetting, ease: 'none', duration: speedSetting }
  //     );
  //   } else {
  //     speedSetting = panelEl.first().width() / speedSetting;
  //     marqueeTimeline.fromTo(
  //       panelEl,
  //       { xPercent: 0 },
  //       { xPercent: moveDistanceSetting, ease: 'none', duration: speedSetting }
  //     );
  //   }
  //   let scrubObject = { value: 1 };
  //   ScrollTrigger.create({
  //     trigger: 'body',
  //     start: 'top top',
  //     end: 'bottom bottom',
  //     onUpdate: (self) => {
  //       if (!pausedStateSetting) {
  //         if (scrollDirectionSetting && timeScaleSetting !== self.direction) {
  //           timeScaleSetting = self.direction;
  //           marqueeTimeline.timeScale(self.direction);
  //         }
  //         if (scrollScrubSetting) {
  //           let v = Math.abs(self.getVelocity()) * 0.006;
  //           v = gsap.utils.clamp(0, 20, v);
  //           let scrubTimeline = gsap.timeline({
  //             onUpdate: () => marqueeTimeline.timeScale(scrubObject.value),
  //           });
  //           scrubTimeline.fromTo(
  //             scrubObject,
  //             { value: v },
  //             { value: timeScaleSetting, duration: 0.5 }
  //           );
  //         }
  //       }
  //     },
  //   });
  //   function pauseMarquee(isPausing) {
  //     pausedStateSetting = isPausing;
  //     let pauseObject = { value: 1 };
  //     let pauseTimeline = gsap.timeline({
  //       onUpdate: () => marqueeTimeline.timeScale(pauseObject.value),
  //     });
  //     if (isPausing) {
  //       pauseTimeline.fromTo(pauseObject, { value: timeScaleSetting }, { value: 0, duration: 0.5 });
  //       triggerClickEl.addClass('is-paused');
  //     } else {
  //       pauseTimeline.fromTo(pauseObject, { value: 0 }, { value: timeScaleSetting, duration: 0.5 });
  //       triggerClickEl.removeClass('is-paused');
  //     }
  //   }
  //   if (window.matchMedia('(pointer: fine)').matches) {
  //     triggerHoverEl.on('mouseenter', () => pauseMarquee(true));
  //     triggerHoverEl.on('mouseleave', () => pauseMarquee(false));
  //   }
  //   triggerClickEl.on('click', function () {
  //     !$(this).hasClass('is-paused') ? pauseMarquee(true) : pauseMarquee(false);
  //   });
  // });

  // /*----------TEXT SCROLL MARQUEE POINTER-----------*/
  // /*------------------------------------------------*/

  // ————— LOGO SLIDER MARQUEE ————— //
  document.querySelectorAll('.marquee_component').forEach((item, i) => {
    // clone slideWrapper to fill up space
    item.append(item.querySelector('.marquee-list').cloneNode(true));
    // item.append(item.querySelector('.marquee-list').cloneNode(true));

    let tl = gsap.timeline({ repeat: -1, onReverseComplete: () => tl.progress(1) });
    let mm = gsap.matchMedia();

    mm.add('(max-width: 768px)', () => {
      tl.to(item.querySelectorAll('.marquee-list'), {
        xPercent: i % 2 ? 100 : -100,
        duration: 100,
        ease: 'none',
      });
    });
    mm.add('(min-width: 769px)', () => {
      tl.to(item.querySelectorAll('.marquee-list'), {
        xPercent: i % 2 ? 100 : -100,
        duration: 100,
        ease: 'none',
      });
    });

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
