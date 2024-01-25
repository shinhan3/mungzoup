


CREATE DATABASE IF NOT EXISTS `testdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `testdb`;

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
	(10, '테스트10 Action 테스트2');

-- 테이블 testdb.test2 구조 내보내기
CREATE TABLE IF NOT EXISTS `test2` (
  `title` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  KEY `title` (`title`(768))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `test2` (`title`, `name`) VALUES
	('안뇽', '안녕'),
	('123', '11');
