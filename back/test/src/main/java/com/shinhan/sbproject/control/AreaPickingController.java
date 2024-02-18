package com.shinhan.sbproject.control;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.shinhan.sbproject.repository.StoreRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@RestController
public class AreaPickingController {
    @Autowired
    StoreRepository sRepo; 
 
    @GetMapping("/areaPicking.do/{pickingArea}")
    public List<Object[]> selectArea(@PathVariable String pickingArea) {
        System.out.println("picking area: " + pickingArea);
        return sRepo.selectArea(pickingArea);
    }   
}

