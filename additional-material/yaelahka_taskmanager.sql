-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 20, 2021 at 10:01 AM
-- Server version: 10.3.32-MariaDB-log-cll-lve
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yaelahka_taskmanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_password_reset_tmp`
--

CREATE TABLE `tb_password_reset_tmp` (
  `tp_rt_id` int(11) NOT NULL,
  `tp_rt_email` varchar(255) NOT NULL,
  `tp_rt_token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tb_register`
--

CREATE TABLE `tb_register` (
  `tr_id` int(11) NOT NULL,
  `tr_name` varchar(255) NOT NULL,
  `tr_email` varchar(255) NOT NULL,
  `tr_password` varchar(255) NOT NULL,
  `tr_register_date` datetime NOT NULL,
  `tr_verification_date` datetime NOT NULL,
  `tr_status` enum('Verified','Unverified','Banned') NOT NULL,
  `tr_token` varchar(255) NOT NULL,
  `tr_images` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_register`
--

INSERT INTO `tb_register` (`tr_id`, `tr_name`, `tr_email`, `tr_password`, `tr_register_date`, `tr_verification_date`, `tr_status`, `tr_token`, `tr_images`) VALUES
(63, 'kaka maulana a', 'maulanaabdillah73@gmail.com', '5f4dcc3b5aa765d61d8327deb882cf99', '2021-10-27 08:48:12', '2021-10-27 08:49:05', 'Verified', 'd5cfead94f5350c12c322b5b664544c1', '799-avatar.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tb_task`
--

CREATE TABLE `tb_task` (
  `tt_id` int(8) NOT NULL,
  `tt_tr_id` int(11) NOT NULL,
  `tt_title` varchar(255) NOT NULL,
  `tt_description` text NOT NULL,
  `tt_reminder_date` datetime NOT NULL,
  `tt_status` enum('On Schedule','Done','Late') NOT NULL,
  `tt_completed_date` datetime NOT NULL,
  `tt_task_created_date` datetime NOT NULL,
  `tt_task_created_by` int(8) NOT NULL,
  `tt_task_updated_date` datetime NOT NULL,
  `tt_task_updated_by` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_task`
--

INSERT INTO `tb_task` (`tt_id`, `tt_tr_id`, `tt_title`, `tt_description`, `tt_reminder_date`, `tt_status`, `tt_completed_date`, `tt_task_created_date`, `tt_task_created_by`, `tt_task_updated_date`, `tt_task_updated_by`) VALUES
(153, 63, 'i want to breakfast', 'want to breakfast at 6:00 AM', '2021-10-28 06:00:00', 'On Schedule', '0000-00-00 00:00:00', '2021-10-28 01:27:31', 0, '0000-00-00 00:00:00', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_password_reset_tmp`
--
ALTER TABLE `tb_password_reset_tmp`
  ADD PRIMARY KEY (`tp_rt_id`);

--
-- Indexes for table `tb_register`
--
ALTER TABLE `tb_register`
  ADD PRIMARY KEY (`tr_id`);

--
-- Indexes for table `tb_task`
--
ALTER TABLE `tb_task`
  ADD PRIMARY KEY (`tt_id`),
  ADD KEY `tt_tr_id` (`tt_tr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_password_reset_tmp`
--
ALTER TABLE `tb_password_reset_tmp`
  MODIFY `tp_rt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `tb_register`
--
ALTER TABLE `tb_register`
  MODIFY `tr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `tb_task`
--
ALTER TABLE `tb_task`
  MODIFY `tt_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_task`
--
ALTER TABLE `tb_task`
  ADD CONSTRAINT `tb_task_ibfk_1` FOREIGN KEY (`tt_tr_id`) REFERENCES `tb_register` (`tr_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
