import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';
import {useFocusEffect} from '@react-navigation/core';
import FilteredCardForm1 from './FilteredCardForm1';

const FormDropdown = ({onDropdownData}) => {
  const [dropdownBoxOpen, setDropdownBoxOpen] = useState(false);
  const [dropdownBoxValue, setDropdownBoxValue] = useState('지역');

  const items = [
    {label: '강남구', value: '강남구'},
    {label: '마포구', value: '마포구'},
    {label: '송파구', value: '송파구'},
    {label: '종로구', value: '종로구'},
  ];

  const handleValueChange = async selectedItem => {
    const value = selectedItem();
    setDropdownBoxValue(value);
    try {
      const response = await axios.get(
        `http://10.0.2.2:5000/areaPicking.do/${value}`,
      );

      const responseData = response.data;
      onDropdownData(responseData); //data PLAY2로 보내기
      console.log('응답 데이터의 개수: ', responseData.length);
      // responseData.map((data, index) => {index
      //   console.log(`데이터 ${index}: `, data);
      // });
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
    backgroundColor: Color.colorWhitesmoke_200,
    borderColor: Color.colorDarkgray_300,
    borderWidth: 1,
  },
  dropdownpicker: {
    backgroundColor: Color.new1,
    borderColor: Color.colorDarkgray_300,
    borderWidth: 1,
  },
  dropdownBox: {
    position: 'absolute',
    top: 37,
    left: 230,
    width: 100,
    height: 235,
    overflow: 'hidden',
    //FormDropdownzIndex: 999,
  },
  dropdownItem: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.notoSansKRBold,
  },
});

export default FormDropdown;
