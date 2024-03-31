import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MenuPet1 from '../components/MenuPet1';
import MenuPlay1 from '../components/MenuPlay1';
import MenuHome1 from '../components/MenuHome1';
import MenuPet from '../components/MenuPet';
import MenuPlay from '../components/MenuPlay';
import MenuHome from '../components/MenuHome';
import {Color} from '../GlobalStyles';

function FooterComponent(props) {
  console.log(props.petBoolean, props.playBoolean, props.cardBoolean);
  const {petBoolean, playBoolean, cardBoolean, navigation} = {...props};
  console.log(petBoolean, playBoolean, cardBoolean);
  console.log(props);
  return (
    <View
      style={{
        width: 'auto',
        height: 62,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Color.colorWhitesmoke_100,
      }}>
      <TouchableOpacity
        style={styles.componentStyle}
        onPress={() => {
          navigation.navigate('MyDaeng');
        }}>
        {petBoolean ? <MenuPet /> : <MenuPet1 />}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.componentStyle}
        onPress={() => {
          navigation.navigate('PLAYmainwonny');
        }}>
        {playBoolean ? <MenuPlay /> : <MenuPlay1 />}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.componentStyle}
        onPress={() => {
          navigation.navigate('Frame');
        }}>
        {cardBoolean ? <MenuHome /> : <MenuHome1 />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  componentStyle: {
    width: 102,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FooterComponent;
