import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text, View} from 'react-native';
import {Border, Color, FontFamily, FontSize} from '../GlobalStyles';

const SkinDiseaseResult = ({disease}) => {
  return (
    <>
      {!disease ? (
        <NoResult></NoResult>
      ) : disease === '무증상' ? (
        <HealthResult></HealthResult>
      ) : (
        <UnHealthResult disease={disease}></UnHealthResult>
      )}
    </>
  );
};

function UnHealthResult({disease}) {
  return (
    <>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={[styles.background, styles.backgroundBg]} />
        <View style={{marginTop: 205, marginRight: 350}}>
          <Text style={[styles.contenttext3, styles.ai1Typo]}>
            <Text style={{color: Color.new1}}>{disease}</Text>
            <Text>(이/가) 의심되니</Text>
          </Text>
        </View>
        <Text style={[styles.contenttext2, styles.ai1Typo]}>
          병원에 가보는 건 어떠하신가요?
        </Text>
      </View>
      <Image
        style={styles.imageIcon2}
        resizeMode="cover"
        source={require('../assets/warn.png')}
      />
    </>
  );
}

function HealthResult() {
  return (
    <>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={[styles.background, styles.backgroundBg]} />
        <Text style={[styles.contenttext1, styles.ai1Typo]}>
          피부질환이 없어요!
        </Text>
      </View>
      <Image
        style={styles.imageIcon1}
        resizeMode="cover"
        source={require('../assets/heartplus.png')}
      />
    </>
  );
}

function NoResult() {
  return (
    <>
      <View style={[styles.content, styles.contentLayout]}>
        <View style={[styles.background, styles.backgroundBg]} />
        <Text style={[styles.contenttext, styles.ai1Typo]}>
          내 강아지 피부질환이 의심된다면?
        </Text>
        <Text style={[styles.contenttext2, styles.ai1Typo]}>
          병원 갈 필요 없이 1분이면 검사 끝!
        </Text>
      </View>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require('../assets/aiPlus.png')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imageIcon: {
    top: 300,
    left: 174,
    width: 55,
    height: 40,
    position: 'absolute',
  },
  imageIcon1: {
    top: 315,
    left: 174,
    width: 43.5,
    height: 37,
    position: 'absolute',
  },
  imageIcon2: {
    top: 315,
    left: 174,
    width: 43.5,
    height: 37,
    position: 'absolute',
  },
  contenttext3: {
    color: Color.colorBlack,
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontWeight: '700',
  },
  contenttext2: {
    top: 229,
    left: 77,
    color: Color.colorBlack,
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontWeight: '700',
    position: 'absolute',
  },
  ai1Typo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  content: {
    top: 159,
    left: 20,
    width: 704,
  },
  contentLayout: {
    height: 512,
    position: 'absolute',
  },
  background: {
    top: 116,
    borderStyle: 'solid',
    borderColor: Color.colorDimgray,
    borderWidth: 0.5,
    width: 340,
    height: 169,
    position: 'absolute',
  },
  backgroundBg: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  contenttext: {
    top: 205,
    left: 60,
    color: Color.colorBlack,
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontWeight: '700',
    position: 'absolute',
  },
  contenttext1: {
    top: 215,
    left: 115,
    color: Color.colorBlack,
    textAlign: 'center',
    fontSize: FontSize.size_mini,
    fontWeight: '700',
    position: 'absolute',
  },
});

export default SkinDiseaseResult;
