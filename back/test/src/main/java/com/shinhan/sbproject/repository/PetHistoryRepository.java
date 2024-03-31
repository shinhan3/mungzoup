package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.PetHistoryVO;
import java.sql.Timestamp;


public interface PetHistoryRepository extends CrudRepository<PetHistoryVO, Integer>{
	
    @Query(value="SELECT DATE(INSERT_DAY) AS 'date', DAYNAME(INSERT_DAY) AS 'dayname', "+
    "ROUND(SUM(DISTANCE),2) AS 'distance', SUM(PET_TIME) AS 'walktime' "+
    "FROM pet_history "+
    "WHERE user_id = ?1 "+
    "GROUP BY DATE(INSERT_DAY), DAYNAME(INSERT_DAY) "+
    "ORDER BY DATE(INSERT_DAY)",nativeQuery = true)
    List<Object[]>selectPetInfo(String userId);


    @Query(value="SELECT DAYNAME(INSERT_DAY) AS 'dayname', SUM(PET_TIME) AS 'walktime', " +
    "ROUND(SUM(DISTANCE),2) AS 'distance', DATE(INSERT_DAY) AS 'date'"+
    "FROM pet_history "+
    "WHERE user_id= ?1 "+
    "AND INSERT_DAY BETWEEN ?2 AND ?3 "+
    "GROUP BY DATE(INSERT_DAY), DAYNAME(INSERT_DAY)",nativeQuery=true)
    List<Object[]> findByInsertDayBetween(String userId, Timestamp startTs, Timestamp endTs);
}
