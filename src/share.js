window.Webflow ||= [];
window.Webflow.push(() => {
  const url = window.location.href;

  console.log(url);

  // facebook share link
  document
    .querySelector('[data-share=facebook]')
    .setAttribute(
      'href',
      `https://www.facebook.com/share_channel/?link=${encodeURIComponent(url)}`
    );

  // linkedin share link
  document
    .querySelector('[data-share=linkedin]')
    .setAttribute(
      'href',
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    );

  // mail share link
  document
    .querySelector('[data-share=email]')
    .setAttribute(
      'href',
      `mailto:?subject=${encodeURIComponent(
        'Help me unlock AI powered public sector tools 🔓'
      )}&body=${encodeURIComponent(
        "Hi there,\n\nI just joined Stotles' new waitlist for their AI-driven public sector operating system and I think you should too!\nThe more people I refer, the more chances I have to unlock special rewards.\n\nClick my link to check it out: " +
          url +
          '\n\nThanks,'
      )}`
    );

  // copy url function
  document.querySelector('[data-share=copy-url]').addEventListener('click', function (e) {
    e.preventDefault();
    let clipboardInput = document.createElement('input');
    document.body.appendChild(clipboardInput);
    clipboardInput.value = url;
    clipboardInput.select();
    document.execCommand('copy');
    document.body.removeChild(clipboardInput);
  });
});
