
// ======== Slider Functionality ========
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

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    current = (current + 1) % totalSlides;
    updateSlide(current);
  }, 8000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Initial setup
updateSlide(current);
let autoSlideInterval;
let isPaused = false;
startAutoSlide();

// ======== Swipe Support ========
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

// ======== Button Controls ========
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

// ======== Pause Toggle Button ========
const pauseBtn = document.getElementById('pause-toggle');
const pauseIcon = document.getElementById('pause-icon-img');

if (pauseBtn) {
  pauseBtn.addEventListener('click', () => {
    if (isPaused) {
      startAutoSlide();
      pauseIcon.src = "images/pause-button.jpg";
    } else {
      stopAutoSlide();
      pauseIcon.src = "images/play-button.jpg";
    }
    isPaused = !isPaused;
  });
}

// ======== Hamburger Menu Toggle ========
function toggleMobileMenu() {
  const menu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// ======== Dropdown Menu (Mobile Only) ========
document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');
    }
  });
});

// ======== Resize Handler ========
window.addEventListener('resize', () => updateSlide(current));



///////////////////////////////////////////////// Orchestra /////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".tab");
  const memberCards = document.querySelectorAll(".member-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update button styles
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/hide member cards based on filter
      memberCards.forEach((card) => {
        const section = card.getAttribute("data-filter");
        if (filter === "all" || section === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
window.toggleMobileMenu = toggleMobileMenu;

