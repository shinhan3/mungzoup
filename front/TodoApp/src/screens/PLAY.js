import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import FavoriteListContainer from '../components/FavoriteListContainer';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import FooterComponent from './FooterComponent';

const PLAY = props => {
  return (
    <View style={styles.play}>
      <View style={[styles.header, styles.divPosition1]}>
        <View style={[styles.haederDiv, styles.divPosition]} />
        <Text style={[styles.headerTitle, styles.txtFlexBox]}>
          나의 산책 목록
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack('PLAYmainwonny');
          }}>
          <Image
            style={styles.arrowIcon}
            source={require('../assets/arrow2.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{height: '90%'}}>
        <FavoriteListContainer navigation={props.navigation} />
      </View>
      <TouchableOpacity
        style={[styles.insertplaceBtn, styles.txtLayout]}
        onPress={() => {
          props.navigation.navigate('InsertWalkSpot');
        }}>
        <View style={[styles.div, styles.divPosition1]} />
        <Text style={[styles.txt, styles.txtLayout]}>+ 내 장소</Text>
      </TouchableOpacity>
      <FooterComponent
        petBoolean={false}
        playBoolean={true}
        cardBoolean={false}
        navigation={props.navigation}></FooterComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  divPosition1: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 420,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  txtFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  mydogClr: {
    color: Color.colorDarkgray_200,
    textAlign: 'center',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  txtClr: {
    color: Color.new1,
    textAlign: 'center',
  },
  play1Typo: {
    top: 26,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
    position: 'absolute',
  },
  txtLayout: {
    height: 30,
    position: 'absolute',
  },
  haederDiv: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    height: 52,
  },
  headerTitle: {
    top: 15,
    marginLeft: 80,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    width: 204,
    height: 35,
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  arrowIcon: {
    top: 13,
    left: 14,
    width: 26,
    height: 24,
    overflow: 'hidden',
  },
  header: {
    height: 52,
    width: 360,
  },
  div: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bgWhite,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 1,
    height: 29,
    width: 100,
    marginLeft: 30,
  },
  txt: {
    left: 13,
    fontSize: FontSize.size_mini,
    letterSpacing: 1,
    lineHeight: 30,
    width: 75,
    color: Color.new1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    height: 30,
    top: 0,
    marginLeft: 27,
  },
  insertplaceBtn: {
    top: 90,
    left: 220,
    width: 100,
  },
  play: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 892,
    overflow: 'hidden',
  },
});

export default PLAY;
