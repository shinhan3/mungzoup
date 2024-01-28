package com.shinhan.sbproject.control;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shinhan.sbproject.VO.testVO;
import com.shinhan.sbproject.repository.testRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Slf4j
@RestController
// @CrossOrigin 
public class SamplRestController {
	@Autowired
	testRepository testepo;
	
	@GetMapping(value =  "/sample1" )
	public List<testVO> f1() {
		List<testVO> test = new ArrayList<testVO>();
		testepo.findAll().forEach(t->{
			test.add(t);
		});
		
		return test;
	}
	
	@PostMapping("/input")
	public List<testVO> f2(@RequestBody testVO test) {
		log.info(test.toString());
		testepo.save(test);
		return (List<testVO>)testepo.findAll();
	}
	@PutMapping("/update")
	public List<testVO> f3(@RequestBody testVO test) {
		
		log.info(test.toString());
		testepo.save(test);

		return (List<testVO>)testepo.findAll();
	}
	@DeleteMapping("/delete/{oishiku}")
	public List<testVO> f4(@PathVariable Integer oishiku){
		log.info(oishiku+"");
		testepo.deleteById(oishiku);
		return (List<testVO>)testepo.findAll();
	}
	
	
}
