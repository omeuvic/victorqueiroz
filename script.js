const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("nav-menu");
const header = document.getElementById("header");
const backTop = document.getElementById("back-top");

lucide.createIcons();

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const onScroll = () => {
  const scrolled = window.scrollY > 20;
  header.classList.toggle("scrolled", scrolled);
  backTop.classList.toggle("visible", window.scrollY > 550);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document
  .querySelectorAll(".skill-card,.project-card,.timeline-item,.process-item,.education-card,.about-panel,.project-note")
  .forEach((el, index) => {
    el.classList.add("animate");
    el.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
    observer.observe(el);
  });
