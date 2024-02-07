import * as React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import FormContainer3 from '../components/FormContainer3';
import MiracleBenefitContainer from '../components/MiracleBenefitContainer';
import {FontFamily, FontSize, Color} from '../GlobalStyles';

const Frame1 = props => {
  return (
    <ScrollView>
      <View style={styles.view}>
        <FormContainer3 />
        <MiracleBenefitContainer
          dimensionCode={require('../assets/arrow2.png')}
          benefits="미라클 혜택"
          navigation={props.navigation}
        />
        <Text style={styles.ment1}>
          <Text>
            <Text
              style={[
                styles.text,
                styles.textTypo2,
              ]}>{`멍줍 카드를 사용한 똑똑한 소비자를 위한 추천!
`}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{`멍줍 카드만의 
미라클 조합으로, 최대 혜택을!
 
`}</Text>
          </Text>
        </Text>
        <Text style={styles.ment2}>
          <Text style={[styles.text2, styles.textTypo]}>박멍줍</Text>
          <Text style={[styles.text3, styles.textTypo2]}>
            님의 이번달 혜택은?
          </Text>
        </Text>
        <Text style={styles.manual}>
          <Text style={styles.manualTxt}>
            <Text style={styles.textTypo}> </Text>
            <Text
              style={
                styles.text4
              }>{`·자세한 카드별 서비스 내용 및 서비스 적용 기준은 카테고리 어쩌고 저쩌고 아아아아아아가나다라마바사아자차카타파하아야어여오요우유으이나동물병원미용위탁관리식당카페
· 자세한 문의는 멍줍 고객센터(1588-3333)로 문의 부탁드립니다. 
`}</Text>
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  playTypo: {
    top: 26,
    textAlign: 'center',
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_100,
  },
  text1: {
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  ment1: {
    top: 95,
    left: 22,
    height: 99,
    width: 292,
    textAlign: 'left',
    lineHeight: 30,
    position: 'absolute',
  },
  text2: {
    color: '#627cae',
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text3: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_200,
  },
  ment2: {
    top: 194,
    left: 20,
    width: 310,
    height: 40,
    textAlign: 'left',
    lineHeight: 30,
    position: 'absolute',
  },
  text4: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  manualTxt: {
    width: '100%',
  },
  manual: {
    marginLeft: -136,
    top: 746,
    left: '50%',
    fontSize: FontSize.size_3xs,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    // height: 103,
    color: Color.colorDarkgray_200,
    width: 292,
    textAlign: 'left',
    position: 'absolute',
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 892,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Frame1;
