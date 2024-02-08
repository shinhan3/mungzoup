import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyWalkSpotList from './walkSpot/MyWalkSpotList';
import InsertWalkSpot from './walkSpot/InsertWalkSpot';
import Test from './test/Test';
import Test3 from './test/Test3';
import MapTest from './test/MapTest';
import Test2 from './test/Test2';
import SelectMap from './walkSpot/SelectMap';

const Stack = createNativeStackNavigator();

function Content(props) {
  return (
    <NavigationContainer>
      {/* Routes */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Route */}
        <Stack.Screen
          name="MyWalkSpotList"
          component={MyWalkSpotList}></Stack.Screen>
        <Stack.Screen
          name="InsertWalkSpot"
          component={InsertWalkSpot}></Stack.Screen>
        <Stack.Screen name="SelectMap" component={SelectMap}></Stack.Screen>
        <Stack.Screen name="A4" component={MapTest}></Stack.Screen>
        <Stack.Screen name="P1" component={Test}></Stack.Screen>
        <Stack.Screen name="P2" component={Test2}></Stack.Screen>
        <Stack.Screen name="P3" component={Test3}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <View style={styles.item}>
//       <Text>대충 내용</Text>
//     </View>
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
