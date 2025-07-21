document.addEventListener("DOMContentLoaded", function () {
  // Set CSS variable for navbar height
  const navbar = document.querySelector('.main-header');
  if (navbar) {
    const navbarHeight = navbar.offsetHeight;
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  }
  // ======== Slider Functionality ========
  

  // ======== Button Controls ========
  

  // ======== Hamburger Menu Toggle ========
  window.toggleMobileMenu = function () {
    const menu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    if (menu && hamburger) {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    }
  };

  // ======== Dropdown Menu (Mobile Only) ========
  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
      // Prevent default link behavior only if it has a dropdown
      if (this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-menu')) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('open');
        this.nextElementSibling.classList.toggle('open');
      }

    });
  });

  // =========== Language Switch ========
  window.setLanguage = (lang) => {
    localStorage.setItem('language', lang);

    if (lang === 'en') {
      document.querySelectorAll('.lang-ko').forEach(el => el.style.display = 'none');
      document.querySelectorAll('.lang-en').forEach(el => el.style.display = '');
    } else {
      document.querySelectorAll('.lang-ko').forEach(el => el.style.display = '');
      document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
    }
  };
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

  // Apply saved language preference on page load
  const savedLang = localStorage.getItem('language') || 'ko';
  window.setLanguage(savedLang);

 //  ====================================================================== Events Section ==========================================
 const programEvents = [
  {
    id: 1,
    title: "여름 문화 축제",
    titleEn: "Summer Cultural Festival",
    image: "images/summercamp2025.JPG",
    description: "즐겁게 놀며 배우는 세종문화센터의 여름방학 캠프에 여러분을 초대합니다!",
    descriptionEn: "We invite you to Sejong Cultural Center's summer camp, where you can learn while having fun!",
    fullDescription: `<p>이번 여름, 우리 아이에게 특별한 추억을 선물해보세요! 세종문화센터에서는 유치원부터 초등학교 6학년 친구들을 위한 즐겁고 알찬 여름방학 캠프를 준비했어요.\n    </p><p>하루하루가 지루할 틈 없이! 신나는 미술과 만들기 시간, 그리고 쉽고 재미있게 배우는 영어와 수학 수업이 기다리고 있어요.\n    </p><p>또래 친구들과 함께 어울리며 놀이하듯 배우고, 창의력과 자신감도 쑥쑥 자라나는 시간이 될 거예요.</p><p>처음 오는 친구들도 금세 친해질 수 있도록 따뜻한 분위기에서 소규모로 운영됩니다.\n    </p><p>즐거움과 배움이 가득한 세종 여름캠프, 놓치지 마세요!</p><p>궁금한 점이나 등록 문의는 언제든지\n    Sejongsummercamp@gmail.com 으로 연락 주세요 :)</p>`,
    fullDescriptionEn: `<p>This summer, give your child a special memory! Sejong Cultural Center has prepared a fun and enriching summer camp for children from kindergarten to 6th grade.</p><p>Every day will be full of excitement! Fun art and craft time, and easy and enjoyable English and math classes await. It will be a time for children to learn through play with their peers, and to develop their creativity and confidence.</p><p>The camp is operated in small groups in a warm atmosphere so that even new friends can quickly get to know each other. Don't miss out on the Sejong Summer Camp, full of joy and learning!</p><p>For inquiries or registration, please contact Sejongsummercamp@gmail.com at any time :)</p>`,
    date: "July 14, 2025",
    time: "10:00 AM - 3:30 PM",
    location: "Main Cultural Hall",
    status: "sectionA"
  },
  {
    id: 2,
    title: "가을 음악회",
    titleKo: "Autumn Concert",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    description: "가을밤을 아름다운 선율로 수놓을 음악회에 여러분을 초대합니다.",
    descriptionEn: "We invite you to a concert that will adorn the autumn night with beautiful melodies.",
    fullDescription: `<p>깊어가는 가을밤, 세종문화센터에서 특별한 음악회를 개최합니다. 다양한 장르의 음악과 함께 가을의 정취를 느껴보세요.</p><p>온 가족이 함께 즐길 수 있는 풍성한 프로그램이 준비되어 있습니다. 많은 관심과 참여 부탁드립니다.</p>`,
    fullDescriptionEn: `<p>Sejong Cultural Center is holding a special concert on a deep autumn night. Enjoy the autumn atmosphere with various genres of music.</p><p>A rich program for the whole family is prepared. We ask for your interest and participation.</p>`,
    date: "October 20, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Concert Hall",
    status: "sectionB"
  },
  {
    id: 3,
    title: "김치 만들기 워크숍",
    titleKo: "Kimchi Making Workshop",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "한국 전통 김치 만들기를 배우고 직접 담근 김치를 가져가세요!",
    descriptionEn: "Learn how to make traditional Korean kimchi and take home your own homemade kimchi!",
    fullDescription: `<p>한국의 대표적인 발효 음식인 김치를 직접 만들어보는 워크숍입니다. 전문 강사의 지도로 김치의 역사와 종류, 그리고 맛있는 김치를 담그는 비법을 배울 수 있습니다.</p><p>직접 담근 김치는 집으로 가져가실 수 있으며, 한국 음식 문화를 체험할 수 있는 좋은 기회가 될 것입니다.</p>`,
    fullDescriptionEn: `<p>This workshop is where you can make kimchi, a representative fermented food of Korea. Under the guidance of a professional instructor, you can learn the history and types of kimchi, and the secret to making delicious kimchi.</p><p>You can take home the kimchi you made yourself, and it will be a great opportunity to experience Korean food culture.</p>`,
    date: "November 10, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Cooking Studio",
    status: "sectionC"
  }
];

