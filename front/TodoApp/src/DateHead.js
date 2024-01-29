import React from 'react';
import {Text, View} from 'react-native';

function DateHead(props) {
  return (
    <>
      <Text>
        {props.data.getFullYear()}년{props.data.getMonth() + 1}월{' '}
        {props.data.getDate()}일
      </Text>
    </>
  );
}

export default DateHead;
