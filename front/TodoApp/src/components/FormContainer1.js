import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const FormContainer1 = () => {
  return (
    <View style={styles.petBanner4}>
      <View style={styles.similarbanner}>
        <View style={[styles.similardog, styles.similardogLayout]}>
          <View style={styles.similarShadowBox} />
          <Text style={[styles.date, styles.dateTypo]}>2024.02.04</Text>
          <View style={[styles.result, styles.resultLayout]}>
            <View style={[styles.resultDiv, styles.resultLayout]} />
            <Text style={[styles.resultTxt, styles.resultTypo]}>
              당신은 용맹 그 자체! 진돗개!
            </Text>
          </View>
          <Text style={[styles.similarTitle, styles.similarTypo]}>
            닮은꼴 강아지 찾기
          </Text>
          <View style={[styles.moreBtn, styles.moreLayout]}>
            <View style={[styles.moreImg, styles.moreLayout]}>
              <Image
                style={styles.removebgPreview3Icon}
                source={require('../assets/2579919removebgpreview-3.png')}
              />
              <Image
                style={[styles.removebgPreview2Icon, styles.moreLayout]}
                source={require('../assets/2579919removebgpreview-2.png')}
              />
            </View>
            <Text style={[styles.btnTxt, styles.text2Typo]}>
              <Text style={styles.text}>{`+2개
`}</Text>
              <Text style={styles.text1}>모두 보기</Text>
            </Text>
          </View>
          <Image
            style={[styles.similarImgIcon, styles.similarIconLayout]}
            source={require('../assets/similarimg.png')}
          />
          <View style={[styles.count, styles.countLayout]}>
            <Image
              style={[styles.countChild, styles.countLayout]}
              source={require('../assets/ellipse-6.png')}
            />
            <Text style={[styles.text2, styles.text2Typo]}>7</Text>
          </View>
        </View>
        <View style={[styles.similarpet, styles.similardogLayout]}>
          <View style={styles.similarShadowBox} />
          <Text style={[styles.similarTitle1, styles.similarTypo]}>
            목소리로 찾는 단짝 반려동물
          </Text>
          <View style={[styles.result1, styles.resultLayout]}>
            <View style={[styles.resultDiv, styles.resultLayout]} />
            <Text style={[styles.resultTxt1, styles.resultTypo]}>
              당신은 팔색조 매력 카멜레온!
            </Text>
          </View>
          <Image
            style={[styles.similarImgIcon1, styles.similarIconLayout]}
            source={require('../assets/similarimg1.png')}
          />
          <Text style={[styles.date1, styles.dateTypo]}>2024.02.04</Text>
          <View style={[styles.moreBtn1, styles.moreLayout]}>
            <View style={[styles.moreImg, styles.moreLayout]}>
              <Image
                style={styles.removebgPreview3Icon}
                source={require('../assets/2579919removebgpreview-3.png')}
              />
              <Image
                style={[styles.removebgPreview2Icon, styles.moreLayout]}
                source={require('../assets/2579919removebgpreview-2.png')}
              />
            </View>
            <Text style={[styles.btnTxt, styles.text2Typo]}>
              <Text style={styles.text}>{`+2개
`}</Text>
              <Text style={styles.text1}>모두 보기</Text>
            </Text>
          </View>
          <View style={[styles.count, styles.countLayout]}>
            <Image
              style={[styles.countChild, styles.countLayout]}
              source={require('../assets/ellipse-6.png')}
            />
            <Text style={[styles.text2, styles.text2Typo]}>5</Text>
          </View>
        </View>
      </View>
      <Text style={styles.petBannerTitle}>
        목소리와 얼굴로 분석하는 나와 닮은 동물
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  similardogLayout: {
    width: 142,
    top: 0,
    height: 171,
    position: 'absolute',
  },
  dateTypo: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_7xs,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  resultLayout: {
    height: 23,
    width: 124,
    position: 'absolute',
  },
  resultTypo: {
    color: Color.colorWhitesmoke_200,
    fontSize: FontSize.size_5xs,
    top: 6,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
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
  moreLayout: {
    height: 21,
    position: 'absolute',
  },
  text2Typo: {
    fontSize: FontSize.size_8xs,
    position: 'absolute',
  },
  similarIconLayout: {
    height: 60,
    position: 'absolute',
  },
  countLayout: {
    height: 7,
    width: 7,
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
    top: 0,
    height: 171,
    left: 0,
    position: 'absolute',
  },
  date: {
    top: 93,
    left: 56,
    textAlign: 'left',
  },
  resultDiv: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_3xs,
    width: 124,
    top: 0,
    left: 0,
  },
  resultTxt: {
    left: 14,
  },
  result: {
    top: 114,
    left: 11,
  },
  similarTitle: {
    top: 15,
    left: 33,
  },
  removebgPreview3Icon: {
    top: 2,
    left: 7,
    width: 16,
    height: 18,
    position: 'absolute',
  },
  removebgPreview2Icon: {
    width: 17,
    top: 0,
    left: 0,
  },
  moreImg: {
    width: 22,
    top: 0,
    left: 0,
  },
  text: {
    color: Color.colorDarkslategray_200,
  },
  text1: {
    color: Color.colorSteelblue_100,
  },
  btnTxt: {
    top: 3,
    left: 26,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    textAlign: 'right',
  },
  moreBtn: {
    top: 143,
    left: 87,
    width: 46,
    height: 21,
  },
  similarImgIcon: {
    top: 29,
    left: 47,
    width: 52,
    opacity: 0.8,
  },
  countChild: {
    top: 0,
    left: 0,
  },
  text2: {
    left: 2,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.bgWhite,
    width: 3,
    height: 6,
    textAlign: 'left',
    top: 0,
  },
  count: {
    top: 102,
    left: 69,
  },
  similardog: {
    left: 157,
  },
  similarTitle1: {
    top: 12,
    left: 12,
  },
  resultTxt1: {
    left: 13,
  },
  result1: {
    top: 111,
    left: 9,
  },
  similarImgIcon1: {
    top: 30,
    left: 27,
    width: 88,
  },
  date1: {
    top: 90,
    left: 54,
    textAlign: 'left',
  },
  moreBtn1: {
    top: 140,
    left: 83,
    width: 46,
    height: 21,
  },
  similarpet: {
    left: 0,
  },
  similarbanner: {
    top: 40,
    height: 171,
    left: 0,
    width: 299,
    position: 'absolute',
  },
  petBannerTitle: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_200,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
    left: 0,
    position: 'absolute',
  },
  petBanner4: {
    top: 656,
    left: 1,
    height: 211,
    width: 299,
    position: 'absolute',
  },
});

export default FormContainer1;
