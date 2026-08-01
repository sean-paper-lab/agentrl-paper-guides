const progressBar = document.querySelector(".reading-progress span");
const backToTop = document.querySelector(".back-to-top");

function updateReadingState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
  if (progressBar) progressBar.style.width = `${progress * 100}%`;
  if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 700);
}

window.addEventListener("scroll", updateReadingState, { passive: true });
window.addEventListener("resize", updateReadingState);
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateReadingState();
