import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import hi from '../image/hi.jpg';
function Test(props) {
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.item}>이동화면</Text>
      <Image style={styles.img} source={hi}></Image>
      <Image style={styles.img} source={require('../image/hi.jpg')}></Image>
      <Image
        style={styles.img}
        source={{
          uri: 'https://project0254.s3.ap-northeast-2.amazonaws.com/image/menu/1703585299690_05%EC%A0%9C%EC%9C%A1%EA%B3%A0%EB%A1%9C%EC%BC%80_%EB%8B%A8%EB%A9%B4.jpg',
        }}></Image>
      <Button
        title="Test2로 이동"
        onPress={() => {
          props.navigation.navigate('P2');
        }}></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    // width: 100,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 50,
    height: 50,
  },
});
export default Test;
