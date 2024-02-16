package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.testVO;
import com.shinhan.sbproject.VO.PetsVO;
import com.shinhan.sbproject.VO.WalkSpotVO;
import com.shinhan.sbproject.repository.PetsRepository;
import com.shinhan.sbproject.repository.testRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Slf4j
@RestController
public class PetMapController {
    @Autowired
    PetsRepository petRep;

    @GetMapping("/getPetMap.do/{userId}")
    public List<PetsVO> f1(@PathVariable("userId") String userId) {
        return (List<PetsVO>)petRep.getPets(userId) ;
    }
    
}
