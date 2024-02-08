package com.shinhan.sbproject.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.shinhan.sbproject.VO.StoreVO;

import com.shinhan.sbproject.repository.StoreRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class StoreController {

    @Autowired
    StoreRepository storeRepo;

    @GetMapping("/storeList.do")
    public List<StoreVO> getStoreList(){
        List<StoreVO> slist = storeRepo.selectAll5();
        return slist;
    }
}
