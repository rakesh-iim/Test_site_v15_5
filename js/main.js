/**
 * MrGardenr — Main Bootstrap Script
 * Loads HTML section partials via fetch() and initializes all features.
 */

// List of section partials in display order
const sections = [
  'sections/topbar.html',
  'sections/navbar.html',
  'sections/mobile-nav.html',
  'sections/hero.html',
  'sections/about.html',
  'sections/stats.html',
  'sections/services.html',
  'sections/testimonials.html',
  'sections/gallery.html',
  'sections/process.html',
  'sections/featured.html',
  'sections/store-locator.html',
  'sections/showcase.html',
  'sections/contact.html',
  'sections/footer.html'
];

/**
 * Load all HTML partials into their placeholder elements.
 * Each placeholder is a <div data-include="sections/filename.html"></div>
 */
async function loadIncludes() {
  const placeholders = document.querySelectorAll('[data-include]');
  
  const fetchPromises = Array.from(placeholders).map(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
      const html = await response.text();
      el.innerHTML = html;
    } catch (error) {
      console.error(error);
      el.innerHTML = `<!-- Error loading ${file} -->`;
    }
  });

  await Promise.all(fetchPromises);
}

/**
 * Initialize all interactive features after HTML is loaded.
 */
function initializeFeatures() {
  // Initialize components
  initTestimonialSlider();
  initStoreLocator();
  initMagneticButtons();
  
  // Run initial animations
  revealOnScroll();
  animateCounters();
}

/**
 * Bootstrap: Load partials, then initialize.
 */
document.addEventListener('DOMContentLoaded', async () => {
  await loadIncludes();
  initializeFeatures();
});

/**
 * Scroll event listeners for animations.
 */
window.addEventListener('scroll', () => {
  revealOnScroll();
  animateCounters();
  handleNavScroll();
});
