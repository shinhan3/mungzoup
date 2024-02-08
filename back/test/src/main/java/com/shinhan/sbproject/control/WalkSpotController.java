package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.userVO;
import com.shinhan.sbproject.VO.walkSpotVO;
import com.shinhan.sbproject.repository.walkSpotRepository;
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
    walkSpotRepository walkRep;

    @PostMapping("/insertWalkSpot.do")
    public void f1(@RequestBody walkSpotVO walk) {
        walkRep.save(walk);
        log.info(walk.toString());
    }

    @GetMapping("/selectWalkSpotAll.do/{userId}")
    public List<walkSpotVO> f1(@PathVariable String userId) {
        System.out.println("유저아이디체킹"+userId);
        userVO user = userVO.builder().userId(userId).build();
        return walkRep.findByUser(user);
    }
}
