import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Border, Color, FontSize, FontFamily} from '../GlobalStyles';

const EventBannerForm1 = () => {
  return (
    <View style={[styles.eventBanner3, styles.eventLayout]}>
      <View style={[styles.eventDiv, styles.eventDivPosition]} />
      <View style={[styles.event3, styles.event3Layout]}>
        <View style={styles.eventText3}>
          <Text style={[styles.headerMenu, styles.eventDivPosition]}>
            <Text style={styles.text}>{`제휴 `}</Text>
            <Text style={styles.text1}>멍줍</Text>
            <Text style={styles.text}>{`카드 발급 받고  
슬기롭게 소비하자!`}</Text>
          </Text>
        </View>
        <View style={styles.eventImage3}>
          <Image
            style={styles.saly45Icon}
            source={require('../assets/saly45.png')}
          />
          <Image
            style={[styles.coinsIcon, styles.event3Layout]}
            source={require('../assets/coins.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventLayout: {
    height: 120,
    width: 316,
    position: 'absolute',
  },
  eventDivPosition: {
    top: 0,
    left: 0,
  },
  event3Layout: {
    height: 96,
    position: 'absolute',
  },
  eventDiv: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorPalevioletred,
    height: 120,
    width: 316,
    position: 'absolute',
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorBlack,
  },
  text1: {
    fontSize: FontSize.size_mid,
    fontWeight: '700',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
  },
  headerMenu: {
    textAlign: 'left',
    position: 'absolute',
  },
  eventText3: {
    top: 28,
    width: 167,
    height: 48,
    left: 0,
    position: 'absolute',
  },
  saly45Icon: {
    height: '54.27%',
    width: '66.21%',
    top: '45.1%',
    right: '16.29%',
    bottom: '0.63%',
    left: '17.5%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    position: 'absolute',
  },
  coinsIcon: {
    width: 116,
    top: 0,
    left: 0,
  },
  eventImage3: {
    height: '100%',
    width: '42.8%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '57.2%',
    position: 'absolute',
  },
  event3: {
    top: 8,
    left: 31,
    width: 271,
  },
  eventBanner3: {
    top: 290,
    left: 0,
  },
});

export default EventBannerForm1;
