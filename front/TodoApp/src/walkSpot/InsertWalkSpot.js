import React from 'react';
import {Button, View} from 'react-native';

function InsertWalkSpot(props) {
  return (
    <View>
      <Button onPress={insertSpot}>등록</Button>
    </View>
  );
}

export default InsertWalkSpot;
