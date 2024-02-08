import * as React from 'react';
import {StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import FormContainer2 from '../components/FormContainer2';
import ContainerCardFormFilter from '../components/ContainerCardFormFilter';
import Container from '../components/Container';
import FormContainer1 from '../components/FormContainer1';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
//OCR TEST_이미지 파일 읽기
import axios from 'axios';
import RNFS from 'react-native-fs';
import FormData from 'form-data';
import OcrTest from '../components/OcrTest';

const PLAYmainwonny = props => {
  console.log(props);
  return (
    <ScrollView>
      <View style={styles.playmainwonny}>
        <View style={styles.main}>
          <FormContainer2
            dimensions={require('../assets/image-41.png')}
            productDimensions={require('../assets/dogimg.png')}
            navigation={props.navigation}
          />
          <ContainerCardFormFilter
            dimensions={require('../assets/petbannerimg.png')}
          />
          <Container dimensionCode={require('../assets/petbannerimg1.png')} />
          <FormContainer1 />
        </View>
        <View style={styles.headerPosition}>
          <View style={[styles.headerDiv, styles.headerPosition]} />
          <Text style={[styles.headerTitle, styles.headerTitleFlexBox]}>
            PLAY
          </Text>
        </View>
      </View>
      <OcrTest></OcrTest>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerTitleFlexBox: {
    textAlign: 'center',
    position: 'absolute',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  playTypo: {
    top: 26,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    left: 0,
    top: 0,
    width: 360,
    position: 'absolute',
  },
  main: {
    top: 75,
    left: 18,
    width: 303,
    height: 867,
    position: 'absolute',
  },
  headerDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDarkslategray_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 35,
  },
  playmainwonny: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 1042,
    overflow: 'hidden',
  },
});

export default PLAYmainwonny;
