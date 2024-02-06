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

const MenuPet1 = ({style}) => {
  return (
    <View style={[styles.menuPet, style]}>
      <Text style={styles.mydog}>마이댕</Text>
      <Image
        style={styles.petIcon}
        source={require('../assets/peticon1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mydog: {
    top: 26,
    left: 2,
    fontSize: FontSize.size_5xs,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.colorDarkgray_200,
    textAlign: 'center',
    position: 'absolute',
  },
  petIcon: {
    top: 0,
    left: 0,
    height: 25,
    overflow: 'hidden',
    position: 'absolute',
    width: 25,
  },
  menuPet: {
    height: 38,
    width: 25,
  },
});

export default MenuPet1;
