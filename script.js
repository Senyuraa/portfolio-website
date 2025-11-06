(function(){
  const socials = document.getElementById("socials");
  const text = document.getElementById("socialText");
  const svg = document.getElementById("guideSvg");
  const path = document.getElementById("guidePath");
  const head = document.getElementById("guideHead");

  function resizeSvg(){
    svg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);
  }

  function drawArrow(){
    const sRect = socials.getBoundingClientRect();
    const tRect = text.getBoundingClientRect();

    // Start point - left & below text
    const startX = tRect.left - 120;
    const startY = tRect.top + tRect.height / 2 + 10;

    // End point - near socials
    const endX = sRect.left + sRect.width * 0.6;
    const endY = sRect.top + sRect.height * 0.5;

    // A tighter spiral + smooth curve up-left
    const d = `
      M ${startX} ${startY}
      q -60 -10 -80 -40
      t 40 -60
      q 60 40 0 60
      q -40 30 40 10
      Q ${startX - 200} ${startY - 200} ${endX} ${endY}
    `;
    path.setAttribute("d", d);

    // Animate path drawing
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.transition = "none";
    void path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 3s ease-in-out .5s";
    path.style.strokeDashoffset = 0;

    // Moving arrowhead
    let start = null;
    const duration = 3200;
    function animateArrow(ts){
      if(!start) start = ts;
      const progress = Math.min((ts - start)/duration, 1);
      const point = path.getPointAtLength(length * progress);
      const prev = path.getPointAtLength(Math.max(0, length * progress - 8));
      const angle = Math.atan2(point.y - prev.y, point.x - prev.x) * (180 / Math.PI);
      const size = 12;
      head.setAttribute("points", `0,0 ${size},${size/2} 0,${size}`);
      head.setAttribute("transform", `translate(${point.x - size}px, ${point.y - size/2}px) rotate(${angle})`);
      if(progress < 1) requestAnimationFrame(animateArrow);
    }
    requestAnimationFrame(animateArrow);
  }

  window.addEventListener("load", ()=>{resizeSvg();drawArrow();});
  window.addEventListener("resize", ()=>{resizeSvg();drawArrow();});
})();
