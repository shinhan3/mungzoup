import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {FontFamily, Color, FontSize} from '../GlobalStyles';
import OcrTest from './OcrTest';

const StoreInfoContainer = ({storeInfo, storeId, navigation}) => {
  return (
    <View style={styles.storeinfoPosition}>
      <View style={[styles.storeInfoDiv, styles.storeinfoPosition]} />
      <Text style={[styles.payTitle, styles.payTypo]}>
        {storeInfo.storeName}
      </Text>
      <Text style={[styles.payDate, styles.textFlexBox]}>
        {storeInfo.storeAddress}
      </Text>
      {storeInfo.imagePath && (
        <Image
          style={styles.payCategoryImgIcon}
          source={{uri: storeInfo.imagePath}}
        />
      )}
      <Pressable
        onPress={() => navigation.navigate('OcrInput', {storeId: storeId})}
        style={[styles.reviewbtn, styles.reviewbtnLayout]}
        insert-review="리뷰 등록">
        <Text style={[styles.text, styles.textFlexBox]}>리뷰 등록</Text>
        <Image
          style={styles.materialSymbolscameraIcon}
          source={require('../assets/materialsymbolscamera.png')}
        />
        <View style={[styles.reviewbtnChild, styles.reviewbtnLayout]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  storeinfoPosition: {
    height: 59,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  payTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRRegular,
    left: 56,
  },
  textFlexBox: {
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
  },
  reviewbtnLayout: {
    width: 51,
    height: 18,
    position: 'absolute',
  },
  storeInfoDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  payTitle: {
    top: 15,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_200,
    position: 'absolute',
  },
  payDate: {
    top: 33,
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkgray_200,
    width: 152,
    height: 11,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRRegular,
    left: 56,
  },
  payCategoryImgIcon: {
    left: 23,
    width: 18,
    height: 18,
    top: 20,
    position: 'absolute',
  },
  text: {
    top: 3,
    left: 16,
    fontSize: FontSize.size_8xs,
    letterSpacing: 0,
    lineHeight: 8,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
    textAlign: 'center',
    justifyContent: 'center',
    width: 30,
    height: 12,
  },
  materialSymbolscameraIcon: {
    top: 2,
    left: 3,
    width: 13,
    height: 14,
    overflow: 'hidden',
    position: 'absolute',
  },
  reviewbtnChild: {
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.2,
    width: 51,
    left: 0,
    top: 0,
  },
  reviewbtn: {
    left: 299,
    top: 20,
    width: 51,
  },
});

export default StoreInfoContainer;
