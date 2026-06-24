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

INSERT INTO destinations
  (type, slug, name, region, subtitle, description, image_path, detail_path, sort_order)
VALUES
  ('island', 'santorini', 'Santorini', 'Kykladen', 'Caldera und weiße Kuben', 'Bekannte Insel mit ikonischen Sonnenuntergängen und Blick auf die Caldera.', 'assets/img/islands/kyklades/santorini/santorinibild01.jpg', 'pages/islands/kyklades/santorini.html', 10),
  ('island', 'mykonos', 'Mykonos', 'Kykladen', 'Windmühlen und Strandbars', 'Lebhafte Insel mit weiß getünchten Gassen und langen Strandtagen.', 'assets/img/islands/kyklades/mykonos/mykonosbild01.jpg', 'pages/islands/kyklades/mykonos.html', 20),
  ('city', 'athens', 'Athen', 'Attika', 'Antike und Gegenwart', 'Die Hauptstadt verbindet archäologische Stätten mit dichtem Stadtleben.', NULL, 'pages/cities/athens.html', 30),
  ('food', 'tzatziki', 'Tzatziki', 'Griechische Küche', 'Joghurt, Gurke, Knoblauch', 'Ein Klassiker der griechischen Küche, frisch und kühl serviert.', NULL, 'pages/food/tzatziki.html', 40)
ON DUPLICATE KEY UPDATE
  name = VALUES(name),
  region = VALUES(region),
  subtitle = VALUES(subtitle),
  description = VALUES(description),
  image_path = VALUES(image_path),
  detail_path = VALUES(detail_path),
  sort_order = VALUES(sort_order);
