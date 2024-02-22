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
import Review from '../screens/Review';
import PLAY4 from '../screens/PLAY4';
import ReviewSelect from '../screens/ReviewSelect';
import PLAYmainwonny1 from '../screens/PLAYmainwonny1';
import MenuHome from '../components/MenuHome';
import MenuHome1 from '../components/MenuHome1';
import MenuPlay from '../components/MenuPlay';
import MenuPlay1 from '../components/MenuPlay1';
import MenuPet from '../components/MenuPet';
import MenuPet1 from '../components/MenuPet1';
import FemaleBox from '../components/FemaleBox';

import FemaleBox1 from '../components/FemaleBox1';
import BackgroundBtn from '../components/BackgroundBtn';

import PLAY6FindMyDog from '../screens/PLAY6FindMyDog';
import HiddenPopularStores from '../screens/HiddenPopularStores';
import InsertWalkSpot from '../screens/InsertWalkSpot';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyDaeng from '../screens/MyDaengMain';
import MyDaenegRegister from '../screens/MyDaengRegister';
import MyDaengDetail from '../screens/MyDaengUpdate';
import MyDaengUpdate from '../screens/MyDaengUpdate';
import Geolocation from '@react-native-community/geolocation';
import LocationContext from './LocationContext ';
import SelectMap from '../screens/SelectMap';
import OcrInput from '../screens/OcrInput';
import WalkingHistory from '../screens/WalkingHistory';
import CardInsert from '../screens/CardInsert';
import FavoriteListContainer from '../components/FavoriteListContainer';
import FooterComponent from '../screens/FooterComponent';
import SkinDiseaseAI from '../screens/SkinDiseaseAI';
import DogHealthDetail from '../screens/DogHealthDetail';
import MyCarousel from '../components/PetListCarousel';

global.Buffer = global.Buffer || require('buffer').Buffer;

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
              width: 'auto',
              height: 62,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={
                    index < 3 && {
                      width: 102,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
                  }
                  key={index}
                  onPress={() => {
                    console.log(state.routes[index].name);
                    index < 3 &&
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
        name="MyDaeng"
        component={MyDaeng}
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
        name="InsertWalkSpot"
        component={InsertWalkSpot}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const AppTest = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [latitude, setLatitude] = React.useState(null);
  const [longitude, setLongitude] = React.useState(null);

  React.useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, distanceFilter: 10},
    );

    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);

    return () => Geolocation.clearWatch(watchId);
  }, []);

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <>
      <LocationContext.Provider value={{latitude, longitude}}>
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
              {/* <Stack.Screen
                name="MyDaeng"
                component={MyDaeng}
                options={{headerShown: false}}
              /> */}
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
                name="MyDaenegRegister"
                component={MyDaenegRegister}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PLAY4"
                component={WalkingHistory}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MyDaengUpdate"
                component={MyDaengUpdate}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PLAYmainwonny1"
                component={PLAYmainwonny1}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HiddenPopularStores"
                component={HiddenPopularStores}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Review"
                component={Review}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ReviewSelect"
                component={ReviewSelect}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="OcrInput"
                component={OcrInput}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="CardInsert"
                component={CardInsert}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PLAY6FindMyDog"
                component={PLAY6FindMyDog}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="FooterComponent"
                component={FooterComponent}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SkinDiseaseAI"
                component={SkinDiseaseAI}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="DogHealthDetail"
                component={DogHealthDetail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MyCarousel"
                component={MyCarousel}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          ) : (
            <Screen1 />
          )}
        </NavigationContainer>
      </LocationContext.Provider>
    </>
  );
};
export default AppTest;
