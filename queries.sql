-- Active: 1658879023818@@35.226.146.116@3306@guimaraes-4211326-laine-moura
#QUERY - CRIAÇÃO DA TABELA DE BANDAS
CREATE TABLE IF NOT EXISTS BANDAS (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL,
  music_genre VARCHAR(255) NOT NULL,
  responsible VARCHAR(255) UNIQUE NOT NULL 
);

#QUERY - CRIAÇÃO DA TABELA DE SHOWS
CREATE TABLE IF NOT EXISTS SHOWS (
  id VARCHAR(255) PRIMARY KEY,
  week_day VARCHAR(255) NOT NULL,
  start_time INT NOT NULL,
  end_time INT NOT NULL,
  band_id VARCHAR(255) NOT NULL,
  FOREIGN KEY(band_id) REFERENCES BANDAS(id)
);

#QUERY - CRIAÇÃO DA TABELA DE USUÁRIOS
CREATE TABLE IF NOT EXISTS USUARIOS (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
);