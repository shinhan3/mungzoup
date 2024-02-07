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

const FormContainer2 = ({dimensions, productDimensions, navigation}) => {
  console.log(navigation, 'aaa');
  return (
    <View style={[styles.petBanner1, styles.divPosition]}>
      <Text style={[styles.petBannerTitle, styles.textTypo]}>
        내 펫과 산책을 했다면?
      </Text>
      <View style={[styles.petBannerContent, styles.petLayout]}>
        <View style={[styles.petBannerDiv, styles.petLayout]} />
        <Text style={styles.petBannerTxt}>
          <Text style={styles.textTypo}>
            <Text style={styles.text1}>산책</Text>
          </Text>
          <Text style={styles.text2}>
            <Text style={styles.textTypo}>{` `}</Text>
            <Text style={styles.text4}>{`인증하고
포인트 `}</Text>
            <Text style={styles.textTypo}>줍줍</Text>
            <Text style={styles.text4}>하자!</Text>
          </Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PLAY1');
          }}>
          <View style={[styles.petwalkbtn, styles.petwalkbtnLayout]}>
            <View style={[styles.petwalkdiv, styles.petwalkbtnLayout]} />
            <View style={[styles.petwalklink, styles.titlePosition]}>
              <Text style={[styles.eventText, styles.textTypo]}>
                산책하러 가기
              </Text>
            </View>
          </View>
          <Image
            style={[styles.arrowIcon, styles.iconPosition]}
            source={require('../assets/arrow.png')}
          />
        </TouchableOpacity>
        <View style={styles.petBannerImg}>
          <View style={[styles.card, styles.cardLayout]}>
            <View style={[styles.cardDiv, styles.cardLayout]} />
            <Image
              style={[styles.icIcon, styles.iconPosition]}
              source={require('../assets/ic.png')}
            />
            <Text style={[styles.title, styles.titlePosition]}>{`MG멍줍 카드
미라크루`}</Text>
            <Image style={styles.image41Icon} source={dimensions} />
          </View>
          <Image
            style={[styles.dogImgIcon, styles.iconPosition]}
            source={productDimensions}
          />
          <Image
            style={[styles.dollarsIcon, styles.iconPosition]}
            source={require('../assets/dollars.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divPosition: {
    left: 0,
    top: 0,
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  petLayout: {
    height: 120,
    width: 302,
    position: 'absolute',
  },
  petwalkbtnLayout: {
    height: 25,
    width: 133,
    position: 'absolute',
  },
  titlePosition: {
    top: 3,
    position: 'absolute',
  },
  iconPosition: {
    overflow: 'hidden',
    position: 'absolute',
  },
  cardLayout: {
    height: 37,
    width: 72,
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
    backgroundColor: Color.colorLavender,
    left: 0,
    top: 0,
  },
  text1: {
    color: Color.colorBlack,
  },
  text4: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  text2: {
    color: Color.colorDarkslategray_200,
  },
  petBannerTxt: {
    top: 22,
    fontSize: FontSize.size_mid,
    width: 137,
    left: 24,
    textAlign: 'left',
    position: 'absolute',
  },
  petwalkdiv: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.new1,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.5,
    left: 0,
    top: 0,
  },
  eventText: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhitesmoke_100,
    textAlign: 'center',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  petwalklink: {
    left: 21,
    width: 90,
    height: 19,
  },
  petwalkbtn: {
    top: 83,
    left: 24,
  },
  arrowIcon: {
    top: 86,
    left: 121,
    width: 20,
    height: 20,
  },
  cardDiv: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorLightsteelblue_200,
    left: 0,
    top: 0,
  },
  icIcon: {
    top: 14,
    left: 5,
    width: 12,
    height: 12,
  },
  title: {
    left: 4,
    fontSize: FontSize.size_10xs,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    color: Color.colorDimgray_200,
    width: 25,
    height: 7,
    textAlign: 'left',
  },
  image41Icon: {
    top: 16,
    left: 39,
    width: 30,
    height: 15,
    position: 'absolute',
  },
  card: {
    top: 34,
    left: 12,
  },
  dogImgIcon: {
    top: 39,
    left: 52,
    width: 49,
    height: 46,
  },
  dollarsIcon: {
    height: '26.82%',
    width: '90.35%',
    top: '0%',
    right: '9.65%',
    bottom: '73.18%',
    left: '0%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  petBannerImg: {
    top: 18,
    left: 178,
    width: 102,
    height: 85,
    position: 'absolute',
  },
  petBannerContent: {
    top: 38,
    left: 1,
  },
  petBanner1: {
    width: 303,
    height: 158,
    position: 'absolute',
  },
});

export default FormContainer2;
