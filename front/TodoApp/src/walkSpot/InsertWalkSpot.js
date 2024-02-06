import React from 'react';
import {Button, View} from 'react-native';

function InsertWalkSpot(props) {
  return (
    <View>
      <Button
        onPress={() => {
          props.navigation.navigate('A4');
        }}
        title="등록"></Button>
    </View>
  );
}

export default InsertWalkSpot;
