import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

export default function BirthdayPicker({value, onDateChange}) {
  const placeholder = value || '날짜를 선택해주세요.';

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState(value !== null ? value : '');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const dateString = date.format('yyyy-MM-dd');
    console.warn('dateFormat: ', dateString);
    hideDatePicker();
    onChangeText(dateString);

    // 부모 컴포넌트에게 날짜가 변경되었다는 것을 알립니다.
    onDateChange(dateString); // 문자열 형태의 날짜를 전달합니다.
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          pointerEvents="none"
          style={styles.textInput}
          placeholderTextColor="#2f4f4f"
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          editable={false}
        />
        <DateTimePickerModal
          headerTextIOS={placeholder}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 14,
    height: 40,
    width: 260,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_9xs,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    marginTop: -11,
  },
});
