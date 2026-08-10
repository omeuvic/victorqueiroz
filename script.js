const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("nav-menu");
const header = document.querySelector(".site-header");
const backTop = document.getElementById("back-top");

menuButton.addEventListener("click", () => {
  const active = nav.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", active ? "true" : "false");
  document.body.classList.toggle("menu-open", active);
});

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
  backTop.classList.toggle("show", window.scrollY > 500);
});

backTop.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const tabs = document.querySelectorAll(".project-tab");
const cards = document.querySelectorAll(".project-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle("hidden", card.dataset.category !== filter);
    });
  });
});
