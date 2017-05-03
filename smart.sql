-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: smart
-- ------------------------------------------------------
-- Server version	5.7.17-0ubuntu0.16.04.2

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

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `complement` varchar(255) NOT NULL,
  `coordX` float DEFAULT NULL,
  `coordY` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `cityId` int(11) DEFAULT NULL,
  `ownerId` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `district` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cityId` (`cityId`),
  KEY `ownerId` (`ownerId`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`cityId`) REFERENCES `city` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `address_ibfk_2` FOREIGN KEY (`ownerId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'1 rue de l\'olive','Batiment Alphonse Brown',69.69,69.69,'2017-04-19 18:05:09','2017-04-19 18:05:09',1,1,'Maison','Campus de la Doua, Villeurbanne'),(2,'25 rue part-dieu','Batiment Oxygene',69.69,69.69,'2017-04-19 18:05:13','2017-04-19 18:05:13',2,1,'Travail','Etats-Unis, Lyon'),(3,'20 avenue Albert Einstein','INSA Lyon',69.69,69.69,'2017-04-20 19:10:52','2017-04-20 19:10:52',2,1,'Ecole','Croix-Rousse, Lyon'),(4,'9 rue de l\'olive','Batiment Alphonse Brown',69.69,69.69,'2017-04-25 10:03:11','2017-04-25 15:59:37',2,1,'Chez maman','Montchat, Lyon'),(5,'1 rue de l\'olive','Batiment Alphonse Brown',69.69,69.69,'2017-04-25 13:45:04','2017-04-25 13:45:04',1,1,'Chez ma soeurette','Gratte-ciel, Villeurbanne'),(10,'1 rue Hamammet','Tacos',NULL,NULL,'2017-04-25 15:16:57','2017-04-25 15:16:57',1,1,'Chez Nico','Charpennes, Villeurbanne'),(11,'1 rue de l\'olive','Batiment Alphonse Brown',69.69,69.69,'2017-04-27 09:40:35','2017-04-27 09:40:35',2,4,'Maison','Presque-île, Lyon'),(12,'1 rue de l\'olive','Batiment Alphonse Brown',69.69,69.69,'2017-04-27 10:22:56','2017-04-27 10:22:56',2,5,'Maison','Fourvière, Lyon');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announce`
--

DROP TABLE IF EXISTS `announce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `announce` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `estimatedTime` int(11) DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `sale` tinyint(1) NOT NULL,
  `closed` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `authorId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`),
  KEY `typeId` (`typeId`),
  KEY `addressId` (`addressId`),
  CONSTRAINT `announce_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `announce_ibfk_2` FOREIGN KEY (`typeId`) REFERENCES `announce_type` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `announce_ibfk_3` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announce`
--

