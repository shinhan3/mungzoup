package com.shinhan.sbproject.control;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.tensorflow.SavedModelBundle;
import org.tensorflow.Session;
import org.tensorflow.Tensor;

import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;

import com.shinhan.sbproject.VO.PetHealthVO;
import com.shinhan.sbproject.VO.PetsVO;
import com.shinhan.sbproject.repository.PetHealthRepository;
import com.shinhan.sbproject.repository.PetsRepository;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@Slf4j
@RestController
public class DogSkinDiseaseController {

    @Autowired
    PetHealthRepository petHealthRepo;

    @Autowired
    PetsRepository petsRepo;

    @Value("${model.path}")
    String modelPath;

    @GetMapping("/dogCountList.do/{userId}")
    public Map<String,Object> DisplayDogCount(@PathVariable String userId) {
        List<Object[]> countList = petHealthRepo.dogCountList(userId);
        Map<String,Object> map = new HashMap<>();
        map.put("health",countList.get(0)[0]);
        map.put("unhealth", countList.get(0)[1]);
        return map;
    }

    @GetMapping("/dogSkinDiseaseList.do/{userId}")
    public Map<String,Object> displayDogSkinDisease(@PathVariable String userId) {
        List<Object[]> dogList = petHealthRepo.dogSkinDiseaseList(userId);
        List<Object[]> healthList = dogList.stream().filter(d -> ((String)d[1]).equals("무증상")).collect(Collectors.toList());
        List<Object[]> unhealthList = dogList.stream().filter(d -> !((String)d[1]).equals("무증상")).collect(Collectors.toList());
        
        // for (Object[] dog: unhealthList){
        //     log.info((String)dog[0]);
        //     log.info((String)dog[1]);
        // }

        Map<String,Object> map = new HashMap<>();
        map.put("healthList", healthList);
        map.put("unhealthList", unhealthList);

        return map;
    }
    
    @GetMapping("/dogConfirm.do")
    public int isDogConfirm(@RequestParam String userId, @RequestParam String dname) {
        return petHealthRepo.dogConfirm(userId, dname);
    }

    @Transactional
    @PostMapping(value="/inspectSkin.do")
    public String inspectSkinDisease(@RequestParam("imageFile") MultipartFile imageFile, @RequestParam("dname") String dname, @RequestParam("userId") String userId) throws IOException {

        //실제로 받아오는 코드
		 BufferedImage imageRgb = convertBytesToRGBImage(imageFile.getBytes());
         int w = imageRgb.getWidth();
		 int h = imageRgb.getHeight();
		//  System.out.println("Image width: " + w);
		//  System.out.println("Image height: " + h);

        int[] dataBuffInt = imageRgb.getRGB(0, 0, 32, 32, null, 0, 32); 
		//System.out.println(dataBuffInt.length);

        //[이미지개수][32][32][rgb] 형태로 넣어줌
		float[][][][] input= rgbImageToArray(32,32,dataBuffInt);
		//System.out.println(input[0].length);

        try(SavedModelBundle b = SavedModelBundle.load(modelPath+"/skin", "serve")){
            //default가 서브, 도커에 생긴 abcd를 컨트롤러 아래로 복붙

            //create a session from the Bundle
			Session sess = b.session();
            //create an input Tensor
			Tensor x = Tensor.create(input); //tensor 데이터 타입으로 바꿔줌(파이썬은 명시해 주지 않아도 되는데 자바는 명시해줘야 한다.)

            //run the model and get the result
			float[][] y = sess.runner()
            .feed("conv2d_input", x) //model에 다이렉트로 입력값을 넣어준다, input name (cmd참고)
            .fetch("dense_2/Softmax") //output name (cmd참고)
            .run()
            .get(0) //몇 번째 요소 받아올지, 어차피 데이터 하나라 0
            .copyTo(new float[1][7]); //class 7개, 입력 1개라 다음과 같이 선언함. 
                                      //참고) float[1][2] => [[],[]]

            //print out the result
			int maxIndex = 0;
			float maxVal = y[0][0];
            for(int i=0; i<7; i++){
                  //System.out.println("결과: " + y[0][i]); //7classification : 출력
					if(y[0][i] > maxVal) {
						maxVal = y[0][i];
						maxIndex = i;
					}
				}
            //참고) [[1],[0]] -> robot, [[0],[1]] -> others이라면
            //      y[0][1] = 1은 others, y[0][0] = 1은 robot이다.

            //System.out.println(Arrays.deepToString(y));
			//System.out.println("가장 큰 값의 인덱스: " + maxIndex);

            List<String> diseaseList = Arrays.asList("구진/플라크","비듬/각질/상피성잔고리","태선화/과다색소침착","농포/여드름","미란/궤양","결절/종괴","무증상");
            //log.info(diseaseList.get(maxIndex));

            //검사내역이 있으면 update 없으면 insert 
            List<Integer[]> dogInfo = petHealthRepo.checkPetHealth(userId, dname);
            int dogId = 0;
            int isSkinDisease = 0;
            String disease = diseaseList.get(maxIndex);

            for (Integer[] dog: dogInfo){
                dogId = dog[0];
                isSkinDisease = dog[1];
            }

            if(isSkinDisease>0){
                petHealthRepo.updatePetHealth(dogId, disease);
            }else{
                PetsVO pet = new PetsVO();
                pet.setPetId(dogId);
                PetHealthVO petHealth = PetHealthVO.builder()
                                        .pet(pet)
                                        .disease(disease)
                                        .build();
                petHealthRepo.save(petHealth);
            }

            return disease;
        
         }catch(Exception e){log.info("data is null");};
        
        return "에러";
    }

    public float[][][][] rgbImageToArray(int w, int h, int[] dataBuffInt){
        float[][][][] result = new float[1][w][h][3];
        for(int i=0; i<h;i++){
           for(int j=0; j<w;j++){    
              int pixel = dataBuffInt[i * w + j];
              int red = (pixel >> 16) & 0xFF;
              int green = (pixel >> 8) & 0xFF;
              int blue = pixel & 0xFF;
              result[0][i][j][0] = blue;
              result[0][i][j][1] = green;
              result[0][i][j][2] = red;
    
           }
        }
        return result;
     }

    public BufferedImage convertBytesToRGBImage(byte[] bytes) throws IOException {

        // Read the byte array into a BufferedImage
		ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
		BufferedImage bufferedImage = ImageIO.read(bis);

        // Resize the image to 32x32
		Image scaledImage = bufferedImage.getScaledInstance(32, 32, Image.SCALE_SMOOTH);

        // Convert the scaled image back to a BufferedImage
		BufferedImage resizedImage = new BufferedImage(32, 32, BufferedImage.TYPE_INT_RGB);
		Graphics2D g2d = resizedImage.createGraphics();
		g2d.drawImage(scaledImage, 0, 0, null);
		g2d.dispose();

		return resizedImage;
    }

}
