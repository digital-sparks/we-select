window.Webflow ||= [];
window.Webflow.push(() => {
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsfilter',
    (filterInstances) => {
      const reset = document.querySelector(
        '.industry-filter .fs-combobox_list [fs-cmsfilter-element="clear"][fs-cmsfilter-clear="industry"]'
      );
      reset.classList.add('w--current');

      reset.addEventListener('click', () => {
        reset.classList.add('w--current');

        $('.industry-filter [fs-combobox-element="option-template"]').removeClass('w--current');
      });

      $(document).on(
        'click',
        '.industry-filter [fs-combobox-element="option-template"]',
        function (item) {
          const id = item.currentTarget.getAttribute('id');
          document.getElementById(id).classList.add('w--current');
          reset.classList.remove('w--current');
        }
      );
    },
  ]);
});
