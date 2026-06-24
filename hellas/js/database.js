(function () {
  const grid = document.getElementById('mysql-destinations');
  const status = document.getElementById('mysql-status');
  if (!grid || !status) {
    return;
  }

  function setStatus(text, ready) {
    status.textContent = text;
    status.classList.toggle('is-ready', Boolean(ready));
  }

  function createCard(item) {
    const article = document.createElement('article');
    article.className = 'database-card';

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
