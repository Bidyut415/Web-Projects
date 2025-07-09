// Optional JavaScript for click interactions
document.querySelectorAll(".gallery-box img").forEach(img => {
  img.addEventListener("click", () => {
      alert(`You clicked on: ${img.alt}`);
  });
});
