package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.PetHistoryVO;
import com.shinhan.sbproject.VO.UserVO;
import com.shinhan.sbproject.VO.WalkSpotVO;
import com.shinhan.sbproject.repository.PetHistoryRepository;
import com.shinhan.sbproject.repository.WalkSpotRepository;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Slf4j
@RestController
public class WalkSpotController {
    @Autowired
    WalkSpotRepository walkRep;

    @Autowired
    PetHistoryRepository petHistoryRep;

    @PostMapping("/insertWalkSpot.do")
    public void insertWalkSpot(@RequestBody WalkSpotVO walk) {
        walkRep.save(walk);
        log.info(walk.toString());
    }

    @GetMapping("/selectWalkSpotAll.do/{userId}")
    public List<WalkSpotVO> seleteWalkSpot(@PathVariable String userId) {
        UserVO user = UserVO.builder().userId(userId).build();
        return walkRep.findByUser(user);
    }
    
    @DeleteMapping("deleteWalkSpot.do/{spotId}")
    public void deleteWalkSpot(@PathVariable Integer spotId){
        walkRep.findById(spotId).ifPresent(spot->{walkRep.delete(spot);});
    }

    @PostMapping("/insertPetHistory.do")
     public void postMethodName(@RequestBody PetHistoryVO petHistory) {
        petHistoryRep.save(petHistory);
        log.info(petHistory.toString());
    }
    
        @GetMapping("/selectPetHistory.do/{userId}")
    public List<Object[]> seletePetHistory(@PathVariable String userId) {
        return petHistoryRep.selectPetInfo(userId);
    }
}
