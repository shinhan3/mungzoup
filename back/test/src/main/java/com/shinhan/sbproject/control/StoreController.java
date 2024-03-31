package com.shinhan.sbproject.control;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import com.shinhan.sbproject.VO.StoreVO;

import com.shinhan.sbproject.repository.StoreRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;



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

    @GetMapping("/storeListPay.do/{latitude}/{longitude}")
    List<Map<String, Object>> getStoreOrderPay(@PathVariable Double latitude, @PathVariable Double longitude) {
        Double userLng = longitude;
        Double userLat = latitude;
        return storeRepo.getStoreOrderPay(userLng,userLat);
    }
    
    @GetMapping("/storeSelectedList.do/{latitude}/{longitude}/{value}")
    List<Map<String, Object>> storeSelectedList(@PathVariable Double latitude, @PathVariable Double longitude,
     @PathVariable String value) {
        Double userLng = longitude;
        Double userLat = latitude;
        List<Map<String, Object>> a = storeRepo.getStoreOrderPay(userLng,userLat);

        if(value.equals("결제순")){
            a = storeRepo.getStoreOrderPay(userLng,userLat);
        }else if(value.equals("리뷰 개수순")){
            a = storeRepo.getStoreOrderReview(userLng,userLat);
        }else if(value.equals("게시글순")){
            a = storeRepo.getStoreOrderPostCnt(userLng, userLat);
        }else if(value.equals("거리순")){
            a = storeRepo.getStoreOrderDistance(userLng, userLat);
        }
        return a;
    }
}
