import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const ContainerCardFormFilter = ({dimensions}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.petBanner2}>
      <Text style={[styles.petBannerTitle, styles.eventTextTypo]}>
        이번 주말 여기는 어때요?
      </Text>
      <View style={[styles.petBannerContent, styles.petLayout]}>
        <View style={[styles.petBannerDiv, styles.petLayout]} />
        <Text style={[styles.petBannerTxt2, styles.petPosition]}>
          <Text style={styles.text}>{`멍줍이 추천하는
`}</Text>
          <Text style={styles.text1}>나들이 장소 줍줍</Text>
          <Text style={styles.text}>하자!</Text>
        </Text>
        <Text
          style={[
            styles.petBannerTxt1,
            styles.petPosition,
          ]}>{`멍줍이 ‘전국 반려동물 동반 가능 문화시설 위치 데이터’를
기반으로 분석했어요.`}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(navigation);
            navigation.navigate('PLAY2');
          }}>
          <View
            style={[styles.recommandplacebtn, styles.recommandplacebtnLayout]}>
            <View
              style={[styles.recommandplacediv, styles.recommandplacebtnLayout]}
            />
            <Image
              style={[styles.arrowIcon, styles.iconPosition]}
              source={require('../assets/arrow1.png')}
            />
            <View style={[styles.recommandplacelink, styles.eventTextLayout]}>
              <Text style={[styles.eventText, styles.eventTextLayout]}>
                보러가기
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Image
          style={[styles.petBannerImgIcon, styles.iconPosition]}
          source={dimensions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventTextTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
    left: 0,
  },
  petLayout: {
    height: 150,
    width: 302,
    left: 0,
    position: 'absolute',
  },
  petPosition: {
    left: 25,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    position: 'absolute',
  },
  recommandplacebtnLayout: {
    height: 25,
    width: 91,
    position: 'absolute',
  },
  iconPosition: {
    overflow: 'hidden',
    position: 'absolute',
  },
  eventTextLayout: {
    width: 54,
    position: 'absolute',
  },
  petBannerTitle: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_200,
    textAlign: 'left',
    position: 'absolute',
  },
  petBannerDiv: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightsteelblue_100,
    top: 0,
  },
  text: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  text1: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  petBannerTxt2: {
    top: 46,
    fontSize: FontSize.size_mid,
  },
  petBannerTxt1: {
    top: 18,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.notoSansKRRegular,
  },
  recommandplacediv: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.new1,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.5,
    top: 0,
    left: 0,
    height: 25,
    width: 91,
  },
  arrowIcon: {
    left: 66,
    width: 22,
    height: 20,
    top: 3,
  },
  eventText: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhitesmoke_100,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
    left: 0,
  },
  recommandplacelink: {
    left: 15,
    height: 19,
    top: 3,
  },
  recommandplacebtn: {
    top: 105,
    left: 26,
  },
  petBannerImgIcon: {
    height: '53.6%',
    width: '32.09%',
    top: '25.33%',
    right: '4.01%',
    bottom: '21.07%',
    left: '63.91%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  petBannerContent: {
    top: 38,
  },
  petBanner2: {
    top: 195,
    height: 188,
    width: 302,
    position: 'absolute',
    left: 0,
  },
});

export default ContainerCardFormFilter;
