lucide.createIcons();

const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => nav.classList.toggle("active"));

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".skill-card,.project-card,.timeline-item,.process-item,.education-card")
  .forEach(el => {
    el.classList.add("animate");
    observer.observe(el);
  });
