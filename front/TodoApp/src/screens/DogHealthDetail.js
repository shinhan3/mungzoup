import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  VirtualizedList,
} from 'react-native';
import {FontFamily, Color, Border, FontSize} from '../GlobalStyles';
import HeaderComponent from '../components/HeaderComponent';
import MyDaeng from './MyDaeng';
import FooterComponent from './FooterComponent';
import DropDownPicker from 'react-native-dropdown-picker';
import {Input} from 'react-native-elements';
import {USERID} from '../UserId';
import axios from 'axios';

const DogHealthDetail = ({navigation}) => {
  const userId = USERID;
  const [healthList, setHealthList] = useState();
  const [unhealthList, setUnhealthList] = useState();

  useEffect(() => {
    axios
      .get(`http://192.168.0.90:5000/dogSkinDiseaseList.do/${userId}`)
      .then(res => {
        console.log(res.data.healthList);
        setHealthList(res.data.healthList);
        setUnhealthList(res.data.unhealthList);
      })
      .catch();
  }, []);
  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          <HeaderComponent
            dimensionCode={require('../assets/arrow8.png')}
            benefits="펫 건강 분석"
            navigation={navigation}
            go="MyDaeng"
            backBool={true}
          />
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
          <View style={styles.main}>
            <View style={styles.content}>
              <View style={styles.healthList}>
                <View style={{marginTop: 50}}>
                  {healthList &&
                    healthList.map((dog, seq) => (
                      <Text key={seq} style={styles.contenttext}>
                        {dog[0]}
                      </Text>
                    ))}
                </View>
                <View style={styles.health}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require('../assets/heartplus.png')}
                  />
                  <Text style={[styles.txt, styles.textTypo]}>건강해요!</Text>
                </View>
              </View>
              <View style={styles.unhealthList}>
                <View style={{marginTop: 50, marginLeft: -380}}>
                  {unhealthList &&
                    unhealthList.map((dog, seq) => (
                      <Text key={seq} style={styles.contenttext1}>
                        {dog[0]}({dog[1]})
                      </Text>
                    ))}
                </View>
                <View style={styles.unhealth}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require('../assets/warn.png')}
                  />
                  <Text style={[styles.text8, styles.textTypo]}>의심돼요</Text>
                </View>
              </View>
            </View>
            <View style={[styles.serviceDetail, styles.textPosition]}>
              <Text style={[styles.text10, styles.textPosition]}>
                * 가장 최근에 검사한 결과가 나타납니다.
              </Text>
              <Text style={[styles.text, styles.textPosition]}>
                * 피부질환 종류로는 구진/플라스크, 비듬/각질/상피성잔고리,
              </Text>
              <Text style={[styles.text3, styles.textPosition]}>
                태선화/과다색소침착, 농포/여드름, 미란/궤양, 결정/종괴가
                있습니다.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    left: 43,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    position: 'absolute',
    textAlign: 'center',
    top: -2,
  },
  healthList: {
    marginTop: 50,
    marginLeft: 80,
    width: 251,
    height: '100%',
  },
  contenttext: {
    fontSize: FontSize.size_mini,
    marginLeft: -50,
    // marginTop: 40,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    color: Color.colorBlack,
    textAlign: 'center',
  },
  contenttext1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    color: Color.colorBlack,
    textAlign: 'center',
  },
  health: {
    height: 40,
    weight: 40,
    height: '50%',
    width: '93.38%',
    right: '0%',
    bottom: '50%',
    left: '6.62%',
    top: '0%',
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  unhealthList: {
    marginTop: -250,
    marginLeft: 100,
    width: 551,
    height: '100%',
  },
  unhealth: {
    height: '38.04%',
    width: '93.92%',
    right: '6.08%',
    bottom: '61.96%',
    left: '0%',
    top: '0%',
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    left: '0%',
    position: 'absolute',
    overflow: 'hidden',
  },
  text8: {
    left: 40,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    position: 'absolute',
    textAlign: 'center',
    marginTop: -2,
  },
  content: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderStyle: 'solid',
    borderColor: Color.colorDimgray,
    borderWidth: 0.5,
    width: 357,
    height: 400,
    top: 15,
    left: 10,
    position: 'absolute',
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
  icroundPlusIconPosition: {
    top: 29,
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
    left: 0,
    top: 0,
    height: 40,
    width: 121,
    position: 'absolute',
  },
  textbtn: {
    top: 8,
    left: 22,
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
  text10: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRRegular,
    top: -20,
  },
  serviceDetail: {
    top: 480,
    height: 32,
  },
  main: {
    top: 273,
    left: 16,
    width: 708,
    height: '100%',
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
    height: 890,
    width: '100%',
  },
});

export default DogHealthDetail;
