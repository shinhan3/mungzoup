import * as React from 'react';
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

const MenuPlay1 = ({style}) => {
  return (
    <View style={[styles.menuPlay, style]}>
      <Text style={styles.play}>플레이</Text>
      <Image
        style={styles.heartImgIcon}
        source={require('../assets/heardimg.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  play: {
    top: 26,
    left: -2,
    fontSize: FontSize.size_xs + 2,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.colorDarkgray_200,
    textAlign: 'center',
    position: 'absolute',
  },
  heartImgIcon: {
    top: 0,
    left: 0,
    height: 25,
    overflow: 'hidden',
    position: 'absolute',
    width: 25,
  },
  menuPlay: {
    height: 38,
    width: 32,
  },
});

export default MenuPlay1;
