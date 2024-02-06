import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import FormContainer5 from '../components/FormContainer5';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const Frame3 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.main}>
        <View style={[styles.background, styles.headerDivShadowBox]} />
        <FormContainer5 />
        <Text style={styles.profileInfo}>프로필 정보</Text>
        <Pressable style={styles.insertbtn} insert-btn="등록">
          <View style={styles.backgroundbtn} />
          <Text style={[styles.textbtn, styles.textbtnFlexBox]}>등록</Text>
        </Pressable>
      </View>
      <View style={styles.header}>
        <View style={[styles.headerDiv, styles.divPosition]} />
        <Text
          style={[
            styles.headerTitle,
            styles.textbtnFlexBox,
          ]}>{`펫 프로필 `}</Text>
        <Image
          style={styles.arrowIcon}
          source={require('../assets/arrow4.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerDivShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  textbtnFlexBox: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
  },
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  backgroundPosition: {
    top: '0%',
    position: 'absolute',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  playTypo: {
    top: 26,
    fontSize: FontSize.size_5xs,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  background: {
    height: '100%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgWhite,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 20,
    elevation: 20,
    top: '0%',
    position: 'absolute',
    width: '100%',
  },
  profileInfo: {
    top: 31,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    textAlign: 'left',
    height: 50,
    width: 262,
    alignItems: 'center',
    display: 'flex',
    left: 23,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  backgroundbtn: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.new1,
    left: 0,
    top: 0,
    height: 40,
    width: 262,
    position: 'absolute',
  },
  textbtn: {
    top: 3,
    left: 106,
    fontSize: FontSize.size_mini,
    color: Color.bgWhite,
    width: 46,
    height: 37,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
  },
  insertbtn: {
    top: 689,
    height: 40,
    width: 262,
    left: 23,
    position: 'absolute',
  },
  main: {
    height: '78.86%',
    width: '83.89%',
    top: '10.52%',
    right: '8.06%',
    bottom: '10.62%',
    left: '8.06%',
    position: 'absolute',
  },
  headerDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 3,
    elevation: 3,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    left: '50%',
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDarkslategray_200,
    width: 204,
    height: 35,
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  header: {
    left: -2,
    height: 52,
    width: 360,
    top: 0,
    position: 'absolute',
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 951,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Frame3;
