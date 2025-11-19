document.addEventListener("mousemove", e => {
  const cursor = document.getElementById("cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  
  document.querySelectorAll(".glass").forEach(el => {
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    const offsetX = (relX - 0.5) * 20;  
    const offsetY = (relY - 0.5) * 20;
    el.style.boxShadow = `
      ${-offsetX}px ${-offsetY}px 30px rgba(0, 80, 200, 0.3),
      inset ${offsetX}px ${offsetY}px 25px rgba(255,255,255,0.08)
    `;
  });
});
