import React from 'react';
import {Button, View} from 'react-native';

function InsertWalkSpot(props) {
  return (
    <View>
      <Button
        title="주소 선택"
        onPress={() => {
          props.navigation.navigate('SelectMap');
        }}></Button>
      <Button
        title="등록"
        onPress={() => {
          props.navigation.navigate('MyWalkSpotList');
        }}></Button>
    </View>
  );
}

export default InsertWalkSpot;
