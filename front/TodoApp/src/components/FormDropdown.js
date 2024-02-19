import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {Color, Border} from '../GlobalStyles';
import {useFocusEffect} from '@react-navigation/core';

const FormDropdown = () => {
  const [dropdownBoxOpen, setDropdownBoxOpen] = useState(false);
  const [dropdownBoxValue, setDropdownBoxValue] = useState('지역');

  const items = [
    {label: '강남구', value: '강남구'},
    {label: '마포구', value: '마포구'},
    {label: '송파구', value: '송파구'},
    {label: '종로구', value: '종로구'},
  ];

  const handleValueChange = async selectedItem => {
    //console.log('여기까지 옴?', selectedItem());
    const value = selectedItem();
    //console.log('여까진옴? ', value);
    setDropdownBoxValue(value);
    //console.log('hi');
    try {
      //console.log('hiiiiii');
      const response = await axios.get(
        `http://10.0.2.2:5000/areaPicking.do/${value}`,
      );
      //console.log('lol');
      console.log('응답 데이터: ', response.data);
      console.log('응답 데이터의 개수: ', response.data.length);
    } catch (error) {
      console.error(error);
    }
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log('여기까지 옴?', selectedItem);
  //     const value2 = selectedItem.value;
  //     setDropdownBoxValue(value2);
  //     console.log('hoooo', value2);
  //     axios
  //       .get('http://10.0.2.2:5000/areaPicking.do', value2)
  //       .then(res => {
  //         console.log('ㅎㅇzzz', res.data);
  //       })
  //       .catch(err => console.log(err));
  //   }, []),
  // );

  /* useFocusEffect(
    useCallback(() => {
      const value2 = selectedItem.value;
      setDropdownBoxValue(value2);
      console.log('hoooo', value2);
      axios
        .get('http://10.0.2.2:5000/areaPicking.do', value2)
        .then(res => {
          console.log('ㅎㅇzzz', res.data);
        })
        .catch(err => console.log(err));
    }, []),
  );*/

  return (
    <View style={{flex: 1}}>
      <DropDownPicker
        open={dropdownBoxOpen}
        setOpen={setDropdownBoxOpen}
        value={dropdownBoxValue}
        setValue={handleValueChange}
        items={items}
        placeholder="지역"
        containerStyle={styles.dropdownBox}
        style={styles.dropdownpicker}
        dropDownContainerStyle={styles.dropdownBoxdropDownContainer}
        // onChangeItem={selectedItem => {
        //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        //   console.log(selectedItem, 'aaaaaaaaaaaaaaaa');
        // }}
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
    zIndex: 999,
  },
});

export default FormDropdown;
