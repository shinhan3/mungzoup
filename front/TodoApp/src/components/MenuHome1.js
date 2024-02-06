import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

const MenuHome1 = ({style}) => {
  return (
    <View style={[styles.menuHome, style]}>
      <Image
        style={styles.cardImgIcon}
        source={require('../assets/cardimg1.png')}
      />
      <Text style={styles.mungzoupcard}>멍줍 카드</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImgIcon: {
    height: '59.46%',
    width: '68.75%',
    top: '0%',
    right: '15.63%',
    bottom: '40.54%',
    left: '15.63%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  mungzoupcard: {
    top: 25,
    left: 0,
    fontSize: FontSize.size_5xs,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.colorDarkgray_200,
    textAlign: 'center',
    position: 'absolute',
  },
  menuHome: {
    width: 32,
    height: 37,
  },
});

export default MenuHome1;
