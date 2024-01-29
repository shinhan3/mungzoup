import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Test2 from './test/Test2';

function Content(props) {
  return (
    <View style={styles.item}>
      <Text>대충 내용</Text>
      <Test2></Test2>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    height: 500,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Content;
