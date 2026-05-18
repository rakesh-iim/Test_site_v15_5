// Magnetic Button Effect
function initMagneticButtons() {
  const btns = document.querySelectorAll('.btn');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate magnetic pull strength (e.g., 0.3 for X, 0.5 for Y)
      btn.style.setProperty('--tx', `${x * 0.3}px`);
      btn.style.setProperty('--ty', `${y * 0.5}px`);
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--tx', `0px`);
      btn.style.setProperty('--ty', `0px`);
    });
  });
}
