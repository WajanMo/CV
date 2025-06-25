// Toggle dark/light mode and save preference
function toggleMode() {
  const header = document.getElementById('main-header');
  const footer = document.querySelector('footer');
  const body = document.body;
  const toggleBtn = document.getElementById('toggle-btn');
  const slider = toggleBtn.querySelector('.slider');

  header.classList.toggle('dark');
  footer.classList.toggle('dark');
  body.classList.toggle('dark');

  if (header.classList.contains('dark')) {
    slider.textContent = '🌙';
    localStorage.setItem('mode', 'dark');
    toggleBtn.classList.add('dark');
  } else {
    slider.textContent = '🌞';
    localStorage.setItem('mode', 'light');
    toggleBtn.classList.remove('dark');
  }
}

// Apply saved mode on page load
function applySavedMode() {
  const savedMode = localStorage.getItem('mode');
  const header = document.getElementById('main-header');
  const footer = document.querySelector('footer');
  const body = document.body;
  const toggleBtn = document.getElementById('toggle-btn');
  const slider = toggleBtn.querySelector('.slider');

  if (savedMode === 'dark') {
    header.classList.add('dark');
    footer.classList.add('dark');
    body.classList.add('dark');
    slider.textContent = '🌙';
    toggleBtn.classList.add('dark');
  } else {
    header.classList.remove('dark');
    footer.classList.remove('dark');
    body.classList.remove('dark');
    slider.textContent = '🌞';
    toggleBtn.classList.remove('dark');
  }
}

window.addEventListener('DOMContentLoaded', applySavedMode);

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  let current = 0;

  if (slides.length && prevBtn && nextBtn) {
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      
      if (index === 0) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "inline-block";
      } else if (index === slides.length - 1) {
        prevBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
      } else {
        prevBtn.style.display = "inline-block";
        nextBtn.style.display = "inline-block";
      }
    }

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    showSlide(current); 
  }
});

//Skills tabs
function showTab(tabId) {
  const tabs = document.querySelectorAll('.skill-tab');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}
