
document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelectorAll('.slider-box');
const slideTrack = document.querySelector('.slider-boxes');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const slideNumber = document.getElementById('slide-number');

let current = 0;

function updateSlide(index) {
  const offset = -index * 100;
  slideTrack.style.transform = `translateX(${offset}%)`;

  // Update number display (01, 02, etc.)
  slideNumber.textContent = String(index + 1).padStart(2, '0');
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide(current);
});

updateSlide(current); // initial call
});
  
