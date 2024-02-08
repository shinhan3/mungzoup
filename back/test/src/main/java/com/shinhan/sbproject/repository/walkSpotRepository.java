package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.userVO;
import com.shinhan.sbproject.VO.walkSpotVO;

public interface walkSpotRepository extends CrudRepository<walkSpotVO, Integer>{
	List<walkSpotVO> findByUser(userVO user);
}
