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
