import * as React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';
import axios from 'axios';
import {getDistanceFormula} from '../screens/SelectMap';

function FavoriteListContainer(props) {
  return (
    <View style={styles.main}>
      <Text style={styles.contentHead}>내 즐겨찾기 목록</Text>
      <FindWalkSpotByUser navigation={props.navigation} />
    </View>
  );
}

export function FindWalkSpotByUser(props) {
  const [spotList, setSpotList] = React.useState([]);
  const userId = 'user1';
  const latitude = 37.559245;
  const longitude = 126.92273666666667;
  React.useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/selectWalkSpotAll.do/${userId}`)
      .then(res => {
        setSpotList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <FlatList
      data={spotList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        // 현재 위치와 spot 위치 간의 거리 계산
        const distance = getDistanceFormula(
          latitude,
          longitude,
          item.spotLatitude,
          item.spotLongitude,
        );
        return (
          <View style={styles.spotList}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('PLAY1', {
                  spotName: item.spotName,
                  spotLongitude: item.spotLongitude,
                  spotLatitude: item.spotLatitude,
                });
              }}>
              <Text style={styles.spotName}>{item.spotName}</Text>
            </TouchableOpacity>
            <Text style={styles.spotAddress}>{item.spotAddress}</Text>
            <Text style={styles.distance}>{`거리: ${distance}m`}</Text>
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
  },
  spotName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2E2E2E',
    marginLeft: 20,
    marginBottom: 10,
  },
  spotAddress: {
    marginLeft: 20,
    marginBottom: 5,
  },
  distance: {
    marginLeft: 20,
  },
});

export default FavoriteListContainer;
