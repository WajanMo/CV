// Toggle dark/light mode and save preference
function toggleMode() {
  // Get elements needed for styling
  const header = document.getElementById('main-header');
  const footer = document.querySelector('footer');
  const body = document.body;
  const toggleBtn = document.getElementById('toggle-btn');
  const slider = toggleBtn.querySelector('.slider');

  // Toggle "dark" class on major layout parts
  header.classList.toggle('dark');
  footer.classList.toggle('dark');
  body.classList.toggle('dark');

  // If dark mode is now active
  if (header.classList.contains('dark')) {
    slider.textContent = '🌙';// Change icon to moon
    localStorage.setItem('mode', 'dark'); // Save preference to browser
    toggleBtn.classList.add('dark'); // Update button style
  } else {
	 // If light mode is active
    slider.textContent = '🌞'; // Change icon to sun
    localStorage.setItem('mode', 'light'); // Save preference
    toggleBtn.classList.remove('dark');
  }
}

// This function loads saved mode (dark/light) when the page loads
function applySavedMode() {
  const savedMode = localStorage.getItem('mode'); // Get saved preference
  const header = document.getElementById('main-header');
  const footer = document.querySelector('footer');
  const body = document.body;
  const toggleBtn = document.getElementById('toggle-btn');
  const slider = toggleBtn.querySelector('.slider');

  if (savedMode === 'dark') {
	// Apply dark mode if it was saved before
    header.classList.add('dark');
    footer.classList.add('dark');
    body.classList.add('dark');
    slider.textContent = '🌙';
    toggleBtn.classList.add('dark');
  } else {
	// Otherwise, keep light mode
    header.classList.remove('dark');
    footer.classList.remove('dark');
    body.classList.remove('dark');
    slider.textContent = '🌞';
    toggleBtn.classList.remove('dark');
  }
}

// Show specific skills tab (core or soft) when clicked
function showTab(tabId, event) {
  const tabs = document.querySelectorAll('.skill-tab'); // All tab content sections
  const buttons = document.querySelectorAll('.tab-btn'); // All tab buttons

  // Hide all tabs and remove active class from buttons
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  // Show selected tab and highlight button
  document.getElementById(tabId).classList.add('active');
  if (event) event.target.classList.add('active');
}

// Run this when the page is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  applySavedMode(); // Apply previously saved mode

  const toggleBtn = document.getElementById('toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMode); // Make toggle work
  }

  // --- Slider functionality for About Me page ---
  const slides = document.querySelectorAll(".slide"); // All slides
  const prevBtn = document.getElementById("prev-slide"); // Previous button
  const nextBtn = document.getElementById("next-slide"); // Next button
  let current = 0; // Current visible slide index

  // Only run if there are slides and buttons exist
  if (slides.length && prevBtn && nextBtn) {
	// Show the selected slide and hide the others
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index); // Show current, hide others
      });

      // Hide prev/next buttons when at the edges
      prevBtn.style.display = index === 0 ? "none" : "inline-block";
      nextBtn.style.display = index === slides.length - 1 ? "none" : "inline-block";
    }

    // Previous button click: go to previous slide
    prevBtn.addEventListener("click", () => {
      if (current > 0) {
        current--;
        showSlide(current);
      }
    });

    // Next button click: go to next slide
    nextBtn.addEventListener("click", () => {
      if (current < slides.length - 1) {
        current++;
        showSlide(current);
      }
    });

    // Show the first slide by default
    showSlide(current);
  }
});
