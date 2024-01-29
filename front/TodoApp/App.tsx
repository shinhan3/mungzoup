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
import AddTodo from './src/AddTodo';

function App(props) {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaView>
      <View>
        <Text>TodoApp</Text>
        <DateHead data={today}></DateHead>
        <Text style={styles.DataHead}>야호 할일 없다</Text>
        <AddTodo></AddTodo>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  DataHead: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
