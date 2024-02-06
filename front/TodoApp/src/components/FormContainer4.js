import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const FormContainer4 = () => {
  return (
    <View style={[styles.list3, styles.list3Layout]}>
      <View style={styles.line3} />
      <View style={[styles.background, styles.divPosition]} />
      <Image
        style={styles.recommendImgIcon}
        source={require('../assets/recommendimg.png')}
      />
      <Image
        style={styles.toggleUpbtnIcon}
        source={require('../assets/toggle-downbtn.png')}
      />
      <Text style={styles.recommendTxt}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`자하미술관 `}</Text>
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.text}>
            <Text style={styles.text4}>{`미술관
`}</Text>
          </Text>
          <Text style={[styles.text5, styles.txtTypo]}>
            서울특별시 종로구 창의문로5가길 46
          </Text>
        </Text>
      </Text>
      <View style={[styles.insertplaceBtn, styles.divLayout]}>
        <View style={[styles.div, styles.divLayout]} />
        <Text style={[styles.txt, styles.divLayout]}>{`+ 내 장소 `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list3Layout: {
    width: 360,
    position: 'absolute',
  },
  divPosition: {
    backgroundColor: Color.bgWhite,
    top: 0,
    left: 0,
  },
  txtTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  divLayout: {
    height: 16,
    position: 'absolute',
  },
  line3: {
    top: 120,
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    borderStyle: 'solid',
    left: 0,
    position: 'absolute',
  },
  background: {
    height: 119,
    width: 360,
    position: 'absolute',
  },
  recommendImgIcon: {
    top: 12,
    left: 36,
    width: 100,
    height: 97,
    position: 'absolute',
  },
  toggleUpbtnIcon: {
    height: '9.98%',
    width: '3.08%',
    top: '41.56%',
    right: '13.58%',
    bottom: '48.46%',
    left: '83.33%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  text1: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_100,
  },
  text: {
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
  },
  text4: {
    fontSize: FontSize.size_4xs,
  },
  text5: {
    fontSize: FontSize.size_3xs,
  },
  text2: {
    color: Color.colorDarkgray_200,
  },
  recommendTxt: {
    top: 28,
    left: 144,
    textAlign: 'left',
    position: 'absolute',
  },
  div: {
    borderRadius: 2,
    borderColor: Color.new1,
    borderWidth: 0.5,
    width: 40,
    height: 16,
    backgroundColor: Color.bgWhite,
    top: 0,
    left: 0,
    borderStyle: 'solid',
  },
  txt: {
    left: 5,
    fontSize: FontSize.size_5xs_1,
    letterSpacing: 0,
    lineHeight: 14,
    color: Color.new1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    height: 16,
    top: 0,
  },
  insertplaceBtn: {
    top: 73,
    left: 145,
    width: 40,
    height: 16,
  },
  list3: {
    top: 240,
    height: 120,
    left: 0,
  },
});

export default FormContainer4;
