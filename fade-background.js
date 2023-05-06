const fadeOutBackground = document.querySelector('.fade-out-background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const opacity = 1 - (scrollPosition / 200); // change 500 to adjust the fade-out speed
  fadeOutBackground.style.opacity = opacity;
});

const header3 = document.querySelector('.header3');

window.addEventListener('scroll', function() {
    var header3 = document.querySelector('.header3');
    var position = header3.getBoundingClientRect();
  
    // If header3 is in the viewport
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      header3.classList.add('visible');
    }
  });