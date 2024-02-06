import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const FormContainer8 = () => {
  return (
    <View style={styles.petBanner4}>
      <Text style={styles.petBannerTitle}>
        목소리와 얼굴로 분석하는 나와 닮은 동물
      </Text>
      <View style={styles.similarbanner}>
        <View style={[styles.similarpet, styles.similarpetLayout]}>
          <View style={styles.similarShadowBox} />
          <Text style={[styles.similarTitle, styles.similarTypo]}>
            목소리로 찾는 단짝 반려동물
          </Text>
          <View style={[styles.similarTxt, styles.similarLayout]}>
            <Text style={[styles.aiContainer, styles.similarLayout]}>
              <Text style={styles.text}>{`아직 단짝 반려동물을 찾지 못했어요!
`}</Text>
              <Text style={styles.ai}>{`멍줍의 AI기술을 활용해 
나와 목소리가 비슷한 반려동물을 찾고
뱃지를 모아보세요!
`}</Text>
            </Text>
          </View>
          <Image
            style={[styles.similarImgIcon, styles.similarIconLayout]}
            source={require('../assets/similarimg2.png')}
          />
        </View>
        <View style={[styles.similardog, styles.similarpetLayout]}>
          <View style={styles.similarShadowBox} />
          <Text style={[styles.similarTitle1, styles.similarTypo]}>
            닮은꼴 강아지 찾기
          </Text>
          <Image
            style={[styles.similarImgIcon1, styles.similarIconLayout]}
            source={require('../assets/similarimg3.png')}
          />
          <View style={[styles.similarTxt1, styles.similarLayout]}>
            <Text style={[styles.aiContainer, styles.similarLayout]}>
              <Text style={styles.text}>{`아직 닮은 강아지종을 찾지 못했어요!
`}</Text>
              <Text style={styles.ai}>{`멍줍의 AI기술을 활용해 
나와 비슷한 생김새의 강아지종을 찾고
뱃지를 모아보세요!
`}</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  similarpetLayout: {
    width: 142,
    height: 171,
    top: 0,
    position: 'absolute',
  },
  similarTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  similarLayout: {
    height: 29,
    width: 106,
    position: 'absolute',
  },
  similarIconLayout: {
    height: 59,
    width: 59,
    position: 'absolute',
  },
  petBannerTitle: {
    fontSize: FontSize.size_base,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    color: Color.colorDarkslategray_200,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  similarShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    width: 142,
    height: 171,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  similarTitle: {
    top: 12,
    left: 12,
  },
  text: {
    fontSize: FontSize.size_6xs,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
  },
  ai: {
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.notoSansKRRegular,
  },
  aiContainer: {
    textAlign: 'center',
    height: 29,
    width: 106,
    color: Color.colorDarkslategray_200,
    top: 0,
    left: 0,
  },
  similarTxt: {
    top: 118,
    left: 18,
    height: 29,
    width: 106,
  },
  similarImgIcon: {
    top: 47,
    left: 38,
  },
  similarpet: {
    left: 0,
    width: 142,
  },
  similarTitle1: {
    top: 15,
    left: 33,
  },
  similarImgIcon1: {
    top: 48,
    left: 41,
  },
  similarTxt1: {
    top: 119,
    left: 18,
    height: 29,
    width: 106,
  },
  similardog: {
    left: 160,
  },
  similarbanner: {
    top: 51,
    height: 171,
    left: 0,
    width: 302,
    position: 'absolute',
  },
  petBanner4: {
    top: 656,
    left: 1,
    height: 222,
    width: 302,
    position: 'absolute',
  },
});

export default FormContainer8;
