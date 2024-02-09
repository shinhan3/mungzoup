package com.shinhan.sbproject.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.shinhan.sbproject.VO.CardVO;

public interface CardRepository extends CrudRepository<CardVO, String>{
    @Query(value = "select card.* from user join card using(card_id) where user_id = :userId", nativeQuery = true)
    CardVO getCardByUserId(@Param("userId") String userId);
}
