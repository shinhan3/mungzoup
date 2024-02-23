import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';
import axios from 'axios';
import {Alert} from 'react-native';
import FormDropdown from './FormDropdown';
import {USERID} from '../UserId';

const FilteredCardForm = ({data}) => {
  const [isVisible, setIsVisible] = useState(Array(data.length).fill(false)); // 각 항목에 대한 isVisible 상태 배열

  // 배열에 있는 각 항목의 isVisible 상태를 토글하는 함수
  const toggleIsVisible = index => {
    setIsVisible(isVisible.map((item, idx) => (idx === index ? !item : item)));
  };

  const insertWalkSpotfunction = (
    spot_name,
    spot_latitude,
    spot_longitude,
    spot_address,
  ) => {
    const data = {
      spotName: spot_name,
      spotLatitude: spot_latitude,
      spotLongitude: spot_longitude,
      spotAddress: spot_address,
      user: {userId: USERID},
    };
    axios
      .post('http://192.168.0.90:5000/insertWalkSpot.do', data)
      .then(res => {
        const newSpot = res.data;
        Alert.alert('', '내 장소 추가에 성공했습니다!', [
          {
            text: '확인',
            // onPress: () => {
            //   navigation.navigate('HiddenPopularStores');
            // },
            style: 'destructive',
          },
        ]);
      })
      .catch(err => {
        console.error(err);
      });
  };

  //console.log(isVisible);
  // data.map((data, index) => {
  //   console.log(`ㅋㅋ데이터 ${index}: `, data);
  // });

  return (
    <ScrollView style={{flex: 1}}>
      {data.map((item, index) => (
        <View key={index} style={styles.listItems}>
          <View style={styles.background} />
          <View style={[styles.insertplaceBtn, styles.txtLayout]}>
            <View style={styles.div} />
            <Text
              style={[styles.txt, styles.txtTypo]}
              onPress={() =>
                insertWalkSpotfunction(item[1], item[6], item[7], item[2])
              }>{`+ 내 장소 `}</Text>
          </View>
          <Image style={styles.recommendImgIcon} source={{uri: item[5]}} />
          <Text style={styles.recommendTxt}>
            <Text style={styles.text}>
              <Text style={styles.text1}>{item[1]}</Text>
            </Text>
            <Text style={styles.text2}>
              <Text style={styles.text}>
                <Text style={styles.text4}>{'  ' + item[0]}</Text>
              </Text>
            </Text>
          </Text>
          <View style={styles.recommendTxt1}>
            <Text style={[styles.text5, styles.txtTypo]}>{item[2]}</Text>
            <TouchableOpacity onPress={() => toggleIsVisible(index)}>
              <Image
                style={styles.toggleUpbtnIcon}
                source={
                  isVisible[index]
                    ? require('../assets/toggle-upbtn.png')
                    : require('../assets/toggle-downbtn.png')
                }
              />
            </TouchableOpacity>
          </View>

          {isVisible[index] && (
            <View style={[styles.toggle, styles.toggleLayout]}>
              <View style={[styles.toggleChild, styles.line1Border]} />
              <View style={[styles.opentimeline, styles.opentimelineLayout]}>
                <View style={styles.opentimePosition}>
                  <Image
                    style={[styles.opentimeChild, styles.opentimePosition]}
                    source={require('../assets/rectangle-2710.png')}
                  />
                  <Text style={[styles.text6, styles.textTypo]}>운영시간</Text>
                </View>
                <Text style={[styles.opentimetext, styles.textTypo]}>
                  {item[3]}
                </Text>
              </View>
              <View style={[styles.opentimeline1, styles.opentimelineLayout]}>
                <View style={styles.opentimePosition}>
                  <Image
                    style={[styles.opentimeChild, styles.opentimePosition]}
                    source={require('../assets/rectangle-2710.png')}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>휴무일</Text>
                </View>
                <Text style={[styles.opentimetext, styles.textTypo]}>
                  {item[4]}
                </Text>
              </View>
            </View>
          )}

          <View style={[styles.line1, styles.line1Border]} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItems: {
    height: 122,
  },
  txtLayout: {
    height: 32,
    position: 'absolute',
  },
  txtTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  toggleLayout: {
    height: 46.5,
    width: 270,
  },
  line1Border: {
    borderColor: Color.colorDarkgray_200,
    borderStyle: 'solid',
    left: 0,
    position: 'absolute',
  },
  opentimelineLayout: {
    height: 13.5,
    width: 151.5,
    left: 10,
    position: 'absolute',
  },
  opentimePosition: {
    width: 31.5,
    height: 13.5,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRRegular,
    textAlign: 'left',
    position: 'absolute',
  },
  background: {
    backgroundColor: Color.bgWhite,
    height: 119,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  div: {
    borderRadius: 2,
    borderColor: Color.new1,
    borderWidth: 0.5,
    borderStyle: 'solid',
    height: 32,
    width: 80,
    backgroundColor: Color.bgWhite,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  txt: {
    fontSize: FontSize.size_smi_2,
    letterSpacing: 0,
    lineHeight: 28,
    color: Color.new1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    left: 10,
    height: 32,
    position: 'absolute',
    top: 4,
  },
  insertplaceBtn: {
    top: 75,
    width: 80,
    height: 32,
    left: 80,
  },
  recommendImgIcon: {
    top: 28,
    left: 35,
    width: 30,
    height: 30,
    position: 'absolute',
  },
  text1: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_100,
  },
  text: {
    fontWeight: '700',
    marginRight: 5,
    fontFamily: FontFamily.notoSansKRBold,
  },
  text4: {
    fontSize: FontSize.size_4xs,
    letterSpacing: 0.8,
  },
  text5: {
    fontSize: FontSize.size_3xs,
    marginRight: 3,
    // position: 'relative',
    // top: 53,
    // left: 145,
  },
  text2: {
    color: Color.colorDarkgray_200,
    marginLeft: 3,
  },
  recommendTxt: {
    top: 23,
    left: 80,
    textAlign: 'left',
    position: 'absolute',
  },
  recommendTxt1: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 15,
    width: 170,
    top: 48,
    left: 80,
    position: 'absolute',
  },

  toggleChild: {
    borderRadius: Border.br_10xs,
    // backgroundColor: Color.colorWhitesmoke_200,
    backgroundColor: Color.bgWhite,
    // borderWidth: 0.3,
    height: 46.5,
    width: 270,
    top: 0,
  },
  opentimeChild: {
    borderRadius: Border.br_12xs_5,
  },
  text6: {
    left: 3,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.notoSansKRRegular,
    top: 1,
    color: Color.colorDarkgray_200,
  },
  opentimetext: {
    left: 36,
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkslategray_200,
    width: 200,
    height: 15,
    fontFamily: FontFamily.notoSansKRRegular,
  },
  opentimeline: {
    top: 7.5,
  },
  text7: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.notoSansKRRegular,
    top: 1,
    color: Color.colorDarkgray_200,
    left: 5,
  },
  opentimeline1: {
    top: 25.5,
  },
  toggle: {
    top: 70,
    left: 70,
    height: 46.5,
    width: 270,
    position: 'absolute',
  },
  toggleUpbtnIcon: {
    height: 15,
    width: 15,
    position: 'relative',
    top: 1,
    // top: '45%',
    // right: '10.36%',
    // bottom: '50%',
    // left: '80%',
    // maxWidth: '100%',
    // overflow: 'hidden',
    // maxHeight: '100%',
    // position: 'relative',
  },
  line1: {
    top: 119,
    borderTopWidth: 1,
    width: 361,
    height: 1,
  },
  list1: {
    height: 119,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute',
  },
});

export default FilteredCardForm;
