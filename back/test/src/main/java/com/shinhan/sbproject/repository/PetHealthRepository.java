package com.shinhan.sbproject.repository;

import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.PetHealthVO;
import com.shinhan.sbproject.VO.PetsVO;

public interface PetHealthRepository extends CrudRepository<PetHealthVO, Integer>{
	
}
