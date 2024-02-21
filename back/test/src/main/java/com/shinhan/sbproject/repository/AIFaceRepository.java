package com.shinhan.sbproject.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.AIFaceVO;

public interface AIFaceRepository extends CrudRepository<AIFaceVO, String>{
    AIFaceVO findByProtectionId(String protectionId);
	
    @Query(value = "SELECT * FROM AI_Face ORDER BY PROTECTION_ID LIMIT 1 OFFSET ?1", nativeQuery = true)
AIFaceVO findByIndex(int index);

}
