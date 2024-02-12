import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
//OCR TEST_이미지 파일 읽기
import axios from 'axios';
import RNFS from 'react-native-fs';
import FormData from 'form-data';
import MiracleBenefitContainer from './MiracleBenefitContainer';
import {launchImageLibrary} from 'react-native-image-picker';

const OcrInput = ({navigation, route}) => {
  const {storeId} = route.params;
  //console.log(storeId);

  const [response, setResponse] = React.useState('');

  const uploadImage = () => {
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
        }
        console.log(response);
        setResponse(response);
      },
    );
  };
  return (
    <View>
      <ScrollView>
        <MiracleBenefitContainer
          dimensionCode={require('../assets/arrow8.png')}
          benefits="영수증"
          navigation={navigation}
          go="PLAY5"
        />

        <View style={{flex: 1, padding: 16, marginTop: 100}}>
          <Image
            source={response ? {uri: response.assets[0].uri} : 0}
            style={styles.img}
          />
          <TouchableOpacity
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
            onPress={() => uploadImage()}>
            <Text>영수증 등록</Text>
          </TouchableOpacity>
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
