CREATE TABLE `documents` (
   `vendorID` int DEFAULT NULL,
   `id` int NOT NULL AUTO_INCREMENT,
   `name` varchar(100) NOT NULL,
   `description` varchar(200) DEFAULT NULL,
   `file` blob NOT NULL,
   PRIMARY KEY (`id`),
   KEY `vendorID_idx` (`vendorID`),
   CONSTRAINT `vendorXD` FOREIGN KEY (`vendorID`) REFERENCES `vendors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci