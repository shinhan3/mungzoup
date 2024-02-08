import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native';
import {Color, Border} from '../GlobalStyles';
import {View} from 'react-native';

const FormDropdown = () => {
  const [dropdownBoxOpen, setDropdownBoxOpen] = useState(false);
  const [dropdownBoxValue, setDropdownBoxValue] = useState();

  return (
    <View style={styles.dropdownBox}>
      <DropDownPicker
        style={styles.dropdownpicker}
        open={dropdownBoxOpen}
        setOpen={setDropdownBoxOpen}
        value={dropdownBoxValue}
        setValue={setDropdownBoxValue}
        items={[]}
        dropDownContainerStyle={styles.dropdownBoxdropDownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownBoxdropDownContainer: {
    backgroundColor: '#62aea9',
  },
  dropdownpicker: {
    backgroundColor: Color.new1,
  },
  dropdownBox: {
    position: 'absolute',
    top: 37,
    left: 236,
    borderRadius: Border.br_3xs,
    width: 84,
    height: 35,
    overflow: 'hidden',
  },
});

export default FormDropdown;
