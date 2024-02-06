import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FormContainer2 from '../components/FormContainer2';
import ContainerCardFormFilter from '../components/ContainerCardFormFilter';
import Container from '../components/Container';
import FormContainer8 from '../components/FormContainer8';
import {FontFamily, FontSize, Color} from '../GlobalStyles';

const PLAYmainwonny1 = () => {
  return (
    <View style={styles.playmainwonny}>
      <View style={styles.main}>
        <FormContainer2
          dimensions={require('../assets/image-411.png')}
          productDimensions={require('../assets/dogimg1.png')}
        />
        <ContainerCardFormFilter
          dimensions={require('../assets/petbannerimg2.png')}
        />
        <Container dimensionCode={require('../assets/petbannerimg3.png')} />
        <FormContainer8 />
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerDiv, styles.headerPosition]} />
        <Text style={[styles.headerTitle, styles.headerTitleFlexBox]}>
          PLAY
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitleFlexBox: {
    textAlign: 'center',
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
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_5xs,
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    left: 0,
    top: 0,
    width: 360,
    position: 'absolute',
  },
  main: {
    top: 75,
    left: 18,
    width: 303,
    height: 878,
    position: 'absolute',
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
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDarkslategray_200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 204,
    height: 35,
  },
  playmainwonny: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: '100%',
    height: 1042,
    overflow: 'hidden',
  },
});

export default PLAYmainwonny1;
