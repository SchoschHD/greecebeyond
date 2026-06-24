CREATE DATABASE IF NOT EXISTS hellas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hellas;

CREATE TABLE IF NOT EXISTS destinations (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  type VARCHAR(32) NOT NULL,
  slug VARCHAR(128) NOT NULL,
  name VARCHAR(255) NOT NULL,
  region VARCHAR(255) DEFAULT NULL,
  subtitle VARCHAR(255) DEFAULT NULL,
  description TEXT DEFAULT NULL,
  image_path VARCHAR(500) DEFAULT NULL,
  detail_path VARCHAR(500) DEFAULT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uniq_destination (type, slug),
  KEY idx_destination_type (type),
  KEY idx_destination_sort (sort_order)
);

INSERT IGNORE INTO destinations
  (type, slug, name, region, subtitle, description, image_path, detail_path, sort_order)
VALUES
  ('island', 'santorini', 'Santorini', 'Kykladen', 'Caldera und white cubes', 'Well known island with iconic sunsets and views of the caldera.', 'assets/img/islands/kyklades/santorini/santorinibild01.jpg', 'pages/islands/kyklades/santorini.html', 10),
  ('island', 'mykonos', 'Mykonos', 'Kykladen', 'Windmills and beach bars', 'Lively island with whitewashed lanes and long summer beach days.', 'assets/img/islands/kyklades/mykonos/mykonosbild01.jpg', 'pages/islands/kyklades/mykonos.html', 20),
  ('island', 'naxos', 'Naxos', 'Kykladen', 'Mountains, villages and long beaches', 'The largest Cycladic island mixes plateaus, tavernas and a long coastline.', 'assets/img/islands/kyklades/naxos/naxosbild01.jpg', 'pages/islands/kyklades/naxos.html', 30),
  ('island', 'paros', 'Paros', 'Kykladen', 'White towns and calm coves', 'An easygoing island with bright villages and many quiet beach stops.', 'assets/img/islands/kyklades/paros/parosbild01.jpg', 'pages/islands/kyklades/paros.html', 40),
  ('island', 'sifnos', 'Sifnos', 'Kykladen', 'Walking, pottery and good food', 'Known for village paths, terraces and a strong culinary tradition.', 'assets/img/islands/kyklades/sifnos/sifnosbild01.jpg', 'pages/islands/kyklades/sifnos.html', 50),
  ('island', 'milos', 'Milos', 'Kykladen', 'Volcanic coasts and colors', 'Famous for dramatic rock formations, coves and a very distinct landscape.', 'assets/img/islands/kyklades/milos/milosbild01.jpg', 'pages/islands/kyklades/milos.html', 60),
  ('island', 'siros', 'Siros', 'Kykladen', 'Island capital and neoclassic streets', 'Ermoupoli brings harbor life, city energy and historic facades together.', NULL, 'pages/islands/kyklades/siros.html', 70),
  ('island', 'tinos', 'Tinos', 'Kykladen', 'Village culture and wind', 'Tinos combines terraces, pilgrimage heritage, marble craft and small villages.', 'assets/img/islands/kyklades/tinos/tinosbild01.jpg', 'pages/islands/kyklades/tinos.html', 80),
  ('island', 'amorgos', 'Amorgos', 'Kykladen', 'Cliffs and deep blue water', 'Known for steep slopes, old paths and a striking sea horizon.', NULL, 'pages/islands/kyklades/amorgos.html', 90),
  ('island', 'anafi', 'Anafi', 'Kykladen', 'Quiet and open', 'A small island with space, simple routes and wide sea views.', NULL, 'pages/islands/kyklades/anafi.html', 100),
  ('island', 'andros', 'Andros', 'Kykladen', 'Green valleys and springs', 'Andros is more water-rich and green than many of its neighbors.', NULL, 'pages/islands/kyklades/andros.html', 110),
  ('island', 'folegandros', 'Folegandros', 'Kykladen', 'Compact and dramatic', 'A small island with steep cliffs, quiet lanes and a sharp silhouette.', NULL, 'pages/islands/kyklades/folegandros.html', 120),
  ('island', 'serifos', 'Serifos', 'Kykladen', 'Dusty paths and coves', 'Serifos blends island calm with rugged hills and open horizon lines.', NULL, 'pages/islands/kyklades/serifos.html', 130),
  ('island', 'iraklia', 'Iraklia', 'Kykladen', 'Small and remote', 'A quiet island for slow days, short walks and very little noise.', NULL, 'pages/islands/kyklades/iraklia.html', 140),
  ('island', 'antiparos', 'Antiparos', 'Kykladen', 'Small, friendly, relaxed', 'Known for easy evenings, a compact town and close-to-the-beach life.', NULL, 'pages/islands/kyklades/antiparos.html', 150),
  ('island', 'donoussa', 'Donoussa', 'Kykladen', 'Remote and still', 'Donoussa is all about quiet harbors, slow rhythm and minimal traffic.', NULL, 'pages/islands/kyklades/donoussa.html', 160),
  ('island', 'kea', 'Kea', 'Kykladen', 'Near Athens, calm in character', 'Kea offers hiking routes, stone villages and an easy weekend pace.', NULL, 'pages/islands/kyklades/kea.html', 170),
  ('island', 'kimolos', 'Kimolos', 'Kykladen', 'White earth and small coves', 'A small island with a gentle rhythm, light geology and few crowds.', NULL, 'pages/islands/kyklades/kimolos.html', 180),
  ('island', 'koufonisia', 'Koufonisia', 'Kykladen', 'Bright water and short distances', 'The small islands stand for clear water, beaches and very short walks.', NULL, 'pages/islands/kyklades/koufonisia.html', 190),
  ('island', 'kythnos', 'Kythnos', 'Kykladen', 'Thermal waters and coves', 'Kythnos combines beaches, villages and a grounded island rhythm.', NULL, 'pages/islands/kyklades/kythnos.html', 200),
  ('island', 'schinoussa', 'Schinoussa', 'Kykladen', 'Very small, very quiet', 'An island for walks, simple days and clear water.', NULL, 'pages/islands/kyklades/schinoussa.html', 210),
  ('island', 'sikinos', 'Sikinos', 'Kykladen', 'Unhurried and authentic', 'Sikinos stays quiet, simple and far from mass tourism.', NULL, 'pages/islands/kyklades/sikinos.html', 220),
  ('island', 'thirassia', 'Thirassia', 'Kykladen', 'Across from Santorini', 'The small neighbor of Santorini shows a quieter side of the region.', NULL, 'pages/islands/kyklades/thirassia.html', 230),
  ('island', 'ios', 'Ios', 'Kykladen', 'Young, bright, lively', 'Ios is known for beach days, summer nights and steep village lanes.', 'assets/img/islands/kyklades/ios/iosbild01.jpg', 'pages/islands/kyklades/ios.html', 240),
  ('city', 'athens', 'Athens', 'Attica', 'Antique and present day', 'The capital connects archaeological sites with dense city life.', NULL, 'pages/cities/athens.html', 300),
  ('food', 'tzatziki', 'Tzatziki', 'Greek cuisine', 'Yogurt, cucumber, garlic', 'A classic Greek dish, fresh and cool.', NULL, 'pages/food/tzatziki.html', 400);
