const fadeOutBackground = document.querySelector('.fade-out-background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const opacity = 1 - (scrollPosition / 500); // change 500 to adjust the fade-out speed
  fadeOutBackground.style.opacity = opacity;
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".topnav").classList.remove("hidden");
  } else {
    document.querySelector(".topnav").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.getElementById("fullscreen-button").style.backgroundImage = "url(exitfull.png)";
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        document.getElementById("fullscreen-button").style.backgroundImage = "url(fullscreen.png)";
      }
    }
  }
  document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);