LOCK TABLES `announce` WRITE;
/*!40000 ALTER TABLE `announce` DISABLE KEYS */;
INSERT INTO `announce` VALUES (1,12,'Besoin de plombier','Bonjour,\r\n\r\nJ\'ai quelques tuyaux bouchés. Est-ce que quelqu\'un dans le quartier est assez équipé pour venir déboucher tout ça ?',30,'2017-07-19 22:00:00','2017-07-24 22:00:00',0,0,'2017-04-19 18:05:09','2017-04-19 18:05:09',1,1,1),(2,3,'Vente de fleurs','J\'ai récupéré quelques fleurs sur le rond-point du quartier. Je les vends pour pas cher !',30,'2017-07-19 22:00:00','2017-07-24 22:00:00',1,1,'2017-04-19 18:05:13','2017-05-02 14:00:54',4,2,3),(3,5,'Encourager mon fils','Mon fils va participer à sa première compétition d\'athlétisme et j\'aimerais que le gradin soit plein de personnes motivées pour l\'encourager !',45,NULL,NULL,0,0,'2017-04-20 07:26:44','2017-04-20 07:26:44',1,3,10),(4,8,'M\'emmener à l\'aéroport','Je prends l\'avion pour Bastia demain matin, quelqu\'un peut-il me conduire à l\'aéroport ?',80,NULL,'2017-05-02 14:00:00',0,0,'2017-04-20 08:06:22','2017-04-20 08:06:22',4,8,4),(5,6,'Besoin d\'un cuisto','Je reçois ma future amante chez moi jeudi soir mais je ne sais pas cuisiner ! Est-ce que quelqu\'un peut se charger de faire un petit truc pour moi (genre risotto). Je ferais genre que j\'en suis l\'auteur donc discrétion exigée !\r\nBisous.',60,NULL,NULL,0,1,'2017-04-11 00:00:00','2017-04-11 00:00:00',1,7,12),(6,5,'Aide Plomberie','J\'ai un problème de tuyaux',30,'2017-07-19 22:00:00','2017-07-24 22:00:00',0,0,'2017-04-25 10:03:11','2017-04-25 10:03:11',4,1,11),(15,12,'Mon PC ne marche plus','Bonjour j\'ai un gros soucis mon PC ne marche plus du tout, j\'ai été obligé d\'utiliser celui de ma voisine pour poster cette annonce !!! Aidez-moi svp j\'en ai besoin pour regarder les Anges en replay car j\'étais pas chez moi hier soir.\nURGENT !!\nL\'ordi s\'allume mais y\'a plus rien qui marche, y\'a même plus de lumière sur l\'écran !!',55,NULL,NULL,0,0,'2017-04-27 14:37:00','2017-04-27 14:37:00',1,6,2),(16,8,'Nourrir mes blattes','Bonjour,\nJ\'ai adopté récemment des petites blattes trop mimi mais je pars en vacances au Portugal la semaine prochaine et je cherche quelqu\'un pour s\'occuper d\'elles : câlins, nourriture, balade ...',20,NULL,NULL,0,0,'2017-04-27 14:49:42','2017-04-27 14:49:42',1,5,5),(17,6,'Les pourcentages','Bonjour,\nJe n\'ai jamais rien compris aux pourcentages mais là j\'aimerais bien aller faire les soldes et du coup ... gros soucis ! J\'arrive pas à calculer les nouveaux prix du coup je suis sûr je me suis fais arnaquer. Bref aidez-moi. Biz.',30,NULL,NULL,0,0,'2017-04-27 15:03:37','2017-04-27 15:03:37',1,4,3),(18,10,'Aide en C++','Je ne comprends pas les pointeurs.',60,'2017-03-03 00:00:00','2017-05-08 00:00:00',0,0,'2017-05-03 07:48:30','2017-05-03 07:48:30',4,6,11),(19,3,'Repas à partager','Bonjour, je fais un couscous maison ce samedi soir, et je tenais à le partager avec du monde. Végétariens s\'abstenir',60,'2017-07-01 00:00:00','2017-04-01 00:00:00',1,0,'2017-05-03 09:51:29','2017-05-03 09:51:29',1,7,1);
/*!40000 ALTER TABLE `announce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announce_type`
--

DROP TABLE IF EXISTS `announce_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `announce_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78788 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announce_type`
--

LOCK TABLES `announce_type` WRITE;
/*!40000 ALTER TABLE `announce_type` DISABLE KEYS */;
INSERT INTO `announce_type` VALUES (1,'Bricolage','tinkering','2017-04-19 18:04:45','2017-04-19 18:04:45'),(2,'Courses','shop','2017-04-19 18:05:09','2017-04-19 18:05:09'),(3,'Garde d\'enfants','child','2017-04-19 18:05:13','2017-04-19 18:05:13'),(4,'Soutien scolaire','study','2017-04-20 00:00:00','2017-04-20 00:00:00'),(5,'Animaux','animal','2017-04-20 00:00:00','2017-04-20 00:00:00'),(6,'Dépannage informatique','computer','2017-04-20 00:00:00','2017-04-20 00:00:00'),(7,'Cuisine','food','2017-04-20 00:00:00','2017-04-20 00:00:00'),(8,'Transport','taxi','2017-04-20 00:00:00','2017-04-20 00:00:00');
/*!40000 ALTER TABLE `announce_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `postCode` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `city_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Jean-Michel Villeurbanne','69100','2017-04-19 18:04:45','2017-04-19 18:04:45'),(2,'Lyon','69000','2017-04-25 00:00:00','2017-04-25 00:00:00');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `note` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `authorId` int(11) DEFAULT NULL,
  `announceId` int(11) DEFAULT NULL,
  `targetId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `authorId` (`authorId`),
  KEY `announceId` (`announceId`),
  KEY `targetId` (`targetId`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`announceId`) REFERENCES `announce` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`targetId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'C\'est un arnaqueur !!!!','Les fleurs n\'étaient pas jaunes comme prévu mais ROUGES !!! C\'est un arnaqueur !',1,'2017-05-02 14:00:54','2017-05-02 14:00:54',1,2,4),(2,'Sympa et efficace','Vraiment sympathique, et sait travailler rapidement. Peu ponctuel, mais sait ce qu\'il fait.',4,'2017-05-03 09:45:03','2017-05-03 09:45:03',1,6,4);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icon` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `read` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `transactionId` int(11) DEFAULT NULL,
  `commentId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `transactionId` (`transactionId`),
  KEY `commentId` (`commentId`),
  KEY `userId` (`userId`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`transactionId`) REFERENCES `transaction` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `notification_ibfk_2` FOREIGN KEY (`commentId`) REFERENCES `comment` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `notification_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,'chatbubbles','answer',0,'2017-04-01 00:00:00','2017-04-01 00:00:00',5,NULL,1),(2,'checkmark','accept',0,'2017-04-01 00:00:00','2017-04-27 00:00:00',4,NULL,1),(3,'checkmark','end',0,'2017-04-02 00:00:00','2017-04-27 00:00:00',6,NULL,1),(14,'chatbubbles','close',0,'2017-05-02 14:00:54','2017-05-02 14:00:54',4,NULL,4),(15,'chatbubbles','answer',0,'2017-05-03 09:41:10','2017-05-03 09:41:10',23,NULL,4),(16,'chatbubbles','end',0,'2017-05-03 09:45:03','2017-05-03 09:45:03',22,NULL,4);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transactionDate` datetime NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `commentary` text NOT NULL,
  `sellerOk` tinyint(1) DEFAULT NULL,
  `buyerOk` tinyint(1) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sellerId` int(11) DEFAULT NULL,
  `buyerId` int(11) DEFAULT NULL,
  `announceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sellerId` (`sellerId`),
  KEY `buyerId` (`buyerId`),
  KEY `announceId` (`announceId`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`sellerId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`buyerId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`announceId`) REFERENCES `announce` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (3,'2017-04-20 12:47:31','Jean-Michel','jm.be@smart.pld','0606060606','Bonjour,\nJe peux emprunter la TWINGO de ma mère pour vous rendre ce service. Par contre le préfère vous prévenir, je n\'écoute que du Lorie en conduisant.',1,0,NULL,0,'2017-04-20 12:47:25','2017-04-20 12:47:25',1,4,4),(4,'2017-04-20 12:53:14','Jean-Michel','jm.be@smart.pld','0606060606','Bonjour,\nJe veux bien si elles sont jaunes.\nCordialement,\nJM.',1,1,NULL,3,'2017-04-20 12:52:42','2017-05-02 14:00:54',4,1,2),(5,'2017-04-20 00:00:00','Jean-Michel','jm.anwser@insa-lyon.fr','0674358866','Bjr,\r\nJ\'ai un CAP plomberie si vous avez toujours besoin. J\'ai pas mal d\'outils, je devrais pouvoir vous déboucher tout ça !',1,1,78543,1,'2017-04-20 00:00:00','2017-04-25 12:31:32',5,1,1),(6,'2015-05-05 13:12:00','Denis BROGNIART','denis.brogniart@insa-lyon.fr','0607080907','AH ! Je veux bien venir le supporter, j\'ai l\'habitude !',1,1,65411,1,'2017-04-20 19:10:52','2017-05-02 06:09:40',4,1,3),(16,'2017-05-02 00:00:00','Mark ZUCKERBERG','m.zuckzuck@receptif.com','0678542312','Bonjour. J\'ai quelques antécédents avec les blattes, je veux bien m\'en occuper.',1,0,NULL,0,'2017-05-02 00:00:00','2017-05-02 00:00:00',19,1,16),(22,'2017-05-02 08:03:51','Jean-Michel','jm.aigri@smart.pld','0606060608','Bonjour. J\'ai de bons outils, je peux venir déboucher tout ça.',1,1,NULL,2,'2017-05-02 08:04:09','2017-05-03 09:45:03',1,4,6),(23,'2017-05-03 09:39:21','Jean-Michel','jm.aigri@smart.pld','0606060608','Bonjour, \nJ\'ai une voiture et je vais justement dans cette direction le jour dit. \nCdlt',1,0,NULL,0,'2017-05-03 09:41:10','2017-05-03 09:41:10',1,4,4);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `cellPhone` varchar(10) NOT NULL,
  `ahAmount` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `user_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jm.aigri@smart.pld','Jean-Michel','Smart','0606060608',41,'_`8U\\[bVZnnc[d@Y[YpiqkqpqpnnXpg_p','2017-04-19 18:04:45','2017-05-02 14:00:54'),(4,'denis.brogniart@insa-lyon.fr','Denis','Brogniart','0678542312',40,'\\\\XYa?ZZqhngSccAY^aZ8pqoj9]bpiqkqpqpnnXpg_pinghgXpiqk','2017-04-20 00:00:00','2017-05-02 14:00:54'),(5,'jm.answer@insa-lyon.fr','Jean-Michel','Réponse','0678542312',83,'_`8U^aeTsUlj\\[@Wa__@TspiqkqpqpnnXpg_pingh','2017-04-19 00:00:00','2017-04-21 00:00:00'),(19,'jm.server@smart.pld','Jean-Michel','Server','0606060607',54000,'j109i_`8^ZadTsUqiScc8]]ZpiqkqpqpnnXpg_pinghgX','2017-04-27 15:08:03','2017-04-27 15:08:03'),(24,'jm.be@smart.pld','Jean-Michel','Back-End','0606060606',50000,'_`8VZHcXjnqJZ`[piqkqpqpnnXp','2017-05-02 08:16:42','2017-05-03 12:44:24');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-03 15:02:56
