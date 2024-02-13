import React, {useCallback, useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import {getDistanceFormula} from './SelectMap';
import {useFocusEffect} from '@react-navigation/core';

function PLAY1(props) {
  // const latitude = 37.559245;
  // const longitude = 126.92273666666667;

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useFocusEffect(
    useCallback(() => {
      console.log('aaa');
      const watchId = Geolocation.watchPosition(
        position => {
          console.log('bbbb');
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.log('ccc');
          console.log(error.code, error.message);
        },
      );
      console.log('dddd');
      return () => Geolocation.clearWatch(watchId);
    }, []),
  );

  const spotLongitude = props.route.params.spotLongitude;
  const spotLatitude = props.route.params.spotLatitude;
  const spotName = props.route.params.spotName;
  const totalDistance = getDistanceFormula(
    latitude,
    longitude,
    spotLatitude,
    spotLongitude,
  );
  const remainDistance = getDistanceFormula(
    latitude,
    longitude,
    spotLatitude,
    spotLongitude,
  );

  //산책 시작 상태 Check
  const [isWalking, setIsWalking] = useState(false);
  //도착 상태 여부 Check
  const [hasArrived, setHasArrived] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [buttonText, setButtonText] = useState('산책 스팟 출발');

  let interval = null;

  const handleWalkButton = () => {
    if (remainDistance <= 250) {
      if (isWalking) {
        setIsWalking(false);
        setHasArrived(true);
      } else {
        setIsWalking(!isWalking);
      }
    } else if (!hasArrived) {
      setIsWalking(!isWalking);
    }
  };

  useEffect(() => {
    setButtonText(isWalking ? '산책 스팟 도착' : '산책 스팟 출발');
  }, [isWalking]);

  useEffect(() => {
    if (isWalking) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isWalking, seconds]);

  // 시간을 분과 초로 변환하는 함수
  const formatTime = timeInSeconds => {
    //문자열의 길이를 최소 2로 만들고, 길이가 2보다 작을 경우 문자열의 시작 부분에 '0'을 추가
    //5 -> 05 로 변환
    const seconds = String(Math.floor(timeInSeconds % 60)).padStart(2, '0');
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  return (
    <>
      {/* Header */}
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack('PLAYmainwonny');
          }}>
          <Image
            style={styles.arrowIcon}
            source={require('../assets/arrow2.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>산책</Text>
      </View>
      {/* //Header */}
      {/* 지도 */}
      {latitude && longitude && (
        <MapView
          style={{flex: 0.6}}
          region={{
            latitude: spotLatitude,
            longitude: spotLongitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{
              latitude: spotLatitude,
              longitude: spotLongitude,
            }}
            title={spotName}>
            <Image
              source={require('../assets/도착위치.png')}
              style={{width: 30, height: 30}}
              resizeMethod="auto"></Image>
          </Marker>
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title="내 위치">
            <Image
              source={require('../assets/my.png')}
              style={{width: 30, height: 30}}
              resizeMethod="auto"></Image>
          </Marker>
        </MapView>
      )}
      {/* //지도 */}
      {/* Content */}
      <View style={styles.content}>
        {/* ContentHead */}
        <View style={styles.contentHead}>
          <View style={styles.contentHeadFirst}>
            <Text style={[styles.contentHeadBigText, styles.contentHeadBig1]}>
              {totalDistance}
            </Text>
            <Text style={[styles.contentHeadSmallText, styles.contentSmall1]}>
              총 거리(m)
            </Text>
          </View>
          <View style={styles.contentHeadSecond}>
            <Text style={[styles.contentHeadBigText, styles.contentHeadBig2]}>
              {remainDistance}
            </Text>
            <Text style={[styles.contentHeadSmallText, styles.contentSmall2]}>
              남은 거리(m)
            </Text>
          </View>
          <View style={styles.contentHeadThird}>
            <Text style={[styles.contentHeadBigText, styles.contentHeadBig3]}>
              {formatTime(seconds)}
            </Text>
            <Text style={[styles.contentHeadSmallText, styles.contentSmall3]}>
              산책 시간
            </Text>
          </View>
        </View>
        {/*  //ContentHead  */}
        {/*  Contentmain  */}
        <View>
          <TouchableOpacity
            style={[
              styles.walkBtn,
              {
                backgroundColor:
                  isWalking && remainDistance > 250 ? '#D9D9D9' : '#62AEA9',
              },
            ]}
            onPress={handleWalkButton}
            disabled={isWalking && remainDistance > 250}>
            <Text style={styles.btnText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        {/*  //Contentmain  */}
      </View>
      {/* //Content */}
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    overflow: 'hidden',
  },
  headerTitle: {
    fontSize: 20,
    top: 9,
    marginLeft: 160,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
  },
  content: {
    flex: 0.4,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentHead: {
    flexDirection: 'row',
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '2E2E2E',
  },
  contentHeadBigText: {
    marginTop: 15,
    fontSize: 25,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
  contentHeadSmallText: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 15,
  },
  contentHeadBig1: {
    marginLeft: 50,
  },
  contentHeadBig2: {
    marginLeft: 40,
  },
  contentHeadBig3: {
    marginLeft: 40,
  },
  contentSmall1: {
    marginLeft: 55,
  },
  contentSmall2: {
    marginLeft: 40,
  },
  contentSmall3: {
    marginLeft: 42,
  },
  walkBtn: {
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    borderRadius: 10,
    marginTop: 90,
  },
  btnText: {
    color: 'white',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
});

export default PLAY1;
