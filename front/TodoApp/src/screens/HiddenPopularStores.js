import React, {useCallback, useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import LocationContext from '../test/LocationContext ';
import MapView, {Marker} from 'react-native-maps';

function HiddenPopularStores(props) {
  var {latitude, longitude} = useContext(LocationContext);
  const [storeList, setStoreList] = useState([]);
  useFocusEffect(
    useCallback(() => {
      axios
        .get('http://10.0.2.2:5000/storeList.do')
        .then(res => {
          setStoreList(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []),
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
        <Text style={styles.headerTitle}>숨은 인기 가맹점</Text>
      </View>
      {/* //Header */}
      <View style={{flex: 1}}>
        {/*  지도  */}
        <View style={{height: '45%'}}>
          <MapView
            style={{flex: 1}}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0025,
              longitudeDelta: 0.0025,
            }}>
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
          </MapView>
        </View>
        {/*  //지도  */}
        {/*  Content  */}
        <FlatList
          contentContainerStyle={{flexGrow: 1}} // FlatList가 늘어날 때 스크롤 가능
          data={storeList}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <View style={styles.contentHead}>
              <View>
                <Text style={styles.chFirstText}>지도 중심</Text>
              </View>
              <View style={styles.chLine}></View>
              <View style={styles.chSecond}>
                <View>
                  <Image
                    style={styles.menuImg}
                    source={require('../assets/menuimg.png')}></Image>
                </View>
                <View>
                  <Text style={styles.chSecondText}>결제순</Text>
                </View>
              </View>
            </View>
          }
          renderItem={({item}) => {
            return (
              <View style={styles.contentList}>
                <View>
                  <Text style={styles.storeName}>{item.storeName}</Text>
                </View>
                <TouchableOpacity
                  style={styles.detailBtn}
                  onPress={() =>
                    props.navigation.navigate('Review', {
                      storeId: item.storeId,
                    })
                  }>
                  <Text style={styles.btnText}>{`자세히`}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      {/*  //Content  */}
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
    marginLeft: 110,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
  },
  contentHead: {
    height: 70,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  chFirstText: {
    fontSize: 18,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    marginLeft: 25,
    color: '#6A6A6A',
  },
  chLine: {
    width: 50,
    borderTopColor: '#D9D9D9',
    borderTopWidth: 3,
    marginLeft: 80,
    marginBottom: 25,
  },
  chSecondText: {
    fontSize: 18,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    marginLeft: 0,
    color: '#6A6A6A',
  },
  chSecond: {
    flexDirection: 'row',
    marginLeft: 80,
  },
  menuImg: {
    marginTop: 3,
    marginRight: 6,
  },
  contentList: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    fontFamily: FontFamily.notoSansKRMedium,
    borderTopWidth: 1,
    borderTopColor: '#A7A7A7',
  },
  storeName: {
    color: '#2E2E2E',
    fontSize: 22,
    marginLeft: 25,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
  detailBtn: {
    width: 90,
    height: 46,
    backgroundColor: '#62AEA9',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 290,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
});

export default HiddenPopularStores;
