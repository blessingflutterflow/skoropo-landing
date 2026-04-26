/* ============================================================
   Skoropo — custom scripts
   ============================================================ */

// About section — sticky scroll image switcher
(function () {
  const panels = document.querySelectorAll('.sk-about-panel');
  const imgs   = document.querySelectorAll('.sk-about-sticky__img');
  if (!panels.length || !imgs.length) return;

  function setActive(service) {
    imgs.forEach(function (img) {
      img.classList.toggle('is-active', img.dataset.service === service);
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.dataset.service);
      }
    });
  }, {
    threshold: 0.5
  });

  panels.forEach(function (p) { observer.observe(p); });
})();
