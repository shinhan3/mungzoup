package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.PetHistoryVO;
import com.shinhan.sbproject.VO.UserVO;
import com.shinhan.sbproject.VO.WalkSpotVO;
import com.shinhan.sbproject.repository.PetHistoryRepository;
import com.shinhan.sbproject.repository.WalkSpotRepository;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.util.List;

import org.apache.commons.net.ntp.TimeStamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
@RestController
public class WalkSpotController {
    @Autowired
    WalkSpotRepository walkRep;

    @Autowired
    PetHistoryRepository petHistoryRep;

    @PostMapping("/insertWalkSpot.do")
    public String insertWalkSpot(@RequestBody WalkSpotVO walk) {
        walk=walkRep.save(walk);
        log.info(walk.toString());
        return walk.getSpotId()+"";
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

    @GetMapping("/seletedPetInfo.do")
    public List<Object[]> seletedPetInfo(@RequestParam String date){
        String startDay = date.concat(" 00:00:00");
        String endDay = date.concat(" 23:59:59");
        Timestamp startTs = Timestamp.valueOf(startDay);
        Timestamp endTs = Timestamp.valueOf(endDay);
        String userId = "user1";
        return petHistoryRep.findByInsertDayBetween(userId, startTs, endTs);
    }
}
