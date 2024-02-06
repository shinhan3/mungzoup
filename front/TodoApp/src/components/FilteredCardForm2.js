import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const FilteredCardForm2 = () => {
  return (
    <View style={[styles.list4, styles.list4Layout]}>
      <View style={[styles.background, styles.divPosition]} />
      <Image
        style={styles.recommendImgIcon}
        source={require('../assets/recommendimg.png')}
      />
      <Image
        style={styles.toggleDownbtnIcon}
        source={require('../assets/toggle-downbtn.png')}
      />
      <Text style={styles.recommendTxt}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`사직커피 `}</Text>
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.text}>
            <Text style={styles.text4}>{`카페
`}</Text>
          </Text>
          <Text style={[styles.text5, styles.txtTypo]}>
            서울특별시 종로구 사직로 49-4
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
  list4Layout: {
    height: 119,
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
  background: {
    height: 119,
    width: 360,
    position: 'absolute',
  },
  recommendImgIcon: {
    top: 13,
    left: 36,
    width: 100,
    height: 97,
    position: 'absolute',
  },
  toggleDownbtnIcon: {
    height: '10.08%',
    width: '3.08%',
    top: '47.9%',
    right: '20.81%',
    bottom: '42.02%',
    left: '76.11%',
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
    top: 34,
    left: 144,
    textAlign: 'left',
    position: 'absolute',
  },
  div: {
    borderRadius: 2,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.5,
    width: 40,
    height: 16,
    backgroundColor: Color.bgWhite,
    top: 0,
    left: 0,
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
    top: 78,
    left: 145,
    width: 40,
    height: 16,
  },
  list4: {
    top: 360,
    left: 0,
    height: 119,
    width: 360,
  },
});

export default FilteredCardForm2;
