/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [petId, setPetId] = useState('1');
  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        console.log(position.coords.latitude, position.coords.longitude);
        const latitudeValue = position.coords.latitude;
        const longitudeValue = position.coords.longitude;
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(
          `http://10.0.2.2:5000/UpdatePatLocation.do/${petId}/${latitudeValue}/${longitudeValue}`,
        );
        axios
          .put(
            `https://springboottestpet.azurewebsites.net/UpdatePatLocation.do`,
            {
              petId: petId,
              latitude: latitudeValue,
              longitude: longitudeValue,
            },
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, distanceFilter: 10}, //10m 이동할 떄 마다 Check
    );

    //컴포넌트가 언마운트될 때 watch 중지
    return () => Geolocation.clearWatch(watchId);
  }, []);
  return (
    <View>
      <Text>
        longitude:{longitude} / latitude: {latitude}
      </Text>
      <Text>petId: {petId}</Text>
      <TextInput
        style={{backgroundColor: 'yellow'}}
        onChange={value => {
          setPetId(value.nativeEvent.text);
        }}></TextInput>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <Section></Section>;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
