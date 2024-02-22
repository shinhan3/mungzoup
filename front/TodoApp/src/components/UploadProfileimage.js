import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {FontFamily, Color} from '../GlobalStyles';
import {launchImageLibrary} from 'react-native-image-picker';

const UploadProfileimage = ({onFileSelect, image}) => {
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
          style={[
            styles.inputimgIcon,
            response || image ? {borderRadius: 100} : {},
          ]}
          source={
            response
              ? {uri: response.assets[0].uri}
              : image
              ? {uri: image}
              : require('../assets/profileimage.png')
          }></Image>
      </View>
      <View style={[styles.updloadImage2]}>
        <Pressable style={[styles.albumBtn]} onPress={() => onSelectImage()}>
          <Text style={[styles.btnText]}>앨범 찾기</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 10,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
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
    marginTop: 20,
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
