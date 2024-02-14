import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import FilteredCardForm2 from '../components/FilteredCardForm2';
import FormContainer4 from '../components/FormContainer4';
import FilteredCardForm1 from '../components/FilteredCardForm1';
import FilteredCardForm from '../components/FilteredCardForm';
import FormDropdown from '../components/FormDropdown';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import {ScrollView} from 'react-native';

const PLAY2 = ({navigation}) => {
  return (
    <View style={styles.play}>
      <View style={[styles.main, styles.mainPosition]}>
        <View style={[styles.recommendlist, styles.mainPosition]}>
          {/*
          <FilteredCardForm2 />
          <FormContainer4 />
  */}
        </View>
        <View style={styles.upperPart}>
          <FormDropdown />
          <View style={styles.regiontext}>
            <Text style={[styles.contentTitle, styles.titlePosition]}>
              나들이 지역
            </Text>
            <Text style={styles.contentDetail}>{`사랑스러운 나의 멍멍이와
방문하고 싶은 지역을 골라보세요.`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerDiv, styles.headerPosition]} />
        <Text style={[styles.headerTitle, styles.titlePosition]}>
          줍줍 장소
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('PLAYmainwonny');
          }}>
          <Image
            style={styles.arrowIcon}
            source={require('../assets/arrow4.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
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
  titlePosition: {
    height: 35,
    color: Color.colorDarkslategray_200,
    alignItems: 'center',
    display: 'flex',
    left: '50%',
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    left: 0,
    top: 0,
    position: 'absolute',
    width: 360,
  },
  recommendlist: {
    top: 95,
    height: 479,
  },
  contentTitle: {
    marginLeft: -77,
    fontSize: FontSize.size_6xl,
    width: 127,
    textAlign: 'left',
    height: 35,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
  },
  contentDetail: {
    top: 43,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDimgray_100,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    width: 154,
    left: 0,
    position: 'absolute',
  },
  regiontext: {
    marginLeft: -160,
    bottom: 1,
    width: 154,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  upperPart: {
    left: 26,
    width: 320,
    height: 72,
    top: 0,
    position: 'absolute',
  },
  main: {
    top: 89,
    height: 574,
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
    justifyContent: 'center',
    width: 204,
    height: 35,
    color: Color.colorDarkslategray_200,
    textAlign: 'center',
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
    height: 892,
    overflow: 'hidden',
  },
});

export default PLAY2;
