import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Content2 from './Content2';

function Test3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>해드 2</Text>
      </View>
      <Content2 navigation={props.navigation}></Content2>
      <View style={styles.itemText}>
        <Text>모에모에 큥2</Text>
        <Button
          title="Test1로 이동"
          onPress={() => {
            // 페이지 이동 버튼
            props.navigation.navigate('P1');
          }}></Button>
        <Button
          title="Test2로 이동"
          onPress={() => {
            // 페이지 이동 버튼
            props.navigation.navigate('P2');
          }}></Button>
        <Button
          title="Test3로 이동"
          onPress={() => {
            // 페이지 이동 버튼
            props.navigation.navigate('P3');
          }}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  item: {
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    height: 150,
    backgroundColor: 'steelblue',
  },
});
export default Test3;
