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

const MenuPlay = ({style}) => {
  return (
    <View style={[styles.menuPlay, style]}>
      <Text style={styles.play}>PLAY</Text>
      <Image
        style={styles.heartImgIcon}
        source={require('../assets/heartimg.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  play: {
    top: 26,
    left: 3,
    fontSize: FontSize.size_5xs,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
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

export default MenuPlay;
