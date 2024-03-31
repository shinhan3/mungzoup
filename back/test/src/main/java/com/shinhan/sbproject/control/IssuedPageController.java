package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


@Slf4j
@RestController
public class IssuedPageController {
    @Autowired
    UserRepository userRep;
    // get 방식은 RequestBody 사용불가
    @GetMapping("/getIssuedPageData.do/{user}")
    public List<String[]> f1(@PathVariable String user) {
        log.info(user.toString()); 
        return (List<String[]>) userRep.IssuedPageData(user);
    }
}
