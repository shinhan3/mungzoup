import * as React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import FormContainer3 from '../components/FormContainer3';
import HeaderComponent from '../components/HeaderComponent';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import {useFocusEffect} from '@react-navigation/core';
import axios from 'axios';
import FooterComponent from './FooterComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USERID} from '../UserId';

const Frame1 = props => {
  const userId = USERID;
  const [discountPrice, setDiscountPrice] = React.useState({
    userName: '',
    discount: 0,
  });
  console.log(props.navigation, 'aaaaaa');
  useFocusEffect(
    React.useCallback(() => {
      console.log('test2007');
      axios
        .get(
          `http://petprojectspringboot.azurewebsites.net/getUserNameAndDiscountPrice.do/${userId}`,
        )
        .then(res => {
          console.log(res.data);
          setDiscountPrice({
            userName: res.data[0][0],
            discount: Number(res.data[0][1]),
          });
        })
        .catch(err => {
          console.log(err);
        });
    }, []),
  );
  return (
    <>
      <ScrollView>
        <View style={styles.view}>
          <HeaderComponent
            navigation={props.navigation}
            dimensionCode={require('../assets/arrow8.png')}
            benefits="미라클 혜택"
            go="PLAYmainwonny"
            backBool={true}
          />
          <View
            style={{
              marginLeft: 27,
            }}>
            <FormContainer3 discount={discountPrice.discount} />
            <Text style={styles.ment1}>
              <Text>
                <Text
                  style={[
                    styles.text,
                    styles.textTypo2,
                  ]}>{`멍줍 카드를 사용한 똑똑한 소비자를 위한 추천!
`}</Text>
                <Text style={[styles.text1, styles.textTypo]}>{`멍줍 카드만의 
미라클 조합으로, 최대 혜택을!
 
`}</Text>
              </Text>
            </Text>
            <Text style={styles.ment2}>
              <Text style={[styles.text2, styles.textTypo]}>
                {discountPrice.userName}
              </Text>
              <Text style={[styles.text3, styles.textTypo2]}>
                님의 이번달 혜택은?
              </Text>
            </Text>
            <Text style={styles.manual}>
              <Text style={styles.manualTxt}>
                <Text style={styles.textTypo}> </Text>
                <Text
                  style={
                    styles.text4
                  }>{`-자세한 카드별 서비스 내용 및 서비스 적용 기준은 이전달 결제 내역으로 적용됩니다.
 -자세한 문의는 멍줍 고객센터(1588-3333)로 문의 부탁드립니다. 
`}</Text>
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <FooterComponent
        petBoolean={false}
        playBoolean={false}
        cardBoolean={true}
        navigation={props.navigation}></FooterComponent>
    </>
  );
};

const styles = StyleSheet.create({
  textTypo2: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
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
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_100,
  },
  text1: {
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  ment1: {
    top: 95,
    left: 22,
    height: 99,
    width: 292,
    textAlign: 'left',
    lineHeight: 30,
    position: 'absolute',
  },
  text2: {
    color: '#627cae',
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text3: {
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray_200,
  },
  ment2: {
    top: 194,
    left: 20,
    width: 310,
    height: 40,
    textAlign: 'left',
    lineHeight: 30,
    position: 'absolute',
  },
  text4: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  manualTxt: {
    width: '100%',
  },
  manual: {
    marginLeft: -163,
    top: 746,
    left: '50%',
    fontSize: FontSize.size_3xs,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    // height: 103,
    color: Color.colorDarkgray_200,
    width: 292,
    textAlign: 'left',
    position: 'absolute',
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 892,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Frame1;
