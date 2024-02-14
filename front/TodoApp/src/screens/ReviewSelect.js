import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {FontFamily, Color, Border, FontSize} from '../GlobalStyles';
import Header from '../components/Header';
import StoreInfoContainer from '../components/StoreInfoContainer';
import axios from 'axios';

const ReviewSelect = ({navigation, route}) => {
  const {storeId} = route.params;
  const {storeInfo} = route.params;
  const {imageUrl} = route.params;
  const [ocrStoreName, setOcrStoreName] = React.useState('');
  const [ocrStoreAddress, setOcrStoreAddress] = React.useState('');
  const [isEqual, setIsEqual] = React.useState(0);
  const [review, setReview] = React.useState([]);

  //OCR을 수행할 이미지 경로
  const imagePath = imageUrl;

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
        //console.log('requestWithBase64 response:', res.data);
        // OCR 결과를 state에 저장합니다.
        //inferText 모두 가져오기
        const allInferTexts = res.data.images.flatMap(image =>
          image.fields.map(field => field.inferText),
        );
        //console.log(allInferTexts);
        const ocrStoreNameIndex = allInferTexts.indexOf('명');
        const preOcrStoreName = allInferTexts[ocrStoreNameIndex + 2];
        setOcrStoreName(preOcrStoreName);

        const ocrStoreAddressIndex = allInferTexts.indexOf('소재지');
        const preOcrStoreAddress = allInferTexts
          .slice(ocrStoreAddressIndex + 2, ocrStoreAddressIndex + 5)
          .join(' ');
        setOcrStoreAddress(preOcrStoreAddress);
      }
    } catch (error) {
      console.error('requestWithBase64 error', error.response || error);
    }
  }

  React.useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/reviewAll.do')
      .then(res => {
        //console.log(res.data);
        setReview(res.data);
      })
      .catch();
  }, []);

  React.useEffect(() => {
    //requestWithBase64();
  }, []);

  React.useEffect(() => {
    if (ocrStoreName && ocrStoreAddress) {
      if (
        storeInfo.storeName === ocrStoreName &&
        storeInfo.storeAddress.includes(ocrStoreAddress)
      ) {
        //console.log(storeInfo.storeName, ocrStoreName);
        //console.log(storeInfo.storeAddress, ocrStoreAddress);
        setIsEqual(1);
      } else {
        //console.log(storeInfo.storeName, '222', ocrStoreName);
        //console.log(storeInfo.storeAddress, '222', ocrStoreAddress);
        setIsEqual(2);
      }
    }
  }, [ocrStoreName, ocrStoreAddress]);

  return (
    <View style={styles.wonny}>
      <View style={styles.main}>
        <StoreInfoContainer storeInfo={storeInfo} />
        <Header
          dimensionCode={require('../assets/arrow8.png')}
          benefits="리뷰 등록"
          navigation={navigation}
          go="PLAY5"
        />
        <ReviewList review={review} navigation={navigation}></ReviewList>
      </View>
    </View>
  );
};

function ReviewList({review, navigation}) {
  return (
    <View style={styles.selectionbox}>
      <View style={styles.storereviewTitle}>
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.text1}>{`어떤 점이 좋았나요? `}</Text>
          <Text style={styles.text2}>(1개)</Text>
        </Text>
        <Text style={styles.text3}>
          이 가게에 어울리는 키워드를 골라주세요.
        </Text>
      </View>
      <Text style={[styles.text14, styles.textTypo]}>시설/가격</Text>
      <View style={[styles.reivew1, styles.reivewLayout]}>
        <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
        <Image
          style={[styles.notodogFaceIcon, styles.iconLayout]}
          source={require('../assets/notodogface.png')}
        />
        <Text style={styles.text5}>가격이 합리적이에요</Text>
      </View>

      <Text style={[styles.text4, styles.textTypo]}>시술/서비스</Text>
      <View style={[styles.reivew11, styles.reivewLayout]}>
        <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
        <Image
          style={[styles.ggcheckRIcon, styles.ggcheckRIconLayout]}
          source={require('../assets/iconimg.png')}
        />
        <Text style={styles.text5}>반려동물을 잘 다뤄줘요</Text>
      </View>

      <Pressable
        style={[styles.savebtn, styles.savebtnPosition]}
        submit-btn="제출">
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.text23, styles.textFlexBox]}>제출</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    color: Color.colorDarkslategray_200,
    position: 'absolute',
  },
  reivewLayout: {
    height: 33,
    width: 300,
    left: 1,
    position: 'absolute',
  },
  reivew5ItemLayout: {
    borderRadius: Border.br_8xs,
    height: 33,
    width: 300,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  ggcheckRIconLayout: {
    width: 14,
    height: 14,
    left: 16,
    position: 'absolute',
    overflow: 'hidden',
  },
  savebtnPosition: {
    right: '0%',
    left: '0%',
    bottom: '0%',
    width: '100%',
  },
  rectanglePosition: {
    top: '0%',
    position: 'absolute',
  },
  textFlexBox: {
    width: 204,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  text2: {
    fontSize: FontSize.size_xs,
  },
  text: {
    top: 0,
    left: 0,
  },
  text3: {
    top: 24,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
  },
  storereviewTitle: {
    width: 250,
    height: 41,
    left: 5,
    top: 0,
    position: 'absolute',
  },
  text4: {
    top: 458,
    fontSize: FontSize.size_xs,
    left: 5,
  },
  reivew1Child: {
    backgroundColor: Color.colorWhitesmoke_200,
  },
  notodogFaceIcon: {
    top: '30.3%',
    bottom: '27.27%',
    left: '5.33%',
    right: '90%',
    width: '4.67%',
    height: '42.42%',
    maxWidth: '100%',
    position: 'absolute',
  },
  text5: {
    left: 40,
    top: 7,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  reivew1: {
    top: 486,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  ggcheckRIcon: {
    top: 10,
    height: 14,
  },
  text14: {
    top: 65,
    fontSize: FontSize.size_xs,
    left: 5,
  },
  reivew11: {
    top: 93,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  rectangle: {
    height: '100%',
    borderRadius: Border.br_9xs,
    backgroundColor: Color.new1,
    right: '0%',
    left: '0%',
    bottom: '0%',
    width: '100%',
  },
  text23: {
    left: 49,
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
    lineHeight: 18,
    textTransform: 'uppercase',
    color: Color.bgWhite,
    top: 15,
    position: 'absolute',
    height: 14,
  },
  savebtn: {
    height: '4.55%',
    top: '95.45%',
    position: 'absolute',
  },
  selectionbox: {
    top: 91,
    left: 29,
    width: 302,
    height: 946,
    position: 'absolute',
  },
  main: {
    top: 52,
    height: 1037,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  headerChild: {
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    height: 52,
  },
  wonny: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 1183,
    overflow: 'hidden',
    width: '100%',
  },
});

export default ReviewSelect;
