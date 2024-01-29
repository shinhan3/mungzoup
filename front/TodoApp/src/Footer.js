import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function AddTodo(props) {
  return (
    <View style={styles.item}>
      <Text>하아</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    height: 50,
    backgroundColor: 'steelblue',
  },
});
export default AddTodo;
