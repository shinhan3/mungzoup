package com.shinhan.sbproject.control;

import java.io.File;
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
	
	@GetMapping("/sample5")
	public String f6(){
		String data = "";
		File h5File = new File("C:\\Users\\asme1\\git\\project3-1\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\control\\updated_model_test1.h5");
		System.out.println(h5File.getAbsolutePath());
		try {
            // h5 파일을 로드하여 MultiLayerNetwork 객체로 변환
            MultiLayerNetwork model = KerasModelImport.importKerasSequentialModelAndWeights(h5File.getAbsolutePath());
            
            // 모델을 사용하여 무언가를 수행하거나 예측을 수행할 수 있습니다.
            // 예: model.predict(input);
            
            System.out.println("모델을 성공적으로 로드했습니다.");
        } catch (Exception e) {
            System.err.println("모델을 로드하는 중 오류가 발생했습니다:");
            e.printStackTrace();
        }

		return data;
	}
	@GetMapping("/sample4")
	public String f5(){
		System.out.println(TensorFlow.version());
		String data = "";
		
		TensorFlowService tensor = new TensorFlowService();
		// tensor.loadModel();
		System.out.println("b =========");
		double[] input = {
					0.024607861004964433,0.020642437620128296,0.013267491324965762,0.006374325441045003,0.0021865418664049723,0.00022236018980389545,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0002965611727244366,0.002298349109143865,0.005634662332094636,0.01275213054105628,0.013827164801784862,0.014753918474826743,0.01564360200094695,0.017756600375482438,0.01345646333256811,0.007043327915118295,0.003002681900655694,0.0012233148484152828,0.0001112104407650257,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.00014819559225727266,0.001852444964240819,0.0035566943313423724,0.007224535360539195,0.010521887396887851,0.017561178261002963,0.010003202806900422
				};
		float[] input_float = new float[48];
		for(int i =0;i<input.length;i++){
			input_float[i]=(float)input[i];
		}
		float[] result = tensor.predict(input_float);
		// System.out.println(Arrays.toString(result));

		

		// try(SavedModelBundle b = SavedModelBundle.load("C:\\Users\\asme1\\git\\project3-1\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\control\\aaa\\mobilenet\\1", "serve")){
		// 	System.out.println("tryaaaa");
		// 	Session sess =b.session();
		// 	Double[] input = {
		// 		0.024607861004964433,0.020642437620128296,0.013267491324965762,0.006374325441045003,0.0021865418664049723,0.00022236018980389545,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0002965611727244366,0.002298349109143865,0.005634662332094636,0.01275213054105628,0.013827164801784862,0.014753918474826743,0.01564360200094695,0.017756600375482438,0.01345646333256811,0.007043327915118295,0.003002681900655694,0.0012233148484152828,0.0001112104407650257,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.00014819559225727266,0.001852444964240819,0.0035566943313423724,0.007224535360539195,0.010521887396887851,0.017561178261002963,0.010003202806900422
		// 	};

		// 	Tensor x = Tensor.create(input);
		// 	Double[][] y = sess.runner().feed("x", x).fetch("h").run().get(0).copyTo(new Double[48][1]);
		// 	data = y.toString();
		// 	System.out.println(data);
		// }
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
	
	
	
}
