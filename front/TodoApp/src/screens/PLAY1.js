import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {Color, FontFamily, FontSize} from '../GlobalStyles';
import {getDistanceFormula} from './SelectMap';
import LocationContext from '../test/LocationContext ';
import FooterComponent from './FooterComponent';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';

function PLAY1(props) {
  var {latitude, longitude} = useContext(LocationContext);
  const [modalVisible, setModalVisible] = useState(false);
  const dslatitude = 37.559245;
  const dslongtitude = 126.92273666666667;
  const spotLongitude = props.route.params.spotLongitude;
  const spotLatitude = props.route.params.spotLatitude;

  //
  const apiKey = '5b3ce3597851110001cf624806cb60ca6dae4dd4a62063d2c4b533cd';
  const origin = useMemo(() => ({latitude, longitude}), [latitude, longitude]);
  const destination = {latitude: spotLatitude, longitude: spotLongitude};

  //
  const spotName = props.route.params.spotName;
  const spotId = props.route.params.spotId;
  const totalDistance = getDistanceFormula(
    dslatitude,
    dslongtitude,
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
  const mapRef = useRef();
  const [buttonText, setButtonText] = useState('산책 스팟 출발');
  const [gasReduction, setGasReduction] = React.useState(0);
  const [calConsumption, setCalConsumption] = React.useState(0);
  let interval = null;

  const handleWalkButton = () => {
    if (remainDistance <= 10) {
      if (isWalking) {
        setIsWalking(false);
        setHasArrived(true);
        setModalVisible(true);
        const {gasReduction, calConsumption} = kcalAndCarbon(totalDistance);
        setGasReduction(gasReduction);
        setCalConsumption(calConsumption);
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

  // 시간을 시와 분으로 변환하는 함수 00:00 문자형
  const formatTime = timeInSeconds => {
    //문자열의 길이를 최소 2로 만들고, 길이가 2보다 작을 경우 문자열의 시작 부분에 '0'을 추가
    //5 -> 05 로 변환
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const seconds = String(Math.floor(timeInSeconds % 60)).padStart(2, '0');
    const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  //DB에 저장용 Int형으로 시간 분으로 저장할 함수
  const intTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    return hours * 60 + (minutes % 60);
  };

  const kcalAndCarbon = totalDistance => {
    const gasReduction = Number((totalDistance * 200).toFixed(0)); // 1km 당 200g 감축
    const calConsumption = Number((totalDistance * 60).toFixed(0)); // 1km 당 60 kcal 소모
    return {gasReduction, calConsumption};
  };

  const modalBtnClick = () => {
    const petTime = intTime(seconds);
    const data = {
      user: {userId: 'user1'},
      spot: {spotId},
      petTime,
      distance: totalDistance,
      startLatitude: dslatitude,
      startLongitude: dslongtitude,
    };
    axios
      .post('http://10.0.2.2:5000/insertPetHistory.do', data)
      .then(res => {
        props.navigation.navigate('PLAYmainwonny');
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 현재 위치로 이동하는 함수
  const moveToCurrentLocation = () => {
    if (mapRef.current) {
      // mapRef.current가 존재하는지 확인
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0025,
        longitudeDelta: 0.0025,
      });
    }
  };

  function fetchRoute(origin, destination) {
    const url = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${apiKey}&start=${origin.longitude},${origin.latitude}&end=${destination.longitude},${destination.latitude}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        // 경로 데이터를 좌표 객체의 배열로 변환합니다.
        const coordinates = data.features[0].geometry.coordinates.map(
          ([longitude, latitude]) => ({
            latitude,
            longitude,
          }),
        );

        return coordinates;
      });
  }

  const [routeCoordinates, setRouteCoordinates] = useState(null);

  useFocusEffect(
    useCallback(() => {
      fetchRoute(origin, destination).then(coordinates => {
        setRouteCoordinates(coordinates);
      });
    }, [origin]),
  );
  return (
    <>
      {/* Header */}
      <View style={styles.head}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
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
      <MapView
        ref={mapRef}
        style={{flex: 0.6}}
        region={{
          latitude: spotLatitude,
          longitude: spotLongitude,
          latitudeDelta: 0.0025,
          longitudeDelta: 0.0025,
        }}>
        <Marker
          coordinate={{
            latitude: spotLatitude,
            longitude: spotLongitude,
          }}
          title={spotName}>
          <Image
            source={require('../assets/my.png')}
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
            source={require('../assets/profileimage.png')}
            style={{width: 30, height: 30}}
            resizeMethod="auto"></Image>
        </Marker>
        {routeCoordinates && (
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={10}
            strokeColor="pink"
          />
        )}
      </MapView>
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
              총 거리(km)
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={moveToCurrentLocation}>
              <Text style={styles.contentHeadBig2}>내 위치</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentHeadSecond}>
            <Text style={[styles.contentHeadBigText, styles.contentHeadBig3]}>
              {remainDistance}
            </Text>
            <Text style={[styles.contentHeadSmallText, styles.contentSmall2]}>
              남은 거리(km)
            </Text>
          </View>
        </View>
        {/*  //ContentHead  */}
        {/*  Contentmain  */}
        <View>
          <View style={styles.contentMainFirst}>
            <Text style={styles.contentMainSmallText}>산책 시간</Text>
            <Text style={styles.contentMainBigText}>{formatTime(seconds)}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.walkBtn,
              {
                backgroundColor:
                  isWalking && remainDistance > 0.05 ? '#D9D9D9' : '#62AEA9',
              },
            ]}
            onPress={handleWalkButton}
            disabled={!hasArrived && isWalking && remainDistance > 0.05}>
            <Text style={styles.btnText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        {/*  //Contentmain  */}
      </View>
      {/* //Content */}
      {/*  Modal  */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.notModal}>
          <View style={styles.modal}>
            <Image
              style={styles.leafImg}
              source={require('../assets/잎사귀.png')}></Image>
            <Text style={styles.modalText}>
              <View style={styles.contentBottom}>
                <Text style={styles.distanceTextBefore}>오늘 멍멍이와 </Text>
                <Text style={styles.distance}>{totalDistance}</Text>
                {/*  거리  */}
                <Text style={styles.distanceTextAfter}> km를 걸었어요.</Text>
              </View>
              <View style={styles.contentBottom2}>
                <Text style={styles.kcal}>{calConsumption}</Text>
                <Text style={styles.kcalText}> kcal를 소모하고, </Text>
              </View>
              <View style={styles.contentBottom3}>
                <Text style={styles.carbon}>{gasReduction}</Text>
                <Text style={styles.carbonText}>
                  g의 탄소를 절감한 당신 칭찬해요!
                </Text>
              </View>
            </Text>
            <TouchableHighlight
              style={styles.modalBtn}
              underlayColor="#DDDDDD"
              onPress={modalBtnClick}>
              <Text style={styles.modalBtnText}> 도착 확인 </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      {/*  //Modal  */}
      <FooterComponent
        petBoolean={false}
        playBoolean={true}
        cardBoolean={false}
        navigation={props.navigation}></FooterComponent>
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: '#2E2E2E', // 그림자 색상 설정
    elevation: 5, // Android에서 그림자 효과를 주기 위한 설정
    marginBottom: 2,
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
    marginLeft: 65,
  },
  contentHeadBig2: {
    marginLeft: 45,
    fontSize: 25,
    marginTop: 24,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
  contentHeadBig3: {
    marginLeft: 65,
  },
  contentSmall1: {
    marginLeft: 45,
  },
  contentSmall2: {
    marginLeft: 40,
  },
  contentSmall3: {
    marginLeft: 40,
  },
  contentMainFirst: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentMainSmallText: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 15,
    marginRight: 20,
  },
  contentMainBigText: {
    fontSize: 25,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
  walkBtn: {
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    height: 52,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
  modal: {
    flex: 0.5,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  notModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontFamily: FontFamily.notoSansKR,
  },
  modalBtn: {
    backgroundColor: '#62AEA9',
    width: 130,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBtnText: {
    color: 'white',
    fontSize: 20,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
  contentBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentBottom2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentBottom3: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  distanceTextBefore: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 20,
  },
  distance: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
    marginTop: 16,
  },
  distanceTextAfter: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 20,
  },
  kcal: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
  },
  kcalText: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 2,
  },
  carbon: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 24,
  },
  carbonText: {
    color: '#2E2E2E',
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 18,
    marginTop: 2,
  },
});

export default PLAY1;
