import * as React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import RecommendationContainer from './RecommendationContainer';
import {FontSize, FontFamily, Color} from '../GlobalStyles';
import axios from 'axios';

const FavoriteListContainer = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.contentHead}>내 즐겨찾기 목록</Text>
      <FindWalkSpotByUser />
    </View>
  );
};

export const FindWalkSpotByUser = () => {
  const [spotList, setSpotList] = React.useState([]);
  const userId = 'user1';
  React.useEffect(() => {
    axios({
      url: `http://10.0.2.2:5000/selectWalkSpotAll.do/${userId}`,
      type: 'get',
    })
      .then(res => {
        setSpotList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <FlatList
        data={spotList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.spotList}>
            <Text>{item.spotName}</Text>
            <Text>{item.spotAddress}</Text>
            <Text>{getDistanceFormula(lat1, lon1, lat2, lon2)}</Text>
          </View>
        )}
      />
    </>
  );
};

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
    backgroundColor: 'white',
    marginBottom: 20,
  },
});

export default FavoriteListContainer;
