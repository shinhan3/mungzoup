import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function AddTodo(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemText}>
        <Text>모에모에 큥</Text>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 10,
  },
  itemText: {
    height: 40,
    backgroundColor: 'steelblue',
  },
});
export default AddTodo;
