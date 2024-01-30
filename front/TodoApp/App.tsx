/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DateHead from './src/DateHead';
import AddTodo from './src/Footer';
import Content from './src/Content';

function App(props) {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaView style={styles.container}>
      <DateHead data={today}></DateHead>
      <Content />
      <AddTodo />
    </SafeAreaView>
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
export default App;
