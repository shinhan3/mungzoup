import React, {useCallback, useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  VirtualizedList,
  Alert,
} from 'react-native';
import {FontFamily, Color, Border, FontSize} from '../GlobalStyles';
import HeaderComponent from '../components/HeaderComponent';
import MyDaeng from './MyDaeng';
import FooterComponent from './FooterComponent';
import DropDownPicker from 'react-native-dropdown-picker';
import {Input} from 'react-native-elements';
import axios from 'axios';
import {USERID} from '../UserId';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import SkinDiseaseResult from '../components/SkinDiseaseResult';

const SkinDiseaseAI = ({navigation}) => {
  const [dname, setDname] = useState();
  const [isDog, setIsDog] = useState();
  const [response, setResponse] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [imageFile, setImageFile] = useState();
  const [disease, setDisease] = useState();

  const onSubmitImage = () => {
    const data = new FormData();
    if (response['assets']) {
      data.append('imageFile', {
        name: response['assets'][0].fileName,
        type: response['assets'][0].type,
        uri: response['assets'][0].uri,
      });
      data.append('dname', dname);
      data.append('userId', USERID);
      axios
        .post('http://192.168.0.10:5000/inspectSkin.do', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          setDisease(res.data);
        })
        .catch();
    }
  };

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
        setPreviewImage(response.assets[0].uri);
        setImageFile(response.assets[0].base64);
      },
    );
  };

  const dogCheck = () => {
    if (dname) {
      axios
        .get('http://192.168.0.10:5000/dogConfirm.do', {
          params: {
            userId: USERID,
            dname: dname,
          },
        })
        .then(res => {
          if (res.data === 1) {
            Alert.alert(
              '',
              '강아지가 등록되었습니다.\n이미지를 등록해주세요.',
              [
                {
                  text: '확인',
                  onPress: () => {
                    navigation.navigate('SkinDiseaseAI');
                  },
                  style: 'destructive',
                },
              ],
            );
            setIsDog(1);
          } else {
            Alert.alert('', '해당 이름의 강아지가 존재하지 않습니다.', [
              {
                text: '확인',
                onPress: () => {
                  navigation.navigate('SkinDiseaseAI');
                },
                style: 'destructive',
              },
            ]);
            setIsDog(0);
          }
        })
        .catch();
    }
  };
  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          <HeaderComponent
            dimensionCode={require('../assets/arrow8.png')}
            benefits="펫 건강 분석"
            navigation={navigation}
            go="MyDaeng"
            backBool="true"
          />
          <Input
            placeholder="강아지 이름"
            containerStyle={styles.dogContainer}
            inputContainerStyle={styles.dogInputContainer}
            inputStyle={styles.dogInput}
            onChange={e => {
              setDname(e.nativeEvent.text);
            }}
          />
          <Pressable style={styles.dogInsertbtn} onPress={() => dogCheck()}>
            <View style={[styles.dogBackgroundbtn, {left: -30}]} />
            <Text
              style={[styles.dogTextbtn, styles.ai1Typo, {left: -10, top: 10}]}>
              등록
            </Text>
          </Pressable>
          <Pressable
            onPress={onSubmitImage}
            style={styles.insertbtn}
            disabled={isDog != 1 && !previewImage}>
            <View
              style={[
                styles.backgroundbtn,
                {
                  backgroundColor:
                    isDog == 1 && previewImage ? Color.new1 : '#DDDDDD',
                },
              ]}
            />
            <Text style={[styles.textbtn, styles.ai1Typo]}>이미지 등록</Text>
          </Pressable>
          <View style={styles.main}>
            <View style={[styles.serviceDetail, styles.textPosition]}>
              <Text style={[styles.text, styles.textPosition]}>
                * 피부질환 종류로는 구진/플라스크, 비듬/각질/상피성잔고리,
              </Text>
              <Text style={[styles.text3, styles.textPosition]}>
                태선화/과다색소침착, 농포/여드름, 미란/궤양, 결정/종괴가
                있습니다.
              </Text>
            </View>
            <SkinDiseaseResult disease={disease}></SkinDiseaseResult>
            <Pressable onPress={onSelectImage}>
              <Image
                style={[
                  styles.phimageThinIcon,
                  previewImage ? {borderRadius: 10, ㅣ} : {},
                ]}
                resizeMode="cover"
                source={
                  previewImage
                    ? {uri: previewImage}
                    : require('../assets/inputImg2.png')
                }
              />
            </Pressable>
          </View>

          <View style={styles.contenthead}>
            <Text
              style={[styles.contentheadtext, styles.icroundPlusIconPosition]}>
              <Text style={styles.ai1Typo}>내 강아지 피부상태</Text>
              <Text style={styles.text4}>를</Text>
              <Text style={styles.ai1Typo}>{` 
`}</Text>
              <Text style={styles.text4}>확인해 보세요</Text>
            </Text>
            <Image
              style={styles.dogImageIcon}
              resizeMode="cover"
              source={require('../assets/dog-image1.png')}
            />
            <Text style={[styles.ai, styles.aiLayout]}>
              <Text style={styles.aiTxtContainer}>
                <Text style={[styles.ai1, styles.ai1Typo]}>멍줍AI</Text>
                <Text style={styles.text7}>가 분석해주는</Text>
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <FooterComponent
        petBoolean={true}
        playBoolean={false}
        cardBoolean={false}
        navigation={navigation}></FooterComponent>
    </>
  );
};

