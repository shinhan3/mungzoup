import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const FilteredCardForm1 = () => {
  return (
    <View style={[styles.list2, styles.list2Layout]}>
      <View style={styles.line2} />
      <View style={[styles.background, styles.divPosition]} />
      <Image
        style={styles.recommendImgIcon}
        source={require('../assets/recommendimg.png')}
      />
      <Image
        style={styles.toggleDownbtnIcon}
        source={require('../assets/toggle-downbtn.png')}
      />
      <View style={[styles.insertplaceBtn, styles.divLayout]}>
        <View style={[styles.div, styles.divLayout]} />
        <Text style={[styles.txt, styles.txtTypo]}>{`+ 내 장소 `}</Text>
      </View>
      <Text style={styles.recommendTxt}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`종로구민회관 `}</Text>
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.text}>
            <Text style={styles.text4}>{`문예회관
`}</Text>
          </Text>
          <Text style={[styles.text5, styles.txtTypo]}>
            서울특별시 종로구 지봉로5길 7-5
          </Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list2Layout: {
    width: 360,
    position: 'absolute',
  },
  divPosition: {
    backgroundColor: Color.bgWhite,
    top: 0,
    left: 0,
  },
  divLayout: {
    height: 16,
    position: 'absolute',
  },
  txtTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  line2: {
    top: 121,
    borderColor: Color.colorDarkgray_200,
    borderTopWidth: 1,
    width: 361,
    height: 1,
    borderStyle: 'solid',
    left: 0,
    position: 'absolute',
  },
  background: {
    height: 121,
    width: 360,
    position: 'absolute',
  },
  recommendImgIcon: {
    top: 9,
    left: 35,
    width: 100,
    height: 97,
    position: 'absolute',
  },
  toggleDownbtnIcon: {
    height: '9.87%',
    width: '3.08%',
    top: '50.99%',
    right: '16.92%',
    bottom: '39.14%',
    left: '80%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
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
    height: 16,
    position: 'absolute',
    top: 0,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  insertplaceBtn: {
    top: 80,
    left: 145,
    width: 40,
    height: 16,
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
    top: 39,
    left: 144,
    textAlign: 'left',
    width: 212,
    height: 74,
    position: 'absolute',
  },
  list2: {
    top: 119,
    height: 122,
    left: 0,
  },
});

export default FilteredCardForm1;
