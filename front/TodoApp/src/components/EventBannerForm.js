import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FontFamily, Border, Color, FontSize} from '../GlobalStyles';

const EventBannerForm = () => {
  return (
    <View style={[styles.eventBanner1, styles.eventLayout1]}>
      <View style={[styles.eventDiv1, styles.eventLayout1]} />
      <View style={[styles.event1, styles.eventLayout]}>
        <View style={[styles.eventText1, styles.textPosition]}>
          <Text style={[styles.text2, styles.textPosition]}>
            <Text style={[styles.text, styles.textTypo]}>멍</Text>
            <Text style={styles.text1}>
              <Text style={styles.text3}>{`포인트가 모이면 
기부가 `}</Text>
              <Text style={styles.textTypo}>커</Text>
              <Text style={styles.text3}>!진다</Text>
            </Text>
          </Text>
          <Text style={[styles.text11, styles.text11Position]}>
            멍줍과 함께하는 기부 동참 캠페인
          </Text>
        </View>
        <View style={[styles.eventImage1, styles.eventLayout]}>
          <Text style={[styles.donation, styles.text11Position]}>
            <Text style={styles.text6}>*멍줍은</Text>
            <Text style={styles.textTypo}> 포인핸드 정기후원</Text>
            <Text style={styles.text6}>과 함께합니다.</Text>
          </Text>
          <Image
            style={styles.logoIcon}
            source={require('../assets/logo1.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventLayout1: {
    height: 120,
    width: 316,
    left: 0,
    position: 'absolute',
  },
  eventLayout: {
    height: 89,
    position: 'absolute',
  },
  textPosition: {
    left: 0,
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text11Position: {
    textAlign: 'center',
    left: 0,
    position: 'absolute',
  },
  eventDiv1: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorBlanchedalmond,
    top: 0,
  },
  text: {
    fontSize: FontSize.size_mid,
    color: Color.new1,
  },
  text3: {
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
  },
  text1: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  text2: {
    top: 14,
    textAlign: 'left',
  },
  text11: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorBlack,
    top: 0,
  },
  eventText1: {
    top: 11,
    width: 138,
    height: 62,
  },
  text6: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  donation: {
    top: 80,
    fontSize: FontSize.size_7xs,
    color: Color.colorDimgray_100,
  },
  logoIcon: {
    left: 7,
    width: 80,
    height: 75,
    top: 0,
    position: 'absolute',
  },
  eventImage1: {
    left: 159,
    width: 103,
    top: 0,
  },
  event1: {
    top: 16,
    left: 38,
    width: 262,
  },
  eventBanner1: {
    top: 31,
  },
});

export default EventBannerForm;
