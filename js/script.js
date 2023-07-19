/* =================== typing animation ==================== */
let typed = new Typed(".typing", {
  strings: [" ", "Web Developer", "Frontend Developer", "YouTuber"],
  startDelay: 2000,
  typeSpeed: 150,
  BackSpeed: 80,
  loop: true
})

/* =================== aside nav scrollsply style    ==================== */

const sections = document.querySelectorAll('section');
const navElements = document.querySelectorAll('.aside .nav a');
let activeSectionIndicator = '';

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(`.aside .nav a.active`).classList.remove('active');
        activeSectionIndicator = entry.target.classList[0];
        document
          .querySelector(`.aside .nav a[data-section="${activeSectionIndicator}"]`)
          .classList.add('active');
      }
    });
  },
  {
    root: document,
    rootMargin: '-10% 0px -90% 0px'
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
