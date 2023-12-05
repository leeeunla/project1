-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: project1
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `board` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL,
  `create_at` datetime(6) NOT NULL,
  `text` varchar(1500) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'han','2023-11-21 16:09:17.909151','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec tellus scelerisque sollicitudin. Aliquam eget mattis lacus. Curabitur eu egestas nulla, id sollicitudin dolor. Duis augue magna, semper eget tellus in, placerat eleifend purus. Integer sit amet consequat nisi. Vivamus mattis elit non facilisis imperdiet. Praesent cursus elit et ligula aliquam dapibus. Phasellus et odio libero. Praesent elementum ullamcorper turpis, ac rhoncus augue lobortis id. Curabitur venenatis et neque et euismod. Aliquam nec enim ac odio sollicitudin consequat vitae sit amet nulla. Nullam commodo dolor velit, at tempus risus hendrerit mattis.','title-1',''),(2,'steve','2023-11-30 11:32:18.844510','erottaartgsffgmjyvymkjvyhmjhgj  fnhcthng  hghdtgjgjghjhjhj bjgjgjgjgj','google',''),(3,'steve','2023-11-30 12:27:44.197259','asdfsadfsdfsadfas','sdaf',''),(4,'steve','2023-11-30 12:28:06.171604','asdfsadfsdfsadfas','sdaf',''),(5,'steve','2023-11-30 12:29:58.346057','1234gfdgds435345drfgdfg','dsfxcvxcv',''),(6,'steve','2023-12-04 12:11:36.098527','우리나라의 경제 활동','google',''),(7,'korea','2023-12-05 09:40:09.560795','메이플스토리','game',''),(8,'korea','2023-12-05 09:58:39.270173','메이플스토리','game','freedom'),(9,'korea','2023-12-05 10:00:36.227750','메이플스토리','game','games'),(10,'jon','2023-12-05 10:06:21.771389','어그로 ㅅㄱ','와 얘 퇴물 직업 아님?','games'),(11,'jon','2023-12-05 10:07:53.900043','어그인데ㅋ 이거 궁금해서 들어온 님도 대머리임','내 윗글 대머리ㅋ','games'),(12,'jon','2023-12-05 10:10:04.778911','어그인데ㅋ 이거 궁금해서 들어온 님도 대머리임','왔으면 인사해야지?','games'),(13,'jon','2023-12-05 10:11:01.882998','이번에 큰 패치 온대','큰거온다 애들아...','games'),(14,'dse','2023-12-05 10:14:29.510007','보스 이번에 이렇게 죽이라는데 진짜에요?','이거 이렇게 하는거 맞나요 고인물 형님들?','community'),(15,'dse','2023-12-05 10:15:10.414131','날 올려서 상단 고정해주면 기프티콘 쏨ㅋ','올려라','community'),(16,'dse','2023-12-05 10:15:39.899815','먹고 싶은 게 없는데 메뉴 추천 좀','오늘 점심 메뉴 추천좀','community'),(17,'dse','2023-12-05 10:16:36.570356','이번 패치 너무 한거 아니냐고','야 누워 ● ▅ ▇ █▇▆▅ ▄ ▇','community'),(18,'dse','2023-12-05 10:16:56.378256','다이아몬드','아몬드가 죽으면?','community'),(19,'dse','2023-12-05 10:19:46.207229','자꾸 렉걸리고 보스 죽여도 필드에서 나가지 않는데 이거 버그 맞죠? 기껏 레어 아이템 나왔는데 인벤에 안 들어와요ㅠ 운영자님 도와주세요ㅜ','버그 제보합니다 [심각도 높음]','bug'),(20,'dse','2023-12-05 10:21:39.614465','보스가 결정타 날릴때 벽에 몸 붙이고 있으면 안 죽고 깰 수 있어요 그리고 이번 생긴 신규 맵 끝자락에 시선 잘 조절하면 아직 안 나온 지역도 볼 수 있어요 다만 언제 패치될지 몰라요','이거 이렇게도 된다던데','bug'),(21,'kem','2023-12-05 10:23:29.377948','아ㅠ 내 황금같은 주말 어디로 감? 내일이 월요일이라는게 너무 싫다','내일 출근하기 싫다 ㅇㅈ?','freedom'),(22,'kem','2023-12-05 10:24:32.777490','맞어 니들 종강 언제임? 그때쯤에 업뎃공지 올라올 것 같은데','님들 종강 언제함','freedom'),(23,'kem','2023-12-05 10:25:37.363221','다음 업뎃 예상해본 사람? 난 일단 인기 캐릭 복각 스카우트 내줬으면 좋겠음','다음 업데이트 뭐 나올거 같음','freedom'),(24,'kem','2023-12-05 10:26:26.035058','일단 부족한 솜씨로 그려봄 그러니 뭐라고 하지마셈','리마스터 후기 만화','freedom'),(25,'kem','2023-12-05 10:27:14.661788','이제뭐함? 이번 이벤 다 즐겼는데 이제 할 것도 없는데','이제뭐함','freedom'),(26,'tom','2023-12-05 10:29:20.007975','다들 롤 재미있다는데 할만한가요? ','롤 하시는분 있나요?','question'),(27,'tom','2023-12-05 10:30:16.164373','누구는 검사 좋다고 하고 누군 마법사가 좋다고 하는데 누구 말이 맞는건가요? 초보가 할만 것 추천 좀 해주세요 ','무슨 직업이 가장 좋은가요?','question'),(28,'tom','2023-12-05 10:31:17.101796','나 벌써 천만원 다 되어가는데 님들은 얼마임? 이거 더 얻어야해?','다들 돈 얼마 모음?','question'),(29,'jon','2023-12-05 10:34:45.446424','이번에 게임을 처음 시작한 뉴비입니다','안녕하세요~','join'),(30,'jon','2023-12-05 10:35:14.081353','이번에 게임을 처음 시작한 뉴비인데 열심히 해볼게요!','안녕하세요 잘 부탁드려요','join'),(31,'jon','2023-12-05 10:36:14.336538','게임을 잠깐 접었다가 다시 시작하는 중고 뉴비입니다.','하이요','join'),(32,'jon','2023-12-05 10:36:42.048709','잘부탁드려요','안녕하세요잘부탁드려여','join'),(33,'jon','2023-12-05 10:37:21.276551','첨언 달게 받겠습니다.','처음왔어요 안녕하세요 잘부탁드림','join'),(34,'jan','2023-12-05 10:38:30.326954','처음 그려보는거라 많이 이상할 수 있어요ㅠ','엔버 그림 그려봤어요ㅎ','fan'),(35,'jan','2023-12-05 10:39:06.863477','그리기도 더럽게 어렵고 잡기도 어렵지만 이쁘니 봐준다','카링 더럽게 어렵지만 그래도 봐준다','fan'),(36,'jan','2023-12-05 10:39:34.967715','그래도 난 니가 좋다 은월','은월은 늘 불쌍하지만..','fan'),(37,'stans','2023-12-05 10:41:55.198196','이게 그림이라고 올린거임? 우리 할머니가 더 잘 그리겠네','우리 할머니가 이것보다 잘 그리겠다','hand'),(38,'stans','2023-12-05 10:42:32.911975','뭐가 더 나음?','볼펜으로 그린거랑 붓펜으로 그린거','hand'),(39,'stans','2023-12-05 10:43:27.814375','원래 잘 그리는데 오랜간만에 손그림 그리니 이상해지네요ㅠ','컴퓨터로 그리면 더 잘 그려지는데ㅠ','hand'),(40,'hee','2023-12-05 10:45:45.496167','자세한 내용은 링크 들어가셔서 확인하시면 됩니다. 가격은 우선 선제시 해주시면 최대한 맞춰드릴게여','커미션 개장했습니다 많관부!!','com'),(41,'hee','2023-12-05 10:46:46.527208','일전에 올린 커미션 신청 양식 올려드립니다. 신청 마감시간을 지켜서 신청해주시면 감사드립니다.','양식 안내 올려드립니다','com'),(42,'hee','2023-12-05 10:47:33.324584','얼마일 것 같음? 맞추면 선물 줌','내 커미션 얼마에 맡긴거 같은지 퀄 평 ㄱ','com');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `birth_date` date NOT NULL,
  `email` varchar(30) NOT NULL,
  `gender` enum('MAN','WOMAN') NOT NULL,
  `login_id` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_member_login_id` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'2000-01-01','name@email.com','MAN','steve','steve','1234qwer@@@'),(2,'2000-01-01','name@email.com','WOMAN','tom','tom','1234qwer@@@'),(3,'2000-01-01','name@email.com','MAN','hee','tom','12345shde@@@');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-05 20:21:46
