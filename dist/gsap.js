(()=>{gsap.registerPlugin(ScrollTrigger,Observer);window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{document.querySelector(".hero_image-phone")&&gsap.from(".hero_image-phone .phone_component",{delay:.6,yPercent:15,duration:1.1,ease:"power2.inOut"}),document.querySelector(".icon_profile")&&gsap.from(".icon_profile",{opacity:0,scale:.5,delay:1.1,duration:.7,ease:"power3.out",stagger:{each:.1,from:"random"}}),document.querySelector(".icon_profile-variant")&&gsap.from(".icon_profile-variant",{opacity:0,scale:.5,delay:1.1,duration:.7,ease:"power3.out",stagger:{each:.1,from:"random"}}),document.querySelector(".icon_social")&&gsap.from(".icon_social",{opacity:0,scale:.5,delay:.9,duration:.5,ease:"power2.out",stagger:{each:.05,from:"random"}}),document.querySelector(".talent_image-front")&&gsap.from(".talent_image-back,.talent_image-front",{opacity:0,yPercent:10,delay:.5,scale:.98,duration:1.2,ease:"power2.out",stagger:{each:.1,from:"end"}}),gsap.utils.toArray(".free-ebook-wrapper").forEach(e=>{gsap.from(e,{yPercent:5,scale:.95,opacity:0,scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top"}})}),gsap.utils.toArray(".section_single-img-wrapper").forEach(e=>{let o=e.querySelector("[data-gsap-el=main]"),r=e.querySelectorAll("[data-gsap-el=supporting]");gsap.timeline({scrollTrigger:{trigger:e,start:"center bottom",end:"bottom top",toggleActions:"play reverse play reverse"}}).from(o,{scale:.975,opacity:0,duration:.8}).from(r,{opacity:0,y:"0.5rem",scale:.98,duration:1,ease:"power2.out",stagger:{each:.2}},"<+0.3")})});})();
