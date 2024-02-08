package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.shinhan.sbproject.VO.PaymentVO;

public interface PaymentRepository extends CrudRepository<PaymentVO, Integer>{
	@Query(value = "SELECT user_name, IFNULL( sum(ROUND(ROUND( percent,1)*price/100)),0 ) AS total_discount_price FROM payment LEFT JOIN benefit_history  USING (BENEFIT_HISTORY_ID) LEFT JOIN credit USING (credit_id) RIGHT JOIN user USING (user_id) "
                  +"WHERE user_id= :userId AND TIMESTAMPDIFF(MONTH,PAYMENT_DATE,NOW())=1 "
                  +"GROUP BY user_id",nativeQuery = true)
    List<String[]> getUserNameAndDiscountPrice(@Param("userId") String userId);

    @Query(value = "SELECT category_id, SUM(price) FROM payment JOIN store USING(store_id) "
                  +"WHERE user_id = :userId AND category_id IN (SELECT DISTINCT category_id FROM credit) "
                  +"AND TIMESTAMPDIFF(MONTH,payment.PAYMENT_DATE,NOW())=1 "
                  +"GROUP BY category_id",nativeQuery = true)
    int[][] getDisPriceCheck(@Param("userId") String userId);
    @Query(value = "SELECT * FROM payment WHERE user_id = :userId and TIMESTAMPDIFF(MONTH, PAYMENT_DATE ,NOW())=1", nativeQuery = true)
    List<PaymentVO> getPaymentToDay(@Param("userId") String userId);
}
