import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import WalkingBoxForm from '../components/WalkingBoxForm';
import HealthForm from '../components/HealthForm';
import EventBannerForm1 from '../components/EventBannerForm1';
import EventBannerForm from '../components/EventBannerForm';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';

const Frame2 = () => {
  return (
    <View style={styles.view}>
      <View style={styles.map}>
        <View style={styles.map1} />
        <Text style={[styles.text, styles.textTypo]}>{`지도
내 댕댕이 위치`}</Text>
        <Text style={[styles.title, styles.titleLayout]}>마이댕 지도</Text>
        <Text style={[styles.manual, styles.manualFlexBox]}>
          <Text style={styles.manualTxt}>
            <Text
              style={styles.playTypo}>{`*** 마이댕  지도는 이렇게 사용해보세요!
`}</Text>
            <Text
              style={
                styles.text2
              }>{`·실시간 위치 확인 : 강아지의 실시간 위치를 확인하여 언제든지 강아지가 어디에 있는지 알 수 있습니다. 
·긴급 상황 대비: 강아지가 긴급 상황에 처한 경우, 빠르게 위치를 확인하여 긴급 대응이 가능합니다. 긴급 상황 대비를 위해 가족이나 돌봄자에게도 위치 공유 기능을 활용할 수 있습니다.
`}</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.petprofile}>
        <WalkingBoxForm />
        <HealthForm />
        <View style={[styles.petinfo, styles.petinfoLayout]}>
          <View style={[styles.petinfotext, styles.nameDivLayout]}>
            <Text style={[styles.doginfo, styles.doginfoClr]}>{`카디건 웰시코기
5세 - 여아`}</Text>
            <View style={[styles.nameDiv, styles.nameDivLayout]} />
            <Text style={[styles.dogname, styles.titleLayout]}>멍줍이</Text>
          </View>
          <Image
            style={[styles.arrowIcon, styles.arrowIconLayout]}
            source={require('../assets/arrow5.png')}
          />
          <Image
            style={[styles.arrowIcon1, styles.arrowIconLayout]}
            source={require('../assets/mingcuterightline.png')}
          />
          <Image
            style={[styles.profileimageIcon, styles.petinfoLayout]}
            source={require('../assets/profileimage.png')}
          />
        </View>
        <Text style={[styles.profileTitle, styles.titleLayout]}>
          마이댕 프로필
        </Text>
      </View>
      <View style={[styles.walkbtn, styles.walkbtnLayout]}>
        <View style={[styles.walkDiv, styles.walkbtnLayout]} />
        <Image
          style={styles.arrowIcon2}
          source={require('../assets/arrow6.png')}
        />
        <Text style={[styles.walkText, styles.walkTextPosition]}>
          <Text style={styles.text2}>{`내 멍멍이와 지금 `}</Text>
          <Text style={styles.playTypo}>산책</Text>
          <Text style={styles.text2}>을 시작해보세요!</Text>
        </Text>
      </View>
      <View style={styles.event}>
        <EventBannerForm1 />
        <View style={[styles.eventBanner2, styles.eventLayout]}>
          <View style={[styles.eventDiv, styles.eventLayout]} />
          <View style={styles.event2}>
            <Image
              style={[styles.eventImage2Icon, styles.iconLayout]}
              source={require('../assets/event-image2.png')}
            />
            <View style={[styles.eventText2, styles.textPosition]}>
              <Text style={[styles.text21, styles.textPosition]}>
                <Text style={[styles.play1, styles.mydogTypo]}>멍줍 PLAY</Text>
                <Text>
                  <Text style={[styles.text6, styles.textTypo]}>
                    <Text style={styles.text7}>{`장소 추천 받고,  `}</Text>
                  </Text>
                </Text>
                <Text>
                  <Text style={[styles.text6, styles.textTypo]}>
                    <Text style={styles.text7}>멍포인트도 줍줍하자!</Text>
                  </Text>
                </Text>
              </Text>
              <Text style={styles.text11}>
                멍줍AI가 알려주는 정보가 궁금하다면?
              </Text>
            </View>
          </View>
        </View>
        <EventBannerForm />
        <Text style={[styles.title1, styles.titleLayout]}>이벤트</Text>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerDiv, styles.headerPosition]} />
        <Text style={[styles.headerTitle, styles.walkTextPosition]}>
          마이댕
        </Text>
      </View>
      <View style={[styles.newprofilebtn, styles.newprofilebtnLayout]}>
        <View style={[styles.backgroundbtn, styles.newprofilebtnLayout]} />
        <Text style={[styles.textbtn, styles.doginfoClr]}>마이댕 등록하기</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          source={require('../assets/vector1.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  titleLayout: {
    height: 12,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    lineHeight: 12,
    position: 'absolute',
  },
  manualFlexBox: {
    alignItems: 'center',
    display: 'flex',
    left: '50%',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  menuLayout: {
    height: 38,
    top: 12,
    width: 25,
    position: 'absolute',
  },
  playPosition: {
    top: 26,
    fontSize: FontSize.size_5xs,
    textAlign: 'center',
    position: 'absolute',
  },
  mydogTypo: {
    color: Color.new1,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  petinfoLayout: {
    height: 50,
    position: 'absolute',
  },
  nameDivLayout: {
    height: 29,
    position: 'absolute',
  },
  doginfoClr: {
    color: Color.colorDimgray_100,
    position: 'absolute',
  },
  arrowIconLayout: {
    bottom: '24%',
    top: '36%',
    width: '6.58%',
    height: '40%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  walkbtnLayout: {
    height: 31,
    width: 316,
    position: 'absolute',
  },
  walkTextPosition: {
    top: 9,
    position: 'absolute',
  },
  eventLayout: {
    height: 120,
    width: 316,
    left: 0,
    position: 'absolute',
  },
  textPosition: {
    width: 195,
    left: 0,
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    top: 0,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  newprofilebtnLayout: {
    width: 136,
    height: 38,
    position: 'absolute',
  },
  map1: {
    top: 28,
    backgroundColor: Color.colorGainsboro_200,
    height: 314,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  text: {
    top: 73,
    left: 68,
    fontSize: FontSize.size_31xl,
    width: 224,
    height: 216,
    textAlign: 'center',
    color: Color.colorBlack,
    position: 'absolute',
  },
  title: {
    left: 23,
    width: 150,
    fontSize: FontSize.size_base,
    height: 12,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
  },
  playTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text2: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  manualTxt: {
    width: '100%',
  },
  manual: {
    marginLeft: -154,
    top: 347,
    lineHeight: 20,
    width: 308,
    height: 136,
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    position: 'absolute',
  },
  map: {
    top: 1002,
    height: 483,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  doginfo: {
    top: 1,
    left: 75,
    fontSize: FontSize.size_xs,
    fontWeight: '300',
    fontFamily: FontFamily.notoSansKRLight,
    width: 146,
    height: 26,
    textAlign: 'left',
    lineHeight: 12,
    color: Color.colorDimgray_100,
  },
  nameDiv: {
    backgroundColor: Color.colorGainsboro_300,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_200,
    borderRightWidth: 1,
    width: 65,
    top: 0,
    left: 0,
  },
  dogname: {
    top: 5,
    fontSize: FontSize.size_mini,
    width: 53,
    left: 9,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  petinfotext: {
    top: 13,
    left: 83,
    right: 0,
  },
  arrowIcon: {
    right: '93.42%',
    left: '0%',
  },
  arrowIcon1: {
    right: '7.89%',
    left: '85.53%',
  },
  profileimageIcon: {
    left: 27,
    width: 50,
    top: 0,
  },
  petinfo: {
    top: 32,
    left: 9,
    right: 0,
  },
  profileTitle: {
    left: 10,
    width: 150,
    fontSize: FontSize.size_base,
    height: 12,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
  },
  petprofile: {
    height: '23.84%',
    width: '86.94%',
    top: '5.21%',
    right: '7.78%',
    bottom: '70.94%',
    left: '5.28%',
    position: 'absolute',
  },
  walkDiv: {
    borderRadius: 8,
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    left: 0,
  },
  arrowIcon2: {
    top: 7,
    left: 288,
    width: 18,
    height: 18,
    position: 'absolute',
    overflow: 'hidden',
  },
  walkText: {
    left: 18,
    letterSpacing: 0.2,
    fontSize: FontSize.size_3xs,
    textAlign: 'left',
    color: Color.colorBlack,
  },
  walkbtn: {
    top: 467,
    left: 7,
  },
  eventDiv: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: 'rgba(98, 162, 121, 0.4)',
    top: 0,
  },
  eventImage2Icon: {
    height: '100%',
    width: '32.41%',
    right: '0%',
    bottom: '0%',
    left: '67.59%',
    top: '0%',
    maxWidth: '100%',
  },
  play1: {
    fontSize: FontSize.size_mid,
  },
  text7: {
    fontSize: FontSize.size_sm,
  },
  text6: {
    color: Color.colorBlack,
  },
  text21: {
    top: 14,
    height: 53,
    textAlign: 'left',
  },
  text11: {
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_3xs,
    top: 0,
    textAlign: 'center',
    color: Color.colorBlack,
    left: 0,
    position: 'absolute',
  },
  eventText2: {
    top: 10,
    height: 67,
  },
  event2: {
    height: '68.33%',
    width: '80.06%',
    top: '10%',
    right: '8.54%',
    bottom: '21.67%',
    left: '11.39%',
    position: 'absolute',
  },
  eventBanner2: {
    top: 159,
  },
  title1: {
    left: 4,
    width: 150,
    fontSize: FontSize.size_base,
    height: 12,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    top: 0,
  },
  event: {
    top: 557,
    left: 19,
    height: 410,
    width: 316,
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
    fontSize: FontSize.size_xl,
    justifyContent: 'center',
    width: 204,
    height: 35,
    alignItems: 'center',
    display: 'flex',
    left: '50%',
    color: Color.colorDarkslategray_200,
    top: 9,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  backgroundbtn: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_300,
    top: 0,
    left: 0,
  },
  textbtn: {
    top: 8,
    left: 31,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'center',
  },
  vectorIcon: {
    height: '34.21%',
    width: '9.56%',
    top: '28.95%',
    right: '80.88%',
    bottom: '36.84%',
    left: '9.56%',
  },
  newprofilebtn: {
    top: 519,
    left: 173,
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 1535,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Frame2;
