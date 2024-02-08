package com.shinhan.sbproject.repository;

import org.springframework.data.repository.CrudRepository;


import com.shinhan.sbproject.VO.CategoryVO;

public interface CategoryRepository extends CrudRepository<CategoryVO, Integer>{
	
}
