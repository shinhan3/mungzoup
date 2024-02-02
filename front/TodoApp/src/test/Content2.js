import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function Content2(props) {
  return (
    <View style={styles.container}>
      <View>
        <Text>임동선</Text>
        <Button
          title="Test3로 이동"
          onPress={() => {
            // 페이지 이동 버튼
            props.navigation.navigate('P1');
          }}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Content2;
