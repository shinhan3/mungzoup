import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import CardContainer1 from '../components/CardContainer1';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const PLAY1 = () => {
  return (
    <View style={styles.play}>
      <View style={styles.header}>
        <View style={[styles.headerDiv, styles.divPosition]} />
        <Text style={styles.headerTitle}>산책</Text>
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          source={require('../assets/arrow2.png')}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.mapPosition}>
          <View style={[styles.map1, styles.mapPosition]} />
          <Text style={styles.text}>지도</Text>
        </View>
        <CardContainer1 />
      </View>
      <View style={[styles.favoriteListBtn, styles.arrowIconLayout]}>
        <Image
          style={[styles.arrowIcon1, styles.arrowIconLayout]}
          source={require('../assets/arrow3.png')}
        />
        <Text style={[styles.favoriteListLink, styles.play1Clr]}>
          즐겨찾기 목록 보기
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  arrowIconLayout: {
    height: 24,
    position: 'absolute',
  },
  mydogClr: {
    color: Color.colorDarkgray_200,
    textAlign: 'center',
    position: 'absolute',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  play1Clr: {
    color: Color.new1,
    textAlign: 'center',
    position: 'absolute',
  },
  play1Typo: {
    top: 26,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
  },
  mapPosition: {
    height: 360,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  headerDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    height: 52,
  },
  headerTitle: {
    marginLeft: -102,
    left: '50%',
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 25,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    top: 13,
    position: 'absolute',
  },
  arrowIcon: {
    left: 14,
    width: 26,
    top: 13,
    height: 24,
    overflow: 'hidden',
  },
  header: {
    height: 52,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  map1: {
    backgroundColor: Color.colorGainsboro_200,
  },
  text: {
    top: 43,
    left: 73,
    fontSize: FontSize.size_31xl,
    color: Color.colorBlack,
    width: 224,
    height: 171,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  main: {
    top: 105,
    height: 638,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  arrowIcon1: {
    left: 124,
    width: 24,
    top: 0,
    overflow: 'hidden',
  },
  favoriteListLink: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansKRRegular,
    left: 0,
    top: 0,
  },
  favoriteListBtn: {
    top: 72,
    left: 212,
    width: 148,
  },
  play: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 805,
    overflow: 'hidden',
  },
});

export default PLAY1;
