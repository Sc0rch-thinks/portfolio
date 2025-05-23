import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	toggleActions: "restart pause resume none",
	markers: {
		startColor: "green",
		endColor: "red",
		fontSize: "18px",
		indent: 10,
	},
});

document.addEventListener("DOMContentLoaded", start);

// Initialize Lenis
const lenis = new Lenis({
	autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
	// console.log(e);
});

function start() {
	console.log("DOMContentLoaded");
	var startTimeline = gsap.timeline({ defaults: { duration: 1 } });
	startTimeline.from("#header-text", { opacity: 0, y: 50, ease: "power1.in" });
	startTimeline.play();
}
