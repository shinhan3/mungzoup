import React, {useCallback, useContext, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';
import axios from 'axios';
import {getDistanceFormula} from '../screens/SelectMap';
import LocationContext from '../test/LocationContext ';
import {useFocusEffect} from '@react-navigation/core';
import Geolocation from '@react-native-community/geolocation';
import {USERID} from '../UserId';
function FavoriteListContainer(props) {
  return (
    <View style={styles.main}>
      <Text style={styles.contentHead}>내 즐겨찾기 목록</Text>
      <FindWalkSpotByUser navigation={props.navigation} />
    </View>
  );
}

export function FindWalkSpotByUser(props) {
  const [spotList, setSpotList] = useState([]);
  const userId = USERID;
  // 재호 물어볼거
  // var {latitude, longitude} = useContext(LocationContext);

  // const [latitude, setLatitude] = useState(37.55518333333333);
  // const [longitude, setLongitude] = useState(126.92099333333333);
  const [mylocation, setMylocation] = useState({
    latitude: 37.55518333333333,
    longitude: 126.92099333333333,
  });
  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(
          'aaaagccccccccccaaaaaaaaaaac',
          position.coords.latitude,
          position.coords.longitude,
        );
        position.coords.longitude * -1 > 0.0
          ? setMylocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude * -1,
            })
          : setMylocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  };
  useFocusEffect(
    useCallback(() => {
      getGeolocation();
    }, []),
  );

  const deleteWalkSpotfunction = spotId => {
    axios
      .delete(`http://192.168.0.10:5000/deleteWalkSpot.do/${spotId}`)
      .then(res => {
        setSpotList(prevSpotList =>
          prevSpotList.filter(item => item.spotId !== spotId),
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`http://192.168.0.10:5000/selectWalkSpotAll.do/${userId}`)
        .then(res => {
          setSpotList(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []),
  );
  return (
    <FlatList
      data={spotList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        // 현재 위치와 spot 위치 간의 거리 계산
        const distance = getDistanceFormula(
          mylocation.latitude,
          mylocation.longitude,
          item.spotLatitude,
          item.spotLongitude,
        );
        return (
          <View style={styles.spotList}>
            <View style={styles.spotListFirst}>
              <View style={styles.nameFlex}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('PLAY1', {
                      spotId: item.spotId,
                      spotName: item.spotName,
                      spotLongitude: item.spotLongitude,
                      spotLatitude: item.spotLatitude,
                    });
                  }}>
                  <Text style={styles.spotName}>{item.spotName}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  deleteWalkSpotfunction(item.spotId);
                }}>
                <Image
                  source={require('../assets/trash_can.png')}
                  style={styles.deleteImg}></Image>
              </TouchableOpacity>
            </View>
            <Text style={styles.spotAddress}>{item.spotAddress}</Text>
            <Text style={styles.distance}>{`거리: ${distance}km`}</Text>
          </View>
        );
      }}
      contentContainerStyle={{paddingBottom: 50}}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 90,
  },
  contentHead: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '800',
    color: '#2E2E2E',
  },
  spotList: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    fontFamily: FontFamily.notoSansKRMedium,
    borderTopWidth: 1,
    borderTopColor: '#A7A7A7',
  },
  spotName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2E2E2E',
    marginLeft: 20,
    marginBottom: 10,
    flexBasis: 150,
  },
  spotAddress: {
    marginLeft: 20,
    marginBottom: 5,
  },
  distance: {
    marginLeft: 20,
  },
  deleteImg: {
    marginTop: 5,
    width: 20,
    height: 20,
  },
  spotListFirst: {
    flexDirection: 'row',
  },
  nameFlex: {
    flex: 0.95,
    flexDirection: 'row',
  },
});

export default FavoriteListContainer;
