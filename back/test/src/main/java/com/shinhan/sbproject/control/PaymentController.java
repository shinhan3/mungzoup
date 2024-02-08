package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.userVO;
import com.shinhan.sbproject.repository.BenefitRepository;
import com.shinhan.sbproject.repository.PaymentRepository;
import com.shinhan.sbproject.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Slf4j
@RestController
public class PaymentController {
    @Autowired
    PaymentRepository paymentRep;

    @Autowired
    UserRepository userRep;

    @GetMapping("/getUserNameAndDiscountPrice.do/{user}")
    public List<String[]> getUserNameAndDiscountPrice(@PathVariable String user) {
        List<String[]> result = (List<String[]>) paymentRep.getUserNameAndDiscountPrice(user);
        log.info(result.size()+"");
        if(result.size()==0){
            userVO userValue = (userVO) userRep.findById(user).orElse(null);
            String arr[] = new String[2];
            arr[0] = userValue.getUserName();
            arr[1] = "0";
            result.add(arr);
        }
        return result;
    }
}
