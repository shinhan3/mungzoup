import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';

const FilteredCardForm = () => {
  return (
    <View style={styles.list1}>
      <View style={styles.background} />
      <View style={[styles.insertplaceBtn, styles.txtLayout]}>
        <View style={styles.div} />
        <Text style={[styles.txt, styles.txtTypo]}>{`+ 내 장소 `}</Text>
      </View>
      <Image
        style={styles.recommendImgIcon}
        source={require('../assets/recommendimg.png')}
      />
      <Text style={styles.recommendTxt}>
        <Text style={styles.text}>
          <Text style={styles.text1}>{`짚풀생활사박물관 `}</Text>
        </Text>
        <Text style={styles.text2}>
          <Text style={styles.text}>
            <Text style={styles.text4}>{`박물관
`}</Text>
          </Text>
          <Text style={[styles.text5, styles.txtTypo]}>
            서울특별시 종로구 성균관로4길 45
          </Text>
        </Text>
      </Text>
      <View style={[styles.toggle, styles.toggleLayout]}>
        <View style={[styles.toggleChild, styles.line1Border]} />
        <View style={[styles.opentimeline, styles.opentimelineLayout]}>
          <View style={styles.opentimePosition}>
            <Image
              style={[styles.opentimeChild, styles.opentimePosition]}
              source={require('../assets/rectangle-2710.png')}
            />
            <Text style={[styles.text6, styles.textTypo]}>운영시간</Text>
          </View>
          <Text style={[styles.opentimetext, styles.textTypo]}>
            월~금 09:00~21:00, 토 09:00~20:00
          </Text>
        </View>
        <View style={[styles.opentimeline1, styles.opentimelineLayout]}>
          <View style={styles.opentimePosition}>
            <Image
              style={[styles.opentimeChild, styles.opentimePosition]}
              source={require('../assets/rectangle-2710.png')}
            />
            <Text style={[styles.text7, styles.textTypo]}>휴무일</Text>
          </View>
          <Text style={[styles.opentimetext, styles.textTypo]}>
            매주 토, 일, 법정공휴일
          </Text>
        </View>
      </View>
      <Image
        style={styles.toggleUpbtnIcon}
        source={require('../assets/toggle-upbtn.png')}
      />
      <View style={[styles.line1, styles.line1Border]} />
    </View>
  );
};

const styles = StyleSheet.create({
  txtLayout: {
    height: 16,
    position: 'absolute',
  },
  txtTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  toggleLayout: {
    height: 29,
    width: 156,
  },
  line1Border: {
    borderColor: Color.colorDarkgray_200,
    borderStyle: 'solid',
    left: 0,
    position: 'absolute',
  },
  opentimelineLayout: {
    height: 9,
    width: 101,
    left: 4,
    position: 'absolute',
  },
  opentimePosition: {
    width: 21,
    height: 9,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRRegular,
    top: 1,
    textAlign: 'left',
    position: 'absolute',
  },
  background: {
    backgroundColor: Color.bgWhite,
    height: 119,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  div: {
    borderRadius: 2,
    borderColor: Color.new1,
    borderWidth: 0.5,
    borderStyle: 'solid',
    height: 16,
    width: 40,
    backgroundColor: Color.bgWhite,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  txt: {
    fontSize: FontSize.size_5xs_1,
    letterSpacing: 0,
    lineHeight: 14,
    color: Color.new1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    left: 5,
    height: 16,
    position: 'absolute',
    top: 0,
  },
  insertplaceBtn: {
    top: 69,
    width: 40,
    height: 16,
    left: 145,
  },
  recommendImgIcon: {
    top: 12,
    left: 35,
    width: 100,
    height: 97,
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
    letterSpacing: 0.8,
  },
  text5: {
    fontSize: FontSize.size_3xs,
  },
  text2: {
    color: Color.colorDarkgray_200,
  },
  recommendTxt: {
    top: 27,
    left: 144,
    textAlign: 'left',
    position: 'absolute',
  },
  toggleChild: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderWidth: 0.3,
    height: 29,
    width: 156,
    top: 0,
  },
  opentimeChild: {
    borderRadius: Border.br_12xs_5,
  },
  text6: {
    left: 3,
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.notoSansKRRegular,
    top: 1,
    color: Color.colorDarkgray_200,
  },
  opentimetext: {
    left: 24,
    fontSize: FontSize.size_8xs,
    color: Color.colorDarkslategray_200,
    width: 77,
    height: 7,
    fontFamily: FontFamily.notoSansKRRegular,
    top: 1,
  },
  opentimeline: {
    top: 5,
  },
  text7: {
    fontSize: FontSize.size_9xs,
    fontFamily: FontFamily.notoSansKRRegular,
    top: 1,
    color: Color.colorDarkgray_200,
    left: 5,
  },
  opentimeline1: {
    top: 17,
  },
  toggle: {
    top: 66,
    left: 145,
    height: 29,
    width: 156,
    position: 'absolute',
  },
  toggleUpbtnIcon: {
    height: '10.08%',
    width: '3.08%',
    top: '41.18%',
    right: '16.36%',
    bottom: '48.74%',
    left: '80.56%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  line1: {
    top: 119,
    borderTopWidth: 1,
    width: 361,
    height: 1,
  },
  list1: {
    height: 119,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
});

export default FilteredCardForm;
