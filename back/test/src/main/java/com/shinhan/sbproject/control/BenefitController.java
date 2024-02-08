package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.repository.BenefitRepository;
import com.shinhan.sbproject.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@Slf4j
@RestController
public class BenefitController {
    @Autowired
    BenefitRepository benefitRep;

    @GetMapping("/getbenefitPre.do")
    public List<String[]> f1() { 
        return (List<String[]>) benefitRep.getbenefitPre("asme12");
    }
}
