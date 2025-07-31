
const slides = document.querySelectorAll('.slider-box');
const slideWrapper = document.querySelector('.slider-boxes');
const slideNumber = document.getElementById('slide-number');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let current = 0;
const totalSlides = slides.length;

function updateSlide(index) {
  slideWrapper.style.transform = `translateX(-${index * 100}%)`;
  slideNumber.textContent = String(index + 1).padStart(2, '0');
}

// Button Controls
nextBtn.addEventListener('click', () => {
  if (current < totalSlides - 1) {
    current++;
    updateSlide(current);
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateSlide(current);
  }
});

// Swipe Controls
let startX = 0;
let endX = 0;

slideWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slideWrapper.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0 && current < totalSlides - 1) {
      current++;
    } else if (diff < 0 && current > 0) {
      current--;
    }
    updateSlide(current);
  }
});

// Initial state
updateSlide(current);
// Optional: handle window resizing (in case slides resize)
window.addEventListener('resize', () => updateSlide(current));
////////////////////////////////////////////////////////////
  // menu toggle
  function toggleMobileMenu() {
  const menu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Optional: Toggle dropdowns on click (for mobile only)
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');
    }
  });
});

let autoSlideInterval;
let isPaused = false;

const pauseBtn = document.getElementById('pause-toggle');
const pauseIcon = document.getElementById('pause-icon-img');

function startAutoSlide() {
autoSlideInterval = setInterval(() => {
  current = (current + 1) % totalSlides;
  updateSlide(current);
}, 8000);
}

function stopAutoSlide() {
clearInterval(autoSlideInterval);
}

// Start auto slide on load
startAutoSlide();

pauseBtn.addEventListener('click', () => {
if (isPaused) {
  startAutoSlide();
  pauseIcon.src = "images/pause-button.jpg";  // <-- Reset to pause icon
} else {
  stopAutoSlide();
  pauseIcon.src = "images/play-button.jpg";   // <-- Set to play icon
}
isPaused = !isPaused;
});
//////////////////////////////////////////////////////////////////////////////Orchestra////////////////////////////////////////////////////////////////////////////////////////
const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.member-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      cards.forEach(card => {
        const group = card.dataset.group;
        card.style.display = (filter === 'all' || group === filter) ? 'block' : 'none';
      });
    });
  });

