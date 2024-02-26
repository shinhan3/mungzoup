import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const FormContainer1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.petBanner4}>
      <View style={styles.similarbanner}>
        <View style={styles.similarpet}>
          <View style={styles.similarDiv} />
        </View>
        <Text style={[styles.text, styles.textTypo1]}>
          <Text style={styles.text1}>{`전국 유기동물 중 `}</Text>
          <Text style={[styles.text2, styles.textTypo]}>50%</Text>
          <Text style={styles.text1}>가 우리 곁을 떠나고 있어요.</Text>
        </Text>
        <View style={styles.righttext}>
          {/* <Text
            style={[
              styles.ai,
              styles.aiTypo,
            ]}>{`멍줍의 AI 모델을 통해 당신이 찾고 있는 동물 사진과 
비슷한 생김새의 보호 동물 정보를 알려줄게요.

입양 동물을 찾거나, 내 반려동물이 실종되었을 때
해당 기능을 활용해 보세요.`}</Text> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FindMyDogAI');
            }}
            style={[styles.findsimilarbtn, styles.findsimilarbtnLayout]}>
            <View
              style={[styles.findsimilarbtnChild, styles.findsimilarbtnLayout]}
            />
            <Text style={[styles.text4, styles.textTypo]}>
              보호 중인 동물 알아보기
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.chart, styles.iconLayout]}>
          <Text style={[styles.text5, styles.aiTypo]}>
            <Text style={styles.text6}>{`전국 모든지역 유기동물 현황`}</Text>
            <Text style={styles.text7}>(2022.06.01 ~ 2024.02.13)</Text>
          </Text>
          <View style={styles.container}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/chart.png')}
            />
            <View style={styles.overlay}>
              <Text style={styles.textOverlay}>전체 두수</Text>
              <View style={styles.inlineText}>
                <Text style={styles.numberText}>194,190</Text>
                <Text style={styles.unitText}>마리</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.petBannerTitle}>보호 중인 동물 알아보기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 80,
    left: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOverlay: {
    color: Color.new1,
    fontSize: FontSize.size_4xs_6,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
  },
  inlineText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: FontSize.size_4xs_6,
    fontFamily: FontFamily.notoSansKRMedium,
  },
  numberText: {
    color: Color.new1,
    marginRight: 5,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansKRMedium,
  },
  unitText: {
    color: Color.new1,
    fontSize: FontSize.size_4xs_6,
    fontFamily: FontFamily.notoSansKRMedium,
  },
  textTypo1: {
    fontSize: FontSize.size_smi_2 + 5,
    textAlign: 'left',
    position: 'absolute',
    top: 20,
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  aiTypo: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
  },
  findsimilarbtnLayout: {
    height: 27,
    width: 193,
    left: 10,
    position: 'absolute',
  },
  iconLayout: {
    top: 30,
    width: 123,
  },
  similarDiv: {
    backgroundColor: Color.colorWhitesmoke_200,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  similarpet: {
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  text2: {
    color: Color.new1,
    fontWeight: '700',
  },
  text: {
    top: 18,
    left: 20,
    textAlign: 'left',
  },
  ai: {
    fontSize: FontSize.size_3xs + 3,
    left: 5,
    top: 10,
    textAlign: 'left',
  },
  findsimilarbtnChild: {
    backgroundColor: Color.colorDarkslategray_200,
    top: 0,
    height: 27,
    width: 193,
    borderRadius: 30,
  },
  text4: {
    top: 6,
    left: 60,
    color: Color.bgWhite,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    position: 'absolute',
  },
  findsimilarbtn: {
    top: 10,
  },
  righttext: {
    top: 234,
    left: 35,
    width: 270,
    height: 89,
    position: 'absolute',
  },
  text6: {
    fontSize: FontSize.size_4xs + 3,
  },
  text7: {
    width: 100,
    fontSize: FontSize.size_6xs + 3,
  },
  text5: {
    top: 165,
    left: 70,
    textAlign: 'center',
  },
  icon: {
    borderRadius: 34,
    height: 122.5,
    left: 62,
    top: 0,
    position: 'absolute',
  },
  chart: {
    top: 44,
    left: 25,
    height: 100,
  },
  similarbanner: {
    top: 40,
    left: 0,
    width: 302,
    height: 300,
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
    top: 590,
    left: 10,
    height: 211,
    width: 299,
    position: 'absolute',
  },
});

export default FormContainer1;
