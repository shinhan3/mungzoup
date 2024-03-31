import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {FontFamily, Border, Color, FontSize} from '../GlobalStyles';

const CardContainer2 = () => {
  return (
    <View style={[styles.content, styles.contentPosition]}>
      <View style={[styles.background, styles.contentPosition]} />
      <Image
        style={styles.profileimageIcon}
        source={require('../assets/profileimage2.png')}
      />
      <View style={styles.content2}>
        <Image
          style={styles.leafImgIcon}
          source={require('../assets/leafimg.png')}
        />
        <Text style={[styles.txt, styles.txtFlexBox]}>
          <Text style={styles.txtTxt}>
            <Text style={styles.textTypo1}>720 kcal</Text>
            <Text style={styles.textTypo}>{`을 소모하고,
`}</Text>
            <Text style={styles.textTypo1}>2.4 kg</Text>
            <Text style={styles.textTypo}>의 탄소를 절감한 당신 칭찬해요!</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.contenttext, styles.txtPosition]}>
        <View style={[styles.maintext, styles.txtPosition]}>
          <Text style={[styles.content1, styles.txtFlexBox]}>
            <Text style={styles.txtTxt}>
              <Text
                style={[
                  styles.text2,
                  styles.textTypo,
                ]}>{`오늘 멍멍이와 `}</Text>
              <Text style={[styles.text3, styles.textTypo1]}>{`12 `}</Text>
              <Text style={[styles.text2, styles.textTypo]}>
                km를 걸었어요.
              </Text>
            </Text>
          </Text>
          <View style={styles.maintextChild} />
        </View>
        <Text style={[styles.datedetail, styles.timePosition]}>
          2월 1일 (목)
        </Text>
        <View style={[styles.imgandtime, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>
            <Text style={styles.txtTxt}>
              <Text style={[styles.text4, styles.textTypo1]}>{`100 `}</Text>
              <Text style={[styles.text5, styles.textTypo]}>분</Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    width: 360,
    left: 0,
    position: 'absolute',
  },
  txtFlexBox: {
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  txtPosition: {
    left: '50%',
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  textTypo1: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  timePosition: {
    width: 130,
    left: '50%',
    position: 'absolute',
  },
  background: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.bgWhite,
    height: 286,
    top: 0,
  },
  profileimageIcon: {
    top: 98,
    left: 91,
    width: 65,
    height: 65,
    position: 'absolute',
  },
  leafImgIcon: {
    left: 145,
    width: 31,
    height: 30,
    overflow: 'hidden',
    top: 0,
    position: 'absolute',
  },
  txtTxt: {
    width: '100%',
  },
  txt: {
    top: 35,
    fontSize: FontSize.size_base,
    height: 44,
    color: Color.colorDarkslategray_100,
    display: 'flex',
    textAlign: 'center',
    left: '50%',
    position: 'absolute',
    marginLeft: -150,
    width: 300,
  },
  content2: {
    top: 319,
    left: 30,
    height: 79,
    width: 300,
    position: 'absolute',
  },
  text2: {
    fontSize: FontSize.size_xl,
  },
  text3: {
    fontSize: FontSize.size_11xl,
  },
  content1: {
    top: 23,
    height: 40,
    color: Color.colorDarkslategray_100,
    display: 'flex',
    textAlign: 'center',
    left: '50%',
    position: 'absolute',
    marginLeft: -150,
    width: 300,
  },
  maintextChild: {
    backgroundColor: Color.colorGainsboro_300,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_200,
    borderTopWidth: 1,
    height: 83,
    width: 300,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  maintext: {
    marginLeft: -147.5,
    top: 171,
    bottom: 0,
    width: 300,
  },
  datedetail: {
    marginLeft: -152.5,
    color: Color.colorDarkgray_200,
    justifyContent: 'center',
    height: 35,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    top: 0,
  },
  text4: {
    fontSize: FontSize.size_21xl,
  },
  text5: {
    fontSize: FontSize.size_6xl,
  },
  time: {
    marginLeft: -65,
    height: 50,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    color: Color.colorDarkslategray_100,
    top: 0,
  },
  imgandtime: {
    marginLeft: -22.5,
    top: 87,
    bottom: 116,
  },
  contenttext: {
    marginLeft: -155,
    top: 19,
    bottom: 126,
    width: 305,
  },
  content: {
    top: 238,
    height: 398,
  },
});

export default CardContainer2;
