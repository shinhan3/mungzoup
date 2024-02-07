import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const FormContainer = props => {
  console.log('aa', props);
  return (
    <View style={[styles.topbox, styles.topboxPosition]}>
      <View style={[styles.topbox, styles.topboxPosition]}>
        <View style={[styles.headerDiv, styles.topboxPosition]} />
        <Text style={styles.headerTitle}>
          <Text
            style={
              styles.text
            }>{`강아지를 위한 고객님의 사랑을 아낌 없이 줄 수 있도록!
`}</Text>
          <Text
            style={styles.text1}>{`카테고리별 최대 혜택 적용 서비스 `}</Text>
        </Text>
        <Image
          style={[styles.moneyImageIcon, styles.topboxPosition]}
          source={require('../assets/moneyimage.png')}
        />
      </View>
      <TouchableOpacity
        style={[styles.benefitBtn, styles.benefitLayout]}
        onPress={() => {
          // console.log(props.props.navigation.navigate(''));
          props.props.navigation.push('Frame1');
        }}>
        <Text style={styles.text2}>최대 혜택 적용하기</Text>
        <View style={[styles.benefitBtnChild, styles.benefitLayout]} />
        <Image
          style={styles.benefitIcon}
          source={require('../assets/benefit.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topboxPosition: {
    height: 102,
    top: 0,
    position: 'absolute',
  },
  benefitLayout: {
    height: 14,
    width: 72,
    position: 'absolute',
  },
  headerDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    height: 102,
    left: 0,
  },
  text: {
    fontSize: FontSize.size_3xs,
  },
  text1: {
    fontSize: FontSize.size_mini,
  },
  headerTitle: {
    top: 23,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.colorDarkslategray_200,
    textAlign: 'left',
    left: 27,
    position: 'absolute',
  },
  moneyImageIcon: {
    left: 230,
    width: 102,
  },
  topbox: {
    width: 360,
    height: 102,
    left: 0,
  },
  text2: {
    top: 2,
    left: 5,
    fontSize: FontSize.size_6xs,
    lineHeight: 10,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorSteelblue_100,
    textAlign: 'right',
    position: 'absolute',
  },
  benefitBtnChild: {
    borderRadius: Border.br_8xs,
    borderStyle: 'solid',
    borderColor: Color.colorSteelblue_100,
    borderWidth: 0.5,
    left: 0,
    top: 0,
    height: 14,
    width: 72,
  },
  benefitIcon: {
    top: 3,
    left: 63,
    width: 4,
    height: 9,
    position: 'absolute',
  },
  benefitBtn: {
    top: 67,
    left: 27,
  },
});

export default FormContainer;
