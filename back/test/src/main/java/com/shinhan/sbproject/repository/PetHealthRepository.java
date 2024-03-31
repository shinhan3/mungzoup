package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shinhan.sbproject.VO.PetHealthVO;

public interface PetHealthRepository extends CrudRepository<PetHealthVO, Integer>{
	
    @Query(value="SELECT COUNT(CASE WHEN ph.DISEASE = '무증상' THEN 1 END) HEALTH, COUNT(CASE WHEN ph.DISEASE != '무증상' THEN 1 END) UNHEALTH " + 
                "FROM pets p INNER JOIN pet_health ph ON (p.PET_ID=ph.PET_ID) WHERE user_id = ?1", nativeQuery = true)
    List<Object[]> dogCountList(String userId);

    @Query(value="SELECT p.NAME, ph.DISEASE " + 
                "FROM pets p INNER JOIN pet_health ph ON (p.PET_ID = ph.PET_ID) " + 
                "WHERE user_id = ?1", nativeQuery = true)
    List<Object[]> dogSkinDiseaseList(String userId);

    @Query(value="SELECT COUNT(pet_id) FROM pets WHERE user_id = ?1 AND NAME = ?2", nativeQuery = true)
    int dogConfirm(String userId, String dname);

    @Query(value="SELECT p.PET_ID ,COUNT(ph.PET_ID) FROM pets p LEFT OUTER JOIN pet_health ph ON (p.PET_ID = ph.PET_ID) " + 
                "WHERE p.USER_ID = ?1 AND p.NAME = ?2", nativeQuery = true)
    List<Integer[]> checkPetHealth(String userId, String dname);

    @Modifying
    @Query(value="UPDATE pet_health SET DISEASE = ?2 WHERE pet_id = ?1", nativeQuery = true)
    void updatePetHealth(int dogId, String disease);
}