const styles = StyleSheet.create({
  dropdownpicker: {
    backgroundColor: Color.new1,
  },
  dropdownBox: {
    position: 'absolute',
    top: 100,
    left: 59,
    width: 100,
    zIndex: 999,
  },
  ai1Typo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  textPosition: {
    width: 334,
    left: 10,
    position: 'absolute',
  },
  inputimgLayout: {
    height: 171,
    width: 302,
    top: 0,
    position: 'absolute',
  },
  similarDivShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  icroundPlusIconPosition: {
    top: 29,
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  aiLayout: {
    width: 204,
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
  },
  backgroundbtn: {
    backgroundColor: Color.new1,
    borderRadius: Border.br_2xs,
    left: -30,
    top: 0,
    height: 40,
    width: 121,
    position: 'absolute',
  },
  dogBackgroundbtn: {
    backgroundColor: Color.new1,
    borderRadius: Border.br_2xs,
    left: 0,
    top: 0,
    height: 40,
    width: 61,
    position: 'absolute',
  },
  textbtn: {
    top: 10,
    left: 3,
    color: '#fff',
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontWeight: '700',
    position: 'absolute',
  },
  dogTextbtn: {
    top: 8,
    left: 16,
    color: '#fff',
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontWeight: '700',
    position: 'absolute',
  },
  insertbtn: {
    top: 465,
    left: 233,
    position: 'absolute',
  },
  dogInsertbtn: {
    marginTop: 220,
    marginLeft: 173,
    position: 'absolute',
  },
  text1: {
    marginBottom: 5,
  },
  text: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRRegular,
    top: 0,
  },
  text3: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRRegular,
    top: 15,
    marginLeft: 7,
  },
  serviceDetail: {
    top: 485,
    height: 32,
  },
  fa6SolidboltLightning: {
    left: 320,
    width: 384,
    top: 0,
    overflow: 'hidden',
  },
  similarDiv: {
    shadowRadius: 4,
    elevation: 4,
    height: 171,
    width: 302,
    top: 0,
    position: 'absolute',
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  phimageThinIcon: {
    top: 0,
    left: 13,
    width: 302,
    height: 171,
    position: 'absolute',
    overflow: 'hidden',
  },
  icroundPlusIcon: {
    left: 175,
    width: 32,
    height: 32,
    overflow: 'hidden',
  },
  contenttext1: {
    top: 135,
    left: 72,
    fontSize: FontSize.size_xs,
    color: Color.colorCadetblue_100,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRRegular,
    position: 'absolute',
  },

  main: {
    top: 273,
    left: 13,
    width: 708,
    height: 711,
    position: 'absolute',
  },
  headerChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  text2: {
    marginLeft: -102,
    top: 9,
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDarkslategray,
    justifyContent: 'center',
    height: 35,
    left: '50%',
    textAlign: 'center',
  },
  mingcuterightLineIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  menuDiv: {
    display: 'none',
    width: 360,
  },
  menuHome: {
    display: 'none',
    width: 32,
  },
  menuPlay: {
    width: 25,
    display: 'none',
  },
  menubar: {
    marginTop: 388.5,
    marginLeft: -180,
    top: '50%',
    height: 62,
    left: '50%',
    width: 360,
    position: 'absolute',
  },
  text4: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  contentheadtext: {
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    textAlign: 'left',
    left: 0,
  },
  dogImageIcon: {
    top: 66,
    left: 198,
    width: 104,
    height: 104,
    position: 'absolute',
    overflow: 'hidden',
  },
  ai1: {
    color: Color.new1,
  },
  text7: {
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansKRRegular,
  },
  aiTxtContainer: {
    width: '100%',
  },
  ai: {
    fontSize: FontSize.size_base,
    height: 34,
    textAlign: 'left',
    left: 0,
    top: 0,
  },
  contenthead: {
    top: 84,
    left: 35,
    height: 170,
    width: 302,
    position: 'absolute',
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 901,
    //overflow: 'hidden',
    width: '100%',
  },
  dogContainer: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    width: 104,
    height: 40,
    marginLeft: 31,
    marginTop: 220,
  },
  dogInputContainer: {
    borderBottomWidth: 0,
    height: '100%',
  },
  dogInput: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 15,
  },
});

export default SkinDiseaseAI;
