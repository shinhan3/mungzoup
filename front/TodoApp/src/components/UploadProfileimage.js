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

const UploadProfileimage = ({onFileSelect}) => {
  const [response, setResponse] = React.useState('');

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
          // handle error
        }
        setResponse(response);
      },
    );
  };

  React.useEffect(() => {
    if (response['assets']) {
      onFileSelect({
        name: response['assets'][0].fileName,
        type: response['assets'][0].type,
        uri: response['assets'][0].uri,
      });
    }
  }, [response]);

  return (
    <View style={[styles.updloadImage]}>
      <View style={[styles.updloadImage1]}>
        <Image
          style={[styles.inputimgIcon, response ? {borderRadius: 100} : {}]}
          source={
            response
              ? {uri: response.assets[0].uri}
              : require('../assets/profileimage.png')
          }></Image>
      </View>
      <View style={[styles.updloadImage2]}>
        <Pressable style={[styles.albumBtn]} onPress={() => onSelectImage()}>
          <Text style={{color: 'white', fontSize: 10}}>앨범 찾기</Text>
        </Pressable>
        {/* <Pressable
          style={[
            styles.receiptBtn,
            { backgroundColor: response ? Color.new1 : '#DDDDDD' },
          ]}
          onPress={() =>
            props.navigation.navigate('MyDaeng', {
              // storeId: storeId,
              // storeInfo: storeInfo,
              imageUrl: imageUrl,
            })
          }
          disabled={!response}
        >
          <Text
            style={{
              color: Color.bgWhite,
              fontSize: 10,
            }}
          >
            사진 등록
          </Text>
        </Pressable> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  updloadImage1: {
    flex: 1,
  },
  updloadImage2: {
    marginRight: 40,
    flex: 1,
  },
  updloadImage: {
    flexDirection: 'row', // 가로 방향으로 요소들을 나란히 정렬
    alignItems: 'center',
  },

  albumBtn: {
    backgroundColor: Color.new1,
    padding: 12,
    borderRadius: 8,
    marginTop: 50,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  receiptBtn: {
    marginBottom: 50,
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputimgIcon: {
    // top: 150,
    height: 131,
    width: 131,
    left: 80,
    // position: 'absolute',
  },
});

export default UploadProfileimage;
