// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal sections gently as they enter the viewport
const revealTargets = document.querySelectorAll(".skill-card, .project, .timeline__item, .split__col");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeUp .5s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((el) => {
  el.style.opacity = "0";
  observer.observe(el);
});

// Inject the fadeUp keyframes once (kept in JS since it's tied to this behavior, not static styling)
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(styleSheet);
