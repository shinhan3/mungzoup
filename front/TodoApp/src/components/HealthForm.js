import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FontSize, Color, FontFamily, Border} from '../GlobalStyles';

const HealthForm = () => {
  return (
    <View style={[styles.healthbox, styles.healthboxPosition]}>
      <Image
        style={[styles.backgroundIcon, styles.graphiconLayout]}
        source={require('../assets/background1.png')}
      />
      <View style={styles.walksummary}>
        <View style={styles.title}>
          <Text style={styles.text}>건강 요약</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.text1}>질병</Text>
        </View>
        <View style={styles.walktime}>
          <Text style={styles.text2}>7</Text>
          <Text style={[styles.kg, styles.kgTypo]}>kg</Text>
          <Text style={[styles.text3, styles.kgTypo]}>有</Text>
          <View style={[styles.walktimeChild, styles.walktimeChildPosition]} />
        </View>
        <Image
          style={styles.mingcuterightLineIcon}
          source={require('../assets/mingcuterightline1.png')}
        />
        <Text style={styles.text4}>건강리포트</Text>
        <Image
          style={[styles.graphicon, styles.graphiconLayout]}
          source={require('../assets/graphicon1.png')}
        />
        <Image
          style={[
            styles.materialSymbolshomeHealthIcon,
            styles.walktimeChildPosition,
          ]}
          source={require('../assets/materialsymbolshomehealth.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  healthboxPosition: {
    left: '0%',
    bottom: '0%',
  },
  graphiconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  kgTypo: {
    height: 17,
    fontSize: FontSize.size_mini,
    top: 8,
    width: 20,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 12,
    position: 'absolute',
  },
  walktimeChildPosition: {
    top: 0,
    position: 'absolute',
  },
  backgroundIcon: {
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    borderRadius: Border.br_xs,
    left: '0%',
    bottom: '0%',
  },
  text: {
    fontSize: FontSize.size_smi,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    textAlign: 'left',
    color: Color.colorBlack,
    lineHeight: 12,
    left: 0,
    top: 0,
    height: 19,
    width: 56,
    position: 'absolute',
  },
  title: {
    left: 29,
    height: 19,
    width: 56,
    top: 7,
    position: 'absolute',
  },
  text1: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    height: 31,
    width: 46,
    textAlign: 'left',
    color: Color.colorBlack,
    lineHeight: 12,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  group: {
    top: 60,
    left: 89,
    height: 31,
    width: 46,
    position: 'absolute',
  },
  text2: {
    top: 6,
    textAlign: 'right',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    height: 31,
    width: 46,
    color: Color.colorBlack,
    lineHeight: 12,
    left: 0,
    position: 'absolute',
  },
  kg: {
    left: 52,
  },
  text3: {
    left: 131,
  },
  walktimeChild: {
    left: 16,
    backgroundColor: Color.colorGainsboro_300,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_200,
    borderRightWidth: 1,
    width: 65,
    height: 33,
  },
  walktime: {
    top: 55,
    width: 151,
    height: 36,
    left: 0,
    position: 'absolute',
  },
  mingcuterightLineIcon: {
    top: 2,
    left: 262,
    height: 23,
    width: 20,
    overflow: 'hidden',
    position: 'absolute',
  },
  text4: {
    left: 214,
    fontSize: FontSize.size_4xs,
    width: 49,
    height: 13,
    color: Color.colorDimgray_100,
    textAlign: 'right',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    lineHeight: 12,
    top: 7,
    position: 'absolute',
  },
  graphicon: {
    height: '42.48%',
    width: '24.82%',
    top: '45.01%',
    right: '5.67%',
    bottom: '12.51%',
    left: '69.5%',
  },
  materialSymbolshomeHealthIcon: {
    left: 3,
    width: 24,
    height: 27,
    overflow: 'hidden',
    top: 0,
  },
  walksummary: {
    top: 10,
    left: 11,
    width: 282,
    height: 91,
    position: 'absolute',
  },
  healthbox: {
    height: '31.42%',
    width: '96.49%',
    top: '68.58%',
    right: '3.51%',
    position: 'absolute',
  },
});

export default HealthForm;
