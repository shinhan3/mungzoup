import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function DateHead(props) {
  const today = new Date();
  return (
    <View style={styles.item}>
      <Text>
        {today.getFullYear()}년{today.getMonth() + 1}월 {today.getDate()}일
      </Text>
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
    backgroundColor: 'steelblue',
  },
});
export default DateHead;
