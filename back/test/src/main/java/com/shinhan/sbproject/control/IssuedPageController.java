package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.repository.userRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;


@Slf4j
@RestController
public class IssuedPageController {
    @Autowired
    userRepository userRep;

    @GetMapping("/getIssuedPageData.do")
    public List<String[]> f1() {
        return (List<String[]>) userRep.IssuedPageData("asme12");
    }
}
