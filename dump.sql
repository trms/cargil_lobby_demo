
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `listings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `listings` WRITE;
/*!40000 ALTER TABLE `listings` DISABLE KEYS */;
INSERT INTO `listings` VALUES (19,'Woody','Wiedenhoeft','WASBO','Executive Director','Office 119',NULL,NULL,NULL,NULL,'img/listings/1427118699.png','2015-03-19 00:59:05','2015-03-23 18:52:14');
INSERT INTO `listings` VALUES (20,'Tina','Hafeman','WASBO','Associate Executive Director','Office 117',NULL,NULL,NULL,NULL,'','2015-03-19 00:59:05','2015-03-23 19:23:59');
INSERT INTO `listings` VALUES (21,'Áine','Calgaro','WASBO','Communications & Membership Coordinator','Office 115',NULL,NULL,NULL,NULL,'','2015-03-19 00:59:05','2015-03-23 21:47:06');
INSERT INTO `listings` VALUES (22,'Jeanne','Deimund','WASBO','Member Services & Professional Development Coordinator','Office 118',NULL,NULL,NULL,NULL,'','2015-03-19 00:59:05','2015-03-19 00:59:05');
INSERT INTO `listings` VALUES (23,NULL,NULL,'AWSA',NULL,'Suite 103',NULL,NULL,NULL,'Amazing group of people that do amazing things','img/listings/1427131352.png','2015-03-19 00:59:05','2015-03-23 22:25:31');
INSERT INTO `listings` VALUES (24,NULL,NULL,'WASBO',NULL,'Suite 101',NULL,NULL,NULL,NULL,'http://lorempixel.com/200/300/cats','2015-03-19 00:59:05','2015-03-24 00:19:27');
INSERT INTO `listings` VALUES (25,NULL,NULL,'WASC',NULL,'Suite 202',NULL,NULL,NULL,NULL,'img/listings/1427131869.png','2015-03-19 00:59:05','2015-03-23 22:31:12');
INSERT INTO `listings` VALUES (26,NULL,NULL,'WCASS',NULL,'Suite 202',NULL,NULL,NULL,NULL,'img/listings/1427131901.png','2015-03-19 00:59:05','2015-03-23 22:31:43');
INSERT INTO `listings` VALUES (27,NULL,NULL,'WASDA',NULL,'Suite 201',NULL,NULL,NULL,NULL,'img/listings/1427131999.png','2015-03-19 00:59:05','2015-03-23 22:33:23');
INSERT INTO `listings` VALUES (28,'Deb','Saeger','WASBO','Accounting & Technology Coordinator','Office 117',NULL,NULL,NULL,NULL,NULL,'2015-03-23 21:12:35','2015-03-23 21:12:35');
INSERT INTO `listings` VALUES (29,NULL,NULL,'WPTA','','Suite 102',NULL,NULL,NULL,NULL,'img/listings/1427132262.png','2015-03-23 22:37:45','2015-03-23 22:37:45');
INSERT INTO `listings` VALUES (30,NULL,NULL,'WSAA',NULL,'Suite 202',NULL,NULL,NULL,NULL,'img/listings/1427132304.png','2015-03-23 22:38:28','2015-03-23 22:38:28');
INSERT INTO `listings` VALUES (31,NULL,NULL,'WSPRA','','Suite 202',NULL,NULL,NULL,NULL,NULL,'2015-03-23 22:39:56','2015-03-23 22:39:56');
INSERT INTO `listings` VALUES (32,NULL,NULL,'Quality Educator Interactive','','Suite 103',NULL,NULL,NULL,NULL,'img/listings/1427132609.png','2015-03-23 22:42:13','2015-03-23 22:43:31');
INSERT INTO `listings` VALUES (33,NULL,NULL,'WASBO',NULL,'Suite 101',NULL,NULL,NULL,NULL,'img/listings/1427132687.png','2015-03-23 22:44:53','2015-03-24 00:19:27');
INSERT INTO `listings` VALUES (34,'Kristin','Hauser','WASBO','Administrative Assistant','Office 114',NULL,NULL,NULL,NULL,NULL,'2015-03-23 22:47:03','2015-03-23 22:47:03');
INSERT INTO `listings` VALUES (35,'Gary','Myrah','WCASS','Executive Director','Office 204',NULL,NULL,NULL,NULL,'img/listings/1427132863.png','2015-03-23 22:47:47','2015-03-23 22:47:47');
INSERT INTO `listings` VALUES (36,'John','Fischer','QEI / AWSA','Executive Director -- QEI / Director of Administration & Research -- AWSA','Office 111',NULL,NULL,NULL,'Super Great Guy','img/listings/1427132930.png','2015-03-23 22:48:56','2015-03-24 00:21:10');
INSERT INTO `listings` VALUES (37,'Kathy','Gilbertson','AWSA','Coordinator of Conventions & Conferences','Office 108',NULL,NULL,NULL,NULL,'img/listings/1427132979.png','2015-03-23 22:49:41','2015-03-23 22:49:41');
INSERT INTO `listings` VALUES (38,'Robin','Herring','AWSA','Coordinator of Operations','Office 112',NULL,NULL,NULL,NULL,'img/listings/1427133126.png','2015-03-23 22:52:09','2015-03-23 22:52:09');
INSERT INTO `listings` VALUES (39,'Jim','Lynch','AWSA','Executive Director','Office 109',NULL,NULL,NULL,NULL,'img/listings/1427133168.png','2015-03-23 22:52:50','2015-03-23 22:52:50');
INSERT INTO `listings` VALUES (40,'Jena','Sebald','AWSA','Coordinator of Communications','Office 107',NULL,NULL,NULL,NULL,'img/listings/1427133215.png','2015-03-23 22:53:37','2015-03-23 22:53:37');
INSERT INTO `listings` VALUES (41,'Joe','Schroeder','AWSA','Associate Executive Director','Office 110',NULL,NULL,NULL,NULL,'img/listings/1427133260.png','2015-03-23 22:54:26','2015-03-23 22:54:26');
INSERT INTO `listings` VALUES (42,'Donna','Sebald','AWSA','Coordinator of Accounting','Office 122',NULL,NULL,NULL,NULL,'img/listings/1427133479.png','2015-03-23 22:58:01','2015-03-23 22:58:01');
INSERT INTO `listings` VALUES (43,'Dyshaunn','Simons','AWSA','Clerical Assistant','Office 111',NULL,NULL,NULL,NULL,'img/listings/1427133581.png','2015-03-23 22:59:46','2015-03-23 22:59:46');
INSERT INTO `listings` VALUES (44,'Michelle','McGrath','WASC','Executive Director','Office 210',NULL,NULL,NULL,NULL,NULL,'2015-03-23 23:00:20','2015-03-23 23:00:20');
INSERT INTO `listings` VALUES (45,'Beth','Holznagel','WSAA','Administrative Assistant','Office 208',NULL,NULL,NULL,NULL,'img/listings/1427133651.png','2015-03-23 23:00:54','2015-03-23 23:00:54');
INSERT INTO `listings` VALUES (46,'John','Forester','WSAA','Director of Government Relations','Office 209',NULL,NULL,NULL,NULL,'img/listings/1427133703.png','2015-03-23 23:01:46','2015-03-23 23:01:46');
INSERT INTO `listings` VALUES (47,'Nancy','Lund','WASDA','Executive Assistant','Office 212',NULL,NULL,NULL,NULL,'img/listings/1427133776.png','2015-03-23 23:02:58','2015-03-23 23:02:58');
INSERT INTO `listings` VALUES (48,'Jon','Bales','WASDA','Executive Director','Office 213',NULL,NULL,NULL,NULL,'img/listings/1427133818.png','2015-03-23 23:03:40','2015-03-23 23:03:40');
INSERT INTO `listings` VALUES (49,'Diane','Gyorog','AWSA','Coordinator of Association Management','Office 215',NULL,NULL,NULL,NULL,'img/listings/1427159773.png','2015-03-24 06:16:14','2015-03-24 06:17:36');
INSERT INTO `listings` VALUES (50,'Jessica','Schwerdsky','WASDA','Administrative Assistant','Reception 211',NULL,NULL,NULL,NULL,'img/listings/1427159828.png','2015-03-24 06:17:09','2015-03-24 06:20:40');
INSERT INTO `listings` VALUES (51,NULL,NULL,'AWSA Conference Room',NULL,'Office 121',NULL,NULL,NULL,NULL,NULL,'2015-03-24 06:21:32','2015-03-24 06:21:32');
INSERT INTO `listings` VALUES (52,NULL,NULL,'WASDA Conference Room',NULL,'Office 214',NULL,NULL,NULL,NULL,NULL,'2015-03-24 06:21:48','2015-03-24 06:21:48');
/*!40000 ALTER TABLE `listings` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `maps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maps` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `kiosk` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `maps` WRITE;
/*!40000 ALTER TABLE `maps` DISABLE KEYS */;
INSERT INTO `maps` VALUES (37,'Office 119','img/maps/1427128488.png','1','2015-03-19 00:59:05','2015-03-23 21:34:49');
INSERT INTO `maps` VALUES (38,'Office 118','img/maps/1427128466.png','1','2015-03-19 00:59:05','2015-03-23 21:34:34');
INSERT INTO `maps` VALUES (39,'Office 117','img/maps/1427128447.png','1','2015-03-19 00:59:05','2015-03-23 21:34:08');
INSERT INTO `maps` VALUES (40,'Office 116','img/maps/1427128432.png','1','2015-03-19 00:59:05','2015-03-23 21:33:53');
INSERT INTO `maps` VALUES (41,'Office 115','img/maps/1427128254.png','1','2015-03-19 00:59:05','2015-03-23 21:47:06');
INSERT INTO `maps` VALUES (47,'Suite 103','img/maps/1427138258.png','1','2015-03-19 00:59:05','2015-03-24 00:17:39');
INSERT INTO `maps` VALUES (49,'Suite 202','img/maps/1427138285.png','1','2015-03-19 00:59:05','2015-03-24 00:18:06');
INSERT INTO `maps` VALUES (50,'Suite 201','img/maps/1427138272.png','1','2015-03-19 00:59:05','2015-03-24 00:17:53');
INSERT INTO `maps` VALUES (55,'Office 114','img/maps/1427127578.png','1','2015-03-23 21:19:42','2015-03-23 21:19:42');
INSERT INTO `maps` VALUES (56,'Office 120','img/maps/1427128507.png','1','2015-03-23 21:35:09','2015-03-23 21:35:09');
INSERT INTO `maps` VALUES (57,'Office 107','img/maps/1427128624.png','1','2015-03-23 21:37:05','2015-03-23 21:37:05');
INSERT INTO `maps` VALUES (58,'Office 108','img/maps/1427128636.png','1','2015-03-23 21:37:17','2015-03-23 21:37:17');
INSERT INTO `maps` VALUES (59,'Office 109','img/maps/1427128652.png','1','2015-03-23 21:37:33','2015-03-23 21:37:33');
INSERT INTO `maps` VALUES (60,'Office 110','img/maps/1427128684.png','1','2015-03-23 21:38:05','2015-03-23 21:38:05');
INSERT INTO `maps` VALUES (61,'Office 111','img/maps/1427128705.png','1','2015-03-23 21:38:26','2015-03-23 21:38:26');
INSERT INTO `maps` VALUES (62,'Office 112','img/maps/1427128722.png','1','2015-03-23 21:38:43','2015-03-23 21:38:43');
INSERT INTO `maps` VALUES (63,'Office 113','img/maps/1427128742.png','1','2015-03-23 21:39:05','2015-03-23 21:39:05');
INSERT INTO `maps` VALUES (64,'Office 121','img/maps/1427129450.png','1','2015-03-23 21:50:51','2015-03-23 21:50:51');
INSERT INTO `maps` VALUES (65,'Office 122','img/maps/1427129462.png','1','2015-03-23 21:51:03','2015-03-23 21:51:03');
INSERT INTO `maps` VALUES (66,'Office 203','img/maps/1427129481.png','1','2015-03-23 21:51:27','2015-03-23 21:51:27');
INSERT INTO `maps` VALUES (67,'Office 204','img/maps/1427129500.png','1','2015-03-23 21:51:42','2015-03-23 21:51:42');
INSERT INTO `maps` VALUES (68,'Office 205','img/maps/1427129512.png','1','2015-03-23 21:51:53','2015-03-23 21:51:53');
INSERT INTO `maps` VALUES (69,'Office 208','img/maps/1427129524.png','1','2015-03-23 21:52:09','2015-03-23 21:52:09');
INSERT INTO `maps` VALUES (70,'Office 209','img/maps/1427129541.png','1','2015-03-23 21:52:22','2015-03-23 21:52:22');
INSERT INTO `maps` VALUES (71,'Office 210','img/maps/1427129557.png','1','2015-03-23 21:52:39','2015-03-23 21:52:39');
INSERT INTO `maps` VALUES (72,'Office 212','img/maps/1427129569.png','1','2015-03-23 21:52:50','2015-03-23 21:52:50');
INSERT INTO `maps` VALUES (73,'Office 213','img/maps/1427129582.png','1','2015-03-23 21:53:03','2015-03-23 21:53:03');
INSERT INTO `maps` VALUES (74,'Office 214','img/maps/1427129594.png','1','2015-03-23 21:53:15','2015-03-23 21:53:15');
INSERT INTO `maps` VALUES (75,'Suite 102','img/maps/1428340204.png','1','2015-03-23 22:12:41','2015-04-06 22:10:06');
INSERT INTO `maps` VALUES (77,'Reception 211','img/maps/1427159620.png','1','2015-03-24 06:13:42','2015-03-24 06:20:40');
INSERT INTO `maps` VALUES (78,'Office 215','img/maps/1427159648.png','1','2015-03-24 06:14:09','2015-03-24 06:17:36');
INSERT INTO `maps` VALUES (79,'Cubicle 216','img/maps/1427159665.png','1','2015-03-24 06:14:27','2015-03-24 06:14:27');
INSERT INTO `maps` VALUES (80,'Cubicle 217','img/maps/1427159687.png','1','2015-03-24 06:14:48','2015-03-24 06:14:48');
INSERT INTO `maps` VALUES (81,'Cubicle 218','img/maps/1427159704.png','1','2015-03-24 06:15:05','2015-03-24 06:15:05');
/*!40000 ALTER TABLE `maps` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES ('2014_10_12_000000_create_users_table',1);
INSERT INTO `migrations` VALUES ('2014_10_12_100000_create_password_resets_table',1);
INSERT INTO `migrations` VALUES ('2015_03_16_203352_create_session_table',1);
INSERT INTO `migrations` VALUES ('2015_03_16_203416_create_listings_table',1);
INSERT INTO `migrations` VALUES ('2015_03_16_210710_create_maps_table',1);
INSERT INTO `migrations` VALUES ('2015_03_18_192051_create_slides_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payload` text COLLATE utf8_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL,
  UNIQUE KEY `sessions_id_unique` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `slides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slides` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `slides` WRITE;
