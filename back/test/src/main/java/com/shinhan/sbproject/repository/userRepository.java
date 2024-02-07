package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.shinhan.sbproject.VO.userVO;

public interface userRepository extends CrudRepository<userVO, String>{
	@Query(value ="SELECT TIMESTAMPDIFF(MONTH,user.subscribe_day,NOW()) AS userMenth "
    +",TIMESTAMPDIFF(MONTH,card.INSERT_DAY,NOW()) AS cardMenth "
    +",DATE_FORMAT(card.INSERT_DAY,'%Y-%m-%d') AS insertCard "
    +", FORMAT( SUM(payment.PRICE),'#,#') AS price "
    +"FROM user JOIN card USING (CARD_ID) JOIN payment USING(USER_ID) "
    +"WHERE user_id= :userId AND TIMESTAMPDIFF(MONTH,payment.PAYMENT_DATE,NOW())=0 "
    +"GROUP BY user_id ", nativeQuery = true)
    List<String[]> IssuedPageData(@Param("userId") String userId);
}
