import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
//OCR TEST_이미지 파일 읽기
import axios from 'axios';
import RNFS from 'react-native-fs';
import FormData from 'form-data';
import Header from './Header';
import {launchImageLibrary} from 'react-native-image-picker';
import OcrTest from './OcrTest';

const OcrInput = ({navigation, route}) => {
  const {storeId} = route.params;
  const {storeInfo} = route.params;
  //console.log(storeInfo);
  const [response, setResponse] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  // 이미지 보내기
  const onSubmitImage = () => {
    const data = new FormData();
    //console.log(response['assets'][0], 'aaa');
    if (response['assets']) {
      data.append('imageFile', {
        name: response['assets'][0].fileName,
        type: response['assets'][0].type,
        uri: response['assets'][0].uri,
      });
      //console.log(data['_parts'][0][1]);
      axios
        .post('http://10.0.2.2:5000/uploadRecipt.do', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          setImageUrl(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  // 이미지 가져오기
  const onSelectImage = () => {
    launchImageLibrary(
      {
        madiaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
        }
        setResponse(response);
      },
    );
  };
  React.useEffect(() => {
    onSubmitImage();
  }, [response]);

  return (
    <View>
      <ScrollView>
        <Header
          dimensionCode={require('../assets/arrow8.png')}
          benefits="영수증"
          navigation={navigation}
          go="PLAY5"
        />
        <View style={{flex: 1, padding: 16, marginTop: 100}}>
          {response && (
            <Image source={{uri: response.assets[0].uri}} style={styles.img} />
          )}
          <Pressable
            style={{
              backgroundColor: '#4287f5',
              padding: 12,
              borderRadius: 8,
              marginTop: 20,
              marginLeft: 60,
              marginRight: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => onSelectImage()}>
            <Text style={{color: 'white', fontSize: 18}}>앨범 찾기</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#4287f5',
              padding: 12,
              borderRadius: 8,
              marginTop: 50,
              marginLeft: 60,
              marginRight: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() =>
              navigation.navigate('ReviewSelect', {
                storeId: storeId,
                storeInfo: storeInfo,
                imageUrl: imageUrl,
              })
            }>
            <Text style={{color: 'white', fontSize: 18}}>영수증 등록</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 120,
    width: 120,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
export default OcrInput;
