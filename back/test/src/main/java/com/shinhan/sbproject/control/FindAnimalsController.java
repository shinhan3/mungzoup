package com.shinhan.sbproject.control;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.tensorflow.SavedModelBundle;
import org.tensorflow.Session;
import org.tensorflow.Tensor;

import com.shinhan.sbproject.VO.AIFaceVO;
import com.shinhan.sbproject.repository.AIFaceRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class FindAnimalsController {


	@Value("${model.path}")
	String modelPath;

   @Autowired
   AIFaceRepository aiRepo;

    static int ROW = 0;
	 static int FEATURE = 0;
    @PostMapping("/findAnimals")
     public Map<String, Object> imageTest(MultipartFile imageFile) throws IOException {
      if(imageFile != null){
         //실제로 받아오는 코드
		 BufferedImage imageRgb=convertBytesToRGBImage(imageFile.getBytes());

         int w = imageRgb.getWidth();
		 int h = imageRgb.getHeight();
         int[] dataBuffInt = imageRgb.getRGB(0, 0, 32, 32, null, 0, 32); 
		System.out.println(dataBuffInt.length);

         //[개수][32][32][rgb] 형태로 넣어줌
		float[][][][] input= rgbImageToArray(32,32,dataBuffInt);
         try(SavedModelBundle b = SavedModelBundle.load(modelPath+"/abcde", "serve")){ 
				//default가 서브, 도커에 생긴 abcd를 컨트롤러 아래로 복붙
				
				//create a session from the Bundle
				Session sess = b.session();
				
				//create an input Tensor
				Tensor x = Tensor.create(input); //tensor 데이터 타입으로 바꿔줌
				//run the model and get the result
				float[][] y = sess.runner()
						.feed("conv2d_input", x) //model에 다이렉트로 입력값을 넣어준다
						.fetch("dense_2/Softmax") //output name //dense_2/Softmax로 변경
						.run()
						.get(0) //몇 번째 요소 받아올지, 어차피 데이터 하나라 0
						.copyTo(new float[1][16]); //class 2개, 입력 1개라 다음과 같이 선언함. [[],[]]
				
				//print out the result
				float maxVal = 0;
				int maxIndex = 0;
			for(int i=0; i<y[0].length;i++){
				if(y[0][i] > maxVal) {
					maxVal = y[0][i];
					maxIndex = i;
				}
			}
			// System.out.println("가장 큰 값의 인덱스: " + maxIndex);


			AIFaceVO aiFaceVO = aiRepo.findByIndex(maxIndex);

			Map<String, Object> response = new HashMap<>();
			response.put("maxVal", maxVal);
			response.put("aiFaceVO", aiFaceVO);

			return response;  
   		}
	  }
	  return new HashMap<>();
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

}
