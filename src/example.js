window.Webflow ||= [];
window.Webflow.push(() => {
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsfilter',
    (filterInstances) => {
      console.log('cmsload Successfully loaded!');

      setTimeout(() => {
        const reset = document.querySelector(
          '.industry-filter .fs-combobox_list [fs-cmsfilter-element="clear"][fs-cmsfilter-clear="industry"]'
        );
        reset.classList.add('w--current');

        const options = document.querySelectorAll(
          '.industry-filter [fs-combobox-element="option-template"]'
        );

        reset.addEventListener('click', () => {
          reset.classList.add('w--current');

          options.forEach((item) => {
            item.classList.remove('w--current');
          });
        });

        options.forEach((item) => {
          item.addEventListener('click', () => {
            reset.classList.remove('w--current');
          });
        });
      }, 1000);
    },
  ]);
});
