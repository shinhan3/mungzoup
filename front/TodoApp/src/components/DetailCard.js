import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const DetailCard = () => {
  return (
    <View style={[styles.content, styles.contentLayout]}>
      <View style={[styles.background, styles.contentLayout]} />
      <View style={styles.contenthead}>
        <Text style={[styles.contentTitle, styles.filterTypo]}>지도 중심</Text>
        <Text style={[styles.filter, styles.filterTypo]}> 결제순</Text>
        <View style={styles.line} />
        <Image
          style={styles.menuimgIcon}
          source={require('../assets/menuimg.png')}
        />
      </View>
      <View style={styles.lines}>
        <View style={[styles.line1, styles.lineLayout]} />
        <View style={[styles.line2, styles.lineLayout]} />
        <View style={[styles.line3, styles.lineLayout]} />
      </View>
      <View style={[styles.recommend1, styles.recommendPosition]}>
        <Text style={[styles.mainText, styles.mainFlexBox]}>
          <Text style={styles.textTypo1}>
            <Text style={styles.text1}>00병원</Text>
            <Text style={styles.text2}>{` `}</Text>
          </Text>
          <Text style={styles.m50001000}>
            <Text style={styles.text3}>
              <Text style={styles.text4}>{`여행/레저
`}</Text>
              <Text style={styles.text5}>{`용산구 용산동 2가 
`}</Text>
            </Text>
            <Text style={styles.text4}>
              <Text style={styles.text2}>{`500 m `}</Text>
              <Text style={styles.text6}>|</Text>
              <Text style={styles.text3}>{` `}</Text>
              <Text style={styles.text8}>게시글 수 5,000 결제건수 1,000</Text>
            </Text>
          </Text>
        </Text>
        <Pressable style={styles.button} detail1="자세히">
          <View style={[styles.backgroundbtn, styles.buttonLayout]} />
          <Text style={[styles.textBtn, styles.textTypo]}>{`자세히
`}</Text>
        </Pressable>
        <View style={[styles.recommandPlace, styles.recommandPosition]}>
          <Text style={[styles.content2, styles.contentTypo]}>
            게시글 수에 비해 실 결제건수가 월등히 높아요!
          </Text>
          <View style={[styles.recommandPlaceDiv, styles.recommandPosition]} />
          <Text style={[styles.content1, styles.contentTypo]}>
            <Text style={styles.text5}>숨은 명소!</Text>
            <Text style={styles.text10}>{` `}</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.recommend2, styles.recommendPosition]}>
        <Text style={[styles.mainText1, styles.mainFlexBox]}>
          <Text
            style={[styles.text11, styles.textTypo1]}>{`00댕댕유치원 `}</Text>
          <Text style={styles.m50001000}>
            <Text style={styles.text3}>
              <Text style={styles.text4}>{`관광/명소
`}</Text>
              <Text style={styles.text5}>{`서대문구 연희동 산
`}</Text>
            </Text>
            <Text style={styles.text4}>
              <Text style={styles.text2}>{`1.5 km `}</Text>
              <Text style={styles.text6}>|</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={styles.text8}>
              <Text style={styles.text4}>{`게시글 수  5,000  `}</Text>
              <Text style={styles.text10}>결제건수 1,000</Text>
            </Text>
          </Text>
        </Text>
        <Pressable
          style={[styles.button1, styles.buttonLayout]}
          detail2="자세히">
          <View style={[styles.backgroundbtn1, styles.backgroundbtnLayout]} />
          <Text style={[styles.textBtn1, styles.textTypo]}>{`자세히
`}</Text>
        </Pressable>
      </View>
      <View style={styles.recommend3}>
        <Text style={[styles.mainText2, styles.mainFlexBox]}>
          <Text style={styles.textTypo1}>
            <Text style={styles.text1}>88수제애견간식샵</Text>
            <Text style={styles.text2}>{` `}</Text>
          </Text>
          <Text style={styles.m50001000}>
            <Text style={styles.text3}>
              <Text style={styles.text4}>{`관광/명소
`}</Text>
              <Text style={styles.text5}>{`서대문구 연희동 산
`}</Text>
            </Text>
            <Text style={styles.text4}>
              <Text style={styles.text2}>{`1.5 km `}</Text>
              <Text style={styles.text6}>|</Text>
              <Text style={styles.text2}>{` `}</Text>
              <Text style={styles.text8}>게시글 수 5,000 결제건수 10,000</Text>
            </Text>
          </Text>
        </Text>
        <Pressable
          style={[styles.button2, styles.buttonLayout]}
          detail3="자세히">
          <View style={[styles.backgroundbtn1, styles.backgroundbtnLayout]} />
          <Text style={[styles.textBtn1, styles.textTypo]}>{`자세히
`}</Text>
        </Pressable>
        <View style={[styles.recommandPlace, styles.recommandPosition]}>
          <Text style={[styles.content2, styles.contentTypo]}>
            게시글 수에 비해 실 결제건수가 월등히 높아요!
          </Text>
          <View style={[styles.recommandPlaceDiv, styles.recommandPosition]} />
          <Text style={[styles.content1, styles.contentTypo]}>
            <Text style={styles.text5}>숨은 명소!</Text>
            <Text style={styles.text10}>{` `}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayout: {
    height: 452,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  filterTypo: {
    height: 32,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    width: 93,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  lineLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: 'solid',
    left: 0,
    position: 'absolute',
  },
  recommendPosition: {
    width: 336,
    left: 17,
    position: 'absolute',
  },
  mainFlexBox: {
    textAlign: 'left',
    position: 'absolute',
  },
  buttonLayout: {
    height: 39,
    position: 'absolute',
  },
  textTypo: {
    color: Color.colorWhitesmoke_100,
    top: 6,
    width: 93,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    left: 0,
    position: 'absolute',
  },
  recommandPosition: {
    height: 22,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  contentTypo: {
    fontSize: FontSize.size_3xs,
    top: 4,
    textAlign: 'left',
    position: 'absolute',
  },
  textTypo1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  backgroundbtnLayout: {
    width: 69,
    backgroundColor: Color.new1,
    left: 12,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  background: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.bgWhite,
    top: 0,
  },
  contentTitle: {
    top: 0,
    left: 0,
  },
  filter: {
    top: 1,
    left: 260,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    top: -1,
    left: 159,
    borderTopWidth: 3,
    width: 43,
    height: 3,
    borderColor: Color.colorDarkgray_200,
    borderStyle: 'solid',
    position: 'absolute',
  },
  menuimgIcon: {
    height: '59.08%',
    width: '6.24%',
    top: '21.85%',
    right: '19.48%',
    bottom: '19.08%',
    left: '74.28%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  contenthead: {
    top: 19,
    width: 353,
    height: 33,
    left: 0,
    position: 'absolute',
  },
  line1: {
    top: 0,
  },
  line2: {
    top: 126,
  },
  line3: {
    top: 252,
  },
  lines: {
    top: 61,
    height: 252,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  text1: {
    color: Color.colorDarkslategray_100,
  },
  text2: {
    color: Color.colorDarkslategray_200,
  },
  text4: {
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
  },
  text5: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text3: {
    color: Color.colorDarkgray_200,
  },
  text6: {
    color: Color.colorGray,
  },
  text8: {
    color: Color.colorDarkgray_300,
  },
  m50001000: {
    fontSize: FontSize.size_xs,
  },
  mainText: {
    top: 22,
    left: 0,
  },
  backgroundbtn: {
    width: 69,
    backgroundColor: Color.new1,
    left: 12,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  textBtn: {
    height: 35,
  },
  button: {
    top: 68,
    left: 244,
    height: 41,
    width: 93,
    position: 'absolute',
  },
  content2: {
    left: 69,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDarkslategray_200,
  },
  recommandPlaceDiv: {
    backgroundColor: Color.mainYellow,
    width: 63,
    borderRadius: Border.br_3xs,
    height: 22,
  },
  text10: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  content1: {
    left: 10,
    color: Color.colorBlack,
  },
  recommandPlace: {
    width: 261,
  },
  recommend1: {
    top: 72,
    height: 109,
  },
  text11: {
    color: Color.colorDarkslategray_200,
  },
  mainText1: {
    top: 0,
    left: 0,
  },
  backgroundbtn1: {
    height: 37,
    position: 'absolute',
  },
  textBtn1: {
    height: 33,
  },
  button1: {
    top: 49,
    left: 243,
    width: 93,
  },
  recommend2: {
    top: 211,
    height: 88,
  },
  mainText2: {
    top: 28,
    left: 2,
  },
  button2: {
    top: 76,
    left: 245,
    width: 93,
  },
  recommend3: {
    top: 327,
    width: 338,
    height: 115,
    left: 17,
    position: 'absolute',
  },
  content: {
    top: 264,
  },
});

export default DetailCard;
