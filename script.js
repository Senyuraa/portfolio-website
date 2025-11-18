const expSection = document.getElementById("experience");
const expLine = document.getElementById("exp-line");

// super smooth experience line animation
let lastWidth = 0;

window.addEventListener("scroll", () => {
  const rect = expSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress = Math.min(1, Math.max(0, 1 - rect.top / windowHeight));
    const targetWidth = progress * 100;
    lastWidth += (targetWidth - lastWidth) * 0.1; // smooth interpolation
    expLine.style.width = lastWidth.toFixed(2) + "%";
    requestAnimationFrame(() => {}); // GPU smoothness
  } else if (rect.top >= windowHeight) {
    expLine.style.width = "0%";
  } else if (rect.bottom <= 0) {
    expLine.style.width = "100%";
  }
});

// ===== SCROLL HIDE/SHOW NAV + SOCIALS =====
let lastScroll = 0;

const navbar = document.getElementById("navbar");
const socials = document.getElementById("socials");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // DOWN → hide
    navbar.classList.add("hide-nav");
    socials.classList.add("hide-nav");

    navbar.classList.remove("show-nav");
    socials.classList.remove("show-nav");
  } 
  else {
    // UP → show
    navbar.classList.add("show-nav");
    socials.classList.add("show-nav");

    navbar.classList.remove("hide-nav");
    socials.classList.remove("hide-nav");
  }

  lastScroll = currentScroll;
});
// ===== PARALLAX GRID MOVEMENT =====
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.05; // adjust intensity
  document.body.style.setProperty('--grid-shift', `${offset}px`);
});

const faders = document.querySelectorAll('.fade-sec');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
});
