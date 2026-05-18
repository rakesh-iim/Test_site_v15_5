// Store Locator Tabs
function initStoreLocator() {
  const tabs = document.querySelectorAll('.locator-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const city = tab.dataset.city;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active card
      document.querySelectorAll('.locator-card').forEach(card => {
        card.classList.remove('active');
      });
      const target = document.getElementById('loc-' + city);
      if (target) target.classList.add('active');
    });
  });
}
