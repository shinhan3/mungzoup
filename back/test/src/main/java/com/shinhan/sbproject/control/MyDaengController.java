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

    String userId = "asme12"; 

    @GetMapping("/petList.do")
    public List<PetsVO> getPetList() {
        List<PetsVO> petList = petsRepo.getPetsByUserId(userId);
        return petList;
    }
    

    @PostMapping("/addPetProfile.do")
    public ResponseEntity<String> addPetProfile(@RequestBody PetsVO pet) {
        System.out.println("여기는왔나요.." + pet);
        if (pet.getUser() != null && pet.getUser().getUserId() != null) {
            petsRepo.save(pet);
            return ResponseEntity.ok("Pet information updated successfully");
        }
        return ResponseEntity.badRequest().body("User information not found");
    }

    @GetMapping("/petProfile.do")
    public PetsVO getPetProfile(Integer petId) {
        PetsVO petProfile = petsRepo.getPetsByPetId(petId);
        return petProfile;
    }
    // @PostMapping("/updatePetProfile.do")
    // public ResponseEntity<String> updatePetProfile(@RequestBody PetsVO pet) {
    //     System.out.println("여기는왔나요.." + pet);
    //     if (pet.getUser() != null && pet.getUser().getUserId() != null) {
    //         petsRepo.save(pet);
    //         return ResponseEntity.ok("Pet information updated successfully");
    //     }
    //     return ResponseEntity.badRequest().body("User information not found");
    // }

    //    @PutMapping("/updateTest.do")
    // public List<testVO> f3(@RequestBody testVO test) {
    //     System.out.println(test.toString());
    //     petsRepo.save(test);
    //     return (List<testVO>) testRep.findAll();
    // }
    // @DeleteMapping("/delete.do/{seq}")
    // public List<testVO> f4(@PathVariable Integer seq){
    //     petsRepo.deleteById(seq);
    //     return (List<testVO>) petsRepo.findAll();
    // }
    
    
    
}
