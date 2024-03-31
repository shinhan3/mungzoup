package com.shinhan.sbproject.control;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.CardVO;
import com.shinhan.sbproject.VO.UserVO;
import com.shinhan.sbproject.repository.CardRepository;
import com.shinhan.sbproject.repository.StoreRepository;
import com.shinhan.sbproject.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@RestController
public class CardController {
    @Autowired
    CardRepository cRepo;
    @Autowired
    UserRepository uRepo;

    @PostMapping("/insertCard.do/{userId}")
    public void selectArea(@RequestBody String CardPass, @PathVariable("userId") UserVO user) {
        Date dt = new Date();
        int year = Calendar.getInstance().get(Calendar.YEAR);
        int menth = Calendar.getInstance().get(Calendar.MONTH)+1;
        CardVO card = new CardVO().builder()
        .cardId("5566-"+randomNumber(4)+"-"+randomNumber(4)+"-"+randomNumber(4))
        .expiredYear(((year+5)+"").substring(2))
        .expiredMonth(menth+"")
        .cvc(randomNumber(3))
        .cardPassword(CardPass)
        .point(0)
        .build();

        log.info(card.toString());
        log.info(user.toString());
        CardVO newCard=cRepo.save(card);
        user.setCard(newCard);
        uRepo.save(user);
    }   

    public String randomNumber(int n){
        Random random = new Random();
        int randomNumber = random.nextInt((int) Math.pow(10, n));
        String result = String.format("%0"+n+"d", randomNumber);
        return result;
    }
}

