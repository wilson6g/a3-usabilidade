-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: dominus_pro_ucm
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` varchar(36) NOT NULL,
  `nome` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES ('00665351-f520-4cd8-879f-eed8e47dc704','colecionável'),('06767304-9894-4c4c-93c4-87bd211717b2','abandonado'),('0e76353d-6790-46fc-8023-60e873c3f70f','jogando'),('70a50c01-b360-46be-9d2f-e3f864b541f9','single player'),('91619b26-946f-4c91-8c34-dc5775706247','jogado'),('b81f7daf-fca1-4072-910e-61180a0dc1c2','coop'),('c8568fac-ae26-44a8-a68a-2017f364feb8','pendente'),('d8495879-f891-4201-a536-46a3dd71042b','zerado'),('dc23e754-1f4d-4236-b7e5-2e6fc49ee8c1','favorito'),('f57cb3ee-cefe-402a-87fc-d1775be8c499','multiplayer');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jogo`
--

DROP TABLE IF EXISTS `jogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogo` (
  `id` varchar(36) NOT NULL,
  `nome` varchar(120) NOT NULL,
  `descricao` text,
  `nota` int NOT NULL,
  `fk_plataforma` varchar(36) NOT NULL,
  `fk_usuario` varchar(120) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario` (`fk_usuario`),
  KEY `fk_plataforma` (`fk_plataforma`),
  CONSTRAINT `jogo_ibfk_1` FOREIGN KEY (`fk_usuario`) REFERENCES `usuario` (`email`),
  CONSTRAINT `jogo_ibfk_2` FOREIGN KEY (`fk_plataforma`) REFERENCES `plataforma` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogo`
--

LOCK TABLES `jogo` WRITE;
/*!40000 ALTER TABLE `jogo` DISABLE KEYS */;
INSERT INTO `jogo` VALUES ('0e25e9a7-7d6d-46b2-ba3f-63c4165a54b7','Animal Crossing: New Horizons','Um jogo relaxante onde você pode construir sua própria ilha e interagir com amigos.',3,'31c56d0e-f951-4757-a8a0-9a5f6c7be88a','email9@gmail.com'),('121d4ad3-2a9d-485e-961e-1442b6e1b1e9','God of War','Ação intensa com gráficos impressionantes e uma narrativa emocionante.',2,'8cb5b3e1-34c7-47fb-b246-b32a44d89472','email4@gmail.com'),('12b021bc-3e5a-40ca-b656-013b1aca1bfd','The Witcher 3: Wild Hunt','Um RPG com uma história profunda, missões envolventes e belos gráficos.',4,'52a8a21e-3c05-48f2-83b1-bd5804c58049','email3@gmail.com'),('1b7f16a9-9429-4907-b7a0-51a97ef22de5','FIFA 22','Um simulador de futebol com gráficos realistas e jogabilidade imersiva.',1,'f95d29c5-b09a-4b7a-8b9d-7ac3f63ff92f','email8@gmail.com'),('1ce69f95-9eed-41a6-8f9a-0a40748cb4a1','Call of Duty: Warzone','Um jogo de tiro gratuito com modos de batalha e ação intensa.',2,'3ab5c34d-8492-4e4d-9ed2-bc449ab1be9c','email10@gmail.com'),('7408ef5d-c1ca-4338-94b8-4b78f2f6b900','Minecraft','Um jogo de construção com infinitas possibilidades e criatividade.',4,'4d9d92d4-8f6a-4ef5-8fa1-0cd1d453fc98','email6@gmail.com'),('8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','Jujtsu','Jujtsu',1,'f95d29c5-b09a-4b7a-8b9d-7ac3f63ff92f','email5@gmail.com'),('95a8ecfa-49c4-4436-b7fb-4eeb4ee8e3cf','Overwatch','Um shooter online com personagens únicos e mecânicas de jogo competitivas.',5,'2a74e6d4-ff24-4b5e-b4b6-0678c3b7fe2c','email7@gmail.com'),('a37beede-f97e-4f4f-a17f-48540694a852','Fortnite','Um jogo de batalha real muito popular com uma comunidade vasta.',3,'04e8e4bb-95cb-4d97-8ad5-91c6f07b7491','email5@gmail.com'),('e822426a-ed1a-4592-a822-22f01a982efb','Red Dead Redemption 2','Um épico de ação no velho oeste, com um mundo aberto vasto e detalhado.',1,'e6b67137-dfb5-4f57-bd8c-fbdaed341a93','email2@gmail.com'),('f95f2570-208b-4b9a-936a-79effb16a8d1','The Legend of Zelda: Breath of the Wild','Um jogo de aventura incrível com gráficos impressionantes e uma história envolvente.',5,'6e9b4627-5d23-4225-998e-48e0314a9d56','email1@gmail.com');
/*!40000 ALTER TABLE `jogo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jogo_categoria`
--

DROP TABLE IF EXISTS `jogo_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogo_categoria` (
  `id` varchar(36) NOT NULL,
  `fk_jogo` varchar(36) NOT NULL,
  `fk_categoria` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_jogo` (`fk_jogo`),
  KEY `fk_categoria` (`fk_categoria`),
  CONSTRAINT `jogo_categoria_ibfk_1` FOREIGN KEY (`fk_jogo`) REFERENCES `jogo` (`id`),
  CONSTRAINT `jogo_categoria_ibfk_2` FOREIGN KEY (`fk_categoria`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogo_categoria`
--

LOCK TABLES `jogo_categoria` WRITE;
/*!40000 ALTER TABLE `jogo_categoria` DISABLE KEYS */;
INSERT INTO `jogo_categoria` VALUES ('01c1c76d-a72a-4ee4-8241-93ccf30a79d7','121d4ad3-2a9d-485e-961e-1442b6e1b1e9','dc23e754-1f4d-4236-b7e5-2e6fc49ee8c1'),('16a75306-6806-4444-aa88-d883d5bee158','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','0e76353d-6790-46fc-8023-60e873c3f70f'),('2f140238-4551-427e-8c78-3d6deacc3b6e','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','b81f7daf-fca1-4072-910e-61180a0dc1c2'),('3051e48c-94f8-4641-94d1-47f11f0f4b2e','0e25e9a7-7d6d-46b2-ba3f-63c4165a54b7','70a50c01-b360-46be-9d2f-e3f864b541f9'),('33a2a0dd-2a3d-4f31-bc49-e6092e34cd3f','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','d8495879-f891-4201-a536-46a3dd71042b'),('3c10dc26-1b35-4673-9834-f1b5171f05c8','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','06767304-9894-4c4c-93c4-87bd211717b2'),('3e9ec178-d32e-4ef3-9479-6d6ba04d2922','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','f57cb3ee-cefe-402a-87fc-d1775be8c499'),('42861deb-f4c3-43c0-af75-9749993e856e','95a8ecfa-49c4-4436-b7fb-4eeb4ee8e3cf','00665351-f520-4cd8-879f-eed8e47dc704'),('4931afed-72ca-4542-bc90-88b5bfb5ffd4','12b021bc-3e5a-40ca-b656-013b1aca1bfd','d8495879-f891-4201-a536-46a3dd71042b'),('65bbe391-04d2-4fd2-ae37-4dce94a2bb88','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','00665351-f520-4cd8-879f-eed8e47dc704'),('69e564de-d2b3-47a7-a36f-e88b7d52a3c0','1ce69f95-9eed-41a6-8f9a-0a40748cb4a1','b81f7daf-fca1-4072-910e-61180a0dc1c2'),('79a6e5e6-a615-4c35-824e-fd2f11e75207','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','91619b26-946f-4c91-8c34-dc5775706247'),('84600109-97cc-4668-a340-18119e15997e','a37beede-f97e-4f4f-a17f-48540694a852','c8568fac-ae26-44a8-a68a-2017f364feb8'),('a037d851-c4d4-447c-b869-436e44298d7d','7408ef5d-c1ca-4338-94b8-4b78f2f6b900','06767304-9894-4c4c-93c4-87bd211717b2'),('a327af7c-a38b-4477-a268-43e7db5b89f8','e822426a-ed1a-4592-a822-22f01a982efb','91619b26-946f-4c91-8c34-dc5775706247'),('a7568750-d184-4a95-b67d-ad34feaefd9e','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','70a50c01-b360-46be-9d2f-e3f864b541f9'),('ab718859-829b-47c1-bb17-ab37c1211aa3','f95f2570-208b-4b9a-936a-79effb16a8d1','0e76353d-6790-46fc-8023-60e873c3f70f'),('ae1dc601-1c88-4df9-8d93-57a76ebf4941','8f931991-7d3b-4795-9ab8-8bc77ab5f6a4','dc23e754-1f4d-4236-b7e5-2e6fc49ee8c1'),('f50a3996-0059-4edf-85d6-7dae70ba0605','1b7f16a9-9429-4907-b7a0-51a97ef22de5','f57cb3ee-cefe-402a-87fc-d1775be8c499');
/*!40000 ALTER TABLE `jogo_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plataforma`
--

DROP TABLE IF EXISTS `plataforma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plataforma` (
  `id` varchar(36) NOT NULL,
  `nome` varchar(32) NOT NULL,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plataforma`
--

LOCK TABLES `plataforma` WRITE;
/*!40000 ALTER TABLE `plataforma` DISABLE KEYS */;
INSERT INTO `plataforma` VALUES ('04e8e4bb-95cb-4d97-8ad5-91c6f07b7491','PlayStation 4','Console anterior da Sony com uma grande biblioteca de jogos.'),('2a74e6d4-ff24-4b5e-b4b6-0678c3b7fe2c','Android','Plataforma móvel com uma vasta seleção de jogos disponíveis.'),('31c56d0e-f951-4757-a8a0-9a5f6c7be88a','PlayStation Portable (PSP)','Console portátil da Sony com uma coleção de jogos exclusivos.'),('3ab5c34d-8492-4e4d-9ed2-bc449ab1be9c','Xbox 360','Console anterior da Microsoft com uma biblioteca diversificada de jogos.'),('4d9d92d4-8f6a-4ef5-8fa1-0cd1d453fc98','Xbox One','Console da Microsoft com grande variedade de jogos e entretenimento.'),('52a8a21e-3c05-48f2-83b1-bd5804c58049','Nintendo Switch','Híbrido entre console de mesa e portátil com jogos exclusivos.'),('6e9b4627-5d23-4225-998e-48e0314a9d56','PlayStation 5','Console de última geração da Sony com gráficos poderosos.'),('8cb5b3e1-34c7-47fb-b246-b32a44d89472','PC','Plataforma versátil para uma variedade de jogos e personalização.'),('e6b67137-dfb5-4f57-bd8c-fbdaed341a93','Xbox Series X','Console de alta performance da Microsoft para jogos intensos.'),('f95d29c5-b09a-4b7a-8b9d-7ac3f63ff92f','iOS','Sistema operacional móvel com uma variedade de jogos e aplicativos.');
/*!40000 ALTER TABLE `plataforma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuario` varchar(12) DEFAULT NULL,
  `nome` varchar(36) NOT NULL,
  `email` varchar(120) NOT NULL,
  `senha` varchar(120) NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('usuario1','nome1','email1@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario10','nome10','email10@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario2','nome2','email2@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario3','nome3','email3@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario4','nome4','email4@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario5','nome5','email5@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario6','nome6','email6@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario7','nome7','email7@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario8','nome8','email8@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm'),('usuario9','nome9','email9@gmail.com','$2b$10$ot5kk8dS0.bmt1uVM1QeLuAbedc/aF5bxdBus3tiTEety0P/RdDrm');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'dominus_pro_ucm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-04  1:15:09
