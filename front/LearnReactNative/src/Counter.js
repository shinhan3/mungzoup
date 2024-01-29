import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function Counter(props) {
  // const [count, setCount] = useState(0);
  return (
    <View styles={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>0</Text>
      </View>
      {/* <View style={styles.button}> */}
      <Button title="+1"></Button>
      <Button title="-1"></Button>
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // height: '100%',
    // backgroundColor: 'cyan',
  },
  numberArea: {
    // flex: 1,
    // height: '100%',
    alignItems: 'center',
    JustifyContent: 'center',
    // backgroundColor: 'cyan',
  },
  number: {
    // flex: 1,
    fontSize: 72,
    fontWeight: 'bold',
  },
  button: {
    // alignItems: 'end',
    // justifyContent: 'end',
  },
});
export default Counter;
