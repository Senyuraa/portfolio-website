const expSection = document.getElementById("experience");
const expLine = document.getElementById("exp-line");

let currentWidth = 0;            // current smooth width
let targetWidth = 0;             // where it should go

function animateLine() {
  currentWidth += (targetWidth - currentWidth) * 0.05;  // smoother (slower & buttery)
  expLine.style.width = currentWidth.toFixed(2) + "%";

  requestAnimationFrame(animateLine);
}

animateLine();  // start animation loop

window.addEventListener("scroll", () => {
  const rect = expSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress = Math.min(1, Math.max(0, 1 - rect.top / windowHeight));
    targetWidth = progress * 100;
  } else if (rect.top >= windowHeight) {
    targetWidth = 0;
  } else if (rect.bottom <= 0) {
    targetWidth = 100;
  }
});


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
    
    navbar.classList.add("hide-nav");
    socials.classList.add("hide-nav");

    navbar.classList.remove("show-nav");
    socials.classList.remove("show-nav");
  } 
  else {
   
    navbar.classList.add("show-nav");
    socials.classList.add("show-nav");

    navbar.classList.remove("hide-nav");
    socials.classList.remove("hide-nav");
  }

  lastScroll = currentScroll;
});


const faders = document.querySelectorAll('.fade-sec');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
});
// EXPERIENCE LINE ONLY ON INDEX PAGE
if (document.getElementById("experience")) {

  const expSection = document.getElementById("experience");
  const expLine = document.getElementById("exp-line");

  let currentWidth = 0;
  let targetWidth = 0;

  function animateLine() {
    currentWidth += (targetWidth - currentWidth) * 0.05;
    expLine.style.width = currentWidth.toFixed(2) + "%";
    requestAnimationFrame(animateLine);
  }

  animateLine();

  window.addEventListener("scroll", () => {
    const rect = expSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = Math.min(1, Math.max(0, 1 - rect.top / windowHeight));
      targetWidth = progress * 100;
    } else if (rect.top >= windowHeight) {
      targetWidth = 0;
    } else if (rect.bottom <= 0) {
      targetWidth = 100;
    }
  });

}
