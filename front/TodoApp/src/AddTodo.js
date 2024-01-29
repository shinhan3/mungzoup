import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function AddTodo(props) {
  return (
    <View style={styles.block}>
      <Text>하아</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});
export default AddTodo;
