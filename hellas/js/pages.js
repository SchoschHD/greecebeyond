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


// Convenience-Funktionen für konkrete Inseln Dodekanes
function openAgathonissi() {
  if (typeof loadPage === 'function') {
    loadPage('agathonissi-page', 'islands/dodekanes/agathonissi.html').then(() => openPage('agathonissi-page'));
  } else {
    openPage('agathonissi-page');
  }
}
function closeAgathonissi() { closePage('agathonissi-page'); }

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

function openAstypalaia() {
  if (typeof loadPage === 'function') {
    loadPage('astypalea-page', 'islands/dodekanes/astypalaia.html').then(() => openPage('astypalea-page'));
  } else {
    openPage('astypalea-page');
  }
}
function closeAstypalaia() { closePage('astypalea-page'); }

function openKalymnos() {
  if (typeof loadPage === 'function') {
    loadPage('kalymnos-page', 'islands/dodekanes/kalymnos.html').then(() => openPage('kalymnos-page'));
  } else {
    openPage('kalymnos-page');
  }
}
function closeKalymnos() { closePage('kalymnos-page'); }

function openKarpathos() {
  if (typeof loadPage === 'function') {
    loadPage('karpathos-page', 'islands/dodekanes/karpathos.html').then(() => openPage('karpathos-page'));
  } else {
    openPage('karpathos-page');
  }
}
function closeKarpathos() { closePage('karpathos-page'); }

function openKasos() {
  if (typeof loadPage === 'function') {
    loadPage('kasos-page', 'islands/dodekanes/kasos.html').then(() => openPage('kasos-page'));
  } else {
    openPage('kasos-page');
  }
}
function closeKasos() { closePage('kasos-page'); }

function openSymi() {
  if (typeof loadPage === 'function') {
    loadPage('symi-page', 'islands/dodekanes/symi.html').then(() => openPage('symi-page'));
  } else {
    openPage('symi-page');
  }
}
function closeSymi() { closePage('symi-page'); }    


function openTilos() {
  if (typeof loadPage === 'function') {
    loadPage('tilos-page', 'islands/dodekanes/tilos.html').then(() => openPage('tilos-page'));
  } else {
    openPage('tilos-page');
  }   
}
function closeTilos() { closePage('tilos-page'); }  

function openChalki() {
  if (typeof loadPage === 'function') {
    loadPage('chalki-page', 'islands/dodekanes/chalki.html').then(() => openPage('chalki-page'));
  } else {
    openPage('chalki-page');
  }         
}
function closeChalki() { closePage('chalki-page'); }    

function openPatmos() {
  if (typeof loadPage === 'function') {
    loadPage('patmos-page', 'islands/dodekanes/patmos.html').then(() => openPage('patmos-page')); 
  } else {
    openPage('patmos-page');
  }
}
function closePatmos() { closePage('patmos-page'); }    

function openNisyros() {
  if (typeof loadPage === 'function') {
    loadPage('nisyros-page', 'islands/dodekanes/nisyros.html').then(() => openPage('nisyros-page')); 
  } else {
    openPage('nisyros-page');
  }   
}
function closeNisyros() { closePage('nisyros-page'); }

function openLeros() {
  if (typeof loadPage === 'function') {
    loadPage('leros-page', 'islands/dodekanes/leros.html').then(() => openPage('leros-page')); 
  } else {
    openPage('leros-page');
  } 
}
function closeLeros() { closePage('leros-page'); }  

function openKastellorizo() {
  if (typeof loadPage === 'function') {
    loadPage('kastellorizo-page', 'islands/dodekanes/kastellorizo.html').then(() => openPage('kastellorizo-page')); 
  } else {
    openPage('kastellorizo-page');
  }   
}
function closeKastellorizo() { closePage('kastellorizo-page'); }    

function openLeipsi() {
  if (typeof loadPage === 'function') {
    loadPage('leipsi-page', 'islands/dodekanes/leipsi.html').then(() => openPage('leipsi-page')); 
  } else {
    openPage('leipsi-page');
  }   
}
function closeLeipsi() { closePage('leipsi-page'); }

// Convenience-Funktionen für Ionische Inseln
function openCorfu() {
  if (typeof loadPage === 'function') {
    loadPage('corfu-page', 'islands/ionische/corfu.html').then(() => openPage('corfu-page'));
  } else {
    openPage('corfu-page');
  }
}
function closeCorfu() { closePage('corfu-page'); }

function openKefalonia() {
  if (typeof loadPage === 'function') {
    loadPage('kefalonia-page', 'islands/ionische/kefalonia.html').then(() => openPage('kefalonia-page'));
  } else {
    openPage('kefalonia-page');
  }
}
function closeKefalonia() { closePage('kefalonia-page'); }

function openLefkada() {
  if (typeof loadPage === 'function') {
    loadPage('lefkada-page', 'islands/ionische/lefkada.html').then(() => openPage('lefkada-page'));
  } else {
    openPage('lefkada-page');
  }
}
function closeLefkada() { closePage('lefkada-page'); }

function openZakynthos() {
  if (typeof loadPage === 'function') {
    loadPage('zakynthos-page', 'islands/ionische/zakynthos.html').then(() => openPage('zakynthos-page'));
  } else {
    openPage('zakynthos-page');
  }
}
function closeZakynthos() { closePage('zakynthos-page'); }

function openIthaki() {
  if (typeof loadPage === 'function') {
    loadPage('ithaki-page', 'islands/ionische/ithaki.html').then(() => openPage('ithaki-page'));
  } else {
    openPage('ithaki-page');
  }
}
function closeIthaki() { closePage('ithaki-page'); }

function openPaxoi() {
  if (typeof loadPage === 'function') {
    loadPage('paxoi-page', 'islands/ionische/paxoi.html').then(() => openPage('paxoi-page'));
  } else {
    openPage('paxoi-page');
  }
}
function closePaxoi() { closePage('paxoi-page'); }

function openKythira() {
  if (typeof loadPage === 'function') {
    loadPage('kythira-page', 'islands/ionische/kythira.html').then(() => openPage('kythira-page'));
  } else {
    openPage('kythira-page');
  }
}
function closeKythira() { closePage('kythira-page'); }