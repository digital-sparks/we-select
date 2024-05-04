(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let e=window.location.href;console.log(e),document.querySelector("[data-share=facebook]").setAttribute("href",`https://www.facebook.com/share_channel/?link=${encodeURIComponent(e)}`),document.querySelector("[data-share=linkedin]").setAttribute("href",`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e)}`),document.querySelector("[data-share=email]").setAttribute("href",`mailto:?subject=${encodeURIComponent("Help me unlock AI powered public sector tools \u{1F513}")}&body=${encodeURIComponent(`Hi there,

I just joined Stotles' new waitlist for their AI-driven public sector operating system and I think you should too!
The more people I refer, the more chances I have to unlock special rewards.

Click my link to check it out: `+e+`

Thanks,`)}`),document.querySelector("[data-share=copy-url]").addEventListener("click",function(t){t.preventDefault();let o=document.createElement("input");document.body.appendChild(o),o.value=e,o.select(),document.execCommand("copy"),document.body.removeChild(o)})});})();
