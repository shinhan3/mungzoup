import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import axios from 'axios';

const CardContainer = ({data}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.cardimg, styles.cardimgLayout]}>
        <LinearGradient
          style={[styles.cardDiv1, styles.cardimgLayout1]}
          locations={[0, 1]}
          colors={['#62aea9', 'rgba(163, 174, 98, 0.5)']}>
          <Text style={[styles.title, styles.titleTypo]}>
            <Text style={styles.mg}>{`MG멍줍 카드
`}</Text>
            <Text style={styles.text}>미라크루</Text>
          </Text>
          <Image
            style={[styles.logoIcon, styles.logoIconPosition1]}
            source={require('../assets/logo.png')}
          />
          <Image
            style={styles.cardNameIcon}
            source={require('../assets/cardname.png')}
          />
        </LinearGradient>
      </View>
      <View style={[styles.background, styles.logoIconPosition]} />
      <View style={[styles.cardinfo3, styles.cardinfoLayout]}>
        <Text style={styles.title1}>구독 시작일</Text>
        <Text style={[styles.content, styles.contentTypo]}>{data[2]}</Text>
      </View>
      <View style={[styles.cardinfo2, styles.cardinfoPosition]}>
        <Text style={styles.title1}>멍줍카드</Text>
        <Text style={styles.contentTypo}>
          <Text style={styles.text1}>{data[1]}개월</Text>
          <Text style={styles.text2}> 째 구독 혜택 중</Text>
        </Text>
      </View>
      <View style={[styles.cardinfo1, styles.cardinfoPosition]}>
        <Text style={styles.title1}>이번 달 이용금액</Text>
        <Text style={[styles.content2, styles.logoIconPosition]}>
          {data[3]}원
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardimgLayout: {
    height: 453,
    width: 251,
    left: 251,
    // top: 0,
    transform: [
      {
        rotate: '90deg',
      },
    ],
    position: 'absolute',
  },
  cardimgLayout1: {
    height: 453,
    width: 251,
    left: 0,
    // top: 0,
    transform: [
      {
        rotate: '90deg',
      },
    ],
    position: 'absolute',
  },
  titleTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.iBMPlexSansKRBold,
    fontWeight: '700',
  },
  logoIconPosition: {
    left: -1,
    position: 'absolute',
  },
  logoIconPosition1: {
    left: 108,
    top: 311,
    position: 'absolute',
  },
  cardinfoLayout: {
    height: 29,
    left: 127,
  },
  contentTypo: {
    top: 14,
    fontSize: FontSize.size_3xs,
    left: 0,
    textAlign: 'left',
    fontFamily: FontFamily.iBMPlexSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  cardinfoPosition: {
    top: 377,
    position: 'absolute',
  },
  cardDiv: {
    top: 251,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'transparent',
    // transform: [
    //   {
    //     rotate: '90deg',
    //   },
    // ],
  },

  cardDiv1: {
    top: 251,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'transparent',
    // transform: [
    //   {
    //     rotate: '90deg',
    //   },
    // ],
  },
  mg: {
    fontSize: FontSize.size_2xl_5,
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  title: {
    top: 100,
    color: Color.bgWhite,
    left: 110,
    position: 'absolute',
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  logoIcon: {
    borderTopLeftRadius: 10,
    width: 143,
    height: 141,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    top: 0,
  },
  cardNameIcon: {
    top: 220,
    left: 0,
    width: 142,
    height: 160,
    transform: [
      {
        rotate: '180deg',
      },
    ],
    position: 'absolute',
  },
  cardimg: {
    transform: [
      {
        rotate: '90deg',
      },
    ],
    top: 0,
  },
  background: {
    top: 366,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: Color.bgWhite,
    height: 87,
    width: 253,
  },
  title1: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_3xs,
    left: 0,
    textAlign: 'left',
    fontFamily: FontFamily.iBMPlexSansKRBold,
    fontWeight: '700',
    top: 0,
    position: 'absolute',
  },
  content: {
    color: Color.colorDarkslategray_200,
  },
  cardinfo3: {
    top: 412,
    width: 60,
    position: 'absolute',
  },
  text1: {
    color: Color.new1,
  },
  text2: {
    color: Color.colorDarkslategray_200,
  },
  cardinfo2: {
    width: 108,
    height: 29,
    left: 127,
  },
  content2: {
    top: 16,
    fontSize: FontSize.size_mid_2,
    color: Color.colorDarkslategray_200,
    textAlign: 'left',
    fontFamily: FontFamily.iBMPlexSansKRBold,
    fontWeight: '700',
  },
  cardinfo1: {
    width: 83,
    height: 42,
    left: 20,
  },
  card: {
    top: 145,
    left: 54,
    height: 453,
    width: 251,
    position: 'absolute',
  },
});

export default CardContainer;
