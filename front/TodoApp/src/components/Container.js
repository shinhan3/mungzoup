import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';


const Container = ({dimensionCode}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.petBanner3}>
      <Text style={[styles.petBannerTitle, styles.text2Typo]}>
        다른 반려인들이 방문한 장소는?
      </Text>
      <View style={[styles.petBannerContent, styles.petLayout]}>
        <View style={[styles.petBannerDiv, styles.petLayout]} />
        <Image style={styles.petBannerImgIcon} source={dimensionCode} />
        <Text style={styles.petBannerTxt1}>
          <Text style={styles.text}>
            <Text style={styles.text1}>멍줍이</Text>
          </Text>
          <Text style={styles.text2Typo}>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.text4}>숨은 인기 가맹점</Text>
          </Text>
          <Text style={styles.text5}>을 추천해요!</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PLAY5');
          }}
          style={[styles.petplacebtn, styles.petplacebtnLayout]}>
          <View style={[styles.petplacediv, styles.petplacebtnLayout]} />
          <Text style={[styles.petplacelink, styles.arrowIconPosition]}>
            추천받으러 가기
          </Text>
          <Image
            style={[styles.arrowIcon, styles.arrowIconPosition]}
            source={require('../assets/arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.petBannerTxt2}>{`sns게시물 수 대비 실 결제건수로
반려인들이 실제로 많이 찾는 장소를 알려드릴게요!`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text2Typo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  petLayout: {
    height: 150,
    left: 0,
    width: 302,
    position: 'absolute',
  },
  petplacebtnLayout: {
    height: 25,
    width: 133,
    position: 'absolute',
  },
  arrowIconPosition: {
    top: 3,
    position: 'absolute',
  },
  petBannerTitle: {
    fontSize: FontSize.size_base,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  petBannerDiv: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMistyrose,
    top: 0,
    height: 150,
  },
  petBannerImgIcon: {
    top: 52,
    left: 185,
    width: 95,
    height: 88,
    position: 'absolute',
  },
  text1: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  text: {
    color: Color.colorDarkslategray_200,
  },
  text4: {
    color: Color.new1,
  },
  text5: {
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDarkslategray_200,
  },
  petBannerTxt1: {
    top: 27,
    fontSize: FontSize.size_mid,
    left: 25,
    textAlign: 'left',
    position: 'absolute',
  },
  petplacediv: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.new1,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.5,
    left: 0,
    top: 0,
  },
  petplacelink: {
    left: 14,
    fontSize: FontSize.size_smi,
    color: Color.colorWhitesmoke_100,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  arrowIcon: {
    left: 107,
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  petplacebtn: {
    top: 107,
    left: 25,
  },
  petBannerTxt2: {
    top: 61,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.notoSansKRRegular,
    left: 25,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    position: 'absolute',
  },
  petBannerContent: {
    top: 38,
  },
  petBanner3: {
    top: 421,
    left: 1,
    height: 188,
    width: 302,
    position: 'absolute',
  },
});

export default Container;
