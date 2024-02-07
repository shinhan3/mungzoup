package com.shinhan.sbproject.repository;

import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.petHealthVO;
import com.shinhan.sbproject.VO.petsVO;

public interface petHealthRepository extends CrudRepository<petHealthVO, Integer>{
	
}
