package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.StoreVO;

public interface StoreRepository extends CrudRepository<StoreVO, Integer>{
	@Query("select s from StoreVO s where s.storeId between 0 and 8")
    List<StoreVO> selectAll5();

    @Query("select s.storeName, s.storeAddress, c.categoryId, c.image " + 
                "from StoreVO s inner join CategoryVO c on s.category = c " + 
                "where s.storeId = ?1")
    List<Object[]> selectNameAndAddress(Integer storeId);

	@Query("select storeName from StoreVO where storeAddress like %?1%")
    String selectByStoreAddress(String address);

    @Query(value = "SELECT c.category_name, s.STORE_NAME, s.STORE_ADDRESS, s.OPEN_TIME, s.CLOSED_DAYS, c.IMAGE, s.STORE_LATITUDE, s.STORE_LONGITUDE " +
            "FROM store s JOIN category c ON s.category_id = c.CATEGORY_ID " +
            "WHERE STORE_ADDRESS LIKE %?1%", nativeQuery = true)
    List<Object[]> selectArea(String pickingArea);

}
