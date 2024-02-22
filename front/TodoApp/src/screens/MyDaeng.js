import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import {FontFamily, Color, FontSize, Border} from '../GlobalStyles';
import MyPets from '../components/MyPets';
import {useFocusEffect, useIsFocused} from '@react-navigation/core';
import axios from 'axios';
import {USERID} from '../UserId';
import Geolocation from '@react-native-community/geolocation';
import MyCarousel from '../components/PetListCarousel';
import HeaderComponent from '../components/HeaderComponent';
const MyDaeng = props => {
  const [pets, setPets] = useState([]);
  const [modelVisible, setModelVisible] = useState(true);

  const userId = USERID;

  // const [latitude, setLatitude] = useState(0.0);
  // const [longitude, setLongitude] = useState(0.0);

  const [mylocation, setMylocation] = useState({
    latitude: 37.55518333333333,
    longitude: 126.92099333333333,
  });
  const [countList, setCountList] = useState();

  const getGeolocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(
          'aaaagccccccccccaaaaaaaaaaac',
          position.coords.latitude,
          position.coords.longitude,
        );
        position.coords.longitude * -1 > 0.0
          ? setMylocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude * -1,
            })
          : setMylocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  };

  useFocusEffect(
    useCallback(() => {
      getGeolocation();
    }, []),
  );
  const getPet = () => {
    axios
      .get(`http://10.0.2.2:5000/getPetMap.do/${userId}`)
      .then(res => {
        console.log([...res.data].length, 'asdf');
        setPets([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useFocusEffect(
    useCallback(() => {
      setModelVisible(true);
      setTimeout(() => {
        setModelVisible(false);
      }, 5000);
      getPet();
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      // const watchId =
      Geolocation.watchPosition(
        position => {
          console.log(
            'aaaagccccccccccc',
            position.coords.latitude,
            position.coords.longitude,
          );
          setMylocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, distanceFilter: 10}, //10m 이동할 떄 마다 Check
      );
      // console.log('watchId aaaaaaaaa', watchId);
    }, []),
  );
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(getPet, 10000); // 1초 뒤에 now를 수행하라
      console.log(timer, 'asdsadas');
      return () => {
        clearTimeout(timer);
      };
    }, [pets]),
  );

  // setInterval(getPet, 60000);
  const isFocused = useIsFocused();
  const [petList, setPetList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/petList.do/${userId}`)
      .then(res => {
        console.log('----------------');
        console.log('list', res.data);
        setPetList(res.data);
      })
      .catch(err => {});
    axios
      .get(`http://10.0.2.2:5000/dogCountList.do/${userId}`)
      .then(res => {
        setCountList(res.data);
      })
      .catch(err => {});
  }, [isFocused, userId]);
  return (
    <>
      {modelVisible ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Modal
            visible={modelVisible}
            animationType="slide"
            onRequestClose={() => {
              setModelVisible(false);
            }}>
            <Image
              style={{left: 20, width: '90%', height: '90%'}}
              resizeMode="contain"
              source={require('../assets/leaflet.png')}></Image>
          </Modal>
        </View>
      ) : (
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            //justifyContent: 'center',
            alignItems: 'center',
          }}>
          <HeaderComponent
            navigation={props.navigation}
            dimensionCode={require('../assets/arrow8.png')}
            benefits="마이댕"
            backBool={false}></HeaderComponent>
          <View style={styles.view}>
            <Text style={[styles.title, styles.titleTypo]}>마이댕 지도</Text>
            <View style={styles.map}>
              <View style={pets.length != 0 && styles.map1} />
              {pets.length == 0 ? (
                <Image
                  style={{
                    left: -8,
                  }}
                  resizeMode="cover"
                  source={require('../assets/myDogMap.png')}></Image>
              ) : mylocation.longitude > 0 ? (
                <MyPets pets={pets} mylocation={mylocation} />
              ) : (
                <></>
              )}

              <View>
                <Text style={styles.manual}>
                  <Text style={styles.manualTxt}>
                    <Text style={styles.textTypo5}>
                      {`*** 마이댕  지도는 이렇게 사용해보세요!`}
                    </Text>
                    <Text style={styles.text1}>
                      {`·실시간 위치 확인 : 강아지의 실시간 위치를 확인하여 언제든지 강아지가 어디에 있는지 알 수 있습니다. 
                ·긴급 상황 대비: 강아지가 긴급 상황에 처한 경우, 빠르게 위치를 확인하여 긴급 대응이 가능합니다. 긴급 상황 대비를 위해 가족이나 돌봄자에게도 위치 공유 기능을 활용할 수 있습니다.
                `}
                    </Text>
                  </Text>
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={[styles.profileTitle, styles.donationPosition]}>
                  펫 프로필
                </Text>
              </View>
              <View style={[styles.petprofilebox, styles.petprofileboxLayout]}>
                <MyCarousel petList={petList} navigation={props.navigation} />
              </View>
            </View>
            <View style={[styles.walkingBox, styles.healthboxPosition]}>
              <Image
                style={[styles.backgroundIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require('../assets/background33.png')}
              />
              <View style={styles.title2}>
                <Text style={[styles.text8, styles.textLayout]}>산책 요약</Text>
                <Image
                  style={[styles.vectorIcon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require('../assets/vector.png')}
                />
              </View>
              <Pressable
                onPress={() => {
                  props.navigation.navigate('PLAY4');
                }}>
                <Image
                  style={[
                    styles.mingcuterightLineIcon1,
                    styles.eventText1Position,
                  ]}
                  resizeMode="cover"
                  source={require('../assets/mingcuterightline1.png')}
                />
              </Pressable>
              <View style={[styles.km, styles.kmPosition]}>
                <Text style={[styles.km1, styles.km1Typo]}>km</Text>
                <Text style={[styles.text9, styles.textTypo1]}>12</Text>
              </View>
              <View style={styles.time}>
                <Text style={[styles.text10, styles.text10Position]}>100</Text>
                <Text style={[styles.text11, styles.text11Position]}>분</Text>
                <View style={[styles.timeChild, styles.timeChildLayout]} />
              </View>
              <Image
                style={[styles.graphicon1, styles.graphiconPosition]}
                resizeMode="cover"
                source={require('../assets/graphicon1.png')}
              />
            </View>

            <View style={[styles.skinDisease, styles.skinDiseasePosition]}>
              <Image
                style={[styles.healthboxIcon, styles.skinDiseasePosition]}
                resizeMode="cover"
                source={require('../assets/healthbox.png')}
              />
              <Pressable
                style={[styles.inspect, styles.inspectPosition]}
                onPress={() => {
                  props.navigation.navigate('SkinDiseaseAI');
                }}>
                <Image
                  style={[
                    styles.skinMingcuterightLineIcon1,
                    styles.inspectPosition,
                  ]}
                  resizeMode="cover"
                  source={require('../assets/mingcuterightline1.png')}
                />
                <Text style={styles.text29}>검사하기</Text>
              </Pressable>

              <Pressable
                style={[styles.detailBtn, styles.detailBtnLayout]}
                onPress={() => {
                  props.navigation.navigate('DogHealthDetail');
                }}>
                <Text style={[styles.detailText, styles.detailTextFlexBox]}>
                  상세보기
                </Text>
                <View style={[styles.detailBtnChild, styles.detailBtnLayout]} />
              </Pressable>

              <Pressable
                style={[styles.detailBtn2, styles.detailBtnLayout]}
                onPress={() => {
                  props.navigation.navigate('DogHealthDetail');
                }}>
                <Text style={[styles.detailText, styles.detailTextFlexBox]}>
                  상세보기
                </Text>
                <View style={[styles.detailBtnChild, styles.detailBtnLayout]} />
              </Pressable>

              <View style={[styles.skinHome, styles.skinHomePosition]}>
                <Image
                  style={[styles.imgIcon, styles.skinHomePosition]}
                  resizeMode="cover"
                  source={require('../assets/materialsymbolshomehealth.png')}
                />
                <Text style={[styles.skinTxt, styles.skinTxtTypo]}>
                  피부 질환
                </Text>
              </View>
              {countList && (
                <View style={styles.healthResult}>
                  <View style={[styles.unhealthBox, styles.skinIconPosition]}>
                    <View style={[styles.count, styles.countPosition]}>
                      <Text style={[styles.unit]}>마리</Text>
                      <Text style={[styles.text30, styles.textPosition2]}>
                        {countList.unhealth}
                      </Text>
                    </View>
                    <View style={[styles.timeItem, styles.nameDivPosition]} />
                    <Image
                      style={[styles.warnIcon, styles.skinIconLayout]}
                      resizeMode="cover"
                      source={require('../assets/warn.png')}
                    />
                  </View>
                  <View style={[styles.healthBox, styles.timePosition]}>
                    <View style={[styles.count1, styles.countPosition]}>
                      <Text style={[styles.unit]}>마리</Text>
                      <Text style={[styles.text30, styles.textPosition2]}>
                        {countList.health}
                      </Text>
                    </View>
                    <View style={[styles.timeItem, styles.nameDivPosition]} />
                    <Image
                      style={[styles.heartPlusIcon, styles.skinIconPosition]}
                      resizeMode="cover"
                      source={require('../assets/heartplus.png')}
                    />
                  </View>
                </View>
              )}
            </View>

            <Pressable
              style={[styles.walkbtn, styles.eventLayout2]}
              onPress={() => {
                props.navigation.navigate('PLAY');
              }}>
              <View style={[styles.walkDiv, styles.eventLayout2]} />
              <Image
                style={[styles.arrowIcon2, styles.arrowIconLayout]}
                resizeMode="cover"
                source={require('../assets/mingcuterightline1.png')}
              />
              <Text style={[styles.walkText, styles.walkTextPosition]}>
                <Text style={styles.text1}>{`내 멍멍이와 지금 `}</Text>
                <Text style={styles.textTypo5}>산책</Text>
                <Text style={styles.text1}>을 시작해보세요!</Text>
              </Text>
            </Pressable>
            <View style={[styles.event, styles.eventLayout2]}>
              <Pressable
                onPress={() => {
                  props.navigation.navigate('Frame');
                }}>
                <View style={[styles.eventBanner3, styles.eventLayout1]}>
                  <View style={[styles.eventDiv, styles.eventPosition]} />
                  <View style={[styles.event3, styles.event3Layout]}>
                    <View style={styles.eventText3}>
                      <Text style={styles.headerMenu}>
                        <Text
                          style={[
                            styles.text16,
                            styles.textTypo3,
                          ]}>{`제휴 `}</Text>
                        <Text style={[styles.text17, styles.mydogTypo]}>
                          멍줍
                        </Text>
                        <Text
                          style={[
                            styles.text16,
                            styles.textTypo3,
                          ]}>{`카드 발급 받고, 슬기롭게 소비하자!`}</Text>
                      </Text>
                    </View>
                    <View style={[styles.eventImage3, styles.iconPosition]}>
                      <Image
                        style={[styles.saly45Icon, styles.iconLayout]}
                        resizeMode="cover"
                        source={require('../assets/saly45.png')}
                      />
                      <Image
                        style={[styles.coinsIcon, styles.event3Layout]}
                        resizeMode="cover"
                        source={require('../assets/coins.png')}
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  props.navigation.navigate('PLAYmainwonny');
                }}>
                <View style={[styles.eventBanner2, styles.eventLayout1]}>
                  <View style={[styles.eventDiv1, styles.eventPosition]} />
                  <View style={styles.event2}>
                    <Image
                      style={[styles.eventImage2Icon, styles.iconPosition]}
                      resizeMode="cover"
                      source={require('../assets/event-image2.png')}
                    />
                    <View
                      style={[styles.eventText2, styles.eventText2Position]}>
                      <Text style={[styles.text21, styles.textPosition]}>
                        <Text style={[styles.text17, styles.mydogTypo]}>
                          멍줍 PLAY
                        </Text>
                        <Text style={[styles.text19, styles.textTypo4]}>
                          <Text
                            style={styles.text20}>{`장소 추천 받고, `}</Text>
                          <Text style={styles.text20}>{`
멍포인트도 줍줍하자!`}</Text>
                        </Text>
                      </Text>
                      <Text style={[styles.text110, styles.textTypo6]}>
                        멍줍AI가 알려주는 정보가 궁금하다면?
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
              <View style={[styles.eventBanner1, styles.eventLayout1]}>
                <View style={[styles.eventDiv11, styles.eventPosition]} />
                <View style={[styles.event1, styles.eventLayout]}>
                  <View style={[styles.eventText1, styles.eventText1Position]}>
                    <Text style={styles.textPosition}>
                      <Text style={[styles.text17, styles.mydogTypo]}>멍</Text>
                      <Text style={styles.textTypo3}>
                        <Text
                          style={
                            styles.textTypo4
                          }>{`포인트가 모이면 기부가 `}</Text>
                        <Text style={styles.textTypo5}>커</Text>
                        <Text style={styles.textTypo4}>!진다</Text>
                      </Text>
                    </Text>
                    <Text style={[styles.text110, styles.textTypo6]}>
                      멍줍과 함께하는 기부 동참 캠페인
                    </Text>
                  </View>
                  <View style={[styles.eventImage1, styles.eventLayout]}>
                    <Text style={[styles.donation, styles.donationPosition]}>
                      <Text style={styles.text1}>*멍줍은</Text>
                      <Text style={styles.textTypo5}> 포인핸드 정기후원</Text>
                      <Text style={styles.text1}>과 함께합니다.</Text>
                    </Text>
                    <Image
                      style={styles.pawinhand}
                      resizeMode="cover"
                      source={require('../assets/logo1.png')}
                    />
                  </View>
                </View>
              </View>
              <Text style={[styles.title3, styles.titleTypo]}>이벤트</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  detailBtn: {
    left: 175,
    top: 70,
  },

  detailBtn2: {
    left: 175,
    top: 125,
  },

  detailText: {
    top: 2,
    left: 5,
    fontSize: FontSize.size_5xs,
    fontWeight: '800',
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.new1,
    width: 40,
    height: 12,
  },
  detailTextFlexBox: {
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
  },
  detailBtnLayout: {
    width: 40,
    height: 17,
    position: 'absolute',
  },

  detailBtnChild: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: Color.new1,
    borderWidth: 0.5,
    left: 0,
    top: 0,
  },

  textTypo4: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  titleTypo: {
    height: 20,
    width: 150,
    color: Color.colorDarkslategray,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
  },
  menuDivLayout: {
    height: 62,
    left: 0,
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  menuLayout: {
    height: 38,
    width: 25,
    top: 12,
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
  healthboxPosition: {
    // 산책요약
    //left: '5.28%',
    left: 30,
    right: '10.83%',
    //width: '83.89%',
    width: 350,
  },
  iconPosition: {
    bottom: '0%',
    height: '100%',
    top: '0%',
    position: 'absolute',
  },
  text3Layout: {
    height: 19,
    position: 'absolute',
  },
  textTypo2: {
    fontSize: FontSize.size_smi,
    width: 56,
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  kmPosition: {
    width: 62,
    left: 100,
    position: 'absolute',
  },
  textTypo1: {
    width: 46,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: 0,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  textLayout: {
    height: 20,
    lineHeight: 20,
    textAlign: 'left',
    position: 'absolute',
  },
  childBorder: {
    borderRightWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: 'solid',
    backgroundColor: Color.colorGainsboro_300,
    width: 65,
    top: 0,
  },
  mingcuterightIconPosition: {
    left: 273,
    width: 20,
    overflow: 'hidden',
  },
  textTypo: {
    fontSize: FontSize.size_4xs,
    textAlign: 'right',
    color: Color.colorDimgray_100,
    lineHeight: 12,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  graphiconPosition: {
    left: '68.54%',
    right: '8.28%',
    width: '23.18%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  eventText2Position: {
    top: 10,
    position: 'absolute',
  },
  km1Typo: {
    height: 20,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
  },
  text10Position: {
    top: 5,
    lineHeight: 20,
    textAlign: 'left',
    position: 'absolute',
  },
  text11Position: {
    top: 7,
    position: 'absolute',
  },
  timeChildLayout: {
    height: 29,
    position: 'absolute',
  },
  eventText1Position: {
    // left: 20,
    top: 11,
    position: 'absolute',
  },

  textLayout1: {
    lineHeight: 20,
    textAlign: 'left',
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
  donationPosition: {
    top: 80,
    position: 'absolute',
  },
  eventLayout2: {
    left: 40,
    width: 300,
    position: 'absolute',
  },
  walkTextPosition: {
    // 산책시작 텍스트
    // 룰루
    top: 9,
    position: 'absolute',
  },
  eventLayout1: {
    height: 120,
    width: 316,
    left: 0,
    position: 'absolute',
  },
  eventPosition: {
    borderBottomLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    height: 120,
    width: 316,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  event3Layout: {
    height: 96,
    position: 'absolute',
  },
  textTypo3: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  textPosition: {
    top: 14,
    left: 0,
    textAlign: 'left',
    position: 'absolute',
  },
  textTypo6: {
    fontSize: 9,
    color: Color.colorBlack,
  },
  eventLayout: {
    height: 89,
    position: 'absolute',
  },
  headerPosition: {
    height: 52,
    left: 0,
    top: 0,
    width: 360,
    position: 'absolute',
  },

  textTypo5: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text1: {
    fontFamily: FontFamily.notoSansKRRegular,
  },
  manualTxt: {
    width: '100%',
  },
  manual: {
    marginLeft: -154,
    top: 319,
    lineHeight: 20,
    width: 308,
    height: 136,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_3xs,
    left: '50%',
    position: 'absolute',
  },
  map1: {
    backgroundColor: Color.colorGainsboro_200,
    height: 314,
    left: 0,
    top: 0,
    width: 360,
    position: 'absolute',
  },
  text2: {
    top: 45,
    left: 68,
    fontSize: 50,
    width: 224,
    height: 216,
    textAlign: 'center',
    color: Color.colorBlack,
    position: 'absolute',
  },
  map: {
    marginLeft: -200,
    top: 1030,
    height: 455,
    width: 360,
    left: '50%',
    position: 'absolute',
  },
  title: {
    top: 1002,
    left: 23,
    position: 'absolute',
  },
  backgroundIcon: {
    borderRadius: Border.br_xs,
    left: '0%',
    right: '0%',
    bottom: '0%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  text3: {
    height: 20,
    position: 'absolute',
    lineHeight: 20,
    textAlign: 'left',
    left: 0,
    top: 0,
  },
  title1: {
    left: 40,
    width: 56,
    height: 19,
    top: 17,
  },
  text4: {
    height: 25,
    lineHeight: 25,
    textAlign: 'left',
    top: 0,
    position: 'absolute',
  },
  text5: {
    left: 42,
    width: 20,
    height: 17,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    top: 2,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  group: {
    top: 71,
    height: 31,
  },
  text6: {
    top: 6,
    textAlign: 'right',
    width: 46,
    fontSize: FontSize.size_xl,
    height: 25,
    lineHeight: 25,
    color: Color.colorBlack,
    left: 0,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    position: 'absolute',
  },
  kg1: {
    left: 52,
    top: 8,
    height: 25,
    width: 25,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
    position: 'absolute',
  },
  kgChild: {
    left: 16,
    height: 33,
    width: 65,
    position: 'absolute',
  },
  kg: {
    top: 65,
    left: 11,
    width: 81,
    height: 36,
    position: 'absolute',
  },
  mingcuterightLineIcon: {
    height: 23,
    top: 13,
    position: 'absolute',
  },
  text7: {
    left: 225,
    width: 49,
    height: 13,
    top: 17,
    fontSize: FontSize.size_4xs,
  },
  graphicon: {
    height: '33.65%',
    top: '44.52%',
    bottom: '21.83%',
  },
  materialSymbolshomeHealthIcon: {
    left: 14,
    width: 24,
    height: 27,
    overflow: 'hidden',
  },
  healthbox: {
    height: '7.49%',
    top: '21.56%',
    bottom: '70.94%',
  },
  text8: {
    top: 3,
    left: 30,
    fontSize: FontSize.size_smi,
    width: 56,
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  vectorIcon: {
    width: '26.16%',
    right: '73.84%',
    left: '0%',
    bottom: '0%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  title2: {
    left: 10,
    width: 86,
    height: 22,
    top: 12,
    position: 'absolute',
  },
  km1: {
    width: 33,
    left: 29,
    top: 2,
    height: 15,
    position: 'absolute',
  },
  text9: {
    height: 20,
    lineHeight: 20,
    textAlign: 'left',
    top: 0,
    position: 'absolute',
  },
  km: {
    top: 62,
    height: 27,
  },
  text10: {
    height: 27,
    width: 46,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: 0,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
  },
  text11: {
    left: 41,
    width: 17,
    height: 20,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
  },
  timeChild: {
    width: 65,
    borderRightWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: 'solid',
    backgroundColor: Color.colorGainsboro_300,
    top: 0,
    left: 0,
  },
  time: {
    top: 57,
    height: 32,
    left: 27,
    width: 65,
    position: 'absolute',
  },
  mingcuterightLineIcon1: {
    height: 20,
    left: 273,
    width: 20,
    overflow: 'hidden',
  },
  text12: {
    top: 15,
    left: 225,
    width: 40,
    height: 11,
  },
  graphicon1: {
    height: '33.66%',
    top: '44.55%',
    bottom: '21.78%',
  },
  walkingBox: {
    height: '6.58%',
    top: '9%',
    bottom: '79.61%',
  },
  doginfo: {
    top: 1,
    left: 75,
    fontSize: 12,
    fontWeight: '300',
    fontFamily: FontFamily.notoSansKRLight,
    width: 146,
    height: 50,
    color: Color.colorDimgray_100,
    position: 'absolute',
  },
  dogname: {
    left: 9,
    width: 53,
    fontSize: FontSize.size_mini,
    top: 5,
    height: 20,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  petinfotext: {
    right: 0,
    left: 83,
    top: 13,
  },
  arrowIcon: {
    right: '93.42%',
    left: '0%',
  },
  arrowIcon1: {
    right: '7.89%',
    left: '85.53%',
  },

  petprofilebox: {
    top: 112,
    right: 34,
  },
  profileTitle: {
    left: 29,
    height: 20,
    width: 150,
    color: Color.colorDarkslategray,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
  },
  walkDiv: {
    borderRadius: 8,
    backgroundColor: Color.colorGainsboro_100,
    height: 31,
    left: 0,
    top: 0,
  },
  arrowIcon2: {
    left: 288,
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  walkText: {
    left: 18,
    letterSpacing: 0.2,
    color: Color.colorBlack,
    textAlign: 'left',
    fontSize: FontSize.size_3xs,
  },
  walkbtn: {
    top: 505,
    //     top: 450,
    left: 7,
    height: 31,
  },
  eventDiv: {
    backgroundColor: 'rgba(239, 135, 178, 0.4)',
  },
  text16: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
  },
  text17: {
    fontSize: FontSize.size_mid,
  },
  headerMenu: {
    left: 0,
    top: 0,
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
    position: 'absolute',
  },
  coinsIcon: {
    width: 116,
    left: 0,
    top: 0,
  },
  eventImage3: {
    width: '42.8%',
    left: '57.2%',
    right: '0%',
    bottom: '0%',
    height: '100%',
  },
  event3: {
    width: 271,
    left: 31,
    top: 8,
  },
  eventBanner3: {
    top: 290,
  },
  eventDiv1: {
    backgroundColor: 'rgba(98, 162, 121, 0.4)',
  },
  eventImage2Icon: {
    width: '32.41%',
    left: '67.59%',
    right: '0%',
    bottom: '0%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  text20: {
    fontSize: FontSize.size_sm,
  },
  text19: {
    color: Color.colorBlack,
  },
  text21: {
    height: 53,
    width: 195,
  },
  text110: {
    textAlign: 'center',
    color: Color.colorBlack,
    left: 0,
    top: 0,
    fontFamily: FontFamily.notoSansKRRegular,
    position: 'absolute',
  },
  eventText2: {
    height: 67,
    width: 195,
    left: 0,
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
  eventDiv11: {
    backgroundColor: '#ffeac8',
  },
  eventText1: {
    width: 138,
    height: 62,
    left: 0,
  },
  donation: {
    fontSize: FontSize.size_7xs,
    color: Color.colorDimgray_100,
    textAlign: 'center',
    left: 0,
  },
  pawinhand: {
    width: 80,
    height: 75,
    left: 7,
    top: 0,
    position: 'absolute',
  },
  eventImage1: {
    left: 159,
    width: 103,
    top: 0,
  },
  event1: {
    top: 16,
    left: 38,
    width: 262,
  },
  eventBanner1: {
    top: 31,
  },
  title3: {
    left: 4,
    top: 0,
    position: 'absolute',
  },
  event: {
    top: 557,
    left: 19,
    height: 410,
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
    justifyContent: 'center',
    width: 204,
    height: 35,
    fontSize: FontSize.size_xl,
    top: 9,
    color: Color.colorDarkslategray,
    textAlign: 'center',
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    alignItems: 'center',
    display: 'flex',
    left: '50%',
  },
  view: {
    backgroundColor: Color.colorGhostwhite,
    flex: 1,
    height: 1535,
    overflow: 'hidden',
    width: '100%',
    marginLeft: 30,
  },
  skinDiseasePosition: {
    // 피부질환 박스
    height: 171,
    width: 360,
    left: '47.5%',
    top: '51%',
    position: 'absolute',
  },
  skinDisease: {
    // marginTop: -447,
    marginTop: -310,
    marginLeft: -190,
  },
  healthboxIcon: {
    marginTop: -85.5,
    marginLeft: -160,
  },
  inspect: {
    marginLeft: 75,
    width: 68,
    marginTop: -69.5,
  },
  inspectPosition: {
    height: 23,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  text29: {
    marginTop: -6.8,
    marginLeft: -34,
    height: 13,
    width: 49,
    textAlign: 'right',
    fontSize: FontSize.size_4xs,
    color: Color.colorDimgray,
    lineHeight: 12,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },

  skinHome: {
    marginLeft: -134,
    marginTop: -72.5,
    width: 85,
  },

  skinHomePosition: {
    height: 27,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  imgIcon: {
    marginTop: -13.65,
    marginLeft: -42.55,
    width: 24,
    overflow: 'hidden',
  },

  skinTxt: {
    marginTop: -8,
    marginLeft: -14,
  },
  skinTxtTypo: {
    height: 17,
    width: 55,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: '500',
    textAlign: 'left',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },

  healthResult: {
    height: '53.22%',
    width: '38.91%',
    top: '35.67%',
    right: '48.91%',
    bottom: '11.11%',
    left: '12.19%',
    position: 'absolute',
  },

  unhealthBox: {
    top: '56.04%',
    right: '0%',
    left: '0%',
  },

  iconPosition: {
    bottom: '0%',
    position: 'absolute',
  },
  skinIconPosition: {
    bottom: '0%',
    position: 'absolute',
  },

  count: {
    marginTop: -15,
  },
  countPosition: {
    marginLeft: 12.75,
    width: 49,
    height: 18,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },

  unit: {
    marginTop: -4,
    marginLeft: -7.75,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  km1Layout: {
    height: 15,
    color: Color.colorDimgray,
    fontSize: FontSize.size_mini,
  },

  text30: {
    marginLeft: -24.75,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },

  textPosition2: {
    marginTop: -9,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: '700',
    textAlign: 'left',
    left: '50%',
    top: '50%',
    position: 'absolute',
  },

  timePosition: {
    marginLeft: -62.25,
    height: 30,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },

  timeItem: {
    marginLeft: -0,
    width: 1,
  },

  nameDivPosition: {
    marginTop: -14.5,
    height: 29,
    borderRightWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    backgroundColor: Color.colorGainsboro_200,
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
  skinIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },

  warnIcon: {
    height: '74.75%',
    width: '27.15%',
    top: '10%',
    right: '65.62%',
    bottom: '15.25%',
    left: '7.23%',
    position: 'absolute',
  },

  healthBox: {
    marginTop: -45.5,
    width: 123,
  },
  skinMingcuterightLineIcon1: {
    marginTop: -13.4,
    marginLeft: 19,
    width: 20,
    height: 23,
    overflow: 'hidden',
  },
  count1: {
    marginTop: -14,
  },

  time2: {
    marginTop: -14.7,
    width: 64,
  },

  heartPlusIcon: {
    height: '97.28%',
    width: '26.75%',
    top: '2.72%',
    right: '65.78%',
    left: '7.47%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
});

export default MyDaeng;
