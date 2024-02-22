import * as React from 'react';
import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {FontFamily, Color, FontSize} from '../GlobalStyles';

const StoreInfoContainer = ({storeInfo}) => {
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

  storeInfoDiv: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  payTitle: {
    top: 15,
    fontSize: FontSize.size_xs + 3,
    color: Color.colorDarkslategray_200,
    position: 'absolute',
  },
  payDate: {
    top: 33,
    fontSize: FontSize.size_5xs + 3,
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
});

export default StoreInfoContainer;
