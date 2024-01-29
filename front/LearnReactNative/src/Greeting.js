import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function Greeting(props) {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <>
      <View>
        {visible ? (
          <Text
            style={[
              styles.box,
              props.rounded && styles.rounded,
              sizes[props.sizes],
            ]}>
            안녕하세요 함수 컴포넌트 !{props.name}
          </Text>
        ) : null}
      </View>

      <Button title="토글" onPress={onPress}></Button>
      <Text>안녕하세요 함수 컴포넌트 !{props.name}</Text>
    </>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#DDDDDD',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};
export default Greeting;
