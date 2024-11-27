

const anim = () => {

  console.log('anim');
  //const title1 = document.querySelector('#section1 h1');
  // timeline1.from(title1, {duration: 1, y: -100, scale: 0.8, opacity: 0})
  // timeline1.to(title1, {duration: 1, y: +100, scale: 10, opacity: 0}, '-=0.6')
  const timeline1 = gsap.timeline()
  timeline1.from("#section1 img", {duration: .7, x: -700, opacity: 0, stagger: 0.4})
  timeline1.from("#section1 h1", {duration: .7, x: -700, opacity: 0}, '-=0.6')

  // use scrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: "#section1",
    start: "top top",
    end: "bottom top",
    animation: timeline1,
    scrub: 1,
    pin: true,
    markers: true
  });
}



document.addEventListener('DOMContentLoaded', anim)
