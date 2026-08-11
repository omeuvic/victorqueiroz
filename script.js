lucide.createIcons();

const menuButton = document.getElementById("menu-btn");
const nav = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => nav.classList.toggle("active"));

document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".project-gallery").forEach(gallery => {
  const slides = Array.from(gallery.querySelectorAll(".project-slide"));
  const prevBtn = gallery.querySelector(".gallery-btn.prev");
  const nextBtn = gallery.querySelector(".gallery-btn.next");
  const counter = gallery.querySelector(".gallery-counter");

  if (slides.length <= 1) {
    gallery.classList.remove("has-multiple");
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    if (counter) counter.textContent = "1 / 1";
    return;
  }

  gallery.classList.add("has-multiple");
  let currentIndex = 0;

  const updateGallery = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });

    if (counter) counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === slides.length - 1;
  };

  prevBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateGallery();
  });

  nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateGallery();
  });

  updateGallery();
});

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
