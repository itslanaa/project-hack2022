-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2021 at 06:38 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tb_tambah`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_tambah`
--

CREATE TABLE `tb_tambah` (
  `id_rawat` int(11) NOT NULL,
  `nrawat` int(11) NOT NULL,
  `grawat` date NOT NULL,
  `norem` char(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `hdd` varchar(150) NOT NULL,
  `dp` int(11) NOT NULL,
  `dokter` int(100) NOT NULL,
  `tinpas` varchar(150) NOT NULL,
  `hartin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_tambah`
--
ALTER TABLE `tb_tambah`
  ADD PRIMARY KEY (`id_rawat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
