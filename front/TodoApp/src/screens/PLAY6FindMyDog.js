import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import DetailCard from '../components/DetailCard';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios';

const PLAY6FindMyDog = ({navigation}) => {
  const [response, setResponse] = React.useState({});
  const [imageFile, setImageFile] = React.useState({});
  const [previewImage, setPreviewImage] = React.useState(null);
  const [animalData, setAnimalData] = React.useState(null);

  // 이미지 보내기
  const onSubmitImage = () => {
    ImageResizer.createResizedImage(
      response['assets'][0].uri,
      30,
      30,
      'PNG',
      100,
    )
      .then(resizedImage => {
        const data = new FormData();
        data.append('imageFile', {
          name: response['assets'][0].fileName,
          type: response['assets'][0].type,
          uri: resizedImage.uri,
        });
        console.log(data['_parts'][0][1], 'ccc');
        return axios.post('http://10.0.2.2:5000/findAnimals', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      })
      .then(response => {
        console.log(response, '이미지 보내기');
        setAnimalData(response.data);
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
        console.log(response, '이미지 가져오기');
        // console.log(response.assets[0].base64)
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }
        const {uri} = response.assets[0];
        console.log('Selected image URI: ', uri); // 로그 찍기
        setPreviewImage(uri);
        setResponse(response);
        setImageFile(response.assets[0].base64);
      },
    );
  };
  return (
    <ScrollView>
      <View style={styles.play}>
        <View style={[styles.main, styles.mainPosition]}>
          <View style={styles.play1}>
            <Text style={[styles.text, styles.textTypo1]}>동물 사진 등록</Text>
            {animalData && (
              <Text style={[styles.text1, styles.textTypo1]}>매칭 결과</Text>
            )}
            <Pressable onPress={onSelectImage}>
              <Image
                style={[
                  styles.inputimgIcon,
                  previewImage ? {borderRadius: 10} : {},
                ]}
                resizeMode="cover"
                source={
                  previewImage
                    ? {uri: previewImage}
                    : require('../assets/inputImg.png')
                }
              />
            </Pressable>
            <TouchableOpacity
              style={[
                styles.uploadBtn,
                {backgroundColor: previewImage ? Color.new1 : '#DDDDDD'},
              ]}
              onPress={onSubmitImage}
              disabled={!previewImage}>
              <Text
                style={{
                  color: previewImage ? Color.bgWhite : Color.colorDarkgray_300,
                }}>
                이미지 업로드
              </Text>
            </TouchableOpacity>
            {animalData && (
              <View style={[styles.similarImg, styles.similarLayout]}>
                <View style={[styles.similarImgChild, styles.iconLayout]} />
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require('../assets/-20240204-211558-1.png')}
                />
                <Text style={[styles.text2, styles.textTypo]}>100%</Text>
              </View>
            )}
            {animalData && (
              <View style={styles.similarTxt}>
                <Text style={[styles.text3, styles.textTypo]}>
                  {`견종: ${animalData.breed}
보호번호 : ${animalData.protectionId}
보호소: ${animalData.shelter}`}
                </Text>
              </View>
            )}
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
              source={require('../assets/arrow4.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  uploadBtn: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: Border.br_8xs,
    padding: 10,
    marginTop: 20, // 필요한 만큼의 마진을 추가
    position: 'absolute',
    top: 240,
    left: 225,
  },
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
    top: 313,
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
    top: 60,
    left: 81,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new,
  },
  similarImg: {
    top: 359,
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
    top: 380,
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

export default PLAY6FindMyDog;
