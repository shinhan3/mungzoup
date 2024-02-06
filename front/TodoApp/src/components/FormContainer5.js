import * as React from 'react';
import {TextInput, StyleSheet, Text, View, Image} from 'react-native';
import {FontSize, Border, Color, FontFamily} from '../GlobalStyles';

const FormContainer5 = () => {
  return (
    <View style={styles.inputform}>
      <View style={[styles.weight, styles.weightPosition]}>
        <TextInput
          style={[styles.background, styles.weightPosition]}
          placeholder="몇 kg 인지 숫자로 적어주세요."
        />
        <Text style={[styles.input, styles.textTypo]}>
          몇 kg 인지 숫자로 적어주세요.
        </Text>
        <Text style={[styles.text, styles.textPosition]}>무게</Text>
      </View>
      <View style={[styles.kind, styles.kindPosition]}>
        <TextInput
          style={[styles.background, styles.weightPosition]}
          placeholder="품종을 입력해주세요."
        />
        <Text style={[styles.input, styles.textTypo]}>
          품종을 입력해주세요.
        </Text>
        <Text style={[styles.text, styles.textPosition]}>품종</Text>
      </View>
      <View style={[styles.birth, styles.kindPosition]}>
        <TextInput
          style={[styles.background, styles.weightPosition]}
          placeholder="날짜를 선택해주세요."
        />
        <Text style={[styles.input, styles.textTypo]}>
          날짜를 선택해주세요.
        </Text>
        <Text style={[styles.text, styles.textPosition]}>생일</Text>
      </View>
      <View style={styles.sexselect}>
        <Text style={[styles.text, styles.textPosition]}>성별</Text>
      </View>
      <View style={[styles.name, styles.kindPosition]}>
        <TextInput
          style={[styles.background, styles.weightPosition]}
          placeholder="반려동물의 이름을 적어주세요."
          keyboardType="default"
          textContentType="givenName"
        />
        <Text style={[styles.input, styles.textTypo]}>
          반려동물의 이름을 적어주세요.
        </Text>
        <Text style={[styles.text, styles.textPosition]}>이름</Text>
      </View>
      <Image
        style={[styles.profileimageIcon, styles.textPosition]}
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
  textTypo: {
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  textPosition: {
    top: 0,
    position: 'absolute',
  },
  kindPosition: {
    right: 2,
    left: 0,
    position: 'absolute',
  },
  inputPosition: {
    top: 26,
    position: 'absolute',
  },
  background: {
    top: 18,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.bgWhite,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    left: 0,
  },
  input: {
    left: 10,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDarkgray_200,
    display: 'flex',
    alignItems: 'center',
    width: 242,
    height: 24,
    top: 26,
    position: 'absolute',
  },
  text: {
    lineHeight: 12,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.colorDarkslategray_200,
    width: 262,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    left: 0,
  },
  weight: {
    top: 499,
    left: 2,
  },
  kind: {
    top: 419,
    bottom: 80,
  },
  birth: {
    top: 339,
    bottom: 160,
  },
  sexselect: {
    top: 251,
    height: 66,
    width: 262,
    left: 0,
    position: 'absolute',
  },
  name: {
    top: 171,
    bottom: 328,
  },
  profileimageIcon: {
    left: 66,
    height: 131,
    width: 131,
  },
  inputform: {
    top: 91,
    right: 22,
    bottom: 102,
    left: 16,
    position: 'absolute',
  },
});

export default FormContainer5;