/*!40000 ALTER TABLE `slides` DISABLE KEYS */;
INSERT INTO `slides` VALUES (1,'http://www.fillmurray.com/1280/720','My Awesome Slide 1','2015-03-19 00:59:05','2015-03-19 00:59:05');
INSERT INTO `slides` VALUES (2,'http://www.fillmurray.com/1281/721','My Awesome Slide 2','2015-03-19 00:59:05','2015-03-19 00:59:05');
INSERT INTO `slides` VALUES (3,'http://www.fillmurray.com/1282/722','My Awesome Slide 3','2015-03-19 00:59:05','2015-03-19 00:59:05');
INSERT INTO `slides` VALUES (4,'http://www.fillmurray.com/1283/723','My Awesome Slide 4','2015-03-19 00:59:05','2015-03-19 00:59:05');
INSERT INTO `slides` VALUES (6,'img/slides/1426710516.jpg','New Slide Number 2','2015-03-19 01:28:36','2015-03-19 01:28:36');
/*!40000 ALTER TABLE `slides` ENABLE KEYS */;
UNLOCK TABLES;
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Seth Phillips','seth.phillips@trms.com','$2y$10$gOzYj/SgdafjXthBB5F.yu2z0p57riwz1d7qJPHsQQ96NvBHQaZva',NULL,'2015-03-19 00:59:05','2015-03-19 00:59:05');
INSERT INTO `users` VALUES (6,'admin','admin','$2y$10$hmHOn.g5pzf6BkeTGnwF6uegh6aNPbBwF99lL2YtS8Di/2AYzhKp2',NULL,'2015-03-19 00:59:05','2015-03-19 00:59:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

