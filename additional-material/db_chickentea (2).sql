-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2022 at 04:55 PM
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
-- Database: `db_chickentea`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_admin`
--

CREATE TABLE `tb_admin` (
  `ta_id` int(11) NOT NULL,
  `ta_email` varchar(255) NOT NULL,
  `ta_password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_admin`
--

INSERT INTO `tb_admin` (`ta_id`, `ta_email`, `ta_password`) VALUES
(1, 'admin@gmail.com', 'adminchick123');

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu`
--

CREATE TABLE `tb_menu` (
  `tm_id` int(11) NOT NULL,
  `tm_food_name` varchar(255) NOT NULL,
  `tm_desc` varchar(255) NOT NULL,
  `tm_price` varchar(255) NOT NULL,
  `tm_img` varchar(255) NOT NULL,
  `tm_created__at` timestamp NOT NULL DEFAULT current_timestamp(),
  `tm_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_menu`
--

INSERT INTO `tb_menu` (`tm_id`, `tm_food_name`, `tm_desc`, `tm_price`, `tm_img`, `tm_created__at`, `tm_updated_at`) VALUES
(1, 'Burger Hebat', 'Beef Burger + French fries + Your tea', '22000', 'images/burger-hebat.png', '2022-01-18 18:03:29', '2022-01-18 18:03:29'),
(2, 'Panas Komplit 2', 'Nasi + Ayam geprek (Sayap/Paha bawah) + Your tea', '15000', 'images/panas-komplit-2.png', '2022-01-18 16:41:39', '2022-01-18 16:41:39'),
(3, 'Panas Geprek 1', 'Nasi + Ayam geprek (Dada/Paha atas)', '12000', 'images/panas-geprek-1.png', '2022-01-18 16:45:38', '2022-01-18 16:45:38'),
(4, 'Panas Geprek 2', 'Nasi + Ayam geprek (Sayap/Paha bawah)', '10000', 'images/panas-geprek-2.png', '2022-01-18 16:45:38', '2022-01-28 23:25:38'),
(5, 'Ayam geprek 1', 'Ayam geprek (Dada/Paha atas)', '9000', '../../images1643441440.png', '2022-01-29 01:11:31', '2022-01-29 01:30:40'),
(6, 'Ayam geprek 2', 'Ayam geprek (Sayap/Paha bawah)', '8000', 'images/ayam-geprek-1.png', '2022-01-18 16:49:46', '2022-01-28 23:25:47');

-- --------------------------------------------------------

--
-- Table structure for table `tb_orders`
--

CREATE TABLE `tb_orders` (
  `to_id` int(11) NOT NULL,
  `to_date` date NOT NULL,
  `to_tm_id` int(11) NOT NULL,
  `to_no_orders` varchar(255) NOT NULL,
  `to_qty` int(11) NOT NULL,
  `to_name_costumer` varchar(255) NOT NULL,
  `to_notes` text NOT NULL,
  `to_total_price` varchar(100) NOT NULL,
  `to_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `to_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_orders`
--

INSERT INTO `tb_orders` (`to_id`, `to_date`, `to_tm_id`, `to_no_orders`, `to_qty`, `to_name_costumer`, `to_notes`, `to_total_price`, `to_created_at`, `to_updated_at`) VALUES
(70, '2022-01-29', 3, 'ORDR3355', 1, 'aji framana', 'air putih 3', '12000', '2022-01-29 03:33:55', '2022-01-29 03:33:55'),
(71, '2022-01-29', 2, 'ORDR3355', 2, 'aji framana', 'air putih 3', '42000', '2022-01-29 03:33:55', '2022-01-29 03:33:55'),
(72, '2022-01-29', 4, 'ORDR3355', 1, 'aji framana', 'air putih 3', '52000', '2022-01-29 03:33:55', '2022-01-29 03:33:55'),
(77, '2022-01-29', 5, 'ORDR4441', 1, 'Kaka Maulana Abdillah', '-', '9000', '2022-01-29 03:44:41', '2022-01-29 03:44:41'),
(78, '2022-01-29', 2, 'ORDR4441', 1, 'Kaka Maulana Abdillah', '-', '24000', '2022-01-29 03:44:41', '2022-01-29 03:44:41');

-- --------------------------------------------------------

--
-- Table structure for table `tb_table`
--

CREATE TABLE `tb_table` (
  `tt_id` int(11) NOT NULL,
  `tt_table_no` int(11) NOT NULL,
  `tt_status` enum('ON','OFF') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_table`
--

INSERT INTO `tb_table` (`tt_id`, `tt_table_no`, `tt_status`) VALUES
(1, 1, 'ON'),
(2, 2, 'ON'),
(3, 3, 'ON'),
(4, 4, 'ON'),
(5, 5, 'ON'),
(6, 6, 'ON'),
(7, 7, 'ON'),
(8, 8, 'ON'),
(9, 9, 'ON'),
(10, 10, 'ON');

-- --------------------------------------------------------

--
-- Table structure for table `tb_tmp_orders`
--

CREATE TABLE `tb_tmp_orders` (
  `tto_id` int(11) NOT NULL,
  `tto_tm_id` int(11) NOT NULL,
  `tto_no_orders` varchar(50) NOT NULL,
  `tto_qty` int(11) NOT NULL,
  `tto_total_price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_admin`
--
ALTER TABLE `tb_admin`
  ADD PRIMARY KEY (`ta_id`);

--
-- Indexes for table `tb_menu`
--
ALTER TABLE `tb_menu`
  ADD PRIMARY KEY (`tm_id`);

--
-- Indexes for table `tb_orders`
--
ALTER TABLE `tb_orders`
  ADD PRIMARY KEY (`to_id`);

--
-- Indexes for table `tb_table`
--
ALTER TABLE `tb_table`
  ADD PRIMARY KEY (`tt_id`);

--
-- Indexes for table `tb_tmp_orders`
--
ALTER TABLE `tb_tmp_orders`
  ADD PRIMARY KEY (`tto_id`),
  ADD KEY `tto_tm_id` (`tto_tm_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_admin`
--
ALTER TABLE `tb_admin`
  MODIFY `ta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_menu`
--
ALTER TABLE `tb_menu`
  MODIFY `tm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tb_orders`
--
ALTER TABLE `tb_orders`
  MODIFY `to_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `tb_table`
--
ALTER TABLE `tb_table`
  MODIFY `tt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tb_tmp_orders`
--
ALTER TABLE `tb_tmp_orders`
  MODIFY `tto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
