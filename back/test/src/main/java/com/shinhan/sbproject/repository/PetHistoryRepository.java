package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.PetHistoryVO;

public interface PetHistoryRepository extends CrudRepository<PetHistoryVO, Integer>{
	
    @Query(value="SELECT DATE(INSERT_DAY) AS '날짜', DAYNAME(INSERT_DAY) AS '요일', "+
    "ROUND(SUM(DISTANCE),2) AS '거리', SUM(PET_TIME) AS '산책시간' "+
    "FROM pet_history "+
    "WHERE user_id = ?1 "+
    "GROUP BY DATE(INSERT_DAY), DAYNAME(INSERT_DAY) "+
    "ORDER BY DATE(INSERT_DAY)",nativeQuery = true)
    List<Object[]>selectPetInfo(String userId);

}
