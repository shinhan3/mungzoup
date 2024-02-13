import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';
import {Color, Border} from '../GlobalStyles';
import {View} from 'react-native';

const FormDropdown = () => {
  const [dropdownBoxOpen, setDropdownBoxOpen] = useState(false);
  const [dropdownBoxValue, setDropdownBoxValue] = useState('지역');
  const [pickingArea, setPickingArea] = useState(null);

  const items = [
    {label: '강남구', value: '강남구'},
    {label: '마포구', value: '마포구'},
    {label: '송파구', value: '송파구'},
    {label: '종로구', value: '종로구'},
  ];

  const handleValueChange = value => {
    setDropdownBoxValue(value);
    setPickingArea(value); // 선택된 지역을 pickingArea에 설정
  };

  return (
    <View style={styles.dropdownBox}>
      <DropDownPicker
        style={styles.dropdownpicker}
        open={dropdownBoxOpen}
        setOpen={setDropdownBoxOpen}
        value={dropdownBoxValue}
        setValue={handleValueChange}
        items={items}
        dropDownContainerStyle={styles.dropdownBoxdropDownContainer}
        placeholder="ㅈㅣ역"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownBoxdropDownContainer: {
    backgroundColor: '#ffffff',
  },
  dropdownpicker: {
    backgroundColor: Color.new1,
  },
  dropdownBox: {
    position: 'absolute',
    top: 37,
    left: 230,
    borderRadius: Border.br_3xs,
    width: 100,
    height: 235,
    overflow: 'hidden',
  },
});

export default FormDropdown;
