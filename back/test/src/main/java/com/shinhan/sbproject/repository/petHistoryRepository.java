package com.shinhan.sbproject.repository;

import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.petHistoryVO;

public interface petHistoryRepository extends CrudRepository<petHistoryVO, Integer>{
	
}
