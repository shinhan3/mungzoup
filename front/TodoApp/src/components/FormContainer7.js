import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';

const FormContainer7 = () => {
  return (
    <View style={styles.chart}>
      <View style={styles.date}>
        <Text style={[styles.date1, styles.dateTypo]}>28</Text>
        <Text style={[styles.date4, styles.dateTypo]}>31</Text>
        <View style={[styles.date5, styles.timeLayout]}>
          <Image
            style={[styles.date5Child, styles.timeLayout]}
            source={require('../assets/ellipse-3.png')}
          />
          <Text style={[styles.text, styles.dateTypo]}>2/1</Text>
        </View>
        <Text style={[styles.date6, styles.dateTypo]}>2/2</Text>
        <Text style={[styles.date3, styles.dateTypo]}>30</Text>
        <Text style={[styles.date2, styles.dateTypo]}>29</Text>
      </View>
      <View style={styles.line}>
        <Image
          style={[styles.bottomLineIcon, styles.lineIconLayout]}
          source={require('../assets/bottom-line.png')}
        />
        <Image
          style={[styles.middleLineIcon, styles.lineIconLayout]}
          source={require('../assets/bottom-line.png')}
        />
        <Image
          style={[styles.topLineIcon, styles.lineIconLayout]}
          source={require('../assets/top-line.png')}
        />
      </View>
      <View style={[styles.time, styles.timeLayout]}>
        <Text style={[styles.time2, styles.timeTypo]}>60분</Text>
        <Text style={[styles.time1, styles.timeTypo]}>30분</Text>
      </View>
      <View style={styles.graph}>
        <View style={[styles.bar6, styles.barLayout1]} />
        <View style={styles.bar5} />
        <View style={[styles.bar4, styles.barLayout1]} />
        <View style={styles.bar3} />
        <View style={[styles.bar2, styles.barLayout]} />
        <View style={[styles.bar1, styles.barLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateTypo: {
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    top: 4,
    position: 'absolute',
  },
  timeLayout: {
    width: 40,
    position: 'absolute',
  },
  lineIconLayout: {
    height: 3,
    width: 300,
    left: 0,
    position: 'absolute',
  },
  timeTypo: {
    width: 39,
    fontFamily: FontFamily.notoSansKRRegular,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    position: 'absolute',
  },
  barLayout1: {
    height: 78,
    width: 15,
    backgroundColor: Color.new1,
    borderRadius: Border.br_3xs,
    position: 'absolute',
  },
  barLayout: {
    height: 45,
    top: 56,
    backgroundColor: Color.colorGainsboro_200,
    width: 15,
    borderRadius: Border.br_3xs,
    position: 'absolute',
  },
  date1: {
    width: 27,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    top: 4,
    color: Color.colorDimgray_100,
    left: 0,
  },
  date4: {
    left: 150,
    width: 27,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    top: 4,
    color: Color.colorDimgray_100,
  },
  date5Child: {
    top: 0,
    height: 40,
    left: 0,
  },
  text: {
    left: 6,
    color: Color.bgWhite,
    width: 27,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    top: 4,
  },
  date5: {
    left: 192,
    top: 0,
    height: 40,
  },
  date6: {
    left: 246,
    width: 30,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    top: 4,
    color: Color.colorDimgray_100,
  },
  date3: {
    left: 98,
    width: 27,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    top: 4,
    color: Color.colorDimgray_100,
  },
  date2: {
    left: 49,
    width: 27,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    top: 4,
    color: Color.colorDimgray_100,
  },
  date: {
    top: 110,
    left: 26,
    width: 276,
    height: 40,
    position: 'absolute',
  },
  bottomLineIcon: {
    top: 60,
  },
  middleLineIcon: {
    top: 30,
  },
  topLineIcon: {
    top: 0,
  },
  line: {
    top: 43,
    height: 63,
    width: 300,
    left: 0,
    position: 'absolute',
  },
  time2: {
    color: Color.new1,
    top: 0,
    left: 0,
  },
  time1: {
    top: 31,
    left: 1,
    color: Color.colorDimgray_100,
  },
  time: {
    top: 27,
    left: 307,
    height: 62,
  },
  bar6: {
    top: 24,
    left: 250,
  },
  bar5: {
    left: 200,
    width: 15,
    backgroundColor: Color.new1,
    borderRadius: Border.br_3xs,
    height: 102,
    top: 0,
    position: 'absolute',
  },
  bar4: {
    top: 23,
    left: 150,
  },
  bar3: {
    top: 44,
    left: 100,
    height: 58,
    backgroundColor: Color.colorGainsboro_200,
    width: 15,
    borderRadius: Border.br_3xs,
    position: 'absolute',
  },
  bar2: {
    left: 50,
  },
  bar1: {
    left: 0,
  },
  graph: {
    left: 30,
    width: 265,
    height: 102,
    top: 0,
    position: 'absolute',
  },
  chart: {
    top: 71,
    width: 347,
    height: 150,
    left: 0,
    position: 'absolute',
  },
});

export default FormContainer7;
