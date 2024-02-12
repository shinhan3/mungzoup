package com.shinhan.sbproject.control;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.deeplearning4j.nn.modelimport.keras.KerasModelImport;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tensorflow.SavedModelBundle;
import org.tensorflow.Session;
import org.tensorflow.Tensor;
import org.tensorflow.TensorFlow;

import com.shinhan.sbproject.Service.TensorFlowService;
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
	
	static int ROW = 0;
	static int FEATURE = 0;

	@GetMapping("/sample5")
	public String f6() throws IOException{
		String data = "";
		
		System.out.println("TensorFlow version : "+TensorFlow.version());
		
		String filePath = "C:\\Users\\asme1\\git\\project3-1\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\control\\data\\test.csv";
		
		//get shape of data
		getDataSize(filePath);
		System.out.print("[number of row] ==> "+ ROW);
		System.out.println(" / [number of feature] ==> "+ FEATURE);
		float[][] testInput = new float[ROW][FEATURE];
		
		//insert csv data to matrix
		csvToMtrx(filePath, testInput);
		printMatrix(testInput);
		System.out.println("tttt");

		try(SavedModelBundle b = SavedModelBundle.load("C:\\Users\\asme1\\git\\project3-1\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\control\\tmp\\fromPython", "serve")){
			
			System.out.println("tttt");
			//create a session from the Bundle
			Session sess = b.session();
			
			//create an input Tensor
			Tensor x = Tensor.create(testInput);
			System.out.println("tttt");
			//run the model and get the result
			float[][] y = sess.runner()
					.feed("x", x)
					.fetch("h")
					.run()
					.get(0)
					.copyTo(new float[ROW][1]);
			
			//print out the result
			for(int i=0; i<y.length;i++)
				System.out.println("결과: "+y[i][0]);
		}

		return data;
	}

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
	
	public void getDataSize(String filePath) throws IOException {
		try {
			//read csv data file
			File csv = new File(filePath);
			BufferedReader br = new BufferedReader(new FileReader(csv));
			String line = "";
			String[] field = null;
			
			while((line=br.readLine())!=null) {
				field = line.split(",");
				ROW++;
			}
			
			FEATURE = field.length;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	public void printMatrix(float[][] mtrx) {
		System.out.println("============ARRAY VALUES============");
		for(int i=0; i<mtrx.length; i++) {
			if(i==0)
				System.out.print("[");
			else
				System.out.println();
			for(int j =0; j<mtrx[i].length; j++) {
				System.out.print("["+mtrx[i][j]+"]");
			}
		}
		System.out.println("]");
	}
	public void csvToMtrx(String filePath, float[][] mtrx) throws IOException {
		try {
			//read csv data file
			File csv = new File(filePath);
			BufferedReader br = new BufferedReader(new FileReader(csv));
			String line = "";
			String[] field = null;
			
			for(int i=0; i<mtrx.length; i++) {
				if((line=br.readLine())!= null) {
					field = line.split(",");
					for(int j=0; j<field.length; j++) {
						mtrx[i][j] = Float.parseFloat(field[j]);
					}
				}
			}
		}catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	
}
