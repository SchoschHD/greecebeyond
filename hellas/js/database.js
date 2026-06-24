(function () {
  const grid = document.getElementById('mysql-destinations');
  const status = document.getElementById('mysql-status');
  const destinationPage = document.getElementById('destination-page');
  if (!grid || !status) {
    return;
  }

  async function openDestination(item) {
    if (!item.detail_path || !destinationPage) {
      return;
    }

    const response = await fetch(item.detail_path);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();
    const bodyMatch = text.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : text;
    content = content.replace(/onclick="close[A-Za-z]+\(\)"/g, 'onclick="closeDestinationPage()"');
    content = content.replace(/onclick='close[A-Za-z]+\(\)'/g, "onclick='closeDestinationPage()'");

    destinationPage.innerHTML = content;
    destinationPage.style.display = 'block';
    destinationPage.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeDestinationPage() {
    if (!destinationPage) {
      return;
    }
    destinationPage.style.display = 'none';
    destinationPage.innerHTML = '';
    document.body.style.overflow = '';
  }

  window.closeDestinationPage = closeDestinationPage;

  function setStatus(text, ready) {
    status.textContent = text;
    status.classList.toggle('is-ready', Boolean(ready));
  }

  function createCard(item) {
    const article = document.createElement('article');
    article.className = 'database-card';
    article.tabIndex = 0;
    article.setAttribute('role', 'button');
    article.setAttribute('aria-label', item.name ? `${item.name} öffnen` : 'Eintrag öffnen');
    if (item.detail_path) {
      article.classList.add('is-clickable');
      article.addEventListener('click', () => {
        openDestination(item).catch((error) => {
          console.error(error);
          setStatus(`Detailseite konnte nicht geladen werden: ${error.message}`, false);
        });
      });
      article.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openDestination(item).catch((error) => {
            console.error(error);
            setStatus(`Detailseite konnte nicht geladen werden: ${error.message}`, false);
          });
        }
      });
    }

    const media = document.createElement('div');
    media.className = 'database-media';

    if (item.image_path) {
      const img = document.createElement('img');
      img.src = item.image_path;
      img.alt = item.name ? `${item.name} Bild` : 'Datenbankeintrag';
      img.loading = 'lazy';
      media.appendChild(img);
    } else {
      const fallback = document.createElement('div');
      fallback.className = 'database-fallback';
      fallback.textContent = item.name || 'Hellas';
      media.appendChild(fallback);
    }

    const body = document.createElement('div');
    body.className = 'database-body';

    const meta = document.createElement('div');
    meta.className = 'database-meta';
    meta.textContent = [item.type, item.region].filter(Boolean).join(' · ');

    const name = document.createElement('h3');
    name.className = 'database-name';
    name.textContent = item.name || 'Ohne Namen';

    const subtitle = document.createElement('p');
    subtitle.className = 'database-subtitle';
    subtitle.textContent = item.subtitle || '';

    const desc = document.createElement('p');
    desc.className = 'database-desc';
    desc.textContent = item.description || 'Kein Beschreibungstext vorhanden.';

    body.appendChild(meta);
    body.appendChild(name);
    body.appendChild(subtitle);
    body.appendChild(desc);

    article.appendChild(media);
    article.appendChild(body);
    return article;
  }

  async function loadDestinations() {
    setStatus('MySQL wird geladen', false);

    try {
      const response = await fetch('/api/destinations?type=island');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const items = await response.json();
      grid.innerHTML = '';

      if (!items.length) {
        const empty = document.createElement('div');
        empty.className = 'database-empty';
        empty.textContent = 'Keine Einträge in der MySQL-Tabelle gefunden.';
        grid.appendChild(empty);
        setStatus('Verbindung steht, aber keine Daten', true);
        return;
      }

      items.forEach((item) => grid.appendChild(createCard(item)));
      setStatus('MySQL verbunden', true);
    } catch (error) {
      grid.innerHTML = '';
      const empty = document.createElement('div');
      empty.className = 'database-empty';
      empty.textContent = `MySQL-Daten konnten nicht geladen werden: ${error.message}`;
      grid.appendChild(empty);
      setStatus('MySQL nicht erreichbar', false);
    }
  }

  loadDestinations();
})();
