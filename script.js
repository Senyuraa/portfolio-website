// Animate white line above Experience based on scroll position
const expSection = document.getElementById("experience");
const expLine = document.getElementById("exp-line");

window.addEventListener("scroll", () => {
  const rect = expSection.getBoundingClientRect();
  const viewHeight = window.innerHeight;

  if (rect.top < viewHeight && rect.bottom > 0) {
    const visibleRatio = 1 - rect.top / viewHeight;
    const clamped = Math.max(0, Math.min(visibleRatio, 1));
    expLine.style.width = (clamped * 45) + "%";
  } else if (rect.top >= viewHeight) {
    expLine.style.width = "0%";
  } else if (rect.bottom <= 0) {
    expLine.style.width = "45%";
  }
});
