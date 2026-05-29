/* =============================================
   REVEAL — Scroll-gesteuerte Einblend-Animation
   ============================================= */


/**
 * Reveal-Mechanik
 * Zweck: Elemente mit der Klasse `.reveal` beim Eintreten in den Viewport
 * sichtbar machen. Die Beobachtung nutzt IntersectionObserver, damit
 * Animationen performant sind (keine Scroll-Handler mit hoher Frequenz).
 *
 * Implementation:
 * - `threshold: 0.08` bedeutet: das Element gilt als sichtbar, sobald ~8%
 *   davon im Viewport erscheinen.
 * - Beim Sichtbarwerden wird die Klasse `visible` mit einem kurzen
 *   gestaffelten Delay hinzugefügt, damit mehrere Elemente nacheinander
 *   animiert werden (stagger, abhängig vom Index `i`).
 */
const reveals = document.querySelectorAll('.reveal');

/**
 * IntersectionObserver-Callback
 * @param {IntersectionObserverEntry[]} entries
 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // Staggered animation: Verzögerung je nach Elementindex
      setTimeout(() => e.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.08 });

// Alle `.reveal`-Elemente vom Observer beobachten lassen
reveals.forEach(el => observer.observe(el));
