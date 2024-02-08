import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import Screen1 from '../screens/Screen1';
import Frame from '../screens/Frame';
import PLAYmainwonny from '../screens/PLAYmainwonny';
import PLAY from '../screens/PLAY';
import Frame1 from '../screens/Frame1';
import PLAY1 from '../screens/PLAY1';
import PLAY2 from '../screens/PLAY2';
import Frame2 from '../screens/Frame2';
import Frame3 from '../screens/Frame3';
import PLAY3 from '../screens/PLAY3';
import PLAY4 from '../screens/PLAY4';
import Wonny from '../screens/Wonny';
import Frame4 from '../screens/Frame4';
import PLAYmainwonny1 from '../screens/PLAYmainwonny1';
import MenuHome from '../components/MenuHome';
import MenuHome1 from '../components/MenuHome1';
import MenuPlay from '../components/MenuPlay';
import MenuPlay1 from '../components/MenuPlay1';
import MenuPet from '../components/MenuPet';
import MenuPet1 from '../components/MenuPet1';
import FemaleBox from '../components/FemaleBox';
import SexSelectAm from '../components/SexSelectAm';
import FemaleBox1 from '../components/FemaleBox1';
import BackgroundBtn from '../components/BackgroundBtn';
import SexSelect from '../components/SexSelect';
import SexSelectSuText from '../components/SexSelectSuText';
import PLAY5 from '../screens/PLAY5';
import InsertWalkSpot from '../screens/InsertWalkSpot';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SelectMap from '../screens/SelectMap';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTabsRoot({navigation}) {
  const [bottomTabItemsNormal] = React.useState([
    <MenuPet1 />,
    <MenuPlay1 />,
    <MenuHome1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <MenuPet />,
    <MenuPlay />,
    <MenuHome />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={({state, descriptors, navigation}) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 360,
              height: 62,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={{
                    width: 102,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  key={index}
                  onPress={() => {
                    console.log(state.routes[index].name);
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}>
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}>
      <Tab.Screen
        name="Frame2"
        component={Frame2}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="PLAYmainwonny"
        component={PLAYmainwonny}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Frame"
        component={Frame}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Frame1"
        component={Frame1}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const AppTest = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  // const [fontsLoaded, error] = useFonts({
  //   'NotoSansKR-Light': require('../assets/fonts/NotoSansKR-Light.otf'),
  //   'NotoSansKR-Regular': require('../assets/fonts/NotoSansKR-Regular.otf'),
  //   'NotoSansKR-Medium': require('../assets/fonts/NotoSansKR-Medium.otf'),
  //   'NotoSansKR-Bold': require('../assets/fonts/NotoSansKR-Bold.otf'),
  //   'IBMPlexSansKR-Bold': require('../assets/fonts/IBMPlexSansKR-Bold.ttf'),
  //   'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
  // });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PLAY"
              component={PLAY}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="InsertWalkSpot"
              component={InsertWalkSpot}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SelectMap"
              component={SelectMap}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PLAY1"
              component={PLAY1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PLAY2"
              component={PLAY2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PLAY3"
              component={PLAY3}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PLAY4"
              component={PLAY4}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Wonny"
              component={Wonny}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PLAYmainwonny1"
              component={PLAYmainwonny1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PLAY5"
              component={PLAY5}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <Screen1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default AppTest;
