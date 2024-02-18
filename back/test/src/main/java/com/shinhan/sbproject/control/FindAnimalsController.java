package com.shinhan.sbproject.control;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Base64;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
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

   @Autowired
   AIFaceRepository aiRepo;

    static int ROW = 0;
	 static int FEATURE = 0;
    @PostMapping("/findAnimals")
     public String imageTest(MultipartFile imageFile) throws IOException {
      //System.out.println("들어옴");
      if(imageFile != null){
         //System.out.println("들어옴2");
         Base64.Encoder encoder = Base64.getEncoder();
         byte[] photoEnode = encoder.encode(imageFile.getBytes());
         System.out.println(Arrays.toString(photoEnode));
         String photoImg = new String(photoEnode, "UTF8");
         System.out.println(photoEnode.length);
         System.out.println(imageFile.getBytes().length);
         System.out.println(photoImg);
         System.out.println(Arrays.toString(imageFile.getInputStream().readAllBytes()));
         System.out.println(imageFile.getInputStream().readAllBytes().length);


         File convFile = new File("D:\\[교육] 신한DS SW 아카데미 자료\\[final project] 멍줍\\inputImg\\도착위치.png");

         convFile.createNewFile();
         FileOutputStream fos = new FileOutputStream(convFile);
         fos.write(imageFile.getBytes());
         fos.close();

         //---------------------------
         // protectionId가 n20240213인 AIFaceVO 객체를 가져옵니다.
         // //AIFaceVO aiFaceVO = aiRepo.findByProtectionId("n2024021403");
         // //System.out.println(aiFaceVO);
         // AIFaceVO 객체를 JSON 형태로 반환합니다.
         // //return ResponseEntity.ok(aiFaceVO);
         //---------------------------

         //실제로 받아오는 코드
		 BufferedImage imageRgb=convertBytesToRGBImage(imageFile.getBytes());
		 System.out.println(imageRgb.toString()+"aaaaa");

         int w = imageRgb.getWidth();
		 int h = imageRgb.getHeight();
         

         int[] dataBuffInt = imageRgb.getRGB(0, 0, 32, 32, null, 0, 32); 
		System.out.println(dataBuffInt.length);

         //[개수][32][32][rgb] 형태로 넣어줌
		float[][][][] input= rgbImageToArray(32,32,dataBuffInt);
		System.out.println(input[0].length);
		String filePath = "C:\\Users\\wldnj\\git\\project3-1\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\control\\data\\test.csv";
			
         try(SavedModelBundle b = SavedModelBundle.load("C:\\Users\\User\\git\\shinhanProject\\project3\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\control\\abcd", "serve")){ 
				//default가 서브, 도커에 생긴 abcd를 컨트롤러 아래로 복붙
				
				System.out.println("tttt");
				//create a session from the Bundle
				Session sess = b.session();
				
				//create an input Tensor
				Tensor x = Tensor.create(input); //tensor 데이터 타입으로 바꿔줌
				System.out.println("tttt");
				//run the model and get the result
				float[][] y = sess.runner()
						.feed("conv2d_input", x) //model에 다이렉트로 입력값을 넣어준다
						.fetch("dense_2/Softmax") //output name //dense_2/Softmax로 변경
						.run()
						.get(0) //몇 번째 요소 받아올지, 어차피 데이터 하나라 0
						.copyTo(new float[1][16]); //class 2개, 입력 1개라 다음과 같이 선언함. [[],[]]
				
				//print out the result
            for(int i=0; i<16; i++)
                  System.out.println("결과: " + y[0][i]); //16classification : 출력
				// for(int i=0; i<y.length;i++)
				// 	System.out.println(y[i][1]+"결과: "+y[i][0]); //2classification : [0][1] or [1][0]으로 출력
					// [[0],[1]]: others, [[1],[0]]: robot
					// [0][1]=1 => others
					// [0][0]=1 => robots
				}

      }else{
         System.out.println("data is null");
      }
      return "entity";
   }

    public BufferedImage convertBytesToRGBImage(byte[] bytes) throws IOException {
		// Read the byte array into a BufferedImage
		ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
		BufferedImage bufferedImage = ImageIO.read(bis);

		// Ensure that the image is in the correct format (RGB)
		BufferedImage convertedImage = new BufferedImage(bufferedImage.getWidth(), bufferedImage.getHeight(), BufferedImage.TYPE_INT_RGB);
		convertedImage.createGraphics().drawImage(bufferedImage, 0, 0, null);

		return convertedImage;

    }

    public float[][][][] rgbImageToArray(int w, int h, int[] dataBuffInt){
		float[][][][] result = new float[1][w][h][3];
		for(int i=0; i<w;i++){
			for(int j=0; j<h;j++){
				Color color = new Color(dataBuffInt[i*j],false);
				result[0][i][j][0]=color.getRed();
				result[0][i][j][1]=color.getGreen();
				result[0][i][j][2]=color.getBlue();
			}
		}
		return result;
	}
}
