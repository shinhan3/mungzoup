import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FontSize, Color, FontFamily, Border} from '../GlobalStyles';

const WalkingBoxForm = () => {
  return (
    <View style={styles.walkingBox}>
      <Image
        style={[styles.backgroundIcon, styles.iconLayout]}
        source={require('../assets/background.png')}
      />
      <View style={styles.walksummary}>
        <View style={styles.title}>
          <Text style={styles.text}>산책 요약</Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            source={require('../assets/vector.png')}
          />
        </View>
        <View style={styles.group}>
          <Text style={[styles.km, styles.kmTypo]}>km</Text>
          <Text style={[styles.text1, styles.textTypo]}>12</Text>
        </View>
        <View style={[styles.walktime, styles.walktimeLayout]}>
          <Text style={[styles.text2, styles.textTypo]}>100</Text>
          <Text style={[styles.text3, styles.kmTypo]}>분</Text>
          <View style={[styles.walktimeChild, styles.walktimeLayout]} />
        </View>
        <Image
          style={styles.mingcuterightLineIcon}
          source={require('../assets/mingcuterightline.png')}
        />
        <Text style={styles.text4}>2/1</Text>
        <Image
          style={[styles.graphicon, styles.iconLayout]}
          source={require('../assets/graphicon.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  kmTypo: {
    height: 15,
    fontSize: FontSize.size_mini,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 12,
    position: 'absolute',
  },
  textTypo: {
    width: 46,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    height: 27,
    textAlign: 'left',
    color: Color.colorBlack,
    lineHeight: 12,
    left: 0,
    position: 'absolute',
  },
  walktimeLayout: {
    width: 65,
    position: 'absolute',
  },
  backgroundIcon: {
    width: '100%',
    right: '0%',
    borderRadius: Border.br_xs,
    bottom: '0%',
    top: '0%',
    height: '100%',
    maxWidth: '100%',
    left: '0%',
  },
  text: {
    top: 3,
    left: 30,
    fontSize: FontSize.size_smi,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    width: 56,
    height: 17,
    textAlign: 'left',
    color: Color.colorBlack,
    lineHeight: 12,
    position: 'absolute',
  },
  vectorIcon: {
    width: '26.16%',
    right: '73.84%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    maxWidth: '100%',
    left: '0%',
  },
  title: {
    top: 1,
    width: 86,
    height: 22,
    left: 0,
    position: 'absolute',
  },
  km: {
    top: 2,
    left: 29,
    width: 33,
  },
  text1: {
    top: 0,
  },
  group: {
    top: 51,
    left: 90,
    width: 62,
    height: 27,
    position: 'absolute',
  },
  text2: {
    top: 5,
  },
  text3: {
    top: 7,
    left: 41,
    width: 17,
  },
  walktimeChild: {
    backgroundColor: Color.colorGainsboro_300,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_200,
    borderRightWidth: 1,
    height: 29,
    top: 0,
    left: 0,
  },
  walktime: {
    top: 46,
    left: 17,
    height: 32,
  },
  mingcuterightLineIcon: {
    left: 263,
    width: 20,
    height: 20,
    top: 0,
    overflow: 'hidden',
    position: 'absolute',
  },
  text4: {
    top: 4,
    left: 224,
    fontSize: FontSize.size_4xs,
    textAlign: 'right',
    width: 40,
    height: 11,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    lineHeight: 12,
    position: 'absolute',
  },
  graphicon: {
    height: '43.59%',
    width: '24.73%',
    top: '43.59%',
    right: '5.65%',
    bottom: '12.82%',
    left: '69.61%',
  },
  walksummary: {
    top: 11,
    left: 10,
    width: 283,
    height: 78,
    position: 'absolute',
  },
  walkingBox: {
    height: '27.6%',
    width: '96.49%',
    top: '36.07%',
    right: '3.51%',
    bottom: '36.34%',
    left: '0%',
    position: 'absolute',
  },
});

export default WalkingBoxForm;
