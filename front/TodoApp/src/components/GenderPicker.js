import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
const GenderPicker = ({value, onSexChange}) => {
  const [sex, setSex] = useState(null);

  useEffect(() => {
    if (value !== null) {
      setSex(value ? '수컷' : '암컷');
    }
  }, [value]);

  useEffect(() => {
    if (sex !== null) {
      onSexChange(sex); // '수컷' 또는 '암컷'을 부모 컴포넌트로 전달
    }
  }, [sex]);

  const handleSexChange = selectedSex => {
    setSex(selectedSex);
    onSexChange(selectedSex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.sexContainer}>
        <TouchableOpacity
          style={[styles.sexOption, sex === '암컷' && styles.selectedOption]}
          onPress={() => handleSexChange('암컷')}>
          <Text style={styles.sexText}>암컷</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sexOption, sex === '수컷' && styles.selectedOption]}
          onPress={() => handleSexChange('수컷')}>
          <Text style={styles.sexText}>수컷</Text>
        </TouchableOpacity>
      </View>
      {/* {sex !== null && (
        <Text style={styles.selectedsex}>선택한 성별: {sex}</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    top: 20,
    left: 10,
  },
  sexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sexOption: {
    paddingVertical: 8,
    paddingHorizontal: 50,
    marginHorizontal: -1,
    borderWidth: 1,
    borderRadius: 13,
    borderColor: Color.colorGainsboro_100,
  },
  selectedOption: {
    backgroundColor: Color.new1,
  },
  sexText: {
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: 15,
  },
  selectedsex: {
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    fontSize: 15,
    marginTop: 20,
  },
});

export default GenderPicker;
