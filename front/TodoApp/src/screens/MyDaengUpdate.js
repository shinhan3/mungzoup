import * as React from 'react';
import {  
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const MyDaengUpdate = (props) => {
  return (
    <ScrollView>
    <View style={styles.view}>
      <View style={[styles.main, styles.mainPosition]}>
        <View style={[styles.background, styles.headerDivShadowBox]} />
        <View style={[styles.inputform, styles.iconPosition]}>
          <View style={styles.weight}>
            <TextInput
              style={[styles.background1, styles.textPosition]}
              placeholder="숫자만 입력해주세요."
            />
            <Text style={[styles.text, styles.textTypo]}>무게</Text>
          </View>
          <View style={[styles.kind, styles.kindPosition]}>
            <TextInput
              style={[styles.background1, styles.textPosition]}
              placeholder="품종을 입력해주세요."
            />
            <Text style={[styles.text, styles.textTypo]}>품종</Text>
          </View>
          <View style={[styles.birth, styles.kindPosition]}>
            <TextInput
              style={[styles.background1, styles.textPosition]}
              placeholder="날짜를 선택해주세요."
            />
            <Text style={[styles.text, styles.textTypo]}>생일</Text>
          </View>
          <Text style={[styles.text3, styles.kindPosition]}>성별</Text>
          <View style={[styles.name, styles.kindPosition]}>
            <TextInput
              style={[styles.background1, styles.textPosition]}
              placeholder="반려동물의 이름을 적어주세요."
              keyboardType="default"
              textContentType="givenName"
            />
             <Image
              style={[styles.phcalendarIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/phcalendar.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>이름</Text>
          </View>
          <Image
            style={[styles.profileimageIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/profileimage.png")}
          />
        </View>
        <Text style={[styles.profileInfo, styles.insertbtnPosition]}>
          프로필 정보
        </Text>
        <TouchableOpacity
            style={[styles.insertbtn, styles.insertbtnPosition]}
            insert-btn="등록"
            onPress={() => {
              // 알람 띄우기
              Alert.alert(
                '알림',
                '수정하시겠습니까?',
                [
                  {
                    text: '취소',
                    onPress: () => console.log('취소 버튼이 눌렸습니다.'),
                    style: 'cancel',
                  },
                  {
                    text: '확인',
                    onPress: () => {
                      // 확인 버튼을 누르면 다음 화면으로 이동
                      props.navigation.goBack('MyDaeng');
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
        >
          <View style={[styles.backgroundbtn, styles.textPosition]} />
          <Text style={styles.textbtn}>수정</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={[styles.headerDiv, styles.divPosition]} />
        <Text style={styles.headerTitle}>{`펫 프로필 `}</Text>
        <TouchableOpacity onPress={()=>{props.navigation.goBack('MyDaeng');}}>
          <Image 
            style={[styles.arrowIcon, styles.inputPosition]}
            resizeMode="cover"
            source={require("../assets/arrow2.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainPosition: {
    height: 750,
    width: 302,
    marginLeft: -151,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  headerDivShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    marginLeft: -131,
    width: 262,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  inputPosition: {
    height: 24,
    left: "50%",
    top: "80%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkslategray,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  kindPosition: {
    marginLeft: -132,
    width: 262,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  insertbtnPosition: {
    marginLeft: -128,
    width: 262,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  divPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    marginLeft: -180,
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  menuPosition: {
    height: 38,
    width: 25,
    marginTop: -19,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  playPosition: {
    marginTop: 7,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  background: {
    marginTop: -375,
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: Color.colorWhite,
    height: 750,
    width: 302,
    marginLeft: -151,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  background1: {
    marginTop: -11,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  input: {
    marginTop: -3,
    marginLeft: -121,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRRegular,
    width: 242,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    height: 24,
    color: Color.colorDarkgray_200,
  },
  text: {
    marginTop: -29,
    marginLeft: -131,
    width: 262,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  weight: {
    marginTop: 220.5,
    marginLeft: -130,
    height: 58,
    width: 262,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  kind: {
    marginTop: 140.5,
    height: 58,
  },
  birth: {
    marginTop: 60.5,
    height: 58,
  },
  text3: {
    marginTop: -27.5,
    color: Color.colorDarkslategray,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  name: {
    marginTop: -107.5,
    height: 58,
  },
  profileimageIcon: {
    marginTop: -278.5,
    marginLeft: -66,
    height: 131,
    width: 131,
  },
  inputform: {
    marginTop: -284,
    marginLeft: -135,
    width: 264,
    height: 557,
  },
  profileInfo: {
    marginTop: -344,
    fontSize: 30,
    color: Color.colorBlack,
    height: 50,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    marginLeft: -128,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  backgroundbtn: {
    marginTop: -20,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.new1,
    height: 40,
  },
  textbtn: {
    marginLeft: -24.6,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    width: 46,
    height: 37,
    justifyContent: "center",
    textAlign: "center",
    marginTop: -17,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  insertbtn: {
    marginTop: 314,
    height: 40,
  },
  main: {
    marginTop: -375.5,
  },
  headerDiv: {
    marginTop: -26,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 3,
    elevation: 3,
    height: 52,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  headerTitle: {
    marginLeft: -102,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    width: 204,
    height: 35,
    justifyContent: "center",
    textAlign: "center",
    marginTop: -17,
    color: Color.colorDarkslategray,
    alignItems: "center",
    display: "flex",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  arrowIcon: {
    marginTop: 10,
    marginLeft: -166,
    width: 26,
    overflow: "hidden",
  },
  header: {
    marginTop: -475.5,
    marginLeft: -182,
    height: 52,
    width: 360,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  phcalendarIcon: {
    top: 556,
    left: 273,
    width: 26,
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    width: "100%",
    height: 951,
    overflow: "hidden",
  },
});

export default MyDaengUpdate;
