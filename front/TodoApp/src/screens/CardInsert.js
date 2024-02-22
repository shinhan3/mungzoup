import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Border, Color, FontFamily, FontSize} from '../GlobalStyles';

import HeaderComponent from '../components/HeaderComponent';
import DialogInput from 'react-native-dialog-input';
import axios from 'axios';
import {USERID} from '../UserId';

function CardInsert(props) {
  console.log(props);
  const [hidden, setHidden] = useState(false);
  const [checked, setChecked] = useState(false);

  const [dialogVisible, setDialogVisible] = useState(false);
  const userId = USERID;
  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };
  const handleSubmit = inputText => {
    console.log('aaaaaaaaaaaaaaaaaaaaaa', inputText, userId);
    if (!isNaN(inputText) && inputText.length == 4) {
      setDialogVisible(false);
      const data = inputText;
      axios
        .post(`http://10.0.2.2:5000/insertCard.do/${userId}`, data)
        .then(res => {
          props.navigation.navigate('Frame1');
        });
    } else {
      Alert.alert('다시 입력해주세요.');
    }
  };
  return (
    <View style={styles.CardComponent}>
      <View style={[styles.header]}>
        <HeaderComponent
          navigation={props.navigation}
          dimensionCode={require('../assets/arrow8.png')}
          benefits="카드 발급"
          go="MyDaeng"
          backBool={true}></HeaderComponent>
      </View>
      <View style={styles.contents}>
        <View style={[styles.content, hidden && {height: 200}]}>
          <View style={{left: -5}}>
            <Text style={hidden && styles.textContentTitle}>
              (필수) 개인 정보 수집 동의서
            </Text>
          </View>
          <TouchableOpacity
            style={styles.checkbotImage}
            onPress={() => {
              setChecked(!checked);
            }}>
            <Image
              source={
                checked
                  ? require('../assets/checkbox.png')
                  : require('../assets/checkboxFalse.png')
              }></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => {
              setHidden(!hidden);
            }}>
            <Image
              source={require('../assets/arrow7.png')}
              style={[
                styles.transformImage,
                hidden && {transform: [{rotate: '180deg'}]},
              ]}></Image>
            {hidden && (
              <>
                <Text style={styles.textContent}>
                  카드를 위한 개인정보를 수집합니다. "개인정보는" 생존하는
                  개인에 관한 정보로서 해당 정보에 포함된 성명, 주민등록번호
                  등의 사항으로 해당 새인을 식별할 수 있는 정보를 말합니다.
                </Text>
                <View style={{height: 5}}></View>
                <Text style={styles.textContent}>
                  고개의 개인정보를 수집 이용하는 목적은 다음과 같습니다.
                </Text>
                <View style={{height: 5}}></View>
                <Text style={styles.textContent}>수집 정보</Text>
                <View style={{height: 3}}></View>
                <Text style={styles.textContent}>
                  - 이용목적: 카드 발급, 서비스 이용시 상담, 공지사항 전달
                </Text>
                <Text style={styles.textContent}>
                  - 보유기간: 카드 만기시 즉시 삭제, 카드 해제시 즉시 삭제
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.endButton}
          onPress={() => {
            checked && showDialog();
          }}>
          <Text style={styles.ButtonFont}>카드 발급하기</Text>
        </TouchableOpacity>
      </View>

      <DialogInput
        isDialogVisible={dialogVisible}
        title={'비밀번호 설정'}
        message={'4자리 숫자를 입력해주세요'}
        hintInput={'0~9까지 숫자를 입력해주세요'}
        submitText={'설정하기'}
        cancelText={'취소'}
        submitInput={handleSubmit}
        closeDialog={handleCancel}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  CardComponent: {
    flex: 1,
  },
  header: {
    height: 52,
    width: 360,
  },
  content: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 300,
    height: 50,
    borderRadius: 10,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
  },
  contents: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchable: {
    // backgroundColor: '#DDD',
    top: 15,
    left: 245,
    position: 'absolute',
  },
  transformImage: {transform: [{rotate: '0deg'}]},
  textContent: {
    top: 10,
    left: -210,
    width: 250,
    fontSize: 10,
  },
  textContentTitle: {
    top: -75,
  },
  checkbotImage: {
    position: 'absolute',
    left: 25,
    top: 15,
  },
  endButton: {
    position: 'absolute',
    backgroundColor: '#62AEA9',
    width: 262,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: 510,
  },
  ButtonFont: {
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.notoSansKRBold,
    fontSize: FontSize.size_mini_7,
  },
});
export default CardInsert;
