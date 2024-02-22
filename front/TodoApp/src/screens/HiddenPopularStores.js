import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import FooterComponent from './FooterComponent';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import LocationContext from '../test/LocationContext ';
import MapView, {Marker} from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';

function Tofixed(x) {
  return x.toFixed(1);
}

function HiddenPopularStores(props) {
  var {latitude, longitude} = useContext(LocationContext);
  const [storeList, setStoreList] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('결제순');
  const [items, setItems] = useState([
    {label: '결제순', value: '결제순'},
    {label: '리뷰 개수순', value: '리뷰 개수순'},
    {label: '게시글순', value: '게시글순'},
    {label: '거리순', value: '거리순'},
  ]);

  useEffect(() => {
    handleSortChange(value);
  }, [value]);

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`http://10.0.2.2:5000/storeListPay.do/${latitude}/${longitude}`)
        .then(res => {
          setStoreList(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []),
  );

  function handleSortChange(value) {
    axios
      .get(
        `http://10.0.2.2:5000/storeSelectedList.do/${latitude}/${longitude}/${value}`,
      )
      .then(res => {
        setStoreList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <>
      {/* Header */}
      <View style={styles.head}>
        <Text style={styles.headerTitle}>숨은 인기 가맹점</Text>
      </View>
      {/* //Header */}
      {/*  main  */}
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
        {/*  ContentHead  */}
        <View style={styles.contentHead}>
          <View>
            <Text style={styles.chFirstText}>지도 중심</Text>
          </View>
          <View style={styles.chLine}></View>
          <View style={styles.chSecond}>
            <Image
              style={styles.menuImg}
              source={require('../assets/menuimg.png')}></Image>
          </View>
        </View>
        {/*  //ContentHead  */}
        {/*  DropDownPicker  */}
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.pickerStyle}
          labelStyle={{
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: FontFamily.notoSansKR,
            color: '#6A6A6A',
          }}
          onChangeItem={item => {
            setValue(item.value); // 선택된 항목의 value를 상태로 저장
          }}
        />
        {/*  //DropDownPicker  */}
        {/*  FlatList  */}
        <FlatList
          contentContainerStyle={{flexGrow: 1}} // FlatList가 늘어날 때 스크롤 가능
          data={storeList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.contentList}>
                <View style={styles.storeFirst}>
                  <Text style={styles.storeName}>{item.STORE_NAME}</Text>
                  <Text style={styles.storeCategory}>{item.CATEGORY_NAME}</Text>
                </View>
                <View>
                  <Text style={styles.storeAddress}>{item.STORE_ADDRESS}</Text>
                </View>
                <View style={styles.storeThird}>
                  <View style={styles.storeThird1}>
                    <Text style={styles.storeTextPoint}>
                      {Tofixed(item.distance)}
                    </Text>
                    <Text style={styles.storeText}> km</Text>
                  </View>
                  <View style={styles.storeText2}>
                    <Text style={styles.storeText}> 게시글 수 </Text>
                    <Text style={styles.storeTextPoint}>{item.POST_COUNT}</Text>
                  </View>
                  <View style={styles.storeText3}>
                    <Text style={styles.storeText}> 결제건수 </Text>
                    <Text style={styles.storeTextPoint}>{item.cnt_pay}</Text>
                  </View>
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
        {/*  //FlatList  */}
      </View>
      {/*  //main  */}

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
    marginLeft: 110,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
  },
  contentHead: {
    position: 'absolute',
    top: 350,
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pickerStyle: {
    left: 300,
    borderColor: 'transparent',
    zIndex: 999,
    width: 150,
    height: 51,
    borderBottomWidth: 1,
    borderTopColor: '#A7A7A7',
    marginBottom: 5,
  },
  chFirstText: {
    fontSize: 18,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    marginLeft: 25,
    color: '#6A6A6A',
    marginBottom: 5,
  },
  chLine: {
    width: 50,
    borderTopColor: '#D9D9D9',
    borderTopWidth: 3,
    marginLeft: 80,
    marginBottom: 25,
  },
  chSecond: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  menuImg: {
    marginTop: 0,
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
  storeFirst: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  storeName: {
    color: '#2E2E2E',
    fontSize: 22,
    marginLeft: 25,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
  },
  storeCategory: {
    fontSize: 15,
    color: '#A7A7A7',
    fontFamily: FontFamily.notoSansKRMedium,
    marginLeft: 15,
    marginTop: 10,
  },
  storeAddress: {
    marginLeft: 25,
    color: '#A7A7A7',
    fontSize: 15,
    fontFamily: FontFamily.notoSansKRMedium,
    marginBottom: 5,
  },
  storeThird: {
    flexDirection: 'row',
    marginLeft: 25,
  },
  storeText: {
    color: '#2E2E2E',
    fontSize: 15,
    fontFamily: FontFamily.notoSansKRMedium,
    marginTop: 2,
  },
  storeThird1: {
    flexDirection: 'row',
  },
  storeText2: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  storeText3: {
    marginLeft: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  storeTextPoint: {
    color: '#2E2E2E',
    fontSize: 18,
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
