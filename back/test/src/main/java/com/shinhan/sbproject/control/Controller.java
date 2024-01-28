package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.testVO;
import com.shinhan.sbproject.repository.testRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Slf4j
@RestController
public class Controller {
    @Autowired
    testRepository testRep;

    @GetMapping("/getTest.do")
    public List<testVO> f1() {
        return (List<testVO>) testRep.findAll();
    }
    
    @PostMapping("/insertTest.do")
    public List<testVO> f2(@RequestBody testVO test) {
        log.info(test.toString());
        testRep.save(test);
        // List<testVO> newList = (List<testVO>) testRep.findAll();
        return f1();
    }
    
    @PutMapping("/updateTest.do")
    public List<testVO> f3(@RequestBody testVO test) {
        System.out.println(test.toString());
        testRep.save(test);
        return (List<testVO>) testRep.findAll();
    }
    @DeleteMapping("/delete.do/{seq}")
    public List<testVO> f4(@PathVariable Integer seq){
        testRep.deleteById(seq);
        return (List<testVO>) testRep.findAll();
    }
}
