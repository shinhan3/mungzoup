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
import axios from 'axios';
import RNFS from 'react-native-fs';
import FormData from 'form-data';
import HeaderComponent from '../components/HeaderComponent';
import {launchImageLibrary} from 'react-native-image-picker';
import {inlineStyles} from 'react-native-svg';

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
      <HeaderComponent
        dimensionCode={require('../assets/arrow8.png')}
        benefits="영수증"
        navigation={navigation}
        go="HiddenPopularStores"
      />
      <View>
        <Image
          style={[styles.inputimgIcon, response ? {borderRadius: 10} : {}]}
          source={
            response
              ? {uri: response.assets[0].uri}
              : require('../assets/inputImg.png')
          }></Image>
        <Text style={[styles.receiptInfo]}>영수증을 등록해주세요.</Text>
        <Pressable style={[styles.albumBtn]} onPress={() => onSelectImage()}>
          <Text style={{color: 'white', fontSize: 18}}>앨범 찾기</Text>
        </Pressable>
        <Pressable
          style={[
            styles.receiptBtn,
            {backgroundColor: response ? Color.new1 : '#DDDDDD'},
          ]}
          onPress={() =>
            navigation.navigate('ReviewSelect', {
              storeId: storeId,
              storeInfo: storeInfo,
              imageUrl: imageUrl,
            })
          }
          disabled={!response}>
          <Text
            style={{
              color: Color.bgWhite,
              fontSize: 18,
            }}>
            영수증 등록
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  receiptInfo: {
    top: 300,
    left: 140,
    color: '#62AEA9',
    opacity: 0.6,
  },
  albumBtn: {
    backgroundColor: Color.new1,
    padding: 12,
    borderRadius: 8,
    marginTop: 450,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptBtn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputimgIcon: {
    top: 150,
    height: 200,
    width: 350,
    left: 35,
    position: 'absolute',
  },
  img: {
    height: 120,
    width: 120,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
export default OcrInput;
