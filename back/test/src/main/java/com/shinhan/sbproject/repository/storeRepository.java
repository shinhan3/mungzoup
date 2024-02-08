package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.storeVO;

public interface storeRepository extends CrudRepository<storeVO, Integer>{
	@Query("select store_name from store where store_address like %?1%")
    String selectByStoreAddress(String address);
}
