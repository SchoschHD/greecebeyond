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

// Convenience-Funktionen für konkrete Inseln Kykladen
function openSantorini() {
  if (typeof loadPage === 'function') {
    loadPage('santorini-page', 'islands/kyklades/santorini.html').then(() => openPage('santorini-page'));
  } else {
    openPage('santorini-page');
  }
}
function closeSantorini() { closePage('santorini-page'); }

function openMykonos() {
  if (typeof loadPage === 'function') {
    loadPage('mykonos-page', 'islands/kyklades/mykonos.html').then(() => openPage('mykonos-page'));
  } else {
    openPage('mykonos-page');
  }
}
function closeMykonos() { closePage('mykonos-page'); }

function openNaxos() {
  if (typeof loadPage === 'function') {
    loadPage('naxos-page', 'islands/kyklades/naxos.html').then(() => openPage('naxos-page'));
  } else {
    openPage('naxos-page');
  }
}
function closeNaxos() { closePage('naxos-page'); }

function openParos() {
  if (typeof loadPage === 'function') {
    loadPage('paros-page', 'islands/kyklades/paros.html').then(() => openPage('paros-page'));
  } else {
    openPage('paros-page');
  }
}
function closeParos() { closePage('paros-page'); }

function openSifnos() {
  if (typeof loadPage === 'function') {
    loadPage('sifnos-page', 'islands/kyklades/sifnos.html').then(() => openPage('sifnos-page'));
  } else {
    openPage('sifnos-page');
  }
}
function closeSifnos() { closePage('sifnos-page'); }


function openMilos() {
  if (typeof loadPage === 'function') {
    loadPage('milos-page', 'islands/kyklades/milos.html').then(() => openPage('milos-page'));
  } else {
    openPage('milos-page');
  }
}
function closeMilos() { closePage('milos-page'); }

function openSiros() {
  if (typeof loadPage === 'function') {
    loadPage('siros-page', 'islands/kyklades/siros.html').then(() => openPage('siros-page'));
  } else {
    openPage('siros-page');
  }
}
function closeSiros() { closePage('siros-page'); }

function openTinos() {
  if (typeof loadPage === 'function') {
    loadPage('tinos-page', 'islands/kyklades/tinos.html').then(() => openPage('tinos-page'));
  } else {
    openPage('tinos-page');
  }
}
function closeTinos() { closePage('tinos-page'); }

function openAnafi() {
  if (typeof loadPage === 'function') {
    loadPage('anafi-page', 'islands/kyklades/anafi.html').then(() => openPage('anafi-page'));
  } else {
    openPage('anafi-page');
  }
}
function closeAnafi() { closePage('anafi-page'); }

function openAmorgos() {
  if (typeof loadPage === 'function') {
    loadPage('amorgos-page', 'islands/kyklades/amorgos.html').then(() => openPage('amorgos-page'));
  } else {
    openPage('amorgos-page');
  }
}
function closeAmorgos() { closePage('amorgos-page'); }

function openFolegandros() {
  if (typeof loadPage === 'function') {
    loadPage('folegandros-page', 'islands/kyklades/folegandros.html').then(() => openPage('folegandros-page'));
  } else {
    openPage('folegandros-page');
  }
}
function closeFolegandros() { closePage('folegandros-page'); }

function openAndros() {
  if (typeof loadPage === 'function') {
    loadPage('andros-page', 'islands/kyklades/andros.html').then(() => openPage('andros-page'));
  } else {
    openPage('andros-page');
  }
}
function closeAndros() { closePage('andros-page'); }

function openSerifos() {
  if (typeof loadPage === 'function') {
    loadPage('serifos-page', 'islands/kyklades/serifos.html').then(() => openPage('serifos-page'));
  } else {
    openPage('serifos-page');
  }
}
function closeSerifos() { closePage('serifos-page'); }

