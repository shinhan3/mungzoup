package com.shinhan.sbproject.repository;

import org.springframework.data.repository.CrudRepository;


import com.shinhan.sbproject.VO.PetsVO;

public interface PetsRepository extends CrudRepository<PetsVO, Integer>{
	
}
