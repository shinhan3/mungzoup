import React, {useCallback, useContext, useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import hi from '../image/puppy.png';
import my from '../assets/my.png';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import {USERID} from '../UserId';
import LocationContext from '../test/LocationContext ';

function MyPets(porps) {
  const userId = USERID;
  console.log(userId);
  console.log('porps', porps);
  // const initMy = porps.mylocation;
  // console.log(initMy);
  const {latitude, longitude} = useContext(LocationContext);
  console.log('porps123', latitude, longitude);
  const mapRef = useRef();
  const mylocation =
    porps.mylocation.longitude < 0
      ? {latitude: latitude, longitude: longitude}
      : porps.mylocation;
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
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  };
  moveMapToLocation();
  console.log('current', mapRef.current);
  console.log(latitude, longitude, 'aaa');

  return (
    <>
      <View style={{flex: 1}}>
        {latitude && (
          <MapView
            ref={mapRef}
            style={{flex: 1}}
            // provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            initialRegion={{
              // latitude: initPet[0].petLatitude,
              // longitude: initPet[0].petLongitude,
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}>
            {porps.pets.map((pet, index) => (
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
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title="내 위치">
              <Image
                source={my}
                style={{width: 35, height: 35}}
                resizeMethod="auto"></Image>
            </Marker>
          </MapView>
        )}
      </View>
    </>
  );
}
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
export default MyPets;
