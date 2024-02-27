import * as React from 'react';
import {Text, StyleSheet, View, Image, ScrollView, Alert} from 'react-native';
import FormContainer from '../components/FormContainer';
import CardContainer from '../components/CardContainer';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SyncStorage from 'react-native-sync-storage';
import {USERID} from '../UserId';
import HeaderComponent from '../components/HeaderComponent';

const Frame = props => {
  const [data, setData] = React.useState([]);
  // const [userId, setUserId] = React.useState([]);
  const userId = USERID;
  console.log(userId, 'ddd');

  useFocusEffect(
    React.useCallback(() => {
      console.log('마운트될 떄 된다.1');
      axios
        .get(`http://192.168.0.88:5000/getIssuedPageData.do/${userId}`)
        .then(res => {
          console.log(res.data[0][1]);
          if (res.data[0][1] != null) {
            setData([...res.data[0]]);
          } else {
            Alert.alert('', '멍줍카드 먼저 발급 후 이용해주세요', [
              {
                text: '카드 발급',
                onPress: () => {
                  console.log('alert');
                  props.navigation.navigate('CardInsert');
                },
                style: 'destructive',
              },
              {
                text: '취소',
                onPress: () => {
                  console.log('alert');
                  props.navigation.navigate('MyDaeng');
                },
                style: 'destructive',
              },
            ]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }, []),
  );
  return (
    <ScrollView>
      <HeaderComponent
        navigation={props.navigation}
        dimensionCode={require('../assets/arrow8.png')}
        benefits="멍줍 카드"
        backBool={false}></HeaderComponent>
      {data.length > 0 && (
        <View style={styles.view}>
          <View style={styles.main}>
            <FormContainer props={props} />
            <View style={{marginLeft: 15}}>
              <Text style={styles.bannerTitle}>
                <Text style={styles.text}>{`멍줍 서비스 `}</Text>
                <Text style={styles.text1}>{data[0]}개월</Text>
                <Text style={styles.text}> 째 이용 중</Text>
              </Text>
            </View>
            <View style={[styles.eventBanner1, styles.eventLayout]}>
              <View style={[styles.eventDiv, styles.eventLayout]} />
              <View style={styles.eventText}>
                <Text style={styles.headerMenu}>
                  <Text style={styles.text}>{`내 댕댕이를 위한 서비스
여기에 `}</Text>
                  <Text style={styles.text1}>다</Text>
                  <Text style={styles.text}> 있다!</Text>
                </Text>
              </View>
              <Image
                style={[styles.phoneBenefitIcon, styles.menuDivPosition]}
                source={require('../assets/phone-benefit.png')}
              />
            </View>
            <View style={{marginLeft: 2}}>
              <CardContainer data={data} />
            </View>
          </View>
          {/* <View style={styles.headerPosition}>
            <View style={[styles.headerDiv, styles.headerPosition]} />
            <Text style={[styles.headerTitle, styles.headerTitleFlexBox]}>
              멍줍 카드
            </Text>
          </View> */}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  eventLayout: {
    width: 316,
    position: 'absolute',
  },
  menuDivPosition: {
    top: 0,
    position: 'absolute',
  },
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
    color: Color.colorDarkgray_200,
    top: 26,
    textAlign: 'center',
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    top: 0,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  text: {
    color: Color.colorDarkslategray_200,
  },
  text1: {
    color: Color.new1,
  },
  bannerTitle: {
    top: 625,
    left: 64,
    fontFamily: FontFamily.iBMPlexSansKRBold,
    textAlign: 'left',
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    position: 'absolute',
  },
  eventDiv: {
    top: 11,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorLightsteelblue_100,
    height: 120,
    left: 0,
  },
  headerMenu: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.notoSansKRBold,
    top: 0,
    textAlign: 'left',
    fontWeight: '700',
    left: 0,
    width: 300,
    position: 'absolute',
  },
  eventText: {
    top: 46,
    left: 40,
    width: 168,
    height: 50,
    position: 'absolute',
  },
  phoneBenefitIcon: {
    left: 183,
    width: 131,
    height: 136,
  },
  eventBanner1: {
    top: 682,
    left: 13,
    height: 136,
    marginLeft: 10,
  },
  main: {
    top: 52,
    height: 818,
    width: 360,
    left: 0,
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
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 35,
    color: Color.colorDarkslategray_200,
    textAlign: 'center',
    fontSize: FontSize.size_xl,
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 981,
    overflow: 'hidden',
    // marginLeft: 27,
  },
});

export default Frame;
