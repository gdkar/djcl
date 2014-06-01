-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 19 Septembre 2013 à 06:50
-- Version du serveur: 5.5.32-0ubuntu0.12.04.1-log
-- Version de PHP: 5.5.3-1+debphp.org~precise+2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `test`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `client_id` varchar(20) NOT NULL,
  `client_key` varchar(30) NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `clients`
--

INSERT INTO `clients` (`client_id`, `client_key`) VALUES
('test', '89798473984794');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `name` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`name`, `password`) VALUES
('test', 'test');

-- --------------------------------------------------------

--
-- Structure de la table `user_auth`
--

CREATE TABLE IF NOT EXISTS `user_auth` (
  `user` varchar(10) CHARACTER SET ascii NOT NULL,
  `client_id` varchar(20) CHARACTER SET ascii NOT NULL,
  `token` varchar(20) CHARACTER SET ascii NOT NULL,
  UNIQUE KEY `user` (`user`,`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user_auth`
--

INSERT INTO `user_auth` (`user`, `client_id`, `token`) VALUES
('test', 'test', 'bc40aec5e0962db0c5ad');

-- --------------------------------------------------------

--
-- Structure de la table `user_data`
--

CREATE TABLE IF NOT EXISTS `user_data` (
  `user` varchar(10) CHARACTER SET ascii NOT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `user_data`
--

INSERT INTO `user_data` (`user`, `data`) VALUES
('test', '{"name":"test","email":"test@test.org"}');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
