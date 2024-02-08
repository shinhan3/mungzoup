package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.shinhan.sbproject.VO.userVO;

public interface UserRepository extends CrudRepository<userVO, String>{
	@Query(value ="SELECT (SELECT TIMESTAMPDIFF(MONTH,user.subscribe_day,NOW()) FROM user WHERE user_id = :userId) AS userMenth, "
    +"(SELECT TIMESTAMPDIFF(MONTH,card.INSERT_DAY,NOW()) FROM user JOIN card USING(card_id) WHERE user_id = :userId) AS cardMenth,"
    +"(SELECT DATE_FORMAT(card.INSERT_DAY,'%Y-%m-%d') FROM user JOIN card USING(card_id) WHERE user_id = :userId) AS insertCard, "
    +"(SELECT  IFNULL(FORMAT( SUM(payment.PRICE),'#,#'),0) FROM payment WHERE user_id = :userId) AS price"
    , nativeQuery = true)
    List<String[]> IssuedPageData(@Param("userId") String userId);
    @Query(value="SELECT user_id FROM user JOIN card USING(card_id)", nativeQuery = true)
    List<String> getUsers();
}
