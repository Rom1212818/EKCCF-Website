document.addEventListener("DOMContentLoaded", function () {
  // ======== Slider Functionality ========
  const slides = document.querySelectorAll('.slider-box');
  const slideWrapper = document.querySelector('.slider-boxes');
  const slideNumber = document.getElementById('slide-number');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  let current = 0;
  const totalSlides = slides.length;

  function updateSlide(index) {
    if (slideWrapper) {
      slideWrapper.style.transform = `translateX(-${index * 100}%)`;
    }
    if (slideNumber) {
      slideNumber.textContent = String(index + 1).padStart(2, '0');
    }
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

  updateSlide(current);
  let autoSlideInterval;
  let isPaused = false;
  startAutoSlide();

  // ======== Swipe Support ========
  let startX = 0;
  let endX = 0;

  if (slideWrapper) {
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
  }

  // ======== Button Controls ========
  if (nextBtn && prevBtn) {
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
  }

  // ======== Pause Toggle Button ========
  const pauseBtn = document.getElementById('pause-toggle');
  const pauseIcon = document.getElementById('pause-icon-img');

  if (pauseBtn && pauseIcon) {
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
  window.toggleMobileMenu = function () {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (menu && hamburger) {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');

      hamburger.textContent = hamburger.classList.contains('active') ? '✖' : '☰';
    }
  };

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

  // ======== Orchestra Filter Functionality ========
  const filterButtons = document.querySelectorAll(".tab");
  const memberCards = document.querySelectorAll(".member-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
  
      // Update button styles
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
  
      // First: fade out all cards
      memberCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          // Trigger reflow to apply fade-in
          void card.offsetWidth;
          card.classList.remove("fade-out");
        } else {
          card.classList.add("fade-out");
          setTimeout(() => {
            card.style.display = "none";
          }, 400); // Match transition time
        }
      });
    });
  });

  // =========== Language Switch ========
  const setLanguage = (lang) => {
    localStorage.setItem('language', lang);

    if (lang === 'en') {
      document.querySelectorAll('.lang-ko').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.lang-en').forEach(el => el.style.display = '');
    } else {
      document.querySelectorAll('.lang-ko').forEach(el => el.style.display = '');
      document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
    }
  };

  // Event listeners for buttons
  const langButtons = document.querySelectorAll('.language-switcher button');
  if (langButtons.length >= 2) {
    langButtons[0].addEventListener('click', () => setLanguage('ko')); // 한국어
    langButtons[1].addEventListener('click', () => setLanguage('en')); // English
  }

  // Apply saved language preference on page load
  const savedLang = localStorage.getItem('language') || 'ko';
  setLanguage(savedLang);

});
