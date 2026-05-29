/* =============================================
   PAGES — Insel-Detail-Seiten öffnen/schließen
   Für jede neue Insel: Funktion hier hinzufügen
   und HTML-Block in pages/ anlegen.
   ============================================= */

/**
 * Öffnet eine Detailseite (Overlay) anhand ihrer Container-ID.
 * Setzt die Anzeige auf `block`, scrollt an den Anfang des Containers
 * und sperrt das Body-Scrollen, damit der Nutzer im Overlay bleibt.
 * @param {string} id - Die DOM-ID des Seiten-Containers (z. B. 'santorini-page').
 */
function openPage(id) {
  const page = document.getElementById(id);
  page.style.display = 'block';
  page.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

/**
 * Schließt eine zuvor geöffnete Detailseite (Overlay) und gibt das
 * Scroll-Verhalten des Bodys wieder frei.
 * @param {string} id - Die DOM-ID des Seiten-Containers.
 */
function closePage(id) {
  const page = document.getElementById(id);
  page.style.display = 'none';
  document.body.style.overflow = '';
}

// Convenience-Funktionen für konkrete Inseln
function openSantorini() { openPage('santorini-page'); }
function closeSantorini() { closePage('santorini-page'); }

function openMykonos() { openPage('mykonos-page'); }
function closeMykonos() { closePage('mykonos-page'); }
