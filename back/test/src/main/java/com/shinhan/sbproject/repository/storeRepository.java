package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.storeVO;

public interface storeRepository extends CrudRepository<storeVO, Integer>{
	@Query("select s from storeVO s where s.STORE_ID between 7 and 11")
    List<storeVO> selectAll5();

  @Query("select s.STORE_NAME, s.STORE_ADDRESS, c.CATEGORY_ID, c.IMAGE " + 
                "from storeVO s inner join categoryVO c on s.category = c " + 
                "where s.STORE_ID = ?1")
    List<Object[]> selectNameAndAddress(Integer storeId);
	@Query("select store_name from store where store_address like %?1%")
    String selectByStoreAddress(String address);
}
