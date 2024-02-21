package com.shinhan.sbproject.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.shinhan.sbproject.VO.PetsVO;
import com.shinhan.sbproject.VO.testVO;
import com.shinhan.sbproject.repository.PetsRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class MyDaengController {

    @Autowired
    PetsRepository petsRepo;

    @GetMapping("/petList.do/{userId}")
    public List<PetsVO> getPetList(@PathVariable("userId") String userId) {
        List<PetsVO> petList = petsRepo.getPetsByUserId(userId);
        return petList;
    }
    

    @PostMapping("/addPetProfile.do")
    public ResponseEntity<String> addPetProfile(@RequestBody PetsVO newPet) {
        System.out.println("여기는왔나요.." + newPet);
        if (newPet.getUser() != null && newPet.getUser().getUserId() != null) {
            petsRepo.save(newPet);
            return ResponseEntity.ok("Pet information updated successfully");
        }
        System.out.println(newPet.toString());
        return ResponseEntity.badRequest().body("User information not found");
    }

    @GetMapping("/petProfile.do/{petId}")
    public PetsVO getPetProfile(@PathVariable("petId") Integer petId) {
        PetsVO petProfile = petsRepo.getPetsByPetId(petId);
        return petProfile;
    }

    @PutMapping("/updatePetProfile.do")
    public ResponseEntity<String> updatePetProfile(@RequestBody PetsVO updatedPet) {
        if (updatedPet.getPetId() == null) {
            return ResponseEntity.badRequest().body("Pet ID must not be null");
        }
    
        if (updatedPet.getUser() == null || updatedPet.getUser().getUserId() == null) {
            return ResponseEntity.badRequest().body("User information not found");
        }
    
        petsRepo.save(updatedPet);
        return ResponseEntity.ok("Pet information updated successfully");
    }

    @DeleteMapping("/deletePetProfile.do/{petId}")
    public void deletePetProfile(@PathVariable("petId") Integer petId){
        petsRepo.findById(petId).ifPresent(pet->{petsRepo.delete(pet);});
    }
    
    
}
