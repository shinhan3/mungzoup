package com.shinhan.sbproject.control;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.shinhan.sbproject.VO.test2VO;
import com.shinhan.sbproject.VO.testVO;
import com.shinhan.sbproject.repository.test2Repository;
import com.shinhan.sbproject.repository.testRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class SamplRestController2 {
	@Autowired
	testRepository testepo;
	@Autowired
	test2Repository test2epo;
	
	@GetMapping("/sample2")
	public void sample2(Model model) {
		model.addAttribute("greeting","하이~");

		log.info("요기옴");//충돌테스트  파란새
		model.addAttribute("test", testepo.findAll());
		log.info("나감");
		
	}
	@GetMapping("/insertTest")
	public String insertTest(Model model,String content) {
		testVO test = testVO.builder().content(content).build();
		testepo.save(test);
		return "redirect:/sample2";
	}
	
	@GetMapping("/sample3") //재호가 다녀감
	public void sample3(Model model) {
		model.addAttribute("greeting","하이~");
		
		log.info("요기옴");
		model.addAttribute("test", test2epo.findAll());
		log.info("나감");
		
	}
	@GetMapping("/insertTest2")
	public String insert2Test(Model model,String title,String name) {
		test2VO test = test2VO.builder().title(title).name(name).build();
		log.info(test.toString());
		test2epo.save(test);
		return "redirect:/sample3";
	}
	
}
