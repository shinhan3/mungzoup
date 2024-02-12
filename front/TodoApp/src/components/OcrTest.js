import * as React from 'react';
import {StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
//OCR TEST_이미지 파일 읽기
import axios from 'axios';
import RNFS from 'react-native-fs';
import FormData from 'form-data';

const OcrTest = () => {
  //OCR TEST
  // OCR 결과를 저장할 state를 생성합니다.
  const [ocrResult, setOcrResult] = React.useState(null);

  const imagePath =
    'https://mblogthumb-phinf.pstatic.net/MjAyMjA3MDdfNzQg/MDAxNjU3MTc0ODg0MDg1.5q0e4cKC-y4LNtm0WTpDh1mTboBcI1zrY_pvc_Vqrdog.QbfFHjUMv2Dt7-0eSzSCD04k4r5LOGeKwYjrzXNTyKMg.JPEG.wnlsml/SE-3cccb10b-a460-4ffa-94ce-9150a0681444.jpg?type=w800';

  // 이미지를 base64 형식으로 인코딩한 문자열을 사용하여 OCR 요청
  async function requestWithBase64() {
    try {
      const response = await axios.get(imagePath, {
        responseType: 'arraybuffer',
      });
      const base64String = Buffer.from(response.data, 'binary').toString(
        'base64',
      );

      // base64String은 base64로 인코딩된 이미지 데이터입니다.
      // 이제 이 문자열을 API 요청에 사용할 수 있습니다.
      const res = await axios.post(
        'https://126gsgqg8r.apigw.ntruss.com/custom/v1/28287/088ec5206fb1259c78c14dadc3037c29edc153a902324804fbf03bead877038f/general',
        {
          images: [
            {
              format: 'jpg', // file format
              name: 'testReceipt', // image name
              data: base64String, // image base64 string(only need part of data). Example: base64String.split(',')[1]
            },
          ],
          requestId: 'unique-request-id-1', // unique string, 보통 UUID 사용
          timestamp: Date.now(),
          version: 'V2',
        },
        {
          headers: {
            'X-OCR-SECRET': 'WGt5SVdRcUJtV1JPcVhlb0tMWFBkaGhhQXJXYlhwRkM=', // Secret Key
          },
        },
      );

      if (res.status === 200) {
        console.log('requestWithBase64 response:', res.data);
        // OCR 결과를 state에 저장합니다.

        //inferText 모두 가져오기
        const allInferTexts = res.data.images.flatMap(image =>
          image.fields.map(field => field.inferText),
        );

        setOcrResult(JSON.stringify(res.data, null, 2)); //응답 json data 전부 가져오기
      }
    } catch (error) {
      console.error('requestWithBase64 error', error.response || error);
    }
  }

  React.useEffect(() => {
    requestWithBase64();
  }, []);

  return (
    <View>
      {/* OCR test*/}
      {/* OCR 요청을 보내는 버튼 */}
      <Pressable
        onPress={requestWithBase64}
        style={{
          backgroundColor: 'blue',
          padding: 10,
        }}>
        <Text style={{color: 'white'}}>OCR 요청 보내기</Text>
      </Pressable>

      {/* OCR 결과를 화면에 노출합니다. */}
      {ocrResult && (
        <View>
          <Text style={{backgroundColor: 'red', color: 'white'}}>
            OCR 결과:
          </Text>
          <Text style={{color: 'black'}}>{ocrResult}</Text>
        </View>
      )}
    </View>
  );
};

export default OcrTest;
