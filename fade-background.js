const fadeOutBackground = document.querySelector('.fade-out-background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  let opacity = 1 - (scrollPosition / 500); // change 500 to adjust the fade-out speed
  if (opacity <= 0.2) {
    opacity = 0.2;
  }
  fadeOutBackground.style.opacity = opacity;
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
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
    document.getElementById("fullscreen-btn").style.backgroundImage = "url(exitfull.png)";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      document.getElementById("fullscreen-btn").style.backgroundImage = "url(fullscreen.png)";
    }
  }
}

document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', function (event) {
  if (!document.fullscreenElement) {
    document.getElementById("fullscreen-btn").style.backgroundImage = "url(fullscreen.png)";
  }
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && document.fullscreenElement) {
    document.exitFullscreen();
    document.getElementById("fullscreen-btn").style.backgroundImage = "url(fullscreen.png)";
  }
});

document.getElementById("scrollBtn").addEventListener("click", function () {
  const header = document.querySelector('.header3');
  const headerRect = header.getBoundingClientRect();
  const headerTop = headerRect.top + window.scrollY;
  const scrollTop = headerTop - (headerTop * 0.03); // Scroll to 10% above the header's top
  window.scrollTo({ top: scrollTop, behavior: 'smooth' });
});

document.getElementById("scrollBtn2").addEventListener("click", function () {
  const header = document.querySelector('.tetris');
  const headerRect = header.getBoundingClientRect();
  const headerTop = headerRect.top + window.scrollY;
  const scrollTop = headerTop - (headerTop * 0.01); // Scroll to 10% above the header's top
  window.scrollTo({ top: scrollTop, behavior: 'smooth' });
});

document.getElementById("scrollBtn3").addEventListener("click", function () {
  const header = document.querySelector('.sudoku');
  const headerRect = header.getBoundingClientRect();
  const headerTop = headerRect.top + window.scrollY;
  const scrollTop = headerTop - (headerTop * 0.01); // Scroll to 10% above the header's top
  window.scrollTo({ top: scrollTop, behavior: 'smooth' });
});

document.getElementById("scrollBtn4").addEventListener("click", function () {
  const header = document.querySelector('.CanvasBot');
  const headerRect = header.getBoundingClientRect();
  const headerTop = headerRect.top + window.scrollY;
  const scrollTop = headerTop - (headerTop * 0.01); // Scroll to 10% above the header's top
  window.scrollTo({ top: scrollTop, behavior: 'smooth' });
});
