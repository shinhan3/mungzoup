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
import AppTest from './src/test/AppTest';
import Test2 from './src/test/Test2';

function App(props) {
  const today = new Date();
  console.log(today);
  return (
    <>
    <AppTest />
    </>
  );
}
{
  /* <SafeAreaView style={styles.container}>
      <Content />
    </SafeAreaView> 
    
     <>
      <AppTest />
    </>
    */
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
  footer: {
    height: 10,
  },
});
export default App;
