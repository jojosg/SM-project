gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = document.querySelectorAll(".panel");
let currentIndex = 0;
let isAnimating = false;

function scrollToSection(index) {
  if (index < 0 || index >= sections.length || isAnimating) return;
  isAnimating = true;
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: sections[index], autoKill: false },
    ease: "power2.out",
    onComplete: () => {
      currentIndex = index;
      isAnimating = false;
    },
  });
}

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else {
      scrollToSection(currentIndex - 1);
    }
  },
  { passive: false }
);
