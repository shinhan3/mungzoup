import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';

const CardContainer1 = () => {
  return (
    <View style={[styles.content, styles.contentLayout]}>
      <View style={[styles.background, styles.contentLayout]} />
      <View style={styles.contentheadertext}>
        <Text style={[styles.distancetext1, styles.distancetextTypo]}>
          <Text style={styles.text}>{`0.0
`}</Text>
          <Text style={styles.km}>총 거리 (km)</Text>
        </Text>
        <Text style={[styles.distancetext3, styles.distancetextTypo]}>
          <Text style={styles.text}>{`00:00
`}</Text>
          <Text style={styles.km}>산책 시간</Text>
        </Text>
        <Text style={[styles.distancetext2, styles.distancetextTypo]}>
          <Text style={styles.text}>{`0.0
`}</Text>
          <Text style={styles.km}>남은 거리(km)</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.button, styles.buttonLayout]}
        start-btn="산책 스팟 출발">
        <View style={[styles.backgroundbtn, styles.buttonLayout]} />
        <Text style={styles.textbtn}>산책 스팟 출발</Text>
      </Pressable>
      <View style={styles.acpoint}>
        <Text style={[styles.acpointtext, styles.acpointtextTypo]}>
          산책 포인트
        </Text>
        <Image
          style={styles.acpointimgIcon}
          source={require('../assets/acpointimg.png')}
        />
        <Text style={[styles.acpointamounttext, styles.acpointtextTypo]}>
          5,000
        </Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout: {
    height: 307,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  distancetextTypo: {
    width: 94,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    height: 60,
    top: 0,
    position: 'absolute',
  },
  buttonLayout: {
    height: 54,
    width: 320,
    position: 'absolute',
  },
  acpointtextTypo: {
    width: 100,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  background: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.bgWhite,
    top: 0,
  },
  text: {
    fontSize: FontSize.size_11xl,
  },
  km: {
    fontSize: FontSize.size_mini,
  },
  distancetext1: {
    left: 0,
  },
  distancetext3: {
    left: 230,
  },
  distancetext2: {
    left: 118,
  },
  contentheadertext: {
    top: 20,
    width: 324,
    height: 60,
    left: 20,
    position: 'absolute',
  },
  backgroundbtn: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.new1,
    top: 0,
    left: 0,
  },
  textbtn: {
    marginTop: -25,
    marginLeft: -70,
    top: '50%',
    left: '50%',
    color: Color.bgWhite,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 50,
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  button: {
    top: 204,
    left: 20,
    height: 54,
    width: 320,
  },
  acpointtext: {
    top: 8,
    left: 55,
    height: 32,
    fontSize: FontSize.size_xl,
    color: Color.colorDimgray_100,
    width: 100,
  },
  acpointimgIcon: {
    height: '93.29%',
    width: '16.23%',
    top: '6.71%',
    right: '83.77%',
    bottom: '0%',
    left: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  acpointamounttext: {
    left: 157,
    color: Color.new1,
    height: 40,
    fontSize: FontSize.size_11xl,
    top: 0,
  },
  acpoint: {
    top: 132,
    left: 53,
    width: 257,
    height: 45,
    position: 'absolute',
  },
  line: {
    top: 100,
    borderStyle: 'solid',
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    left: 0,
    position: 'absolute',
  },
  content: {
    top: 331,
  },
});

export default CardContainer1;
