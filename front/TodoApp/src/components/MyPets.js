import React, {useCallback, useContext, useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import hi from '../image/puppy.png';
import my from '../assets/my.png';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import {USERID} from '../UserId';
import LocationContext from '../test/LocationContext ';

function MyPets(props) {
  const userId = USERID;
  console.log('pet Map');
  console.log(userId);
  console.log('porps', props);
  // const initMy = porps.mylocation;
  // console.log(initMy);
  // const {latitude, longitude} = useContext(LocationContext);
  const mapRef = useRef();
  // const mylocation =
  //   porps.mylocation.longitude < 0
  //     ? {latitude: latitude, longitude: longitude}
  //     : porps.mylocation;
  const mylocation = props.mylocation;
  console.log('porps123', mylocation.latitude, mylocation.longitude);
  console.log('porps', mylocation);
  console.log('porps', mylocation);

  const moveMapToLocation = () => {
    const newCoordinate = {
      latitude: latitude, // 이동할 위치의 위도
      longitude: longitude, // 이동할 위치의 경도
    };
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: newCoordinate.latitude,
        longitude: newCoordinate.longitude,
        // latitudeDelta: 0.005,
        // longitudeDelta: 0.005,
      });
    }
  };
  // moveMapToLocation();
  console.log(mylocation.latitude, mylocation.longitude, 'aaa');
  console.log(mylocation, 'aaa');
  const mylat = mylocation.latitude;
  const mylon = mylocation.longitude;

  return (
    // <View style={{flex: 1}}>
    <MapView
      // ref={mapRef}
      style={{flex: 1}}
      // provider={PROVIDER_GOOGLE}
      // customMapStyle={MapStyle}
      initialRegion={{
        // latitude: initPet[0].petLatitude,
        // longitude: initPet[0].petLongitude,
        latitude: props.pets[0].petLatitude,
        longitude: props.pets[0].petLongitude,
        latitudeDelta: 0.0025,
        longitudeDelta: 0.0025,
      }}>
      {props.pets.map((pet, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: pet.petLatitude,
            longitude: pet.petLongitude,
          }}
          title={pet.name}
          // description="테스트"
        >
          <Image
            source={hi}
            style={{width: 35, height: 35}}
            resizeMethod="auto"></Image>
        </Marker>
      ))}
      <Marker
        coordinate={
          mylocation
          // latitude: mylat,
          // longitude: mylon,
        }
        title="내 위치">
        <Image
          source={my}
          style={{width: 35, height: 35}}
          resizeMethod="auto"></Image>
      </Marker>
    </MapView>
    // </View>
  );
}
const MapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {featureType: 'road', elementType: 'geometry', stylers: [{color: '#38414e'}]},
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
export default MyPets;
