-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2024 at 04:28 PM
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
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `buyer_id` int(11) NOT NULL,
  `buyer_name` varchar(40) NOT NULL,
  `buyer_address` varchar(200) NOT NULL,
  `buyer_cell` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`buyer_id`, `buyer_name`, `buyer_address`, `buyer_cell`) VALUES
(1, 'Waqar Hussain', 'Tehsil Daghoni, District Ghanche, Baltistan', '03551192033'),
(2, 'Naseem Abbas', 'New Ranga, Skardu', '0318992021');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `buyer_id` int(11) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `invoice_date` date NOT NULL,
  `invoice_recievable_amount` int(11) NOT NULL,
  `invoice_payable_amount` int(11) NOT NULL,
  `commission_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `property_id`, `buyer_id`, `seller_id`, `invoice_date`, `invoice_recievable_amount`, `invoice_payable_amount`, `commission_amount`) VALUES
(1, 5, 1, 3, '2024-11-10', 50000, 0, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `payment_voucher`
--

CREATE TABLE `payment_voucher` (
  `pv_id` int(11) NOT NULL,
  `inv_id` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  `remaining_amount` int(11) NOT NULL,
  `entry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_voucher`
--

INSERT INTO `payment_voucher` (`pv_id`, `inv_id`, `paid_amount`, `remaining_amount`, `entry_date`) VALUES
(1, 1, 5000000, 0, '2024-11-17');

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
(7, 3, 'mixuse', 265, 'Skardu', 'GB', 16100, 9000000, 'sold', 'Near Public School and College Skardu', '2024-11-10'),
(8, 4, 'commercial', 500, 'Islamabad', 'Punjab', 10016, 25000000, 'sold', 'Office No. 17, Service Road, Sector I-11/3, Islamabad.', '2024-11-20');

-- --------------------------------------------------------

--
-- Table structure for table `receipt_voucher`
--

CREATE TABLE `receipt_voucher` (
  `rv_id` int(11) NOT NULL,
  `inv_id` int(11) NOT NULL,
  `received_amount` int(11) NOT NULL,
  `remaining_amount` int(11) NOT NULL,
  `entry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `receipt_voucher`
--

INSERT INTO `receipt_voucher` (`rv_id`, `inv_id`, `received_amount`, `remaining_amount`, `entry_date`) VALUES
(1, 1, 5000000, 50000, '2024-11-17');

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `seller_id` int(11) NOT NULL,
  `seller_name` varchar(40) NOT NULL,
  `seller_address` varchar(200) NOT NULL,
  `seller_cell` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`seller_id`, `seller_name`, `seller_address`, `seller_cell`) VALUES
(2, 'Syed Naveed Abbas', 'Tehsil Mashabrum disrict ghanche', '03211234322'),
(3, 'Zaheer Abbas', 'Near UOBS, Hussainabad, Skd', '03551232990'),
(4, 'Waseem Ali', 'Sialkot, Abidi Meher Hamim Din, 51261', '03121233097');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`buyer_id`),
  ADD UNIQUE KEY `buyer_id` (`buyer_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`),
  ADD UNIQUE KEY `invoice_id` (`invoice_id`),
  ADD UNIQUE KEY `property_id` (`property_id`),
  ADD KEY `seller_id` (`seller_id`),
  ADD KEY `buyer_id` (`buyer_id`);

--
-- Indexes for table `payment_voucher`
--
ALTER TABLE `payment_voucher`
  ADD PRIMARY KEY (`pv_id`),
  ADD UNIQUE KEY `pv_id` (`pv_id`),
  ADD KEY `inv_id` (`inv_id`);

--
-- Indexes for table `property`
--
ALTER TABLE `property`
  ADD PRIMARY KEY (`property_id`),
  ADD UNIQUE KEY `property_id` (`property_id`),
  ADD KEY `seller_id` (`seller_id`);

--
-- Indexes for table `receipt_voucher`
--
ALTER TABLE `receipt_voucher`
  ADD PRIMARY KEY (`rv_id`),
  ADD UNIQUE KEY `rv_id` (`rv_id`),
  ADD KEY `inv_id` (`inv_id`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`seller_id`),
  ADD UNIQUE KEY `seller_id` (`seller_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buyer`
--
ALTER TABLE `buyer`
  MODIFY `buyer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment_voucher`
--
ALTER TABLE `payment_voucher`
  MODIFY `pv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `property`
--
ALTER TABLE `property`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `receipt_voucher`
--
ALTER TABLE `receipt_voucher`
  MODIFY `rv_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `seller_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `invoice_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `property` (`property_id`),
  ADD CONSTRAINT `invoice_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`seller_id`),
  ADD CONSTRAINT `invoice_ibfk_3` FOREIGN KEY (`buyer_id`) REFERENCES `buyer` (`buyer_id`);

--
-- Constraints for table `payment_voucher`
--
ALTER TABLE `payment_voucher`
  ADD CONSTRAINT `payment_voucher_ibfk_1` FOREIGN KEY (`inv_id`) REFERENCES `invoice` (`invoice_id`);

--
-- Constraints for table `property`
--
ALTER TABLE `property`
  ADD CONSTRAINT `property_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`seller_id`);

--
-- Constraints for table `receipt_voucher`
--
ALTER TABLE `receipt_voucher`
  ADD CONSTRAINT `receipt_voucher_ibfk_1` FOREIGN KEY (`inv_id`) REFERENCES `invoice` (`invoice_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
