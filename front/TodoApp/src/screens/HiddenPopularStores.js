import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StoreDetail from '../components/StoreDetail';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from './FooterComponent';

const HiddenPopularStores = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <HeaderComponent
          dimensionCode={require('../assets/arrow8.png')}
          benefits="숨은 인기 가맹점"
          navigation={navigation}
          go="PLAYmainwonny"
        />
        <View style={styles.play}>
          <View style={[styles.main, styles.mainPosition]}>
            <View style={styles.mapPosition}>
              <View style={[styles.map1, styles.mapPosition]} />
              <Text style={[styles.title, styles.titleTypo]}>지도</Text>
            </View>
            <StoreDetail navigation={navigation} />
          </View>
        </View>
      </ScrollView>
      <FooterComponent
        petBoolean={false}
        playBoolean={true}
        cardBoolean={false}
        navigation={navigation}></FooterComponent>
    </>
  );
};

const styles = StyleSheet.create({
  mainPosition: {
    left: 0,
    position: 'absolute',
    width: 360,
  },
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
  mapPosition: {
    height: 280,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 360,
  },
  titleTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
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
  map1: {
    backgroundColor: Color.colorGainsboro_200,
  },
  title: {
    top: 62,
    left: 73,
    fontSize: FontSize.size_31xl,
    color: Color.colorBlack,
    width: 224,
    height: 117,
  },
  main: {
    top: 52,
    height: 716,
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
    left: '50%',
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  play: {
    marginTop: 60,
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 892,
    overflow: 'hidden',
  },
});

export default HiddenPopularStores;
