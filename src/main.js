import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

var start= gsap.timeline