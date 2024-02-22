import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DetailCard from '../components/DetailCard';
import {FontFamily, FontSize, Color} from '../GlobalStyles';

import FooterComponent from './FooterComponent';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import LocationContext from '../test/LocationContext ';
import MapView, {Marker} from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
function Tofixed(x) {
  return x.toFixed(1);
}

function HiddenPopularStores(props) {
  var {latitude, longitude} = useContext(LocationContext);
  const [storeList, setStoreList] = useState([]);
  const mapRef = useRef();
  const [open, setOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const [value, setValue] = useState('결제순');
  const [items, setItems] = useState([
    {label: '결제순', value: '결제순'},
    {label: '리뷰 개수순', value: '리뷰 개수순'},
    {label: '게시글순', value: '게시글순'},
    {label: '거리순', value: '거리순'},
  ]);

  //화면 비율
  const snapPoints = ['15%', '45%', '100%'];

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

  const handleSheetChanges = useCallback(index => {}, []);

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
      {/*  main  */}
      <View style={{flex: 1}}>
        {/*  지도  */}
        <MapView
          ref={mapRef}
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
          {storeList.map((store, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: store.STORE_LATITUDE,
                longitude: store.STORE_LONGITUDE,
              }}
              title={store.STORE_NAME}>
              <Image
                source={{uri: store.IMAGE}}
                style={{width: 30, height: 30}}
                resizeMethod="auto"
              />
            </Marker>
          ))}
        </MapView>
      </View>
      {/*  //지도  */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={{flex: 1}}>
          {/*  ContentHead  */}
          <View style={styles.contentHead}>
            <View>
              <TouchableOpacity onPress={moveToCurrentLocation}>
                <Text style={styles.chFirstText}>내 위치</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.chSecond}>
              <Image
                style={styles.menuImg}
                source={require('../assets/menuimg.png')}></Image>
            </View>
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
          </View>
          {/*  //ContentHead  */}
          {/*  BottomSheetFlatList  */}
          <BottomSheetFlatList
            contentContainerStyle={{flexGrow: 1}} // FlatList가 늘어날 때 스크롤 가능
            data={storeList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <View style={styles.contentList}>
                  <View style={styles.storeFirst}>
                    <Text style={styles.storeName}>{item.STORE_NAME}</Text>
                    <Text style={styles.storeCategory}>
                      {item.CATEGORY_NAME}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.storeAddress}>
                      {item.STORE_ADDRESS}
                    </Text>
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
                      <Text style={styles.storeTextPoint}>
                        {item.POST_COUNT.toLocaleString()}
                      </Text>
                    </View>
                    <View style={styles.storeText3}>
                      <Text style={styles.storeText}> 결제건수 </Text>
                      <Text style={styles.storeTextPoint}>
                        {item.cnt_pay.toLocaleString()}
                      </Text>
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
          {/*  //BottomSheetFlatList  */}
        </View>
      </BottomSheet>
      {/*  //main  */}

      <FooterComponent
        petBoolean={false}
        playBoolean={true}
        cardBoolean={false}
        navigation={props.navigation}></FooterComponent>
    </>
  );
};

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
    flexDirection: 'row',
    alignItems: 'center',
  },
  chSecond: {
    marginLeft: 190,
  },
  menuImg: {
    marginBottom: 7,
  },
  pickerStyle: {
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
    marginLeft: 30,
    color: '#6A6A6A',
    marginBottom: 5,
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
  play1Typo: {
    top: 26,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
    position: 'absolute',
  },
  mapPosition: {
    height: 280,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 360,
  },
  titleTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 360,
  },
  map1: {
    backgroundColor: Color.colorGainsboro_200,
  },
  title: {
    top: 62,
    left: 73,
    fontSize: FontSize.size_31xl,
    color: Color.colorBlack,
    width: 224,
    height: 117,
  },
  main: {
    top: 52,
    height: 716,
  },
  headerDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 35,
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  play: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 892,
    overflow: 'hidden',
  },
});

export default HiddenPopularStores;
