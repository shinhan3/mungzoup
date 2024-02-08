import * as React from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import {FontFamily, Color, Border, FontSize} from '../GlobalStyles';

const Wonny = () => {
  return (
    <View style={styles.wonny}>
      <View style={styles.main}>
        <View style={styles.selectionbox}>
          <View style={styles.storereviewTitle}>
            <Text style={[styles.text, styles.textTypo]}>
              <Text style={styles.text1}>{`어떤 점이 좋았나요? `}</Text>
              <Text style={styles.text2}>(1개)</Text>
            </Text>
            <Text style={styles.text3}>
              이 가게에 어울리는 키워드를 골라주세요.
            </Text>
          </View>
          <Text style={[styles.text4, styles.textTypo]}>시술/서비스</Text>
          <View style={[styles.reivew1, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/notodogface.png')}
            />
            <Text style={styles.text5}>반려동물을 잘 다뤄줘요</Text>
          </View>
          <View style={[styles.reivew2, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Text style={styles.text5}>맞춤 케어를 잘해줘요</Text>
            <Image
              style={[styles.ggcheckRIcon, styles.ggcheckRIconLayout]}
              source={require('../assets/ggcheckr.png')}
            />
          </View>
          <View style={[styles.reivew3, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <View style={styles.parent}>
              <Text style={[styles.text7, styles.textTypo]}>
                시술이 꼼꼼해요
              </Text>
              <Image
                style={styles.flatColorIconssearch}
                source={require('../assets/flatcoloriconssearch.png')}
              />
            </View>
          </View>
          <View style={[styles.reivew4, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/emojionev1document.png')}
            />
            <Text style={styles.text5}>관리법을 잘 알려줘요</Text>
          </View>
          <View style={[styles.reivew5, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Text style={styles.text5}>위생적으로 케어해줘요</Text>
            <Image
              style={[styles.ggcheckRIcon, styles.ggcheckRIconLayout]}
              source={require('../assets/materialsymbolscleanhandsrounded.png')}
            />
          </View>
          <View style={[styles.reivew6, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Text style={styles.text5}>매장이 청결해요</Text>
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/group.png')}
            />
          </View>
          <View style={[styles.reivew7, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/notolotionbottle.png')}
            />
            <Text style={styles.text5}>좋은 제품을 사용해요</Text>
          </View>
          <View style={[styles.reivew8, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.ggcheckRIcon, styles.ggcheckRIconLayout]}
              source={require('../assets/iconimg.png')}
            />
            <Text style={styles.text5}>스타일 추천을 잘해줘요</Text>
          </View>
          <View style={[styles.reivew9, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Text style={styles.text5}>선생님이 열정적이에요</Text>
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/notofire.png')}
            />
          </View>
          <Text style={[styles.text14, styles.textTypo]}>시설/가격</Text>
          <View style={[styles.reivew11, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.ggcheckRIcon, styles.ggcheckRIconLayout]}
              source={require('../assets/iconimg.png')}
            />
            <Text style={styles.text5}>가격이 합리적이에요</Text>
          </View>
          <View style={[styles.reivew21, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/iconimg1.png')}
            />
            <Text style={styles.text5}>종류가 다양해요</Text>
          </View>
          <View style={[styles.reivew31, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Text style={styles.text5}>시설이 깔끔해요</Text>
            <Image
              style={[styles.healthiconscleanHands, styles.ggcheckRIconLayout]}
              source={require('../assets/iconimg2.png')}
            />
          </View>
          <View style={[styles.reivew41, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/iconimg3.png')}
            />
            <Text style={styles.text5}>품질이 좋아요</Text>
          </View>
          <View style={[styles.reivew51, styles.reivewLayout]}>
            <View style={[styles.reivew5Item, styles.reivew5ItemLayout]} />
            <Text style={styles.text5}>매장이 넓어요</Text>
            <Image
              style={[styles.notoeyesIcon, styles.iconLayout]}
              source={require('../assets/iconimg4.png')}
            />
          </View>
          <View style={[styles.reivew61, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/iconimg1.png')}
            />
            <Text style={styles.text5}>아기자기해요</Text>
          </View>
          <View style={[styles.reivew71, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/iconimg5.png')}
            />
            <Text style={styles.text5}>특색 있는 제품이 많아요</Text>
          </View>
          <View style={[styles.reivew81, styles.reivewLayout]}>
            <View style={[styles.reivew1Child, styles.reivew5ItemLayout]} />
            <Image
              style={[styles.notodogFaceIcon, styles.iconLayout]}
              source={require('../assets/iconimg6.png')}
            />
            <Text style={styles.text5}>트렌디해요</Text>
          </View>
          <Pressable
            style={[styles.savebtn, styles.savebtnPosition]}
            submit-btn="제출">
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={[styles.text23, styles.textFlexBox]}>제출</Text>
          </Pressable>
        </View>
        <View style={styles.storeinfoPosition}>
          <View style={[styles.storeinfoChild, styles.storeinfoPosition]} />
          <Text style={[styles.payTitle, styles.payTypo]}>
            24시 멍냥마켓 파장점
          </Text>
          <Text style={[styles.payDate, styles.text25Typo]}>
            서울시 마포구 월드컵북로 68번길 100
          </Text>
          <Image
            style={styles.paycategoryIcon1}
            source={require('../assets/paycategoryimg.png')}
          />
        </View>
      </View>
      <View style={styles.headerPosition}>
        <View style={[styles.headerChild, styles.headerPosition]} />
        <Text style={[styles.text24, styles.text24Position]}>리뷰 등록</Text>
        <Image
          style={[styles.mingcuterightLineIcon, styles.text24Position]}
          source={require('../assets/mingcuterightline2.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    color: Color.colorDarkslategray_200,
    position: 'absolute',
  },
  reivewLayout: {
    height: 33,
    width: 300,
    left: 1,
    position: 'absolute',
  },
  reivew5ItemLayout: {
    borderRadius: Border.br_8xs,
    height: 33,
    width: 300,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  ggcheckRIconLayout: {
    width: 14,
    height: 14,
    left: 16,
    position: 'absolute',
    overflow: 'hidden',
  },
  savebtnPosition: {
    right: '0%',
    left: '0%',
    bottom: '0%',
    width: '100%',
  },
  rectanglePosition: {
    top: '0%',
    position: 'absolute',
  },
  textFlexBox: {
    width: 204,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  storeinfoPosition: {
    height: 59,
    top: 0,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  payTypo: {
    fontFamily: FontFamily.notoSansKRRegular,
    left: 56,
    textAlign: 'left',
  },
  text25Typo: {
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkgray_200,
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    top: 0,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  text24Position: {
    top: '50%',
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
    fontSize: FontSize.size_5xs,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  text2: {
    fontSize: FontSize.size_xs,
  },
  text: {
    top: 0,
    left: 0,
  },
  text3: {
    top: 24,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
  },
  storereviewTitle: {
    width: 203,
    height: 41,
    left: 5,
    top: 0,
    position: 'absolute',
  },
  text4: {
    top: 458,
    fontSize: FontSize.size_xs,
    left: 5,
  },
  reivew1Child: {
    backgroundColor: Color.colorWhitesmoke_200,
  },
  notodogFaceIcon: {
    top: '30.3%',
    bottom: '27.27%',
    left: '5.33%',
    right: '90%',
    width: '4.67%',
    height: '42.42%',
    maxWidth: '100%',
    position: 'absolute',
  },
  text5: {
    left: 40,
    top: 7,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  reivew1: {
    top: 486,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  ggcheckRIcon: {
    top: 10,
    height: 14,
  },
  reivew2: {
    top: 530,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  text7: {
    left: 24,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  flatColorIconssearch: {
    height: '82.35%',
    width: '13.46%',
    top: '17.65%',
    right: '86.54%',
    left: '0%',
    bottom: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  parent: {
    width: 104,
    height: 17,
    left: 16,
    top: 7,
    position: 'absolute',
  },
  reivew3: {
    top: 574,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew4: {
    top: 618,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew5: {
    top: 662,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew6: {
    top: 706,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew7: {
    top: 750,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew8: {
    top: 794,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew9: {
    top: 838,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  text14: {
    top: 65,
    fontSize: FontSize.size_xs,
    left: 5,
  },
  reivew11: {
    top: 93,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew21: {
    top: 137,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  healthiconscleanHands: {
    top: 9,
    height: 14,
  },
  reivew31: {
    top: 181,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew41: {
    top: 225,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew5Item: {
    backgroundColor: 'rgba(98, 174, 169, 0.2)',
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 1.3,
  },
  notoeyesIcon: {
    top: '27.27%',
    bottom: '30.3%',
    left: '5.33%',
    right: '90%',
    width: '4.67%',
    height: '42.42%',
    maxWidth: '100%',
    position: 'absolute',
  },
  reivew51: {
    top: 269,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew61: {
    top: 313,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew71: {
    top: 357,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  reivew81: {
    top: 401,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 4,
    shadowRadius: 4,
    height: 33,
    width: 300,
    left: 1,
  },
  rectangle: {
    height: '100%',
    borderRadius: Border.br_9xs,
    backgroundColor: Color.new1,
    right: '0%',
    left: '0%',
    bottom: '0%',
    width: '100%',
  },
  text23: {
    left: 49,
    fontSize: FontSize.size_sm,
    letterSpacing: 1,
    lineHeight: 18,
    textTransform: 'uppercase',
    color: Color.bgWhite,
    top: 15,
    position: 'absolute',
    height: 14,
  },
  savebtn: {
    height: '4.55%',
    top: '95.45%',
    position: 'absolute',
  },
  selectionbox: {
    top: 91,
    left: 29,
    width: 302,
    height: 946,
    position: 'absolute',
  },
  storeinfoChild: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  payTitle: {
    top: 15,
    position: 'absolute',
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_200,
  },
  payDate: {
    top: 32,
    fontFamily: FontFamily.notoSansKRRegular,
    left: 56,
    textAlign: 'left',
  },
  paycategoryIcon1: {
    top: 20,
    left: 23,
    width: 18,
    height: 18,
    position: 'absolute',
  },
  main: {
    top: 52,
    height: 1037,
    width: 360,
    left: 0,
    position: 'absolute',
  },
  headerChild: {
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    height: 52,
  },
  text24: {
    marginTop: -17,
    marginLeft: -102,
    left: '50%',
    fontSize: FontSize.size_xl,
    height: 35,
    width: 204,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    color: Color.colorDarkslategray_200,
  },
  mingcuterightLineIcon: {
    marginTop: -12,
    left: 14,
    width: 26,
    height: 24,
    overflow: 'hidden',
  },
  wonny: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 1183,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Wonny;