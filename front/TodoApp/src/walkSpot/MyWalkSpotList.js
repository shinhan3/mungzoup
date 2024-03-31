import React from 'react';
import {Button, View, Text} from 'react-native';

function MyWalkSpotList(props) {
  return (
    <View>
      <Button
        title="내 장소 등록"
        onPress={() => {
          props.navigation.navigate('InsertWalkSpot');
        }}></Button>
    </View>
  );
}

export default MyWalkSpotList;
