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

function openNaxos() { openPage('naxos-page'); }
function closeNaxos() { closePage('naxos-page'); }

function openParos() { openPage('paros-page'); }
function closeParos() { closePage('paros-page'); }

function openSifnos() { openPage('sifnos-page'); }
function closeSifnos() { closePage('sifnos-page'); }

function openKos() { openPage('kos-page'); }
function closeKos() { closePage('kos-page'); }

function openRhodos() { openPage('rhodos-page'); }
function closeRhodos() { closePage('rhodos-page'); }

function openMilos() { openPage('milos-page'); }
function closeMilos() { closePage('milos-page'); }

function openSiros() { openPage('siros-page'); }
function closeSiros() { closePage('siros-page'); }

function openTinos() { openPage('tinos-page'); }
function closeTinos() { closePage('tinos-page'); }

function openAnafi() { openPage('anafi-page'); }
function closeAnafi() { closePage('anafi-page'); }

function openAmorgos() { openPage('amorgos-page'); }
function closeAmorgos() { closePage('amorgos-page'); }

function openFolegandros() { openPage('folegandros-page'); }
function closeFolegandros() { closePage('folegandros-page'); }

function openAndros() { openPage('andros-page'); }
function closeAndros() { closePage('andros-page'); }

function openSerifos() { openPage('serifos-page'); }
function closeSerifos() { closePage('serifos-page'); }

function openKoufonisia() { openPage('koufonisia-page'); }
function closeKoufonisia() { closePage('koufonisia-page'); }