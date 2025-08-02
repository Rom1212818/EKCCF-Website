<script>
    const slides = document.querySelectorAll('.slider-box');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let current = 0;
  
    function updateSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    nextBtn.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      updateSlide(current);
    });
  
    prevBtn.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlide(current);
    });
  </script>