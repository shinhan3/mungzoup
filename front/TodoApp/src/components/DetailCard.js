import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';
import {useFocusEffect} from '@react-navigation/core';
import axios from 'axios';

const DetailCard = ({navigation}) => {
  const [storeList, setStoreList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('http://192.168.0.90:5000/storeList.do')
      .then(res => {
        //console.log(res.data);
        setStoreList(res.data);
      })
      .catch(err => {});
  }, []);

  return (
    <View style={[styles.content, styles.contentLayout]}>
      <View style={[styles.background, styles.contentLayout]} />
      <View style={styles.contenthead}>
        <Text style={[styles.contentTitle, styles.filterTypo]}>지도 중심</Text>
        <Text style={[styles.filter, styles.filterTypo]}> 결제순</Text>
        <View style={styles.line} />
        <Image
          style={styles.menuimgIcon}
          source={require('../assets/menuimg.png')}
        />
      </View>
      <View style={styles.lines}>
        <View style={[styles.line1, styles.lineLayout]} />
        <View style={[styles.line2, styles.lineLayout]} />
        <View style={[styles.line3, styles.lineLayout]} />
      </View>

      {storeList &&
        storeList.map((store, seq) => (
          <View style={styles.my}>
            <Text style={styles.textTypo1}>
              <Text style={styles.text1}>{store.storeName}</Text>
            </Text>
            <Pressable
              style={styles.button}
              onPress={() =>
                navigation.navigate('Review', {storeId: store.storeId})
              }>
              <View style={[styles.backgroundbtn, styles.buttonLayout]} />
              <Text style={[styles.textBtn, styles.textTypo]}>{`자세히
`}</Text>
            </Pressable>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  my: {
    position: 'relative',
    height: 50,
  },
  contentLayout: {
    height: 452,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  filterTypo: {
    height: 32,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    width: 93,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  lineLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: 'solid',
    left: 0,
    position: 'absolute',
  },
  recommendPosition: {
    width: 336,
    left: 17,
    position: 'absolute',
  },
  mainFlexBox: {
    textAlign: 'left',
    position: 'absolute',
  },
  buttonLayout: {
    height: 39,
    position: 'absolute',
  },
  textTypo: {
    color: Color.colorWhitesmoke_100,
    top: 6,
    width: 93,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    fontSize: FontSize.size_mini,
    left: 0,
    position: 'absolute',
  },
  recommandPosition: {
    height: 22,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  contentTypo: {
    fontSize: FontSize.size_3xs,
    top: 4,
    textAlign: 'left',
    position: 'absolute',
  },
  textTypo1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  backgroundbtnLayout: {
    width: 69,
    backgroundColor: Color.new1,
    left: 12,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  background: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    backgroundColor: Color.bgWhite,
    top: 0,
  },
  contentTitle: {
    top: 0,
    left: 0,
  },
  filter: {
    top: 1,
    left: 260,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    top: -1,
    left: 159,
    borderTopWidth: 3,
    width: 43,
    height: 3,
    borderColor: Color.colorDarkgray_200,
    borderStyle: 'solid',
    position: 'absolute',
  },
  menuimgIcon: {
    height: '59.08%',
    width: '6.24%',
    top: '21.85%',
    right: '19.48%',
    bottom: '19.08%',
    left: '74.28%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  contenthead: {
    top: 19,
    width: 353,
    height: 33,
    left: 0,
    position: 'absolute',
  },
  line1: {
    top: 0,
  },
  line2: {
    top: 126,
  },
  line3: {
    top: 252,
  },
  lines: {
    top: 61,
    height: 252,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  text1: {
    color: Color.colorDarkslategray_100,
  },
  text2: {
    color: Color.colorDarkslategray_200,
  },
  text4: {
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
  },
  text5: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text3: {
    color: Color.colorDarkgray_200,
  },
  text6: {
    color: Color.colorGray,
  },
  text8: {
    color: Color.colorDarkgray_300,
  },
  m50001000: {
    fontSize: FontSize.size_xs,
  },
  mainText: {
    top: 22,
    left: 0,
  },
  backgroundbtn: {
    width: 69,
    backgroundColor: Color.new1,
    left: 12,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  textBtn: {
    height: 35,
  },
  button: {
    top: 68,
    left: 244,
    height: 41,
    width: 93,
    position: 'absolute',
  },
  content2: {
    left: 69,
    fontFamily: FontFamily.notoSansKRRegular,
    color: Color.colorDarkslategray_200,
  },
  recommandPlaceDiv: {
    backgroundColor: Color.mainYellow,
    width: 63,
    borderRadius: Border.br_3xs,
    height: 22,
  },
  text10: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  content1: {
    left: 10,
    color: Color.colorBlack,
  },
  recommandPlace: {
    width: 261,
  },
  recommend1: {
    position: 'absolute',
    top: 72,
    height: 109,
  },
  text11: {
    color: Color.colorDarkslategray_200,
  },
  mainText1: {
    top: 0,
    left: 0,
  },
  backgroundbtn1: {
    height: 37,
    position: 'absolute',
  },
  textBtn1: {
    height: 33,
  },
  button1: {
    top: 49,
    left: 243,
    width: 93,
  },
  recommend2: {
    top: 211,
    height: 88,
  },
  mainText2: {
    top: 28,
    left: 2,
  },
  button2: {
    top: 76,
    left: 245,
    width: 93,
  },
  recommend3: {
    top: 327,
    width: 338,
    height: 115,
    left: 17,
    position: 'absolute',
  },
  content: {
    top: 264,
  },
});

export default DetailCard;
