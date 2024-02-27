import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import {Input} from 'react-native-elements';
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent';
import {USERID} from '../UserId';
function InsertWalkSpot(props) {
  var address = props.route.params ? props.route.params.address : '';
  var latitude = props.route.params ? props.route.params.latitude : '';
  var longitude = props.route.params ? props.route.params.longitude : '';
  var distance = props.route.params ? props.route.params.distance : '';
  const [name, setName] = useState('');
  const [spotList, setSpotList] = useState([]);
  console.log('aaaaaa');

  const insertWalkSpotfunction = () => {
    if (props.route.params) {
      console.log(name, latitude, longitude, address);
      const data = {
        spotName: name,
        spotLatitude: latitude,
        spotLongitude: longitude,
        spotAddress: address,
        user: {userId: USERID},
      };
      axios
        .post('http://192.168.0.88:5000/insertWalkSpot.do', data)
        .then(res => {
          const newSpot = res.data;
          setSpotList(prevSpotList => [...prevSpotList, newSpot]);
          props.navigation.navigate('PLAY');
        })
        .catch(err => {
          err;
        });
    }
  };

  return (
    <ScrollView>
      <View style={styles.play}>
        {/*  Header  */}
        <HeaderComponent
          navigation={props.navigation}
          dimensionCode={require('../assets/arrow8.png')}
          benefits="내 장소 등록"
          go="PLAY"
          backBool={true}
        />
        {/*  //Header  */}
        {/*  Content  */}
        <View style={styles.content}>
          {/*  name  */}
          <View style={styles.name}>
            <Text style={styles.nameText}>이름</Text>
            <Input
              placeholder="내 장소 이름을 입력하세요"
              containerStyle={{
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderRadius: 10,
                width: 260,
                height: 50,
                marginLeft: 20,
                marginBottom: 40,
              }}
              inputContainerStyle={{borderBottomWidth: 0, height: '100%'}}
              inputStyle={{paddingTop: 0, paddingBottom: 0}}
              onChange={e => {
                //console.log(e.nativeEvent.text);
                setName(e.nativeEvent.text);
              }}
            />
          </View>
          {/*  //name  */}
          {/*  address  */}
          <View styles={styles.address}>
            <Text style={styles.addressText}>주소</Text>
            <Input
              editable={false}
              value={address}
              containerStyle={{
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderRadius: 10,
                width: 260,
                height: 50,
                marginLeft: 20,
                marginBottom: 20,
              }}
              inputContainerStyle={{borderBottomWidth: 0, height: '100%'}}
              inputStyle={{paddingTop: 0, paddingBottom: 0}}
            />
            {distance && (
              <Text style={styles.addressDistance}>
                내 위치에서 {distance} km
              </Text>
            )}
            <TouchableOpacity
              style={styles.addressBtns}
              onPress={() => {
                props.navigation.navigate('SelectMap');
              }}>
              <Text style={styles.btnText}>주소 선택</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.insertBtns,
              name === '' || address === ''
                ? styles.disabledBtn
                : styles.insertBtns,
            ]}
            disabled={name === '' || address === ''}
            onPress={() => {
              insertWalkSpotfunction();
            }}>
            <Text style={[styles.btnText, {fontSize: 20}]}>등록</Text>
          </TouchableOpacity>
        </View>
        {/*  //Content  */}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  headerTitle: {
    top: 15,
    marginLeft: 80,
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
    height: 50,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: '#2E2E2E', // 그림자 색상 설정
    elevation: 5, // Android에서 그림자 효과를 주기 위한 설정
  },
  content: {
    margin: 26,
    width: 300,
    height: 560,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  nameText: {
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 20,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 18,
    color: '#2E2E2E',
  },
  addressText: {
    marginLeft: 20,
    marginBottom: 20,
    fontFamily: FontFamily.notoSansKR,
    fontWeight: '800',
    fontSize: 18,
    color: '#2E2E2E',
  },
  addressDistance: {
    marginLeft: 20,
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: 15,
    color: '#2E2E2E',
  },
  addressBtns: {
    width: 100,
    padding: 10,
    backgroundColor: '#62AEA9',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  insertBtns: {
    backgroundColor: '#62AEA9',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
    borderRadius: 10,
    marginTop: 120,
  },
  disabledBtn: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
    borderRadius: 10,
    marginTop: 120,
  },
  btnText: {
    color: 'white',
  },
});

export default InsertWalkSpot;
