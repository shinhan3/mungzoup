package com.shinhan.sbproject.repository;

import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.AIVoiceVO;
import com.shinhan.sbproject.VO.CreditVO;

public interface CreditRepository extends CrudRepository<CreditVO, Integer>{
	
}
