package com.shinhan.sbproject.control;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.shinhan.sbproject.VO.AIFaceVO;
import com.shinhan.sbproject.repository.AIFaceRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class FindAnimalsController {

   @Autowired
   AIFaceRepository aiRepo;

    @PostMapping("/findAnimals")
     public ResponseEntity<?> imageTest(MultipartFile imageFile) throws IOException {
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

         File convFile = new File("C:\\Users\\User\\git\\miracle\\project3\\front\\TodoApp\\src\\assets\\도착위치.png");
         convFile.createNewFile();
         FileOutputStream fos = new FileOutputStream(convFile);
         fos.write(imageFile.getBytes());
         fos.close();

         // protectionId가 n20240213인 AIFaceVO 객체를 가져옵니다.
         AIFaceVO aiFaceVO = aiRepo.findByProtectionId("n20240213");
         System.out.println(aiFaceVO);
         // AIFaceVO 객체를 JSON 형태로 반환합니다.
         return ResponseEntity.ok(aiFaceVO);

      }else{
         System.out.println("data is null");
         // imageFile이 null인 경우에는 에러 메시지를 반환합니다.
         return ResponseEntity.badRequest().body("Image file is missing");
      }
      
   }

    
}
