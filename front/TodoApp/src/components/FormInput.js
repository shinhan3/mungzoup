import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const FormInput = () => {
  const [backgroundTextInput, setBackgroundTextInput] = useState('시바견');
  const [backgroundTextInput1, setBackgroundTextInput1] =
    useState('2019년 07월 15일');
  const [backgroundTextInput2, setBackgroundTextInput2] = useState('멍줍이');

  return (
    <View style={styles.inputform}>
      <View style={[styles.weight, styles.weightPosition]}>
        <Text style={styles.input}>7kg</Text>
        <Text style={[styles.text, styles.textPosition]}>무게</Text>
      </View>
      <View style={[styles.kind, styles.kindPosition]}>
        <TextInput
          style={[styles.background1, styles.backgroundBorder]}
          value={backgroundTextInput}
          onChangeText={setBackgroundTextInput}
        />
        <Text style={styles.input}>시바견</Text>
        <Text style={[styles.text, styles.textPosition]}>품종</Text>
      </View>
      <View style={[styles.birth, styles.kindPosition]}>
        <TextInput
          style={[styles.background1, styles.backgroundBorder]}
          value={backgroundTextInput1}
          onChangeText={setBackgroundTextInput1}
        />
        <Text style={styles.input}>2019년 07월 15일</Text>
        <Text style={[styles.text, styles.textPosition]}>생일</Text>
      </View>
      <View style={[styles.name, styles.kindPosition]}>
        <TextInput
          style={[styles.background1, styles.backgroundBorder]}
          value={backgroundTextInput2}
          onChangeText={setBackgroundTextInput2}
        />
        <Text style={styles.input}>멍줍이</Text>
        <Text style={[styles.text, styles.textPosition]}>이름</Text>
      </View>
      <Image
        style={[styles.profileimageIcon, styles.text3Layout]}
        source={require('../assets/profileimage1.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weightPosition: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  backgroundBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    backgroundColor: Color.bgWhite,
  },
  textPosition: {
    width: 262,
    left: 0,
    position: 'absolute',
  },
  kindPosition: {
    right: 2,
    left: 0,
    position: 'absolute',
  },
  maleboxLayout: {
    height: 40,
    width: 262,
    left: 0,
    position: 'absolute',
  },
  sexbackgroundLayout: {
    borderRadius: Border.br_3xs,
    height: 40,
    top: 0,
  },
  text3Layout: {
    width: 131,
    position: 'absolute',
  },
  input: {
    left: 10,
    lineHeight: 20,
    width: 242,
    height: 24,
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRRegular,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    top: 26,
    position: 'absolute',
  },
  text: {
    lineHeight: 12,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    top: 0,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_xs,
    width: 262,
  },
  weight: {
    top: 499,
    left: 2,
  },
  background1: {
    top: 18,
    left: 0,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    backgroundColor: Color.bgWhite,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  kind: {
    top: 419,
    bottom: 80,
  },
  birth: {
    top: 339,
    bottom: 160,
  },
  name: {
    top: 171,
    bottom: 328,
  },
  profileimageIcon: {
    left: 66,
    height: 131,
    top: 0,
  },
  inputform: {
    top: 91,
    right: 22,
    bottom: 102,
    left: 16,
    position: 'absolute',
  },
});

export default FormInput;
