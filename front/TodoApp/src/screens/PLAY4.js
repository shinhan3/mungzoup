import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import FormContainer7 from '../components/FormContainer7';
import CardContainer2 from '../components/CardContainer2';
import {FontFamily, FontSize, Color} from '../GlobalStyles';

const PLAY4 = () => {
  return (
    <View style={styles.play}>
      <View style={styles.main}>
        <Text style={[styles.contentHead, styles.contentHeadFlexBox]}>
          산책시간
        </Text>
        <FormContainer7 />
        <CardContainer2 />
      </View>
      <Image
        style={styles.leafImgIcon}
        source={require('../assets/leafimg1.png')}
      />
      <View style={styles.headerPosition}>
        <View style={[styles.headerDiv, styles.headerPosition]} />
        <Text style={[styles.headerTitle, styles.contentHeadFlexBox]}>
          산책의 역사
        </Text>
        <Image
          style={styles.arrowIcon}
          source={require('../assets/arrow2.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  play1Typo: {
    top: 26,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
    position: 'absolute',
  },
  contentHeadFlexBox: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: Color.colorDarkslategray_200,
    left: '50%',
    textAlign: 'center',
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 360,
  },
  contentHead: {
    marginLeft: -170,
    fontSize: FontSize.size_6xl,
    width: 130,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: Color.colorDarkslategray_200,
    top: 0,
  },
  main: {
    marginLeft: -180,
    top: 71,
    bottom: 93,
    left: '50%',
    position: 'absolute',
    width: 360,
  },
  leafImgIcon: {
    top: 637,
    left: 159,
    width: 19,
    height: 21,
    position: 'absolute',
    overflow: 'hidden',
  },
  headerDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  headerTitle: {
    marginLeft: -102,
    top: 9,
    fontSize: FontSize.size_xl,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    width: 204,
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  play: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default PLAY4;
