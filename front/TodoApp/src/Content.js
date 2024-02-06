import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyWalkSpotList from './walkSpot/MyWalkSpotList';
import InsertWalkSpot from './walkSpot/InsertWalkSpot';

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
