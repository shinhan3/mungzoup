package com.shinhan.sbproject.Service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.DoubleBuffer;
import java.nio.FloatBuffer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Service;
import org.tensorflow.Graph;
import org.tensorflow.SavedModelBundle;
import org.tensorflow.Session;
import org.tensorflow.Tensor;
import org.tensorflow.framework.MetaGraphDef;
import org.tensorflow.framework.SignatureDef;
import org.tensorflow.framework.TensorInfo;
import org.tensorflow.types.UInt8;

// ...
@Service
public class TensorFlowService {
    private Graph graph;
    private Session session;




    public TensorFlowService() {
        // 모델 파일을 불러와 그래프를 생성합니다.
        try (InputStream is = getClass().getResourceAsStream("../control/aaa/mobilenet/1/keras_metadata.pb")) {
            graph = new Graph();
            // System.out.println(is.toString()+"aaaaaaa");
            System.out.println(is.readAllBytes()+"bbb");
            // graph.importGraphDef(IOUtils.toByteArray(is));
            graph.importGraphDef(is.readAllBytes());
            session = new Session(graph);
            
        } catch (IOException e) {
            throw new RuntimeException("모델 파일을 불러올 수 없습니다.", e);
        }
    }

    public void loadModel() {
        // Path to the directory containing the TensorFlow SavedModel
        String modelPath = "C:\\Users\\asme1\\git\\project3-1\\back\\test\\src\\main\\java\\com\\shinhan\\sbproject\\control\\aaa\\mobilenet\\1";
        
        try {
            // Load the SavedModelBundle
            SavedModelBundle model = SavedModelBundle.load(modelPath, "serve");
            this.session = model.session();
        } catch (Exception e) {
            e.printStackTrace();
            // Handle error loading the model
        }
    }

    // 입력 데이터를 사용하여 머신 러닝 모델을 실행하고 결과를 반환합니다.
    public float[] predict(float[] inputData) {
        try (Tensor<Float> input = Tensor.create(new long[]{1, inputData.length}, FloatBuffer.wrap(inputData));
            
            // Tensor<Double> output = session.runner().feed("input", input).fetch("output").run().get(0).expect(Double.class)) 
            Tensor<Float> output = session.runner().feed("serving_default_input" , input).fetch("StatefulPartitionedCall:0").run().get(0).expect(Float.class)) 
        {   
            // session.SavedModelBundle().metaGraphDef();
            float[] result = new float[output.numElements()];
            output.copyTo(result);
            return result;
        }
    }
}