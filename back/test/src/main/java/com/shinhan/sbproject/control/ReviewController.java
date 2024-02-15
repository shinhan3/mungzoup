package com.shinhan.sbproject.control;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.PaymentVO;
import com.shinhan.sbproject.VO.RatingCategoryVO;
import com.shinhan.sbproject.VO.StoreVO;
import com.shinhan.sbproject.VO.UserVO;
import com.shinhan.sbproject.repository.PaymentRepository;
import com.shinhan.sbproject.repository.RatingCategoryRepository;
import com.shinhan.sbproject.repository.StoreRepository;
import com.shinhan.sbproject.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Slf4j
@RestController
public class ReviewController {

    @Autowired
    StoreRepository storeRepo;

    @Autowired
    RatingCategoryRepository reviewRepo;

    @Autowired
    UserRepository userRepo;

    @Autowired
    PaymentRepository payRepo;

    @GetMapping("/reviewAll.do")
    public List<RatingCategoryVO> reviewAll(){
        return reviewRepo.selectAll();
    }

@PostMapping("/insertReview.do")
public void insertReview(@RequestBody Map<String,Object> data) {
    String userId = "asme12";
    int storeId = (Integer)data.get("storeId");
    int reviewId = (Integer)data.get("reviewId");
    String strPrice = (String)data.get("ocrPrice");
    //가격문자열에 콤마 여부 따져서 ""으로 대체해주기
    if(strPrice.contains(",")){
        strPrice = strPrice.replace(",", "");
    }
    int price = Integer.parseInt(strPrice);

    StoreVO store = new StoreVO();
    store.setStoreId(storeId);
    UserVO user = new UserVO();
    user.setUserId(userId);
    RatingCategoryVO review = new RatingCategoryVO();
    review.setRatingCategoryId(reviewId);

    //payment테이블에 데이터 삽입
    PaymentVO payment = PaymentVO.builder()
                                .store(store)
                                .user(user)
                                .price(price)
                                .ratingCategory(review)
                                .build();
    
    payRepo.save(payment);
}


    @GetMapping("/review.do/{storeId}")
    public Map<String, Object> displayStoreAndReview(@PathVariable("storeId")Integer storeId){
        Map<String, Object> map = new HashMap<>(); //가게정보 + 가게리뷰
        List<Object[]> storeInfoList = storeRepo.selectNameAndAddress(storeId); //가게정보
        List<Object[]> reviewInfoList = reviewRepo.selectContnetAndCount(storeId); //가게리뷰
        
        //배열로 받은 가게정보 키,값 부여
        Map<String, Object> storeInfo = new HashMap<>();
        storeInfo.put("storeName", storeInfoList.get(0)[0]);
        storeInfo.put("storeAddress", storeInfoList.get(0)[1]);
        storeInfo.put("categoryId", storeInfoList.get(0)[2]);
        storeInfo.put("imagePath", storeInfoList.get(0)[3]);

        //배열로 받은 가게리뷰 총 개수 도출 및 키,값 부여
        Integer totalCount = 0;
        List<Map<String,Object>> reviewInfo = new ArrayList<>();
        for (Object[] review : reviewInfoList){
            Map<String, Object> reviewMap = new HashMap<>();
            reviewMap.put("reviewContent", review[0]);
            Long count = (Long)review[1];
            reviewMap.put("count", count.intValue());
            reviewMap.put("imagePath", review[2]);
            reviewInfo.add(reviewMap);
            totalCount += count.intValue();
        }


        map.put("storeInfo",storeInfo);
        map.put("reviewInfo",reviewInfo);
        map.put("totalCount", totalCount);
        //log.info("가게이름"+storeInfo.get(0)[0]);
        //log.info("리뷰정보"+reviewInfo.get(0)[0]+ reviewInfo.get(0)[1]);
        //log.info("리뷰정보"+reviewInfo.get(1)[0]+ reviewInfo.get(1)[1]);
        return map;
    }
}