let currentTab = "sectionA";

function getStatusClass(status) {
  switch (status) {
    case "current": return "event-status current";
    case "upcoming": return "event-status upcoming";
    case "past": return "event-status past";
    default: return "event-status";
  }
}

function renderEvents() {
  const container = document.getElementById("events-container");
  if (!container) return;
  container.innerHTML = "";

  const filtered = programEvents.filter(e => e.status === currentTab);

  for (const event of filtered) {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-image-container">
        <img src="${event.image}" alt="${event.title}" class="event-image" />
        <div class="${getStatusClass(event.status)}">${event.status}</div>
        <div class="event-date-overlay">${event.date}</div>
      </div>
      <div class="event-content">
        <h3 class="event-title"><span class="lang-ko">${event.title}</span><span class="lang-en" style="display: none;">${event.titleEn || event.title}</span></h3>
        <p class="event-title-ko"><span class="lang-ko">${event.titleKo}</span><span class="lang-en" style="display: none;">${event.title}</span></p>
        <p class="event-description"><span class="lang-ko">${event.description}</span><span class="lang-en" style="display: none;">${event.descriptionEn || event.description}</span></p>
        <div class="event-info">
          <p><strong>시간:</strong> ${event.time}</p>
          <p><strong>장소:</strong> ${event.location}</p>
          
        </div>
        <button class="details-button" onclick="showEventModal(${event.id})">자세히 보기</button>
      </div>
    `;
    container.appendChild(card);
  }
}


window.showEventModal = function(id) {
  const event = programEvents.find(ev => ev.id === id);
  if (!event) return;

  document.getElementById('modal-image').src = event.image;
  document.getElementById('modal-title').innerHTML = `<span class="lang-ko">${event.title}</span><span class="lang-en" style="display: none;">${event.titleEn || event.title}</span>`;
  document.getElementById('modal-subtitle').innerHTML = `<span class="lang-ko">${event.titleKo}</span><span class="lang-en" style="display: none;">${event.title}</span>`;
  document.getElementById('modal-date').innerHTML = `📅 날짜: ${event.date}`;
  document.getElementById('modal-time').innerHTML = `⏰ 시간: ${event.time}`;
  document.getElementById('modal-location').innerHTML = `📍 장소: ${event.location}`;
  
  
  document.getElementById('modal-description-text').innerHTML = event.fullDescription;

  document.getElementById('event-modal').classList.remove('hidden');
}

window.hideEventModal = function() {
  document.getElementById('event-modal').classList.add('hidden');
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const eventCards = document.querySelectorAll('.event-card');
const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    eventCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
    updateThumb();
  });
});

// Initial render
renderEvents();

// Custom Scrollbar Logic
const container = document.querySelector('.events-container');
const scrollbarContainer = document.querySelector('.custom-scrollbar-container');
const track = document.querySelector('.custom-scrollbar-track');
const thumb = document.querySelector('.custom-scrollbar-thumb');

if (container && scrollbarContainer && track && thumb) {
    const updateThumb = () => {
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        if (scrollWidth > clientWidth) {
            scrollbarContainer.style.display = 'flex';
            const thumbWidth = (clientWidth / scrollWidth) * 100;
            thumb.style.width = `${thumbWidth}%`;
            const scrollLeft = container.scrollLeft;
            const thumbPosition = (scrollLeft / (scrollWidth - clientWidth)) * (100 - thumbWidth);
            thumb.style.left = `${thumbPosition}%`;
        } else {
            scrollbarContainer.style.display = 'none';
        }
    };

    container.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);
    updateThumb(); // Initial call

    let isDragging = false;
    let startX;
    let scrollLeft;

    thumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - thumb.offsetLeft;
        scrollLeft = container.scrollLeft;
        thumb.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - track.getBoundingClientRect().left;
        const walk = (x - startX) * (container.scrollWidth / track.clientWidth);
        container.scrollLeft = walk;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        thumb.style.cursor = 'grab';
    });
}
});
