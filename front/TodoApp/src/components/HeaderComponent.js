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
const HeaderComponent = ({
  dimensionCode,
  benefits,
  navigation,
  go,
  backBool,
}) => {
  // console.log(backBool);
  return (
    <View style={styles.headerPosition}>
      <View style={[styles.headerDiv, styles.headerPosition]} />
      {backBool && (
        <>
          <TouchableOpacity
            style={{zIndex: 101}}
            onPress={() => {
              navigation.navigate(go);
            }}>
            <Image style={styles.arrowIcon} source={dimensionCode} />
          </TouchableOpacity>
        </>
      )}
      <Text style={styles.headerTitle}>{benefits}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 52,
    width: 415,
    zIndex: 100,
    // left: 12,
    top: 0,
    position: 'absolute',
    shadowColor: '#2E2E2E', // 그림자 색상 설정
    elevation: 5, // Android에서 그림자 효과를 주기 위한 설정
  },
  headerDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: 101,
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
    zIndex: 102,
    overflow: 'hidden',
    position: 'absolute',
  },
  headerTitle: {
    marginLeft: -130,
    zIndex: 101,
    top: 15,
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

export default HeaderComponent;
