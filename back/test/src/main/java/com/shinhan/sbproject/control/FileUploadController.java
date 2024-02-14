package com.shinhan.sbproject.control;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.shinhan.sbproject.service.S3FileUploadService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class FileUploadController {

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Autowired
    private S3FileUploadService S3Service;

    @PostMapping("/uploadRecipt.do")
    public String uploadFileToS3(MultipartFile imageFile) throws IOException{
        if(imageFile==null){
            return "imageFile 비어있음"; 
        }
        return S3Service.upload(imageFile);
    }
}
