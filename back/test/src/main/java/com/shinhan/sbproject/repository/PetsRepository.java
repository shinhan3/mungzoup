package com.shinhan.sbproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.shinhan.sbproject.VO.PetsVO;

public interface PetsRepository extends CrudRepository<PetsVO, Integer>{
	@Query(value = "SELECT * FROM pets "
    +"WHERE USER_ID = :userId AND PET_LATITUDE IS NOT NULL AND PET_LONGITUDE IS NOT NULL", nativeQuery = true)
    List<PetsVO> getPets(@Param("userId") String userId);
    @Query("select p from PetsVO p where p.user.userId = :userId")
    List<PetsVO> getPetsByUserId(@Param("userId") String userId);
	
    @Query("select p from PetsVO p where p.petId = :petId")
    PetsVO getPetsByPetId(@Param("petId") Integer petId);
}