function openKoufonisia() {
  if (typeof loadPage === 'function') {
    loadPage('koufonisia-page', 'islands/kyklades/koufonisia.html').then(() => openPage('koufonisia-page'));
  } else {
    openPage('koufonisia-page');
  }
}
function closeKoufonisia() { closePage('koufonisia-page'); }

function openAntiparos() {
  if (typeof loadPage === 'function') {
    loadPage('antiparos-page', 'islands/kyklades/antiparos.html').then(() => openPage('antiparos-page'));
  } else {
    openPage('antiparos-page');
  }
}
function closeAntiparos() { closePage('antiparos-page'); }

function openDonoussa() {
  if (typeof loadPage === 'function') {
    loadPage('donoussa-page', 'islands/kyklades/donoussa.html').then(() => openPage('donoussa-page'));
  } else {
    openPage('donoussa-page');
  }
}
function closeDonoussa() { closePage('donoussa-page'); }

function openIraklia() {
  if (typeof loadPage === 'function') {
    loadPage('iraklia-page', 'islands/kyklades/iraklia.html').then(() => openPage('iraklia-page'));
  } else {
    openPage('iraklia-page');
  }
}
function closeIraklia() { closePage('iraklia-page'); }

function openKea() {
  if (typeof loadPage === 'function') {
    loadPage('kea-page', 'islands/kyklades/kea.html').then(() => openPage('kea-page'));
  } else {
    openPage('kea-page');
  }
}
function closeKea() { closePage('kea-page'); }

function openThirassia() {
  if (typeof loadPage === 'function') {
    loadPage('thirassia-page', 'islands/kyklades/thirassia.html').then(() => openPage('thirassia-page'));
  } else {
    openPage('thirassia-page');
  }
}
function closeThirassia() { closePage('thirassia-page'); }

function openIos() {
  if (typeof loadPage === 'function') {
    loadPage('ios-page', 'islands/kyklades/ios.html').then(() => openPage('ios-page'));
  } else {
    openPage('ios-page');
  }
}
function closeIos() { closePage('ios-page'); }

function openKimolos() {
  if (typeof loadPage === 'function') {
    loadPage('kimolos-page', 'islands/kyklades/kimolos.html').then(() => openPage('kimolos-page'));
  } else {
    openPage('kimolos-page');
  }
}
function closeKimolos() { closePage('kimolos-page'); }

function openSikinos() {
  if (typeof loadPage === 'function') {
    loadPage('sikinos-page', 'islands/kyklades/sikinos.html').then(() => openPage('sikinos-page')); 
  } else {
    openPage('sikinos-page');
  }
}
function closeSikinos() { closePage('sikinos-page'); }  

// Convenience-Funktionen für konkrete Inseln Dodekanes
function openKos() {
  if (typeof loadPage === 'function') {
    loadPage('kos-page', 'islands/dodekanes/kos.html').then(() => openPage('kos-page'));
  } else {
    openPage('kos-page');
  }
}
function closeKos() { closePage('kos-page'); }

function openRhodos() {
  if (typeof loadPage === 'function') {
    loadPage('rhodos-page', 'islands/dodekanes/rhodos.html').then(() => openPage('rhodos-page'));
  } else {
    openPage('rhodos-page');
  }
}
function closeRhodos() { closePage('rhodos-page'); }

function openKythnos() {
  if (typeof loadPage === 'function') {
    loadPage('kythnos-page', 'islands/kyklades/kythnos.html').then(() => openPage('kythnos-page'));
  } else {
    openPage('kythnos-page');
  }
}
function closeKythnos() { closePage('kythnos-page'); }

function openSchinoussa() {
  if (typeof loadPage === 'function') {
    loadPage('schinoussa-page', 'islands/kyklades/schinoussa.html').then(() => openPage('schinoussa-page'));
  } else {
    openPage('schinoussa-page');
  }
}
function closeSchinoussa() { closePage('schinoussa-page'); }
