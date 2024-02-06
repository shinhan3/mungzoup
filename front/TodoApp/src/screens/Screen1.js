import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontFamily, FontSize, Color} from '../GlobalStyles';

const Screen1 = () => {
  return (
    <LinearGradient
      style={styles.lineargradient}
      // locations={[0, 0.65]}
      colors={['rgba(163, 174, 98, 0.2)', '#62aea9']}>
      <Text style={styles.text}>
        <Text style={styles.text1}>멍멍이</Text>
        <Text style={styles.text2}>를 위한 모든 혜택을</Text>
        <Text style={styles.text3}>{` `}</Text>
        <Text style={styles.text1}>줍줍</Text>
        <Text style={styles.text3}>!</Text>
      </Text>
      <Image
        style={styles.kakaotalk202401312359531820Icon}
        source={require('../assets/kakaotalk-20240131-235953182-01-1.png')}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
  },
  text2: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  text3: {
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
  },
  text: {
    top: 531,
    left: 69,
    fontSize: FontSize.size_base,
    color: Color.bgWhite,
    textAlign: 'right',
    width: 226,
    position: 'absolute',
  },
  kakaotalk202401312359531820Icon: {
    top: 382,
    left: 64,
    width: 231,
    height: 122,
    position: 'absolute',
  },
  lineargradient: {
    flex: 1,
    width: '100%',
    height: 936,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
});

export default Screen1;
