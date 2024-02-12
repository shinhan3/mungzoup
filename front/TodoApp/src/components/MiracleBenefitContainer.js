import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Color, FontSize, FontFamily} from '../GlobalStyles';
// 필독
// go의 값은 뒤로 갈 이름을 넣어주세요 예 Frame => back 쓰지 말기!!!
const MiracleBenefitContainer = ({dimensionCode, benefits, navigation, go}) => {
  return (
    <View style={styles.headerPosition}>
      <View style={[styles.headerDiv, styles.headerPosition]} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(go);
        }}>
        <Image style={styles.arrowIcon} source={dimensionCode} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{benefits}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 52,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  headerDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    overflow: 'hidden',
    position: 'absolute',
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDarkslategray_200,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 35,
    position: 'absolute',
  },
});

export default MiracleBenefitContainer;
