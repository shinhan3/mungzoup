import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  // Modal,
} from 'react-native';
import FilteredCardForm from '../components/FilteredCardForm';
import FormDropdown from '../components/FormDropdown';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from './FooterComponent';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';

const PLAY2 = ({navigation}) => {
  const [dropdownData, setDropdownData] = React.useState(null);
  const handleDropdownData = data => {
    setDropdownData(data);
  };
  console.log(navigation, 'navigationnavigationnavigationnavigationnavigation');
  useFocusEffect(
    useCallback(() => {
      axios.get(`http://10.0.2.2:5000/areaPicking.do/강남구`).then(res => {
        setDropdownData(res.data);
      });
    }, []),
  );

  return (
    <>
      <HeaderComponent
        benefits="장소추천"
        navigation={navigation}
        go="PLAYmainwonny"
        backBool={false}
        dimensionCode={require('../assets/arrow8.png')}
      />
      <View style={styles.play}>
        <View style={[styles.main, styles.mainPosition]}>
          <View style={[styles.recommendlist, styles.mainPosition]}>
            {dropdownData && <FilteredCardForm data={dropdownData} />}
          </View>
          <View style={styles.upperPart}>
            <View>
              <FormDropdown onDropdownData={handleDropdownData} />
            </View>
            <View style={styles.regiontext}>
              <Text style={[styles.contentTitle, styles.titlePosition]}>
                나들이 지역
              </Text>
              <Text style={styles.contentDetail}>{`사랑스러운 나의 멍멍이와
방문하고 싶은 지역을 골라보세요.`}</Text>
            </View>
          </View>
        </View>
        <FooterComponent
          petBoolean={false}
          playBoolean={true}
          cardBoolean={false}
          navigation={navigation}></FooterComponent>
      </View>
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
    height: 480,
    marginTop: 10,
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
    fontSize: FontSize.size_3xs + 4,
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
    // marginLeft: 27,
  },
});

export default PLAY2;
