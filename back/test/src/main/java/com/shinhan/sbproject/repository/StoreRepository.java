package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.StoreVO;

public interface StoreRepository extends CrudRepository<StoreVO, Integer>{
	@Query("select s from StoreVO s where s.storeId between 7 and 11")
    List<StoreVO> selectAll5();

    @Query("select s.storeName, s.storeAddress, c.categoryId, c.image " + 
                "from StoreVO s inner join CategoryVO c on s.category = c " + 
                "where s.storeId = ?1")
    List<Object[]> selectNameAndAddress(Integer storeId);

	@Query("select storeName from StoreVO where storeAddress like %?1%")
    String selectByStoreAddress(String address);
}
