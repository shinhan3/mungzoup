import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GenderPicker = ({onGenderChange}) => {
  const [gender, setGender] = useState('');

  const handleGenderChange = selectedGender => {
    setGender(selectedGender);

    // 부모 컴포넌트에게 성별이 변경되었다는 것을 알립니다.
    onGenderChange(selectedGender);
  };

  return (
    <View style={styles.container}>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderOption,
            gender === '암컷' && styles.selectedOption,
          ]}
          onPress={() => handleGenderChange('암컷')}>
          <Text style={styles.genderText}>암컷</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderOption,
            gender === '수컷' && styles.selectedOption,
          ]}
          onPress={() => handleGenderChange('수컷')}>
          <Text style={styles.genderText}>수컷</Text>
        </TouchableOpacity>
      </View>
      {/* {gender !== '' && (
        <Text style={styles.selectedGender}>선택한 성별: {gender}</Text>
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
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  genderOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: '#ccc',
  },
  genderText: {
    fontSize: 18,
  },
  selectedGender: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default GenderPicker;
