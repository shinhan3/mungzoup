import React from 'react';
import {Button, View, Text} from 'react-native';

function MyWalkSpotList(props) {
  const {navigation, route} = props;

  // route.params가 undefined인 경우에 대비하여 기본 값을 빈 객체로 설정합니다.
  const {zone_code, default_address} = route.params || {};

  return (
    <View>
      <Text>우편 번호: {zone_code}</Text>
      <Text>주소 : {default_address}</Text>
      <Button
        title="내 장소 등록"
        onPress={() => {
          navigation.navigate('InsertWalkSpot');
        }}></Button>
    </View>
  );
}

export default MyWalkSpotList;
