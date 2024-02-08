package com.shinhan.sbproject.repository;

import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.PetHistoryVO;

public interface PetHistoryRepository extends CrudRepository<PetHistoryVO, Integer>{
	
}
