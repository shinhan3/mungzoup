-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        11.2.2-MariaDB-1:11.2.2+maria~ubu2204 - mariadb.org binary distribution
-- 서버 OS:                        debian-linux-gnu
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;




-- 테이블 testdb.test 구조 내보내기
CREATE TABLE IF NOT EXISTS `test` (
  `seqno` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  PRIMARY KEY (`seqno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 testdb.test:~11 rows (대략적) 내보내기
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` (`seqno`, `content`) VALUES
	(1, '테스트1'),
	(2, '테스트2'),
	(3, '테스트3'),
	(4, '테스트4'),
	(5, '테스트5'),
	(6, '테스트6'),
	(7, '테스트7'),
	(8, '테스트8'),
	(9, '테스트9'),
	(10, '테스트10 Action 테스트'),
/*!40000 ALTER TABLE `test` ENABLE KEYS */;

-- 테이블 testdb.test2 구조 내보내기
CREATE TABLE IF NOT EXISTS `test2` (
  `title` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  KEY `title` (`title`(768))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 testdb.test2:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `test2` DISABLE KEYS */;
INSERT INTO `test2` (`title`, `name`) VALUES
	('안뇽', '안녕'),
	('123', '11');
/*!40000 ALTER TABLE `test2` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
