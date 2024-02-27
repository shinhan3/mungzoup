import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const ImageTest = ({navigation}) => {
  const [response, setResponse] = React.useState({});
  const [imageFile, setImageFile] = React.useState({});

  // 이미지 보내기
  const onSubmitImage = () => {
    const data = new FormData();
    console.log(response['assets'][0], 'bbbbbb');
    data.append('imageFile', {
      //   name: response.fileName,
      name: response['assets'][0].fileName,
      type: response['assets'][0].type,
      uri: response['assets'][0].uri,
      // Platform.OS === 'android'
      //   ? response.uri
      //   : response.uri.replace('file://', ''),
    });
    console.log(data['_parts'][0][1]);
    axios
      .post('http://192.168.0.88:5000/imageTest', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        // console.log(response, 'aa');
      })
      .catch(error => {
        console.log(error);
      });
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
        console.log(response, 'aaaaaaaaaaaaaaaaaa');
        // console.log(response.assets[0].base64)
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }

        setResponse(response);
        setImageFile(response.assets[0].base64);
        const formData = new FormData();
        formData.append('files', response.assets[0].base64);
        onSubmitImage();
      },
    );
  };
  return (
    <ScrollView>
      <View style={styles.play}>
        <View style={[styles.main, styles.mainPosition]}>
          <View style={styles.play1}>
            <Text style={[styles.text, styles.textTypo1]}>동물 사진 등록</Text>
            <Text style={[styles.text1, styles.textTypo1]}>매칭 결과</Text>
            <Pressable onPress={() => onSelectImage()}>
              <Image
                style={styles.inputimgIcon}
                resizeMode="cover"
                source={require('../assets/images.jpg')}
              />
            </Pressable>
            <View style={[styles.similarImg, styles.similarLayout]}>
              <View style={[styles.similarImgChild, styles.iconLayout]} />
              <Image
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require('../assets/images.jpg')}
              />
              <Text style={[styles.text2, styles.textTypo]}>100%</Text>
            </View>
            <View style={styles.similarTxt}>
              <Text style={[styles.text3, styles.textTypo]}>{`견종: 말티즈
보호번호 : 대전-서구-2024-0203
보호소: 동물보육원 대전`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerPosition}>
          <View style={[styles.headerDiv, styles.headerPosition]} />
          <Text style={[styles.headerTitle, styles.titleTypo]}>
            보호 중인 동물 찾기
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PLAYmainwonny');
            }}>
            <Image
              style={styles.arrowIcon}
              source={require('../assets/images.jpg')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: 'center',
    fontSize: FontSize.size_mini_7,
    left: 33,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  similarLayout: {
    height: 88,
    width: 302,
  },
  iconLayout: {
    borderRadius: Border.br_8xs,
    position: 'absolute',
  },
  textTypo: {
    textAlign: 'left',
    fontSize: FontSize.size_3xs,
    position: 'absolute',
  },
  text: {
    top: 25,
  },
  text1: {
    top: 273,
  },
  inputimgIcon: {
    top: 70,
    height: 171,
    width: 302,
    left: 29,
    position: 'absolute',
  },
  similarImgChild: {
    backgroundColor: Color.bgWhite,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 5.960784435272217,
    },
    shadowRadius: 5.96,
    elevation: 5.96,
    shadowOpacity: 1,
    left: 0,
    top: 0,
    height: 88,
    width: 302,
  },
  icon: {
    top: 11,
    left: 21,
    width: 91,
    height: 67,
  },
  text2: {
    top: 64,
    left: 81,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new,
  },
  similarImg: {
    top: 319,
    left: 29,
    height: 88,
    position: 'absolute',
  },
  text3: {
    left: 0,
    top: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    textAlign: 'left',
    fontSize: FontSize.size_3xs,
  },
  similarTxt: {
    top: 340,
    left: 160,
    width: 200,
    height: 50,
    position: 'absolute',
  },
  play1: {
    backgroundColor: Color.colorGhostwhite,
    width: 360,
    height: 892,
    overflow: 'hidden',
  },
  reviewbtnLayout: {
    width: 51,
    height: 18,
    position: 'absolute',
  },
  reviewbtn: {
    left: 299,
    top: 20,
    width: 51,
  },
  reviewbtnChild: {
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.2,
    width: 51,
    left: 0,
    top: 0,
  },
  textFlexBox: {
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
  },
  text99: {
    top: 3,
    left: 16,
    fontSize: FontSize.size_8xs,
    letterSpacing: 0,
    lineHeight: 8,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
    textAlign: 'center',
    justifyContent: 'center',
    width: 30,
    height: 12,
  },
  materialSymbolscameraIcon: {
    top: 2,
    left: 3,
    width: 13,
    height: 14,
    overflow: 'hidden',
    position: 'absolute',
  },
  mainPosition: {
    left: 0,
    position: 'absolute',
    width: 360,
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  play1Typo: {
    top: 26,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
    position: 'absolute',
  },
  mapPosition: {
    height: 280,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 360,
  },
  titleTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 360,
  },
  map1: {
    backgroundColor: Color.colorGainsboro_200,
  },
  title: {
    top: 62,
    left: 73,
    fontSize: FontSize.size_31xl,
    color: Color.colorBlack,
    width: 224,
    height: 117,
  },
  main: {
    top: 52,
    height: 716,
  },
  headerDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 35,
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  play: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 892,
    overflow: 'hidden',
  },
});

export default ImageTest;
