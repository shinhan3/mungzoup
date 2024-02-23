import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {Image, Modal, View} from 'react-native';

function ModelComponent(props) {
  const [modelVisible, setModelVisible] = useState(true);
  console.log(props);
  useFocusEffect(
    useCallback(() => {
      setModelVisible(true);
      setTimeout(() => {
        props.navigation.navigate('MyDaeng');
        setModelVisible(false);
      }, 5000);
    }, []),
  );
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Modal
        visible={modelVisible}
        animationType="slide"
        onRequestClose={() => {
          setModelVisible(false);
        }}>
        <Image
          style={{left: 20, width: '90%', height: '90%'}}
          resizeMode="contain"
          source={require('../assets/leaflet.png')}></Image>
      </Modal>
    </View>
  );
}

export default ModelComponent;
