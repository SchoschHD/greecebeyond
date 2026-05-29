/* =============================================
   NAV — Scroll-Effekt der Navbar
   ============================================= */

/**
 * Nav-Handling
 * Zweck: Schaltet die CSS-Klasse `scrolled` an der Navbar basierend auf
 * der vertikalen Scroll-Position um. Die Klasse erlaubt visuelle
 * Anpassungen (z. B. Hintergrundfarbe, Schatten), sobald der Nutzer scrollt.
 *
 * Hinweis: Dies ist ein rein visuelles Verhalten; es ändert nichts an der
 * Seitenstruktur oder Navigation-Logik.
 */
const nav = document.getElementById('navbar');

// Beim Scrollen prüfen wir, ob die Seite weiter als 60px gescrollt wurde.
// Dann wird die Klasse `scrolled` gesetzt oder entfernt.
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});
