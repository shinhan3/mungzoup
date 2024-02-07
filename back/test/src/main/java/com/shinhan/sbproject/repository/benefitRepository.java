package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.shinhan.sbproject.VO.benefitVO;

public interface benefitRepository extends CrudRepository<benefitVO, Integer>{
	@Query(value = 
      "SELECT category_name,ROUND( percent,1) AS percent FROM user JOIN CARD USING(CARD_ID) "
    + "JOIN benefit_history USING(CARD_ID) JOIN credit USING(CREDIT_ID) JOIN CATEGORY USING (CATEGORY_ID) "
    + "WHERE user_id=:userId AND TIMESTAMPDIFF(MONTH,benefit_history.DATE,NOW())=0 "
    ,nativeQuery = true)
    List<String[]> getbenefitPre(@Param("userId") String userId);
}
