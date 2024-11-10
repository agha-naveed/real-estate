-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2024 at 11:46 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `real_estate_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `property`
--

CREATE TABLE `property` (
  `property_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `property_type` enum('commercial','residential','land','mixuse') DEFAULT NULL,
  `property_size` int(11) NOT NULL,
  `property_city` varchar(35) NOT NULL,
  `property_state` varchar(35) NOT NULL,
  `property_zip` int(11) NOT NULL,
  `property_price` int(11) NOT NULL,
  `property_status` enum('available','sold') DEFAULT 'available',
  `property_location` varchar(500) NOT NULL,
  `entry_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `property`
--

INSERT INTO `property` (`property_id`, `seller_id`, `property_type`, `property_size`, `property_city`, `property_state`, `property_zip`, `property_price`, `property_status`, `property_location`, `entry_date`) VALUES
(5, 3, 'residential', 200, 'Islamabad', 'Punjab', 45600, 5000000, 'sold', 'D-17, Margalla View Housing Society, D-17, Islamabad, Islamabad Capital Territory', '2024-11-10'),
(6, 2, 'land', 350, 'lahore', 'Punjab', 53400, 6500000, 'available', 'Bata Pur, CMA Cantt Lahore', '2024-11-10'),
(7, 3, 'mixuse', 265, 'Skardu', 'GB', 16100, 9000000, 'available', 'Near Public School and College Skardu', '2024-11-10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`),
  ADD UNIQUE KEY `property_id` (`property_id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`seller_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
