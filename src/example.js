window.Webflow ||= [];
window.Webflow.push(() => {
  const vimeoReady = setInterval(function () {
    if (window.Vimeo && window.Vimeo.Player) {
      clearInterval(vimeoReady);
      loadVideos();
    }
  }, 50);

  function loadVideos() {
    const vimeoDivs = document.querySelectorAll('div[vimeo-data-id]');
    vimeoDivs.forEach((div) => {
      const videoId = div.getAttribute('vimeo-data-id');
      if (videoId) {
        const options = {
          id: videoId,
          background: true,
          loop: true,
          autoplay: true,
          muted: true,
          dnt: true,
        };
        const player = new Vimeo.Player(div, options);
      }
    });
  }

  window.fsAttributes = window.fsAttributes || [];

  window.fsAttributes.push([
    'cmsload',
    (listInstances) => {
      // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
      const [listInstance] = listInstances;

      // The `renderitems` event runs whenever the list renders items after switching pages.
      listInstance.on('renderitems', (renderedItems) => {
        loadVideos();
      });
    },
  ]);

  window.fsAttributes.push([
    'cmsfilter',
    (filterInstances) => {
      let windowWidth = $(window).innerWidth() || document.documentElement.clientWidth;

      let resizeTimeout;
      $(window).resize(function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
          windowWidth = $(window).innerWidth() || document.documentElement.clientWidth;
          if (windowWidth > 991) applyCustomStyles();
        }, 75);
      });

      if (windowWidth > 991) applyCustomStyles();

      function applyCustomStyles() {
        // add highlight to 'all' filter item on pageload
        const reset = document.querySelector(
          '.industry-filter .fs-combobox_list [fs-cmsfilter-element="clear"][fs-cmsfilter-clear="industry"]'
        );
        const parent = reset.parentNode.previousSibling;
        parent.setAttribute('aria-expanded', 'true');
        reset.classList.add('w--current');

        // add highlight to 'all' filter item on click
        reset.addEventListener('click', () => {
          reset.classList.add('w--current');
          $('.industry-filter [fs-combobox-element="option-template"]').removeClass('w--current');
        });

        // add highlight to other items
        $(document).on(
          'click',
          '.industry-filter [fs-combobox-element="option-template"]',
          function (item) {
            const id = item.currentTarget.getAttribute('id');

            setTimeout(() => {
              document.getElementById(id).classList.add('w--current');
              reset.classList.remove('w--current');
              parent.setAttribute('aria-expanded', 'true');
            }, 10);
          }
        );
      }
    },
  ]);
});
