package com.shinhan.sbproject.control;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.awt.Color;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;

import org.deeplearning4j.nn.modelimport.keras.KerasModelImport;
import org.deeplearning4j.nn.multilayer.MultiLayerNetwork;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.tensorflow.SavedModelBundle;
import org.tensorflow.Session;
import org.tensorflow.Tensor;
import org.tensorflow.TensorFlow;

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