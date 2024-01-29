/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
