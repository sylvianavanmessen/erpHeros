-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 11 juil. 2019 à 00:31
-- Version du serveur :  10.1.40-MariaDB
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `superheros`
--

-- --------------------------------------------------------

--
-- Structure de la table `superhero`
--

CREATE TABLE `superhero` (
  `id_superhero` int(11) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `pseudo` varchar(30) NOT NULL,
  `id_edition` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `superhero`
--

INSERT INTO `superhero` (`id_superhero`, `prenom`, `nom`, `pseudo`, `id_edition`) VALUES
(1, 'Scott', 'Lang', 'Ant-Man', 1),
(2, 'Steve', 'Rogers', 'Captaim America', 1),
(3, 'Tony', 'Stark', 'Iron Man', 1),
(4, 'Clint ', 'Barton', 'Hawkeye', 1),
(5, 'Peter', 'Parker', 'Spider Man', 1),
(6, 'Bruce', 'Banner', 'Hulk', 1),
(7, 'Natasha', 'Romanoff', 'Black Widow', 1),
(8, 'Samuel', 'Wilson', 'Falcon', 1),
(9, 'Peter ', 'Quill', 'Star Lord', 1),
(10, 'Charles', 'Xavier', 'Professor X', 1),
(11, 'James', 'Howlett', 'Wolverine', 1),
(12, 'Wade', 'Wilson', 'Deadpool', 1),
(13, 'Matt ', 'Murdock', 'Daredevil', 1),
(14, 'Bruce', 'Wayne', 'Batman', 2),
(15, 'Dick', 'Grayson', 'Robin', 2),
(16, 'Selina ', 'Kyle', 'Catwoman', 2),
(17, 'Clark ', 'Kent', 'Superman', 2),
(18, 'Kara', 'Danvers', 'Supergirl', 2),
(19, 'Denny', 'Colt', 'Spirit', 2),
(20, 'Walter Joseph', 'Kovacs', 'Rorschach', 2),
(21, 'Jon', 'Osterman', 'Dr Manhattan', 2),
(22, 'Hal ', 'Jordan', 'Green Lantern', 2),
(23, 'William', 'Batson', 'Shazal', 2),
(24, 'Oliver', 'Queen', 'Green Arrow', 2),
(25, 'Laurel', 'Lance', 'Black Canary', 2),
(26, 'John ', 'Diggle', 'Spartan', 2),
(27, 'Felicity ', 'Smoak', 'Overwatch', 2),
(28, 'Slade', 'Wilson', 'Deathstroke', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `superhero`
--
ALTER TABLE `superhero`
  ADD PRIMARY KEY (`id_superhero`),
  ADD KEY `id_edition` (`id_edition`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `superhero`
--
ALTER TABLE `superhero`
  MODIFY `id_superhero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
