import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Border, FontSize, FontFamily, Color} from '../GlobalStyles';

const FormContainer6 = () => {
  return (
    <View style={styles.selectionbox}>
      <View style={styles.storereviewtitle}>
        <Text style={styles.title}>이런 점이 좋았어요</Text>
        <Image
          style={styles.checkIcon}
          source={require('../assets/check.png')}
        />
        <Text style={styles.participants}>
          <Text style={styles.text}>46</Text>
          <Text style={styles.text1}>회</Text>
        </Text>
      </View>
      <View style={[styles.reivew1, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <View style={[styles.barFill, styles.barPosition]} />
        <Image
          style={[styles.iconImg, styles.iconLayout2]}
          source={require('../assets/iconimg.png')}
        />
        <Text style={[styles.content, styles.countTypo]}>
          가격이 합리적이에요
        </Text>
        <Text style={[styles.count, styles.countTypo]}>25</Text>
      </View>
      <View style={[styles.reivew2, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <View style={[styles.barFill, styles.barPosition]} />
        <Image
          style={[styles.iconImg1, styles.iconLayout]}
          source={require('../assets/iconimg1.png')}
        />
        <Text style={[styles.content, styles.countTypo]}>종류가 다양해요</Text>
        <Text style={[styles.count, styles.countTypo]}>25</Text>
      </View>
      <View style={[styles.reivew3, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <View style={[styles.barFill2, styles.barPosition]} />
        <Text style={[styles.content, styles.countTypo]}>시설이 깔끔해요</Text>
        <Image
          style={[styles.iconImg2, styles.iconLayout2]}
          source={require('../assets/iconimg2.png')}
        />
        <Text style={[styles.count2, styles.countTypo]}>16</Text>
      </View>
      <View style={[styles.reivew4, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <View style={[styles.barFill3, styles.barPosition]} />
        <Image
          style={[styles.iconImg3, styles.iconLayout]}
          source={require('../assets/iconimg3.png')}
        />
        <Text style={[styles.content, styles.countTypo]}>품질이 좋아요</Text>
        <Text style={[styles.count, styles.countTypo]}>11</Text>
      </View>
      <View style={[styles.reivew5, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <View style={[styles.barFill4, styles.barPosition]} />
        <Text style={[styles.content, styles.countTypo]}>매장이 넓어요</Text>
        <Image
          style={[styles.iconImg4, styles.iconLayout]}
          source={require('../assets/iconimg4.png')}
        />
        <Text style={[styles.count2, styles.countTypo]}>10</Text>
      </View>
      <View style={[styles.reivew6, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <View style={[styles.barFill5, styles.barPosition]} />
        <Image
          style={[styles.iconImg1, styles.iconLayout]}
          source={require('../assets/iconimg1.png')}
        />
        <Text style={[styles.content, styles.countTypo]}>아기자기해요</Text>
        <Text style={[styles.count5, styles.countTypo]}>7</Text>
      </View>
      <View style={[styles.reivew7, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <View style={[styles.barFill6, styles.barPosition]} />
        <Image
          style={[styles.iconImg1, styles.iconLayout]}
          source={require('../assets/iconimg5.png')}
        />
        <Text style={[styles.content, styles.countTypo]}>
          특색 있는 제품이 많아요
        </Text>
        <Text style={[styles.count5, styles.countTypo]}>5</Text>
      </View>
      <View style={[styles.reivew8, styles.reivewShadowBox]}>
        <View style={[styles.bar, styles.barPosition]} />
        <Image
          style={[styles.iconImg1, styles.iconLayout]}
          source={require('../assets/iconimg6.png')}
        />
        <Text style={[styles.content, styles.countTypo]}>트렌디해요</Text>
        <View style={[styles.barFill7, styles.barPosition]} />
        <Text style={[styles.count5, styles.countTypo]}>2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reivewShadowBox: {
    height: 33,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    left: 0,
    width: 300,
    position: 'absolute',
  },
  barPosition: {
    borderRadius: Border.br_8xs,
    height: 33,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  iconLayout2: {
    height: 14,
    width: 14,
    left: 16,
    overflow: 'hidden',
    position: 'absolute',
  },
  countTypo: {
    top: 7,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: '4.67%',
    height: '42.42%',
    overflow: 'hidden',
    position: 'absolute',
  },
  title: {
    fontSize: FontSize.size_base,
    textAlign: 'left',
    left: 0,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
    position: 'absolute',
  },
  checkIcon: {
    top: 23,
    width: 20,
    height: 20,
    overflow: 'hidden',
    left: 0,
    position: 'absolute',
  },
  text: {
    color: Color.colorLightgreen,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text1: {
    fontWeight: '500',
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDarkgray_200,
  },
  participants: {
    top: 24,
    left: 20,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    position: 'absolute',
  },
  storereviewtitle: {
    left: 5,
    width: 125,
    height: 43,
    top: 0,
    position: 'absolute',
  },
  bar: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 300,
  },
  barFill: {
    backgroundColor: Color.colorLightcyan_100,
    width: 198,
  },
  iconImg: {
    top: 10,
  },
  content: {
    left: 40,
    color: Color.colorDarkslategray_200,
    top: 7,
  },
  count: {
    left: 272,
    color: Color.colorLightgreen,
  },
  reivew1: {
    top: 58,
  },
  iconImg1: {
    top: '30.3%',
    bottom: '27.27%',
    left: '5.33%',
    right: '90%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '4.67%',
    height: '42.42%',
  },
  reivew2: {
    top: 102,
  },
  barFill2: {
    backgroundColor: Color.colorLightcyan_200,
    width: 143,
  },
  iconImg2: {
    top: 9,
  },
  count2: {
    left: 271,
    color: Color.colorLightgreen,
  },
  reivew3: {
    top: 146,
  },
  barFill3: {
    backgroundColor: Color.colorLightcyan_300,
    width: 86,
  },
  iconImg3: {
    top: '21.21%',
    right: '90.33%',
    bottom: '36.36%',
    left: '5%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '4.67%',
    height: '42.42%',
  },
  reivew4: {
    top: 190,
  },
  barFill4: {
    backgroundColor: Color.colorLightcyan_400,
    width: 78,
  },
  iconImg4: {
    top: '27.27%',
    bottom: '30.3%',
    left: '5.33%',
    right: '90%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '4.67%',
    height: '42.42%',
  },
  reivew5: {
    top: 234,
  },
  barFill5: {
    backgroundColor: Color.colorLightcyan_500,
    width: 59,
  },
  count5: {
    left: 274,
    color: Color.colorLightgreen,
  },
  reivew6: {
    top: 278,
  },
  barFill6: {
    backgroundColor: Color.colorLightcyan_600,
    width: 29,
  },
  reivew7: {
    top: 322,
  },
  barFill7: {
    backgroundColor: Color.colorLightcyan_700,
    width: 16,
  },
  reivew8: {
    top: 366,
  },
  selectionbox: {
    top: 126,
    left: 30,
    height: 399,
    width: 300,
    position: 'absolute',
  },
});

export default FormContainer6;
