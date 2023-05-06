const fadeOutBackground = document.querySelector('.fade-out-background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const opacity = 1 - (scrollPosition / 200); // change 500 to adjust the fade-out speed
  fadeOutBackground.style.opacity = opacity;
});