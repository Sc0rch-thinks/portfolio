import { gsap } from "./node_modules/gsap/index.js";

document.addEventListener("DOMContentLoaded", start);

// Initialize Lenis
const lenis = new Lenis({
	autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
	console.log(e);
});

function start() {
	console.log("domContentLoaded");
	var startTimeline = gsap.timeline({ defaults: { duration: 1 } });
	startTimeline.from("#header-text", { opacity: 0, y: 25, ease: "power1.in" });
	startTimeline.play();
}
