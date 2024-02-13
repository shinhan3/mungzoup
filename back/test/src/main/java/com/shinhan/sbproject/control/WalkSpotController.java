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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Slf4j
@RestController
public class WalkSpotController {
    @Autowired
    WalkSpotRepository walkRep;
    PetHistoryRepository petHistoryRep;

    @PostMapping("/insertWalkSpot.do")
    public void f1(@RequestBody WalkSpotVO walk) {
        walkRep.save(walk);
        log.info(walk.toString());
    }

    @GetMapping("/selectWalkSpotAll.do/{userId}")
    public List<WalkSpotVO> f1(@PathVariable String userId) {
        System.out.println("유저아이디체킹"+userId);
        UserVO user = UserVO.builder().userId(userId).build();
        return walkRep.findByUser(user);
    }

    @PostMapping("/insertPetHistory.do/{spotId},{userId}")
    public void postMethodName(@PathVariable String userId, @PathVariable String spotId) {
        PetHistoryVO phVO =  PetHistoryVO.builder()
        .petTime()
        .distance()
        .startLatitude()
        .startLongitude()
        .build();
    }
    
}
