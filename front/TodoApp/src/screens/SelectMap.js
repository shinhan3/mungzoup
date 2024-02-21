import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import axios from 'axios';
import LocationContext from '../test/LocationContext ';

export function getDistanceFormula(lat1, lon1, lat2, lon2) {
  //하버시안 공식
  //위도와 경도로 남은 거리를 계산하는 메서드(기본 단위 : km)
  const R = 6371; // 지구의 반경(단위: km)
  var dLat = deg2rad(lat2 - lat1); //위도의 차를 라디안 단위로 변환
  var dLon = deg2rad(lon2 - lon1); //경도의 차를 라디안 단위로 변환
  //a -> 하버사인 공식의 중간 단계
  //두 지점 사이의 대원거리를 계산하기 위한 중간 값을 나타냄.
  // 두 지점 간의 위도 차이(dLat)와 경도 차이(dLon)을 이용
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  //c -> 실제 대원거리를 나타내는 값
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //d -> 대원거리와 지구의 반지름을 곱하여 두 지점 사이의 거리를 나타내는 값
  // 거리 기본 단위가 km이므로, x 1000을 하여 meter로 변환
  var d = R * c;
  d = d.toFixed(1); //소수점 두자리까지만 나타냄
  return d;
}

function deg2rad(x) {
  //라디안 단위로 변환하는 과정
  return x * (Math.PI / 180);
}

function SelectMap(props) {
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  const {latitude, longitude} = useContext(LocationContext);
  const mapRef = useRef(); // MapView 참조를 저장할 ref 생성

  /*  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, distanceFilter: 10}, //10m 이동할 떄 마다 Check
    );

    //컴포넌트가 언마운트될 때 watch 중지
    return () => Geolocation.clearWatch(watchId);
  }, []);*/

  if (latitude === null || longitude === null) {
    // 위치 정보를 가져오는 동안은 빈 뷰를 렌더링
    return <View />;
  }

  // 현재 위치로 이동하는 함수
  const moveToCurrentLocation = () => {
    if (mapRef.current) {
      // mapRef.current가 존재하는지 확인
      mapRef.current.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.play}>
          <View style={styles.header}>
            <View style={[styles.headerDiv, styles.divPosition]} />
            <Text style={styles.headerTitle}>내 장소 등록</Text>
            <TouchableOpacity
              onPress={() => {
                console.log(props.navigation);
                props.navigation.goBack('InsertWalkSpot');
              }}>
              <Image
                style={[styles.arrowIcon, styles.arrowIconLayout]}
                source={require('../assets/arrow2.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{flex: 1}}>
            <MapView
              ref={mapRef}
              style={{flex: 0.74}}
              provider={PROVIDER_GOOGLE}
              customMapStyle={MapStyle}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0025,
                longitudeDelta: 0.0025,
              }}
              onPress={d => {
                const clickedLatitude = d.nativeEvent.coordinate.latitude;
                const clickedLongitude = d.nativeEvent.coordinate.longitude;
                axios
                  .get(
                    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${d.nativeEvent.coordinate.longitude}&y=${d.nativeEvent.coordinate.latitude}`,
                    {
                      headers: {
                        Authorization:
                          'KakaoAK b3e94d38f2ac985e22246a5d1d0da2ea',
                      },
                    },
                  )
                  .then(response => {
                    console.log(response.data);
                    console.log(response.data.documents[0].address_name);
                    console.log(response.data.documents[0].y); //위도
                    console.log(response.data.documents[0].x); //경도
                    const location = response.data.documents[0];
                    const distance = getDistanceFormula(
                      latitude,
                      longitude,
                      clickedLatitude,
                      clickedLongitude,
                    );
                    console.log(`남은 거리: ${distance} km`);
                    console.log('==========================================');

                    props.navigation.navigate('InsertWalkSpot', {
                      address: response.data.documents[0].address_name,
                      latitude: clickedLatitude,
                      longitude: clickedLongitude,
                      distance: distance,
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }}>
              <Marker
                coordinate={{latitude: latitude, longitude: longitude}}
                title="ANT 빌딩"
                description="테스트">
                <Image
                  source={require('../assets/profileimage.png')}
                  style={{width: 30, height: 30}}
                  resizeMethod="auto"></Image>
              </Marker>
            </MapView>
            <Button title="내 위치로 이동" onPress={moveToCurrentLocation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  divPosition1: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  txtFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  mydogClr: {
    color: Color.colorDarkgray_200,
    textAlign: 'center',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  txtClr: {
    color: Color.new1,
    textAlign: 'center',
  },
  play1Typo: {
    top: 26,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
    position: 'absolute',
  },
  txtLayout: {
    height: 30,
    position: 'absolute',
  },
  haederDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    height: 52,
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    width: 204,
    height: 35,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  header: {
    height: 52,
    width: 360,
  },
  div: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bgWhite,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 1,
    height: 29,
    width: 100,
  },
  txt: {
    left: 13,
    fontSize: FontSize.size_mini,
    letterSpacing: 1,
    lineHeight: 30,
    width: 75,
    color: Color.new1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    height: 30,
    top: 0,
  },
  insertplaceBtn: {
    top: 92,
    left: 252,
    width: 100,
  },
  play: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 892,
    overflow: 'hidden',
  },
});

const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];
export default SelectMap;
