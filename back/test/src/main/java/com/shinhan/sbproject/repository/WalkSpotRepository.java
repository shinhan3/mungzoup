package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.UserVO;
import com.shinhan.sbproject.VO.WalkSpotVO;


public interface WalkSpotRepository extends CrudRepository<WalkSpotVO, Integer>{
	List<WalkSpotVO> findByUser(UserVO user);

}
